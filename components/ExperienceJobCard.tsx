'use client';

import { useMemo, useState } from 'react';
import type { Job } from '@/types';
import { EXPERIENCE_BULLETS_PREVIEW } from '@/constants';

type ExperienceJobCardProps = {
  job: Job;
};

export function ExperienceJobCard({ job }: ExperienceJobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const bullets = job.description;
  const hasMore = bullets.length > EXPERIENCE_BULLETS_PREVIEW;

  const visibleBullets = useMemo(
    () =>
      expanded || !hasMore
        ? bullets
        : bullets.slice(0, EXPERIENCE_BULLETS_PREVIEW),
    [bullets, expanded, hasMore],
  );

  return (
    <div className="relative min-w-0 pl-8 border-l border-neutral-800 hover:border-accent transition-colors duration-300">
      <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] bg-base border border-accent rounded-full" />

      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 shrink flex-col md:items-start">
          <h3 className="m-0 text-2xl font-bold leading-tight text-text">
              {job.role}
          </h3>
          <h4 className="mb-6 mt-1 text-lg font-medium leading-snug text-neutral-400">
            {job.company}
          </h4>
        </div>

        <div className="flex shrink-0 flex-col gap-2 rounded-lg px-3 py-2 md:items-end">
          <span className="w-full text-right font-mono text-sm leading-tight text-accent md:w-auto">
            {job.period}
          </span>
          <span className="w-full text-right font-mono text-sm leading-tight text-accent md:w-auto">
            {job.location}
          </span>
        </div>
      </div>

      <ul className="m-0 list-none space-y-3 p-0 text-pretty" role="list">
        {visibleBullets.map((bullet, index) => (
          <li key={`${job.id}-bullet-${index}`} className="flex gap-3 text-left">
            <span
              className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span 
            className="min-w-0 flex-1 text-sm leading-relaxed text-neutral-200"
            >
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-4 font-mono text-xs md:text-sm text-accent hover:text-accent-dim underline-offset-4 hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base rounded-sm"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      ) : null}
    </div>
  );
}
