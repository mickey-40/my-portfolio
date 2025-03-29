import { useState } from "react";

export default function App() {
  return (
    <div className="font-sans bg-white text-black w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Mickey Arnold</h1>
        <p className="text-xl mb-6">Software Developer | Full-Stack Engineer</p>
        <a href="#projects">
          <button className="bg-blue-600 text-white text-lg px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
            View Projects
          </button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-gray-100 w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="max-w-4xl mx-auto text-center text-lg">
          I'm a software developer passionate about building responsive, scalable web apps. I love working with JavaScript, React, and modern frameworks. I am learning and building something.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 w-full">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="mb-2">A web app that does something cool using React and Node.js.</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600">GitHub</a>
              <a href="#" className="text-blue-600">Live Demo</a>
            </div>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="mb-2">Another app with a focus on user experience and performance.</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600">GitHub</a>
              <a href="#" className="text-blue-600">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-100 text-center w-full">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Email: mickeyarnold</p>
        <p className="mb-2">GitHub: <a href="https://github.com/mickey-40" className="text-blue-600">@mickey-40</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mickey-arnold" className="text-blue-600">/in/mickey-arnold</a></p>
      </section>
    </div>
  );
}
