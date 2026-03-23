import { SKILLS, RESUME_DATA } from '@/constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 border-b border-neutral-900" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-3xl font-bold mb-8 text-text">PHILOSOPHY</h3>
            <p className="text-muted text-lg leading-loose mb-8">
              {RESUME_DATA.philosophy}
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-text">SKILLS</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {SKILLS.map((group) => (
                <div key={group.category}>
                  <h4 className="text-accent/80 font-mono text-sm tracking-widest mb-6 uppercase border-b border-accent/20 pb-3 font-bold">
                    {group.category}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="text-text font-semibold text-base hover:text-accent/80 transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;