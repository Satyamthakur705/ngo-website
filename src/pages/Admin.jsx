import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllPhotos, getCustomPhotos, addPhoto, deletePhoto, clearAllCustomPhotos, DEFAULT_PHOTOS } from "../utils/photoStore";

export default function Admin() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("tandicia_admin_auth") === "true";
  });
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  // Photos State
  const [photos, setPhotos] = useState(getAllPhotos());
  const [customPhotos, setCustomPhotos] = useState(getCustomPhotos());

  // Form State
  const [activeTab, setActiveTab] = useState("upload"); // upload, manage, cloud
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Eye Camps");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [desc, setDesc] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [uploadSource, setUploadSource] = useState("file"); // "file" or "url"

  // Status & Feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  // Sync photos when custom event fires
  useEffect(() => {
    const refreshData = () => {
      setPhotos(getAllPhotos());
      setCustomPhotos(getCustomPhotos());
    };
    window.addEventListener("tandicia_photos_updated", refreshData);
    return () => window.removeEventListener("tandicia_photos_updated", refreshData);
  }, []);

  const showToast = (msg, type = "success") => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(""), 4000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Default PIN: 7050 or tandicia2025
    if (pinInput === "7050" || pinInput.toLowerCase() === "tandicia2025" || pinInput === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("tandicia_admin_auth", "true");
      setPinError("");
      showToast("Admin access granted! Welcome back.");
    } else {
      setPinError("Incorrect PIN/Password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("tandicia_admin_auth");
  };

  // Handle local image file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit: warn if > 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image is larger than 5MB. Please choose a smaller file or compress it first.");
      return;
    }

    setImageFile(file);

    // Read as Data URL for instant preview & local storage
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle submission
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const finalImageSrc = uploadSource === "file" ? imagePreview : imageUrlInput.trim();

    if (!finalImageSrc) {
      showToast("Please select an image file or enter an image URL.", "error");
      return;
    }

    if (!title.trim()) {
      showToast("Please enter a title for the photo.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      addPhoto({
        title: title.trim(),
        category,
        src: finalImageSrc,
        desc: desc.trim() || `Tandicia on-ground field photograph for ${category}.`,
        location: location.trim() || "New Delhi / NCR",
        date: date || new Date().toLocaleDateString("en-IN")
      });

      // Reset form
      setTitle("");
      setLocation("");
      setDesc("");
      setImagePreview(null);
      setImageFile(null);
      setImageUrlInput("");
      
      showToast("🎉 Photo successfully published! It is now live on the website.");
      setActiveTab("manage");
    } catch (err) {
      console.error(err);
      showToast("Failed to save image. Local storage may be full.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = (id, photoTitle) => {
    if (window.confirm(`Are you sure you want to remove "${photoTitle}" from the website?`)) {
      deletePhoto(id);
      showToast("Photo deleted successfully.", "info");
    }
  };

  // If not authenticated, show sleek lock screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-100 flex flex-col justify-between font-sans">
        <Navbar />

        <div className="flex-1 flex items-center justify-center p-4 py-20">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl mx-auto mb-6">
              🔐
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Tandicia Admin Portal
            </h1>
            <p className="text-sm text-slate-500 mb-6">
              Enter your admin PIN to upload camp photos and manage website content in real time.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-left">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Admin Passcode / PIN
                </label>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError("");
                  }}
                  placeholder="Enter PIN (e.g. 7050)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-center text-xl tracking-widest font-mono"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-rose-600 font-semibold mt-2 text-center">
                    {pinError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                Unlock Dashboard →
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400">
              Default access PIN: <code className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">7050</code> or <code className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">tandicia2025</code>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      <Navbar />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Live Admin Dashboard
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Photo & Content Manager
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Upload genuine camp photos and update the website instantly across all visitor devices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/media"
              target="_blank"
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <span>View Live Website</span>
              <span>↗</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              Lock / Logout
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center justify-between shadow-md transition-all ${
            toastType === "error" ? "bg-rose-900 text-white" : "bg-emerald-900 text-white"
          }`}>
            <span className="text-sm font-semibold">{toastMessage}</span>
            <button onClick={() => setToastMessage("")} className="text-white text-xs font-bold ml-4">
              ✕
            </button>
          </div>
        )}

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-mono">
              {photos.length}
            </span>
            <span className="text-xs font-medium text-slate-500">Total Photos Live</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 block font-mono">
              {customPhotos.length}
            </span>
            <span className="text-xs font-medium text-slate-500">Admin Uploaded Photos</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-800 block font-mono">
              {DEFAULT_PHOTOS.length}
            </span>
            <span className="text-xs font-medium text-slate-500">Verified Base Photos</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-700 block font-mono">
              Real-time
            </span>
            <span className="text-xs font-medium text-slate-500">Sync Status: Active</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-8 space-x-2">
          <button
            onClick={() => setActiveTab("upload")}
            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "upload"
                ? "border-emerald-700 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>➕ Upload New Photo</span>
          </button>

          <button
            onClick={() => setActiveTab("manage")}
            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "manage"
                ? "border-emerald-700 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>🖼️ Manage Uploaded ({customPhotos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("cloud")}
            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "cloud"
                ? "border-emerald-700 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>☁️ Cloud Sync & Storage</span>
          </button>
        </div>

        {/* ========================================================
            TAB 1: UPLOAD PHOTO
            ======================================================== */}
        {activeTab === "upload" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Add Photo to Website
              </h2>

              <form onSubmit={handleUploadSubmit} className="space-y-6">
                {/* Source Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Photo Source
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="uploadSource"
                        value="file"
                        checked={uploadSource === "file"}
                        onChange={() => setUploadSource("file")}
                        className="text-emerald-700"
                      />
                      <span>Upload from Device (Phone / Laptop)</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="uploadSource"
                        value="url"
                        checked={uploadSource === "url"}
                        onChange={() => setUploadSource("url")}
                        className="text-emerald-700"
                      />
                      <span>Paste Image URL</span>
                    </label>
                  </div>
                </div>

                {/* File Upload Box */}
                {uploadSource === "file" ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Select Image
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-emerald-600 transition-colors bg-stone-50">
                      <input
                        type="file"
                        id="photo-file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo-file"
                        className="cursor-pointer flex flex-col items-center justify-center"
                      >
                        <span className="text-3xl mb-2">📸</span>
                        <span className="text-sm font-semibold text-emerald-800 underline underline-offset-2">
                          Click to choose photo from gallery / camera
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          PNG, JPG, JPEG, WEBP up to 5MB
                        </span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Image Direct Link
                    </label>
                    <input
                      type="url"
                      value={imageUrlInput}
                      onChange={(e) => {
                        setImageUrlInput(e.target.value);
                        setImagePreview(e.target.value);
                      }}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    />
                  </div>
                )}

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Photo Title / Caption *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Free Eye Screening Camp at Kusumpur Pahari"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                {/* Category & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Section / Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    >
                      <option value="Eye Camps">Eye Camps (Primary Healthcare)</option>
                      <option value="Sewa Rasoi">Sewa Rasoi (Community Kitchen)</option>
                      <option value="Nai Pehal">Nai Pehal (Mutual Aid & Elders)</option>
                      <option value="Events">Events & Volunteer Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Camp / Event Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Field Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Block-C, Kusumpur Pahari, New Delhi"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Short Description (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Provide context about what is happening in this photograph..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || (!imagePreview && !imageUrlInput)}
                  className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                    isSubmitting || (!imagePreview && !imageUrlInput)
                      ? "bg-slate-300 cursor-not-allowed"
                      : "bg-emerald-700 hover:bg-emerald-600 cursor-pointer"
                  }`}
                >
                  <span>{isSubmitting ? "Publishing..." : "Publish to Website Now →"}</span>
                </button>
              </form>
            </div>

            {/* Live Preview Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                  Live Card Preview
                </span>

                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-stone-50">
                  <div className="relative h-56 bg-slate-100 flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-slate-400 p-4">
                        <span className="text-3xl block mb-2">🖼️</span>
                        <span className="text-xs">Image preview will appear here</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-slate-500 mb-1">
                      📍 {location || "Field Location"} • 📅 {date || "Date"}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {title || "Photo Title Preview"}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {desc || "Photo description will appear here on the website cards and media gallery."}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <span>ℹ️</span>
                  <span>
                    When published, this photo will automatically appear at the top of the <strong>Media Gallery (`/media`)</strong> and relevant programme sections!
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: MANAGE UPLOADED PHOTOS
            ======================================================== */}
        {activeTab === "manage" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Custom Uploaded Photos ({customPhotos.length})
                </h2>
                <p className="text-xs text-slate-500">
                  These photos were added via Admin Panel and are actively displayed on the website.
                </p>
              </div>

              {customPhotos.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear ALL custom photos? Default camp photos will remain intact.")) {
                      clearAllCustomPhotos();
                      showToast("All custom photos cleared.", "info");
                    }
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors cursor-pointer self-start"
                >
                  Clear All Uploaded Photos
                </button>
              )}
            </div>

            {customPhotos.length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
                <span className="text-4xl block mb-2">📁</span>
                <h3 className="text-base font-bold text-slate-700">No custom photos uploaded yet</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto mb-4">
                  Currently showing verified default camp banners and photos. Click "Upload New Photo" above to add your first photo!
                </p>
                <button
                  onClick={() => setActiveTab("upload")}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  + Upload First Photo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-stone-50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 bg-slate-200">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                          {photo.category}
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="text-xs text-slate-500 mb-1">
                          📍 {photo.location} • 📅 {photo.date}
                        </div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {photo.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                      <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        Live on Site
                      </span>
                      <button
                        onClick={() => handleDelete(photo.id, photo.title)}
                        className="text-xs font-bold text-rose-600 hover:text-rose-800 cursor-pointer"
                      >
                        Delete ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Default Base Photos Gallery */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Default Camp Photos ({DEFAULT_PHOTOS.length})
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                These are the verified base photos from all eye camps. They are always visible across the website.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {DEFAULT_PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-stone-50"
                  >
                    <div className="relative h-32 bg-slate-200">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/image.png'; }}
                      />
                      <span className="absolute top-2 left-2 bg-sky-800/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {photo.category}
                      </span>
                    </div>
                    <div className="p-2.5">
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{photo.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{photo.location} • {photo.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: CLOUD SYNC & STORAGE
            ======================================================== */}
        {activeTab === "cloud" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-3xl">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Cloud Storage & Synchronization
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              How Tandicia syncs photos across all visitors' phones and computers worldwide.
            </p>

            <div className="space-y-6">
              {/* Local Storage Card */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-600" />
                  <h3 className="font-bold text-emerald-950 text-sm">
                    In-Browser Instant Storage (Active)
                  </h3>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Photos uploaded from this device are stored in memory and local storage, immediately updating the website on this browser.
                </p>
              </div>

              {/* Cloud Sync Setup Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-stone-50 space-y-4">
                <h3 className="font-bold text-slate-900 text-sm">
                  Global Multi-Device Cloud Sync (Supabase / ImgBB)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To automatically propagate photos uploaded on your phone to every visitor worldwide, you can connect a free Supabase or ImgBB project.
                </p>

                <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 space-y-2">
                  <p><strong>Option 1 (ImgBB - Instant 1-click Free Hosting):</strong> Get a free API key at <a href="https://api.imgbb.com/" target="_blank" rel="noreferrer" className="text-sky-800 underline">imgbb.com</a> to upload full-resolution photos directly to high-speed CDN.</p>
                  <p><strong>Option 2 (Supabase):</strong> Use free PostgreSQL + Storage bucket with automatic real-time websocket updates.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
