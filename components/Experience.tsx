import { EXPERIENCE } from '@/constants';
import { ExperienceJobCard } from '@/components/ExperienceJobCard';

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
            <ExperienceJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;