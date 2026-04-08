// Simulates a JSON file database using localStorage
// In a real Express backend, this would use fs.readFileSync/writeFileSync on data.json

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface Database {
  contacts: ContactSubmission[];
  services: Service[];
}

const DEFAULT_SERVICES: Service[] = [
  { id: "1", title: "Course Registration", description: "Register for new courses, manage your semester schedule, and track prerequisites.", icon: "📚", category: "Academic" },
  { id: "2", title: "Transcript Request", description: "Order official or unofficial transcripts for employment or further education.", icon: "📄", category: "Academic" },
  { id: "3", title: "Library Access", description: "Access digital resources, reserve study rooms, and manage book loans.", icon: "📖", category: "Resources" },
  { id: "4", title: "Financial Aid", description: "Apply for scholarships, grants, and student loans. Track your aid status.", icon: "💰", category: "Financial" },
  { id: "5", title: "Campus Housing", description: "Browse available housing options, submit applications, and manage your lease.", icon: "🏠", category: "Campus Life" },
  { id: "6", title: "Career Services", description: "Book career counseling, access job boards, and prepare for interviews.", icon: "💼", category: "Career" },
  { id: "7", title: "IT Support", description: "Get help with student accounts, Wi-Fi access, software licenses, and devices.", icon: "🖥️", category: "Resources" },
  { id: "8", title: "Health & Wellness", description: "Schedule appointments, access mental health resources, and view health records.", icon: "🏥", category: "Campus Life" },
];

const DB_KEY = "student_portal_db";

function getDB(): Database {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  const db: Database = { contacts: [], services: DEFAULT_SERVICES };
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  return db;
}

function saveDB(db: Database) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// Simulated API calls
export function getServices(): Service[] {
  return getDB().services;
}

export function getContacts(): ContactSubmission[] {
  return getDB().contacts;
}

export function addContact(data: Omit<ContactSubmission, "id" | "submittedAt">): ContactSubmission {
  const db = getDB();
  const entry: ContactSubmission = {
    ...data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  db.contacts.push(entry);
  saveDB(db);
  return entry;
}
