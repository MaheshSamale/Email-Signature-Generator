import { useState, useEffect } from "react";
import templates from "./templates/registry";

export default function SignaturePreview({ data, template, setTemplate }) {
  const [showToast, setShowToast] = useState(false);

  const templateKey = templates[template] ? template : Object.keys(templates)[0];
  const currentTemplate = templates[templateKey].render;
  const html = currentTemplate(data);

  const copySignature = async () => {
    const blob = new Blob([html], { type: "text/html" });
    const item = new ClipboardItem({ "text/html": blob });
    await navigator.clipboard.write([item]);
    
    // Show Toast
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (template !== templateKey) {
     setTimeout(() => setTemplate(templateKey), 0);
  }

  return (
    <div className="preview-container">
      <div className="card">
        <div className="template-header">
          <h3>Signature Preview</h3>
          <select 
            className="template-select" 
            value={templateKey} 
            onChange={(e) => setTemplate(e.target.value)}
          >
            {Object.keys(templates).map(key => (
              <option key={key} value={key}>{templates[key].name}</option>
            ))}
          </select>
        </div>
        
        <div className="preview-inner">
          <div
            className="preview-box"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <button className="btn-primary" onClick={copySignature}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Copy to Clipboard
        </button>
      </div>

      <div className={`toast ${showToast ? 'show' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Signature copied to clipboard!
      </div>
    </div>
  );
}
