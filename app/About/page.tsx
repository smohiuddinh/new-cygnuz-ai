// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cygnuz AI",
    url: "https://cygnuzai.com",
    logo: "https://cygnuzai.com/logo.png",
    description:
      "Cygnuz AI is an AI automation agency providing AI agents, business automation, and custom software solutions to help companies scale efficiently.",
    sameAs: [
      "https://www.linkedin.com/company/cygnuzai",
      "https://www.instagram.com/cygnuzai",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-336-6655786",
        contactType: "sales",
        areaServed: "PK",
        availableLanguage: ["English"],
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Pakistan" },
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "United Kingdom" },
      { "@type": "Place", name: "Canada" },
    ],
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Cygnuz AI
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          We build intelligent AI agents and automation systems that replace
          repetitive work, boost productivity, and scale businesses faster.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "AI Agents",
              desc: "Smart AI agents for customer support, sales, lead qualification, and internal operations.",
            },
            {
              title: "Business Automation",
              desc: "End-to-end workflow automation that saves time, reduces cost, and improves efficiency.",
            },
            {
              title: "Custom Software Solutions",
              desc: "Tailor-made software built around your business needs and automation goals.",
            },
            {
              title: "AI Call & Chat Automation",
              desc: "AI-powered calling and chat systems that work 24/7 without human intervention.",
            },
            {
              title: "Scalable Systems",
              desc: "Our solutions are designed to scale with your business as you grow.",
            },
            {
              title: "Results-Driven Approach",
              desc: "We focus on real ROI, measurable improvements, and long-term automation value.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Automate Your Business with AI
        </h2>
        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          Partner with Cygnuz AI to deploy intelligent automation that works
          for you 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.link/65mf3i"
            target="_blank"
            className="bg-lime-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-200 transition-all"
          >
            Get AI Automation Quote
          </a>

          <a
            href="tel:+923366655786"
            className="border border-neutral-700 px-6 py-3 rounded-full font-semibold hover:bg-neutral-900 transition-all"
          >
            +92 336 6655786
          </a>
        </div>
      </section>
    </>
  );
}
