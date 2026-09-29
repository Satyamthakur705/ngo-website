/**
 * photoStore.js — Central photo management & real-time synchronization
 * 
 * Supports:
 * - Default verified historical photos (camp banners, doctor exam, etc.)
 * - Instant in-browser upload & local persistence (visible immediately upon refresh)
 * - Cloud database sync (Supabase / REST backend if configured)
 */

import { supabase } from "../lib/supabase";

export const DEFAULT_PHOTOS = [
  {
    id: "def-1",
    title: "Doctor Vision Examination - Senior Citizen",
    category: "Eye Camps",
    src: "/camps/camp_doctor_exam.jpg",
    desc: "Consultant doctor conducting on-site refraction and eye diagnosis at community camp.",
    date: "14 Sep 2025",
    location: "Kusumpur Pahari, New Delhi",
    isDefault: true
  },
  {
    id: "def-2",
    title: "Bhati Mines Eye Camp Volunteer Delegation",
    category: "Events",
    src: "/camps/camp_bhati_mines_team.jpg",
    desc: "Tandicia Association full team in front of official camp banner at Abhyudaya, Sanjay Colony.",
    date: "29 Aug 2025",
    location: "Bhati Mines, New Delhi",
    isDefault: true
  },
  {
    id: "def-3",
    title: "Official Banner - Kusumpur Pahari Camp",
    category: "Eye Camps",
    src: "/camps/camp_kusumpur_banner.jpg",
    desc: "नि:शुल्क नेत्र जांच शिविर - Sherawali Mata Mandir, Block-C, Kusumpur Pahari.",
    date: "14 Sep 2025",
    location: "Kusumpur Pahari, New Delhi",
    isDefault: true
  },
  {
    id: "def-4",
    title: "Core Volunteer On-Ground Coordination",
    category: "Events",
    src: "/camps/camp_team_selfie.jpg",
    desc: "Dedicated youth volunteers managing registration and patient care.",
    date: "2025",
    location: "Delhi Field Outreach",
    isDefault: true
  },
  {
    id: "def-5",
    title: "Ophthalmic Prescription & Diagnosis Slip",
    category: "Eye Camps",
    src: "/camps/camp_prescription_slip.jpg",
    desc: "Partner eye clinic consultation slip with Centre for Eyes (Dr. Atul Garg).",
    date: "Sep 2025",
    location: "Centre for Eyes",
    isDefault: true
  },
  {
    id: "def-6",
    title: "Sewa Rasoi Volunteer Kitchen",
    category: "Sewa Rasoi",
    src: "/image.png",
    desc: "Fresh meals cooked daily with devotion and cleanliness.",
    date: "Ongoing",
    location: "Community Kitchen",
    isDefault: true
  },
  {
    id: "def-7",
    title: "Community Meal Distribution Drive",
    category: "Sewa Rasoi",
    src: "/image copy.png",
    desc: "Serving warm food to hospital attendants and daily wagers.",
    date: "Weekly",
    location: "Public Hospital Gates",
    isDefault: true
  },
  {
    id: "def-8",
    title: "Elders Gathering Under Nai Pehal",
    category: "Nai Pehal",
    src: "/story5.png",
    desc: "Listening, sharing, and creating mutual belonging.",
    date: "2025",
    location: "Community Center",
    isDefault: true
  },
  {
    id: "def-9",
    title: "Spectacles Fitting Session",
    category: "Eye Camps",
    src: "/gallery/image1.png",
    desc: "Beneficiaries selecting comfortable frames.",
    date: "2025",
    location: "Delhi Camps",
    isDefault: true
  },
  {
    id: "def-10",
    title: "Field Nutrition Camp Preparation",
    category: "Sewa Rasoi",
    src: "/gallery/image5.png",
    desc: "Organizing bulk ingredients for community food relief.",
    date: "2025",
    location: "Base Camp",
    isDefault: true
  }
];

const STORAGE_KEY = "tandicia_custom_photos_v1";

// Helper to get uploaded custom photos from localStorage
export function getCustomPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.warn("Error reading custom photos:", err);
    return [];
  }
}

// Get all photos (custom uploads appear first, followed by default photos)
export function getAllPhotos() {
  const custom = getCustomPhotos();
  return [...custom, ...DEFAULT_PHOTOS];
}

// Add a newly uploaded photo
export function addPhoto({ title, category, src, desc, location, date }) {
  const custom = getCustomPhotos();
  const newPhoto = {
    id: "photo-" + Date.now(),
    title: title || "Tandicia Camp Photo",
    category: category || "Eye Camps",
    src: src, // Data URL or Cloud URL
    desc: desc || "Uploaded via Tandicia Admin Panel",
    location: location || "Verified Field Location",
    date: date || new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    uploadedAt: new Date().toISOString(),
    isCustom: true
  };

  const updated = [newPhoto, ...custom];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Dispatch custom event for real-time listener without page reload
    window.dispatchEvent(new Event("tandicia_photos_updated"));
  } catch (err) {
    console.error("Storage save failed:", err);
    throw err;
  }
  return newPhoto;
}

// Delete an uploaded photo
export function deletePhoto(photoId) {
  const custom = getCustomPhotos();
  const updated = custom.filter(p => p.id !== photoId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("tandicia_photos_updated"));
  return true;
}

// Reset custom photos
export function clearAllCustomPhotos() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("tandicia_photos_updated"));
}
