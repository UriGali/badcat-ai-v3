import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '../themeConfig';
import VideoCard from './VideoCard';
import ProjectModal from './ProjectModal';

function CategorySection({ category, globalIndex, onSelect }) {
  return (
    <div style={{ marginBottom: '6rem' }}>
      {/* Category header */}
      <motion.div
        style={{
          padding: '0 2rem 2rem',
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
          <span
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: '#FFB400',
              textTransform: 'uppercase',
            }}
          >
            {String(globalIndex + 1).padStart(2, '0')}
          </span>
          <h2
            style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              lineHeight: 1,
              color: '#F5F5F5',
              letterSpacing: '0.04em',
            }}
          >
            {category.name}
          </h2>
        </div>

        <span
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: 'rgba(245,245,245,0.2)',
            textTransform: 'uppercase',
          }}
        >
          {category.projects.length} {category.projects.length === 1 ? 'proyecto' : 'proyectos'}
        </span>
      </motion.div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'rgba(245,245,245,0.06)',
          maxWidth: '1600px',
          margin: '0 auto 2rem',
        }}
      />

      {/* Video grid */}
      <div className="video-wall">
        {category.projects.map((project, i) => (
          <VideoCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => onSelect(project)}
          />
        ))}
      </div>
    </div>
  );
}

export default function VideoWall() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" style={{ backgroundColor: '#111111' }}>
      {/* Page header */}
      <motion.div
        style={{
          padding: '7.5rem 2rem 4rem',
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

      {/* Category blocks */}
      {theme.projectCategories.map((category, i) => (
        <CategorySection
          key={category.id}
          category={category}
          globalIndex={i}
          onSelect={setSelected}
        />
      ))}

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
