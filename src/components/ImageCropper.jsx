import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage';

export default function ImageCropper({ src, onSave, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCircular, setIsCircular] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    try {
      setIsProcessing(true);
      const croppedImageBase64 = await getCroppedImg(
        src,
        croppedAreaPixels,
        { horizontal: false, vertical: false },
        isCircular
      );
      onSave(croppedImageBase64);
    } catch (e) {
      console.error("Failed to crop image", e);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="crop-overlay">
      <div className="crop-box" style={{ maxWidth: '500px', width: '100%', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Adjust Image</h3>
          <button onClick={onCancel} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>×</button>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '300px', backgroundColor: '#333' }}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape={isCircular ? "round" : "rect"}
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <div style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span>Zoom</span>
              <span>{Math.round(zoom * 100)}%</span>
            </label>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#f1f5f9', padding: '0.25rem', borderRadius: '8px' }}>
            <button 
              onClick={() => setIsCircular(true)}
              style={{ 
                flex: 1, padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
                background: isCircular ? 'var(--primary)' : 'transparent',
                color: isCircular ? 'white' : 'var(--text-muted)',
                boxShadow: isCircular ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Circle
            </button>
            <button 
              onClick={() => setIsCircular(false)}
              style={{ 
                flex: 1, padding: '0.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
                background: !isCircular ? 'var(--primary)' : 'transparent',
                color: !isCircular ? 'white' : 'var(--text-muted)',
                boxShadow: !isCircular ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Square
            </button>
          </div>

          <div className="crop-actions" style={{ marginTop: 0 }}>
            <button onClick={handleSave} disabled={isProcessing} style={{ opacity: isProcessing ? 0.7 : 1 }}>
              {isProcessing ? 'Saving...' : 'Confirm Crop'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
