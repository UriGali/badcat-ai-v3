import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const credits = [
    { label: 'Director',   value: project.director },
    { label: 'D.O.P.',     value: project.dop },
    { label: 'Agencia',    value: project.agency },
    { label: 'Categoría',  value: project.category },
    { label: 'Año',        value: project.year },
  ];

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.98)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close button */}
      <motion.button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 10,
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '1px solid rgba(245,245,245,0.18)',
          background: 'transparent',
          color: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        whileHover={{ borderColor: '#FFB400', color: '#FFB400', scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
      >
        <X size={18} strokeWidth={1.5} />
      </motion.button>

      <div className="modal-layout">
        {/* ── Video / Media ── */}
        <motion.div
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: 'easeOut' }}
        >
          {project.fullVideo ? (
            <video
              src={project.fullVideo}
              poster={project.poster}
              controls
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <>
              <img
                src={project.poster || project.thumbnail}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.2rem',
                }}
              >
                <motion.div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '2px solid rgba(245,245,245,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                >
                  <Play size={26} fill="#F5F5F5" color="#F5F5F5" style={{ marginLeft: 4 }} />
                </motion.div>
                <p
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(245,245,245,0.35)',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    maxWidth: 220,
                  }}
                >
                  Añade fullVideo en themeConfig.js
                </p>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Ficha técnica ── */}
        <motion.div
          className="modal-tech-panel"
          style={{
            width: 320,
            borderLeft: '1px solid rgba(245,245,245,0.07)',
            padding: '4.5rem 2.5rem',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.45, ease: 'easeOut' }}
        >
          <div>
            {/* Categoria + año */}
            <p
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#FFB400',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}
            >
              {project.category} · {project.year}
            </p>

            {/* Brand */}
            <h2
              className="modal-tech-brand"
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: '3.8rem',
                lineHeight: 1,
                color: '#F5F5F5',
                letterSpacing: '0.03em',
                marginBottom: '0.4rem',
              }}
            >
              {project.brand}
            </h2>

            {/* Title */}
            <p
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1rem',
                color: 'rgba(245,245,245,0.5)',
                marginBottom: '1.75rem',
                fontWeight: 400,
              }}
            >
              {project.title}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.75,
                color: 'rgba(245,245,245,0.38)',
                marginBottom: '2.5rem',
              }}
            >
              {project.description}
            </p>

            {/* Amber divider */}
            <div
              style={{
                width: '2rem',
                height: '2px',
                background: '#FFB400',
                marginBottom: '2.25rem',
              }}
            />

            {/* Credits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {credits.map(({ label, value }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '0.62rem',
                      letterSpacing: '0.28em',
                      color: 'rgba(245,245,245,0.3)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: '#F5F5F5',
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer del modal */}
          <div>
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(245,245,245,0.05)',
                marginBottom: '1.25rem',
              }}
            />
            <p
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: '1rem',
                letterSpacing: '0.2em',
                color: 'rgba(245,245,245,0.2)',
              }}
            >
              BADCAT PRODUCTION HOUSE
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
