
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Alex delivered an outstanding e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are remarkable. The project was completed on time and within budget.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Working with Alex was a game-changer for our mobile app project. His React Native skills and problem-solving abilities helped us launch a successful product that our users love.',
      rating: 5,
      company: 'InnovateLab'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, CreativeAgency',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The website Alex created for us is absolutely beautiful and performs flawlessly. He understood our vision perfectly and brought it to life with modern design and smooth animations.',
      rating: 5,
      company: 'CreativeAgency'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO, DataFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Alex\'s full-stack development skills are impressive. He built a complex dashboard for our analytics platform with clean code and excellent performance optimization.',
      rating: 5,
      company: 'DataFlow Solutions'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Founder, EcoTech Startup',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'Professional, reliable, and incredibly talented. Alex helped us transform our idea into a successful web application. His communication throughout the project was excellent.',
      rating: 5,
      company: 'EcoTech Startup'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-20">
              <Quote className="w-16 h-16 text-purple-400" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-purple-500/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-purple-500/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gray-800/30 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
