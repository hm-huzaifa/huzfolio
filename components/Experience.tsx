import { EXPERIENCE } from '@/constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="experience">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl font-bold mb-2 text-text">EXPERIENCE</h2>
          <p className="text-muted">Professional trajectory.</p>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 border-l border-neutral-800 hover:border-accent transition-colors duration-300">
              <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] bg-base border border-accent rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-text">{job.role}</h3>
                <div className="flex flex-col md:items-center justify-between bg-accent/5 rounded-lg">
                  <span className="font-mono text-sm text-accent text-right px-3 py-1 rounded-full mt-2 md:mt-0 w-full">
                    {job.period}
                  </span>
                  <span className="font-mono text-sm text-accent text-right px-3 py-1 rounded-full mt-2 md:mt-0 w-full">
                    {job.location}
                  </span>
                </div>
              </div>
              
              <h4 className="text-lg text-neutral-400 mb-6 font-medium">{job.company}</h4>
              
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#e5e5e5' }}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;