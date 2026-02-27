import { useState } from "react";
import ImageCropper from "./ImageCropper";

export default function SignatureForm({ data, setData }) {
  const [cropImage, setCropImage] = useState(null);
  const [cropField, setCropField] = useState(null);
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Use a variable to safely capture the target name before async reader
    const targetName = e.target.name;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCropImage(reader.result);
      setCropField(targetName);
    };
    reader.readAsDataURL(file);
    e.target.value = null; 
  };

  const handleCropSave = (cropped) => {
    setData({ ...data, [cropField]: cropped });
    setCropImage(null);
  };

  const handleSocialChange = (id, field, value) => {
    const newSocials = data.socials.map((s) => 
      s.id === id ? { ...s, [field]: value } : s
    );
    setData({ ...data, socials: newSocials });
  };

  const addSocial = () => {
    const newId = Date.now().toString();
    setData({
      ...data,
      socials: [...data.socials, { id: newId, platform: "linkedin", url: "" }]
    });
  };

  const removeSocial = (id) => {
    setData({
      ...data,
      socials: data.socials.filter(s => s.id !== id)
    });
  };

  const availablePlatforms = ["linkedin", "twitter", "github", "facebook", "instagram", "youtube", "tiktok", "dribbble", "behance"];

  return (
    <div className="card form-card" style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
        {[1, 2, 3, 4].map(num => (
          <div 
            key={num} 
            style={{ 
              width: '32px', height: '32px', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: step >= num ? 'var(--primary)' : '#e2e8f0',
              color: step >= num ? '#fff' : 'var(--text-muted)',
              fontWeight: '600', fontSize: '0.875rem',
              transition: 'all 0.3s ease'
            }}
          >
            {num}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, minHeight: '350px' }}>
        
        {step === 1 && (
          <div className="form-section">
            <h3>Personal Details</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" value={data.name} onChange={handleChange} placeholder="e.g. Jane Doe" />
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input name="title" value={data.title} onChange={handleChange} placeholder="e.g. Marketing Manager" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-section">
            <h3>Contact Info</h3>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" value={data.email} onChange={handleChange} placeholder="e.g. jane@company.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" value={data.phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input name="website" value={data.website || ""} onChange={handleChange} placeholder="e.g. www.company.com" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input name="address" value={data.address || ""} onChange={handleChange} placeholder="e.g. 123 Main St, City" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-section">
            <h3>Company & Assets</h3>
            <div className="form-group">
              <label>Company Name</label>
              <input name="company" value={data.company} onChange={handleChange} placeholder="e.g. Acme Corp" />
            </div>
            <div className="form-group">
              <label>Profile Photo</label>
              <input type="file" name="photo" accept="image/*" onChange={handleImage} />
            </div>
            <div className="form-group">
              <label>Company Logo</label>
              <input type="file" name="logo" accept="image/*" onChange={handleImage} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-section">
            <h3>Social Links</h3>
            {data.socials.map((social) => (
              <div key={social.id} className="social-row">
                <select 
                  value={social.platform} 
                  onChange={(e) => handleSocialChange(social.id, "platform", e.target.value)}
                >
                  {availablePlatforms.map(p => (
                    <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                  ))}
                </select>
                <input 
                  value={social.url} 
                  onChange={(e) => handleSocialChange(social.id, "url", e.target.value)} 
                  placeholder="https://..."
                />
                <button className="btn-danger" onClick={() => removeSocial(social.id)} aria-label="Remove">
                  ✕
                </button>
              </div>
            ))}
            <button className="btn-secondary" onClick={addSocial} style={{ marginTop: '0.5rem', width: '100%' }}>
              + Add Social Link
            </button>
          </div>
        )}
      </div>

      {/* Navigation Actions */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginTop: '2rem', 
        paddingTop: '1.5rem', 
        borderTop: '1px solid var(--border-color)',
        justifyContent: 'space-between' 
      }}>
        <button 
          type="button"
          onClick={() => setStep(s => Math.max(1, s - 1))}
          style={{ 
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--primary)',
            color: 'white',
            fontWeight: '600',
            cursor: step === 1 ? 'not-allowed' : 'pointer',
            opacity: step === 1 ? 0.3 : 1,
            transition: 'all 0.2s'
          }}
          disabled={step === 1}
        >
          ← Previous
        </button>
        
        {step < totalSteps ? (
          <button 
            type="button"
            onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
            style={{ 
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--primary)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s'
            }}
          >
            Next Step →
          </button>
        ) : (
          <button 
            type="button"
            onClick={() => setStep(1)}
            style={{ 
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--primary)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)',
              transition: 'all 0.2s'
            }}
          >
            Finish ✓
          </button>
        )}
      </div>

      {cropImage && (
        <ImageCropper
          src={cropImage}
          onSave={handleCropSave}
          onCancel={() => setCropImage(null)}
        />
      )}
    </div>
  );
}
