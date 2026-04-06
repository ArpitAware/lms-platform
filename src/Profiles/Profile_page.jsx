


// ═══════════════════════════════════════════════════════════
//  Profile.jsx  —  LMS Profile Page
//
//  Features:
//  • View mode  — displays all profile fields read-only
//  • Edit mode  — form to update every field
//  • Mock backend — simulates API fetch / save with delay
//  • Avatar upload — local preview via FileReader
//  • Toast notifications for save success / error
//  • Logout button at the bottom
//
//  To connect a real backend:
//  → Replace `mockFetchProfile()` with your GET /api/profile call
//  → Replace `mockSaveProfile()` with your PUT /api/profile call
//  → Replace `handleLogout()` body with real auth logout logic
// ═══════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from "react";
import "./Profile_page.css";

// ── Mock Backend ─────────────────────────────────────────
// Simulates a server response. Replace with real API calls.

const MOCK_DB = {
    name: "Spider Man",
    email: "spiderman@gmail11.com",
    phone: "9988776655",
    dob: "",
    state: "",
    city: "",
    gender: "",
    currentStatus: "",
    educationQualification: "",
    skillingBackground: "",
    disabilityStatus: "",
    pincode: "",
    bio: "",
    viMode: false,
    avatar: null,
};

const mockFetchProfile = () =>
    new Promise((resolve) => setTimeout(() => resolve({ ...MOCK_DB }), 600));

const mockSaveProfile = (data) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            // Simulate occasional server error (remove in production)
            if (Math.random() < 0.05) return reject(new Error("Server error"));
            Object.assign(MOCK_DB, data);
            resolve({ success: true });
        }, 800)
    );

// ── Dropdown options ─────────────────────────────────────
const STATES = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"];
const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];
const STATUSES = ["Student", "Employed", "Unemployed", "Freelancer", "Internship", "Other"];
const EDUCATION = ["10th", "12th", "Diploma", "B.Tech / B.E.", "BCA", "BBA", "B.Sc", "M.Tech / M.E.", "MCA", "MBA", "M.Sc", "PhD", "Other"];
const SKILLING = ["Web Development", "Mobile Development", "Data Science", "Machine Learning", "Cloud Computing", "Cybersecurity", "UI/UX Design", "Digital Marketing", "Graphic Design", "Other"];
const DISABILITY = ["None", "Visual Impairment", "Hearing Impairment", "Physical Disability", "Cognitive Disability", "Prefer not to say"];

// ── SVG Icons ────────────────────────────────────────────
const PersonIcon = () => (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);
const PlusIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);
const EditIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);
const SaveIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const LogoutIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);
const VerifiedIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// ── Helper ───────────────────────────────────────────────
const display = (val) => val || null; // returns null so we can show "—"

