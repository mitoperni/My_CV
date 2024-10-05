import React from 'react'

const SocialLinks = () => (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4">🌐 Connect with me</h2>
      <div className="flex space-x-4">
        <a href="https://linkedin.com/in/migueltoyaspernichi" className="text-blue-600 hover:text-blue-800">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/yourgithub" className="text-gray-800 hover:text-gray-600">
          <GitHub size={24} />
        </a>
        <a href="https://instagram.com/mpernichi" className="text-pink-600 hover:text-pink-800">
          <Instagram size={24} />
        </a>
        <a href="https://medium.com/@mitoperni" className="text-green-600 hover:text-green-800">
          <Book size={24} />
        </a>
      </div>
    </section>
  );

export default SocialLinks