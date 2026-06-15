import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const sizeToSpan = (size) => {
  switch (size) {
    case 'wide':     return { col: 2, row: 1 };
    case 'tall':     return { col: 1, row: 2 };
    case 'featured': return { col: 2, row: 2 };
    default:         return { col: 1, row: 1 };
  }
};

export default function VideoCard({ project, index, onClick }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { col, row } = sizeToSpan(project.size);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.hoverVideo) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      style={{
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#1a1a1a',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.45) }}
    >
      {/* Thumbnail — uses real poster, falls back to placeholder */}
      <motion.img
        src={project.poster || project.thumbnail}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Hover video — poster shown until playback starts */}
      {project.hoverVideo && (
        <video
          ref={videoRef}
          src={project.hoverVideo}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      )}

      {/* Permanent subtle gradient at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.15) 35%, transparent 60%)',
          transition: 'opacity 0.4s ease',
          opacity: isHovered ? 1 : 0.5,
        }}
      />

      {/* Full overlay on hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(17,17,17,0.15)',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Brand name — outlined, centered */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          pointerEvents: 'none',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isHovered ? 0.05 : 0 }}
      >
        <motion.span
          animate={{ y: isHovered ? 0 : 12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: 'clamp(2.5rem, 6vw, 6.5rem)',
            lineHeight: 1,
            WebkitTextStroke: '2px #F5F5F5',
            color: 'transparent',
            letterSpacing: '0.04em',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          {project.brand}
        </motion.span>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
        animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isHovered ? 0.08 : 0 }}
      >
        <div>
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              color: '#FFB400',
              textTransform: 'uppercase',
              marginBottom: '3px',
            }}
          >
            {project.category}
          </p>
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#F5F5F5',
              letterSpacing: '0.02em',
            }}
          >
            {project.title}
          </p>
        </div>

        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1.5px solid rgba(245,245,245,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Play size={13} fill="#F5F5F5" color="#F5F5F5" style={{ marginLeft: 2 }} />
        </div>
      </motion.div>

      {/* Year — top right */}
      <motion.span
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          color: 'rgba(245,245,245,0.45)',
          pointerEvents: 'none',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {project.year}
      </motion.span>
    </motion.div>
  );
}