// ── Main Component ───────────────────────────────────────
export default function Profile() {
    const [profile, setProfile] = useState(null);   // loaded profile data
    const [form, setForm] = useState(null);   // editable copy
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);   // initial fetch
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState(null);   // { msg, type }
    const [avatarPreview, setAvatarPreview] = useState(null);
    const avatarInputRef = useRef(null);

    // ── Load profile on mount ──────────────────────────────
    useEffect(() => {
        mockFetchProfile().then((data) => {
            setProfile(data);
            setForm({ ...data });
            setLoading(false);
        });
    }, []);

    // ── Toast auto-dismiss ─────────────────────────────────
    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 2600);
        return () => clearTimeout(t);
    }, [toast]);

    // ── Handlers ──────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            setToast({ msg: "Image must be under 2 MB", type: "error" });
            return;
        }
        const reader = new FileReader();
        reader.onload = (ev) => setAvatarPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleEdit = () => {
        setForm({ ...profile });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setForm({ ...profile });
        setAvatarPreview(null);
        setIsEditing(false);
    };

    const handleSave = async () => {
        // Basic validation
        if (!form.name.trim()) {
            setToast({ msg: "Name cannot be empty", type: "error" });
            return;
        }
        setSaving(true);
        try {
            const updatedData = { ...form, avatar: avatarPreview || form.avatar };
            await mockSaveProfile(updatedData);
            setProfile({ ...updatedData });
            setIsEditing(false);
            setAvatarPreview(null);
            setToast({ msg: "Profile updated successfully!", type: "success" });
        } catch {
            setToast({ msg: "Failed to save. Please try again.", type: "error" });
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        // ── Replace with real logout logic ──
        // e.g. clearToken(), navigate('/login'), dispatch(logout())
        if (window.confirm("Are you sure you want to log out?")) {
            alert("Logged out! (Connect your auth logic here)");
        }
    };

    // ── Loading state ──────────────────────────────────────
    if (loading) {
        return (
            <div className="profile-page" style={{ justifyContent: "center", alignItems: "center", gap: 12 }}>
                <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3, borderTopColor: "#f7c250", borderColor: "#ede9fe" }} />
                <span style={{ color: "#e0c434", fontFamily: "var(--font-main)", fontWeight: 600 }}>Loading profile…</span>
            </div>
        );
    }

    const currentAvatar = avatarPreview || profile.avatar;

    return (
        <div className="profile-page">

            {/* ── BANNER ── */}
            <div className="profile-banner">

                {/* Avatar */}
                <div className="avatar-wrapper">
                    {currentAvatar ? (
                        <img src={currentAvatar} alt="avatar" className="avatar-img" />
                    ) : (
                        <div className="avatar-placeholder"><PersonIcon /></div>
                    )}

                    {/* Upload button — only shown in edit mode */}
                    {isEditing && (
                        <button
                            className="avatar-upload-btn"
                            title="Change photo"
                            onClick={() => avatarInputRef.current?.click()}
                        >
                            <PlusIcon />
                        </button>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="avatar-file-input"
                        ref={avatarInputRef}
                        onChange={handleAvatarChange}
                    />
                </div>

                <p className="profile-name">{profile.name || "Your Name"}</p>


            </div>

            {/* ── CARD ── */}
            <div className="profile-card">

                {isEditing ? (
                    /* ══ EDIT FORM ══════════════════════════════════ */
                    <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-grid">

                            {/* Name */}
                            <div className="form-group">
                                <label className="form-label">Name *</label>
                                <input
                                    className="form-input"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <div className="email-input-row">
                                    <input
                                        className="form-input"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="example@yopmail.com"
                                    />
                                    <button type="button" className="btn-add-email">ADD EMAIL</button>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <div className="phone-input-group">
                                    <input className="form-input phone-code" value="+91" readOnly />
                                    <input
                                        className="form-input phone-main"
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="10-digit number"
                                        maxLength={10}
                                    />
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="form-group">
                                <label className="form-label">Date of Birth</label>
                                <input
                                    className="form-input"
                                    name="dob"
                                    type="date"
                                    value={form.dob}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* State */}
                            <div className="form-group">
                                <label className="form-label">State</label>
                                <select className="form-select" name="state" value={form.state} onChange={handleChange}>
                                    <option value="">Select State</option>
                                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            {/* City */}
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input
                                    className="form-input"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="Enter your city"
                                />
                            </div>

                            {/* Gender */}
                            <div className="form-group">
                                <label className="form-label">Gender</label>
                                <select className="form-select" name="gender" value={form.gender} onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>

                            {/* Current Status */}
                            <div className="form-group">
                                <label className="form-label">Current Status</label>
                                <select className="form-select" name="currentStatus" value={form.currentStatus} onChange={handleChange}>
                                    <option value="">Select Current Status</option>
                                    {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            {/* Education Qualification */}
                            <div className="form-group">
                                <label className="form-label">Education Qualification</label>
                                <select className="form-select" name="educationQualification" value={form.educationQualification} onChange={handleChange}>
                                    <option value="">Select Education Qualification</option>
                                    {EDUCATION.map((e) => <option key={e} value={e}>{e}</option>)}
                                </select>
                            </div>

                            {/* Skilling Background */}
                            <div className="form-group">
                                <label className="form-label">Skilling Background</label>
                                <select className="form-select" name="skillingBackground" value={form.skillingBackground} onChange={handleChange}>
                                    <option value="">Select Skilling Background</option>
                                    {SKILLING.map((s) => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            {/* Disability Status */}
                            <div className="form-group">
                                <label className="form-label">Disability Status</label>
                                <select className="form-select" name="disabilityStatus" value={form.disabilityStatus} onChange={handleChange}>
                                    <option value="">Select Disability Status</option>
                                    {DISABILITY.map((d) => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>

                            {/* PinCode */}
                            <div className="form-group">
                                <label className="form-label">PinCode</label>
                                <input
                                    className="form-input"
                                    name="pincode"
                                    value={form.pincode}
                                    onChange={handleChange}
                                    placeholder="6-digit pincode"
                                    maxLength={6}
                                />
                            </div>

                            {/* Bio — full width */}
                            <div className="form-group full-width">
                                <label className="form-label">Bio</label>
                                <textarea
                                    className="form-textarea"
                                    name="bio"
                                    value={form.bio}
                                    onChange={handleChange}
                                    placeholder="Tell us a bit about yourself…"
                                    maxLength={500}
                                />
                                <span className="char-counter">{(form.bio || "").length} / 500</span>
                            </div>

                        </div>{/* /form-grid */}
                    </form>

                ) : (
                    /* ══ VIEW MODE ═══════════════════════════════════ */
                    <div className="profile-view">
                        <div className="view-grid">

                            {/* Name */}
                            <div className="view-field">
                                <span className="field-label">Name</span>
                                <div className="field-value">{display(profile.name) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Email */}
                            <div className="view-field">
                                <span className="field-label">Email Address</span>
                                <div className="field-value">{display(profile.email) ?? <span className="empty">Not added</span>}</div>
                            </div>

                            {/* Phone */}
                            <div className="view-field">
                                <span className="field-label">
                                    <span className="phone-row">
                                        Phone Number
                                        {profile.phone && (
                                            <span className="verified-badge">
                                                <VerifiedIcon /> Verified
                                            </span>
                                        )}
                                    </span>
                                </span>
                                <div className="field-value">
                                    {profile.phone ? `+91  ${profile.phone}` : <span className="empty">—</span>}
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="view-field">
                                <span className="field-label">Date of Birth</span>
                                <div className="field-value">
                                    {profile.dob
                                        ? new Date(profile.dob).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })
                                        : <span className="empty">Not set</span>}
                                </div>
                            </div>

                            {/* State */}
                            <div className="view-field">
                                <span className="field-label">State</span>
                                <div className="field-value">{display(profile.state) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* City */}
                            <div className="view-field">
                                <span className="field-label">City</span>
                                <div className="field-value">{display(profile.city) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Gender */}
                            <div className="view-field">
                                <span className="field-label">Gender</span>
                                <div className="field-value">{display(profile.gender) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Current Status */}
                            <div className="view-field">
                                <span className="field-label">Current Status</span>
                                <div className="field-value">{display(profile.currentStatus) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Education */}
                            <div className="view-field">
                                <span className="field-label">Education Qualification</span>
                                <div className="field-value">{display(profile.educationQualification) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Skilling */}
                            <div className="view-field">
                                <span className="field-label">Skilling Background</span>
                                <div className="field-value">{display(profile.skillingBackground) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Disability */}
                            <div className="view-field">
                                <span className="field-label">Disability Status</span>
                                <div className="field-value">{display(profile.disabilityStatus) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Pincode */}
                            <div className="view-field">
                                <span className="field-label">PinCode</span>
                                <div className="field-value">{display(profile.pincode) ?? <span className="empty">—</span>}</div>
                            </div>

                            {/* Bio — full width */}
                            <div className="view-field full-width">
                                <span className="field-label">Bio</span>
                                <div className="field-value bio-value">
                                    {display(profile.bio) ?? <span className="empty">No bio added yet.</span>}
                                </div>
                            </div>

                        </div>{/* /view-grid */}
                    </div>
                )}

                <div className="divider" />

                {/* ── ACTION BUTTONS ── */}
                <div className="action-row">
                    {isEditing ? (
                        <>
                            <button
                                className="btn-save"
                                onClick={handleSave}
                                disabled={saving}
                            >
                                {saving ? (
                                    <><span className="spinner" /> Saving…</>
                                ) : (
                                    <><SaveIcon /> Save Changes</>
                                )}
                            </button>
                            <button className="btn-cancel" onClick={handleCancel}>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button className="btn-edit" onClick={handleEdit}>
                            <EditIcon /> Edit Profile
                        </button>
                    )}

                    {/* Logout — always visible */}
                    <button className="btn-logout" onClick={handleLogout}>
                        <LogoutIcon /> Logout
                    </button>
                </div>

            </div>{/* /profile-card */}

            {/* ── TOAST ── */}
            {toast && (
                <div className={`toast ${toast.type}`}>
                    {toast.type === "success" ? "✓" : "✕"} {toast.msg}
                </div>
            )}

        </div>
    );
}
