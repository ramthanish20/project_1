
import React from 'react';
import { Download, User, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: User, number: '30+', label: 'Happy Clients' },
    { icon: Coffee, number: '500+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover more about my journey and passion for creating digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Alex Johnson"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              I'm Alex Johnson, a passionate developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey started with a 
              curiosity about how websites work, and it has evolved into a passion for 
              crafting digital experiences that make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in clean code, beautiful design, and seamless user experiences. 
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good cup of coffee while sketching 
              new ideas.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400">Core Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-purple-500/30 hover:border-purple-500 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:text-cyan-400 transition-colors duration-300" />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
