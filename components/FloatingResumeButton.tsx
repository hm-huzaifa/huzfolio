import { FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';

type FloatingResumeButtonProps = {
  /** Defaults to `PERSONAL_INFO.resumeURL` */
  resumeUrl?: string;
  className?: string;
};

/**
 * Fixed bottom-right control that opens the resume in a new tab.
 * Does not affect document flow (no layout shift).
 */
export function FloatingResumeButton({
  resumeUrl = PERSONAL_INFO.resumeURL,
  className = '',
}: FloatingResumeButtonProps) {
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume PDF in a new tab"
      className={[
        'group fixed z-[100]',
        'bottom-[max(1rem,env(safe-area-inset-bottom,0px))]',
        'right-[max(1rem,env(safe-area-inset-right,0px))]',
        'md:bottom-6 md:right-6',
        'inline-flex items-center justify-center gap-2',
        'rounded-full bg-accent px-3 py-2.5 md:px-5 md:py-3',
        'font-mono text-[10px] font-semibold uppercase tracking-wider text-white',
        'shadow-lg shadow-accent/30',
        'transition-all duration-300',
        'hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/35',
        'active:scale-[0.98]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base',
        className,
      ].join(' ')}
    >
      <FileDown
        className="size-4 shrink-0 opacity-95 transition-transform group-hover:-translate-y-0.5"
        aria-hidden
      />
      <span className="max-w-[9rem] leading-tight sm:max-w-none">
        <span className="sm:hidden">Resume</span>
        <span className="hidden sm:inline">Download Resume</span>
      </span>
    </a>
  );
}
