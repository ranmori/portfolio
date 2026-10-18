// src/components/WrentaCaseStudy.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Gauge, Scale, ShieldAlert, Star } from 'lucide-react';
import { CASE_STUDY } from '../constants';
import type { CaseStudyNote } from '../types';

/* screenshots: any assets/images/wrenta-*.webp|png|jpg is picked up automatically,
   sorted by file name (wrenta-1-login.webp, wrenta-2-roster.webp, ...) */
const shotFiles = import.meta.glob('../assets/images/wrenta-*.{webp,png,jpg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
const shots = Object.keys(shotFiles)
  .sort()
  .map((path) => ({
    src: shotFiles[path],
    alt: 'Wrenta ' + path.replace(/^.*wrenta-(\d+-)?|\.\w+$/g, '').replace(/-/g, ' '),
  }));

const MotionDiv = motion.div as any;

/* one expandable note: title always visible, body on click */
const Note: React.FC<{ note: CaseStudyNote; name: string }> = ({ note, name }) => (
  <div className="collapse collapse-arrow bg-base-200/40 border border-white/5 rounded-xl">
    <input type="radio" name={name} aria-label={note.title} />
    <div className="collapse-title text-sm font-bold pr-10">{note.title}</div>
    <div className="collapse-content">
      <p className="text-sm opacity-70 leading-relaxed">{note.body}</p>
    </div>
  </div>
);

const WrentaCaseStudy: React.FC = () => {
  const { name, pitch, summary, tags, links, stats, loadTest, tradeoffs, constraints } = CASE_STUDY;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 rounded-2xl border border-primary/20 bg-base-100/50 shadow-lg shadow-primary/5 overflow-hidden"
    >
      {/* ---- header ---- */}
      <div className="p-6 md:p-8 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20">
          <Star size={12} /> Featured case study · in production
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight">
              {/* Wrenta's own brand mark */}
              <span className="grid place-content-center w-10 h-10 rounded-full bg-[#e8455d] text-white text-xl font-extrabold">W</span>
              {name}
            </h3>
            <p className="text-lg opacity-80 mt-1">{pitch}</p>
            <p className="text-sm opacity-60 mt-3 leading-relaxed">{summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <a href={links.siteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm rounded-xl">
              wrenta.co <ExternalLink size={14} />
            </a>
            {links.appStoreUrl && (
              <a href={links.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm rounded-xl border border-white/10">
                <Smartphone size={14} /> App Store
              </a>
            )}
            {links.playStoreUrl && (
              <a href={links.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm rounded-xl border border-white/10">
                <Smartphone size={14} /> Google Play
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ---- scale ---- */}
      <div className="grid grid-cols-3 md:grid-cols-6 border-b border-white/10">
        {stats.map((s) => (
          <div key={s.label} className="p-4 text-center border-white/5 border-r border-b md:border-b-0 last:border-r-0">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ---- screenshots (only when provided) ---- */}
      {shots.length > 0 && (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory p-6 border-b border-white/10 no-scrollbar">
          {shots.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="h-48 sm:h-72 w-auto max-w-none rounded-xl border border-white/10 snap-start flex-shrink-0 object-cover"
            />
          ))}
        </div>
      )}

      <div className="p-6 md:p-8 space-y-8">
        {/* ---- load test ---- */}
        <section>
          <h4 className="flex items-center gap-2 text-lg font-bold mb-2">
            <Gauge size={18} className="text-primary" /> What load testing found
          </h4>
          <p className="text-sm opacity-70 mb-4">{loadTest.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {loadTest.findings.map((f) => (
              <div key={f.title} className="rounded-xl bg-base-200/40 border border-white/5 p-4">
                <div className="text-sm font-bold mb-1">{f.title}</div>
                <p className="text-xs opacity-70 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 p-4">
            <div className="text-[10px] uppercase tracking-wider opacity-60 mb-3">Measured before the fixes</div>
            <div className="grid grid-cols-3 gap-3">
              {loadTest.before.map((b) => (
                <div key={b.label}>
                  <div className="text-xl font-bold text-red-300">{b.value}</div>
                  <div className="text-[11px] opacity-60">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- tradeoffs + constraints ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h4 className="flex items-center gap-2 text-lg font-bold mb-3">
              <Scale size={18} className="text-primary" /> Tradeoffs
            </h4>
            <div className="space-y-2">
              {tradeoffs.map((t) => <Note key={t.title} note={t} name="wrenta-tradeoffs" />)}
            </div>
          </section>
          <section>
            <h4 className="flex items-center gap-2 text-lg font-bold mb-3">
              <ShieldAlert size={18} className="text-primary" /> Constraints
            </h4>
            <div className="space-y-2">
              {constraints.map((c) => <Note key={c.title} note={c} name="wrenta-constraints" />)}
            </div>
          </section>
        </div>
      </div>
    </MotionDiv>
  );
};

export default WrentaCaseStudy;
