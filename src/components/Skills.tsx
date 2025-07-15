
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'TypeScript', level: 82, color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', level: 80, color: 'from-green-600 to-blue-600' },
    { name: 'MongoDB', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'AWS', level: 70, color: 'from-yellow-600 to-orange-600' },
  ];

  const tools = [
    'Visual Studio Code',
    'Git & GitHub',
    'Docker',
    'Figma',
    'Postman',
    'MongoDB Compass',
    'Chrome DevTools',
    'Slack',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="group p-4 bg-gray-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Frontend</h4>
            <p className="text-gray-400 text-sm">
              React, Vue.js, Angular, HTML5, CSS3, Sass, Tailwind CSS
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚙️</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Backend</h4>
            <p className="text-gray-400 text-sm">
              Node.js, Express.js, Python, Django, PostgreSQL, MongoDB
            </p>
          </div>

          <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">☁️</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">DevOps</h4>
            <p className="text-gray-400 text-sm">
              AWS, Docker, Kubernetes, CI/CD, Git, Linux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
