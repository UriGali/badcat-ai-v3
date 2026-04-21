import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '../themeConfig';
import VideoCard from './VideoCard';
import ProjectModal from './ProjectModal';

export default function VideoWall() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" style={{ backgroundColor: '#111111' }}>
      {/* Header */}
      <motion.div
        style={{
          padding: '7.5rem 2rem 2.5rem',
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <div>
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.32em',
              color: '#FFB400',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
            }}
          >
            Selected Work
          </p>
          <h1
            className="glitch-title"
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1,
              color: '#F5F5F5',
              letterSpacing: '0.02em',
            }}
          >
            {theme.brand.tagline}
          </h1>
        </div>

        <p
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.82rem',
            color: 'rgba(245,245,245,0.3)',
            textAlign: 'right',
            maxWidth: '230px',
            lineHeight: 1.65,
          }}
        >
          {theme.brand.subTagline}
        </p>
      </motion.div>

      {/* The Wall */}
      <div className="video-wall">
        {theme.projects.map((project, i) => (
          <VideoCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            key="modal"
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
