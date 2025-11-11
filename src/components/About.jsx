import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Md Mahamudul Hasan Jony</span>, 
              a passionate front-end developer dedicated to creating exceptional web experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building responsive, user-friendly interfaces using modern web technologies. 
              My goal is to combine beautiful design with clean, efficient code to deliver products that 
              users love to interact with.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy staying up-to-date with the latest web development trends, 
              exploring new frameworks, and continuously improving my skills to deliver the best possible solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Responsive Web Design</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">User Interface Development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Performance Optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Cross-browser Compatibility</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Code Quality & Best Practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

