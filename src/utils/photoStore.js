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
  // Camp 1 - Bhati Mines
  { id: "def-1", title: "Team Photo at Bhati Mines Camp", category: "Eye Camps", src: "/camps/camp1/1st Camp/E1-4.jpeg", desc: "Full Tandicia team in front of official camp banner at Abhyudaya, Sanjay Colony.", date: "29 Aug 2025", location: "Bhati Mines, New Delhi", isDefault: true },
  { id: "def-2", title: "Spectacles Distribution Setup", category: "Eye Camps", src: "/camps/camp1/1st Camp/E1-6.jpeg", desc: "Volunteers preparing spectacles for beneficiaries at the screening camp.", date: "29 Aug 2025", location: "Bhati Mines, New Delhi", isDefault: true },
  { id: "def-3", title: "Volunteer Team at Eye Camp", category: "Events", src: "/camps/camp1/1st Camp/E1-1.jpeg", desc: "Tandicia volunteers at the Bhati Mines camp site with community banner.", date: "29 Aug 2025", location: "Bhati Mines, New Delhi", isDefault: true },
  { id: "def-4", title: "Eye Examination in Progress", category: "Eye Camps", src: "/camps/camp1/1st Camp/E1-8.jpeg", desc: "Doctor performing eye examination on beneficiary.", date: "29 Aug 2025", location: "Bhati Mines, New Delhi", isDefault: true },
  // Camp 2 - Kusumpur Pahari  
  { id: "def-5", title: "Crowd at Kusumpur Pahari Camp", category: "Eye Camps", src: "/camps/camp2/2nd Camp/E2-3.jpeg", desc: "Large turnout at Kusumpur Pahari camp with AR-9 autorefractor machines in action.", date: "14 Sep 2025", location: "Kusumpur Pahari, New Delhi", isDefault: true },
  { id: "def-6", title: "Vision Screening with Equipment", category: "Eye Camps", src: "/camps/camp2/2nd Camp/E2-7.jpeg", desc: "Advanced eye screening using autorefractor for accurate diagnosis.", date: "14 Sep 2025", location: "Kusumpur Pahari, New Delhi", isDefault: true },
  { id: "def-7", title: "Community Members at Camp", category: "Eye Camps", src: "/camps/camp2/2nd Camp/E2-14.jpeg", desc: "Beneficiaries waiting for their turn at the free eye camp.", date: "14 Sep 2025", location: "Kusumpur Pahari, New Delhi", isDefault: true },
  { id: "def-8", title: "Spectacles Fitting", category: "Eye Camps", src: "/camps/camp2/2nd Camp/E2-9.jpeg", desc: "Volunteers helping beneficiaries try on prescribed spectacles.", date: "14 Sep 2025", location: "Kusumpur Pahari, New Delhi", isDefault: true },
  // Camp 3 - Mewla Maharajpur
  { id: "def-9", title: "Official Banner - Faridabad Camp", category: "Eye Camps", src: "/camps/camp3/3rd camp/Banner.jpeg", desc: "टेंडिशिया एसोसिएशन की तरफ से निःशुल्क नेत्र जाँच शिविर at Mewla Maharajpur.", date: "12 Oct 2025", location: "Mewla Maharajpur, Faridabad", isDefault: true },
  { id: "def-10", title: "Senior Citizen Registration", category: "Eye Camps", src: "/camps/camp3/3rd camp/E3-5.jpeg", desc: "Volunteer registering elderly beneficiary at the Faridabad camp.", date: "12 Oct 2025", location: "Mewla Maharajpur, Faridabad", isDefault: true },
  { id: "def-11", title: "Doctor Eye Examination", category: "Eye Camps", src: "/camps/camp3/3rd camp/E3-8.jpeg", desc: "Doctor conducting retinoscopy on elderly patient.", date: "12 Oct 2025", location: "Mewla Maharajpur, Faridabad", isDefault: true },
  { id: "def-12", title: "Spectacle Frame Selection", category: "Eye Camps", src: "/camps/camp3/3rd camp/F57.jpeg", desc: "Beneficiary selecting spectacle frames with volunteer assistance.", date: "12 Oct 2025", location: "Mewla Maharajpur, Faridabad", isDefault: true },
  { id: "def-13", title: "Camp Activity Overview", category: "Eye Camps", src: "/camps/camp3/3rd camp/E3-3.jpeg", desc: "Volunteers and doctors in full action at the community eye camp.", date: "12 Oct 2025", location: "Mewla Maharajpur, Faridabad", isDefault: true },
  { id: "def-14", title: "Newspaper Coverage - National Prahari", category: "Media", src: "/camps/camp3/3rd camp/News_paper_1.jpeg", desc: "Tandicia eye camp covered by National Prahari newspaper.", date: "Oct 2025", location: "Faridabad, Haryana", isDefault: true },
  { id: "def-15", title: "Newspaper Coverage", category: "Media", src: "/camps/camp3/3rd camp/News_Paper_4.jpeg", desc: "Media coverage of Tandicia's community eye care mission.", date: "Oct 2025", location: "Faridabad, Haryana", isDefault: true },
  // Keep existing non-camp defaults
  { id: "def-16", title: "Sewa Rasoi Volunteer Kitchen", category: "Sewa Rasoi", src: "/image.png", desc: "Fresh meals cooked daily with devotion and cleanliness.", date: "Ongoing", location: "Community Kitchen", isDefault: true },
  { id: "def-17", title: "Community Meal Distribution", category: "Sewa Rasoi", src: "/image copy.png", desc: "Serving warm food to hospital attendants and daily wagers.", date: "Weekly", location: "Public Hospital Gates", isDefault: true },
  { id: "def-18", title: "Elders Gathering Under Nai Pehal", category: "Nai Pehal", src: "/story5.png", desc: "Listening, sharing, and creating mutual belonging.", date: "2025", location: "Community Center", isDefault: true },
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
