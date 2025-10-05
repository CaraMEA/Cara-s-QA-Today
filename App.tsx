import React from "react";

export default function App(): React.ReactElement {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          {/* Your circular photo ABOVE the text */}
          <img
            src="/images/aboutme.png"
            alt="About me"
            className="rounded-full shadow-lg mx-auto mb-6 w-48 h-48 object-cover"
          />

          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Cara! I’m passionate about Quality Assurance and love finding bugs
            before users do. I thrive on delivering polished, reliable products that users
            can trust. Outside of work, I enjoy exploring the latest testing tools and
            pushing myself to solve new challenges in creative ways.
          </p>
        </div>
      </section>
    </main>
  );
}
