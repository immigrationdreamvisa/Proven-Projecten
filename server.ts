import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Persistent storage directories & files
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const consultationsFile = path.join(dataDir, 'consultations.json');
const inquiriesFile = path.join(dataDir, 'inquiries.json');

function readData<T>(file: string, defaultData: T[]): T[] {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
  return defaultData;
}

function writeData<T>(file: string, data: T[]): void {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
  }
}

// Interfaces
interface ConsultationSubmission {
  id: string;
  referenceNumber: string;
  projectType: string;
  timeline: string;
  budget: string;
  projectDescription: string;
  propertyLocation: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod?: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

interface ContactInquiry {
  id: string;
  referenceNumber: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  projectInterest?: string;
  createdAt: string;
}

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  const consultations = readData<ConsultationSubmission>(consultationsFile, []);
  const inquiries = readData<ContactInquiry>(inquiriesFile, []);
  res.json({
    status: 'ok',
    company: 'Proven Projecten B.V.',
    timestamp: new Date().toISOString(),
    metrics: {
      totalConsultations: consultations.length,
      totalInquiries: inquiries.length,
    },
  });
});

app.post('/api/consultations', (req: Request, res: Response) => {
  const {
    projectType,
    timeline,
    budget,
    projectDescription,
    propertyLocation,
    fullName,
    email,
    phone,
    preferredContactMethod,
  } = req.body;

  if (!fullName || !email || !phone || !projectType) {
    return res.status(400).json({
      error: 'Please provide all required fields (Name, Email, Phone, Project Type).',
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const consultations = readData<ConsultationSubmission>(consultationsFile, []);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceNumber = `PP-${new Date().getFullYear()}-${randomSuffix}`;

  const newSubmission: ConsultationSubmission = {
    id: `consult_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceNumber,
    projectType,
    timeline: timeline || 'Not specified',
    budget: budget || 'Not specified',
    projectDescription: projectDescription || '',
    propertyLocation: propertyLocation || 'Netherlands',
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    preferredContactMethod: preferredContactMethod || 'phone',
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  consultations.unshift(newSubmission);
  writeData(consultationsFile, consultations);

  console.log(`[Proven Projecten] New consultation received: ${referenceNumber} from ${fullName} (${email})`);

  return res.status(201).json({
    success: true,
    message: 'Your consultation request has been received by Proven Projecten.',
    referenceNumber,
    data: newSubmission,
  });
});

app.get('/api/consultations', (req: Request, res: Response) => {
  const consultations = readData<ConsultationSubmission>(consultationsFile, []);
  res.json({
    total: consultations.length,
    consultations,
  });
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, message, projectInterest } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Please provide name, email, and your message.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const inquiries = readData<ContactInquiry>(inquiriesFile, []);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceNumber = `INQ-${randomSuffix}`;

  const newInquiry: ContactInquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceNumber,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : '',
    message: message.trim(),
    projectInterest: projectInterest || 'General Inquiry',
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  writeData(inquiriesFile, inquiries);

  console.log(`[Proven Projecten] New inquiry received: ${referenceNumber} from ${name} (${email})`);

  return res.status(201).json({
    success: true,
    message: 'Thank you for reaching out. We will get back to you promptly.',
    referenceNumber,
    data: newInquiry,
  });
});

app.get('/api/contact', (req: Request, res: Response) => {
  const inquiries = readData<ContactInquiry>(inquiriesFile, []);
  res.json({
    total: inquiries.length,
    inquiries,
  });
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[Proven Projecten] Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
