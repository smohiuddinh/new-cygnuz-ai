import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
 const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPageElement",
  "@id": "https://cygnuzai.com/#pricing",
  name: "Cygnuz AI Pricing Plans",
  description:
    "Flexible pricing plans for AI agents, business automation, and custom AI-powered software solutions.",
  url: "https://cygnuzai.com/#pricing",
  mainEntity: {
    "@type": "OfferCatalog",
    name: "Cygnuz AI Services",
    description:
      "AI automation, AI agents, workflow automation, and custom software development services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Automation Plan",
        price: "499",
        priceCurrency: "USD",
        description:
          "Basic AI automation setup, 1 AI agent, workflow automation, and limited integrations.",
      },
      {
        "@type": "Offer",
        name: "Business AI Plan",
        price: "1499",
        priceCurrency: "USD",
        description:
          "Advanced AI agents, CRM & customer support automation, API integrations, and priority support.",
      },
      {
        "@type": "Offer",
        name: "Enterprise AI Solution",
        price: "Custom",
        priceCurrency: "USD",
        description:
          "Custom-built AI agents, end-to-end automation, scalable AI infrastructure, and bespoke software solutions.",
      },
    ],
  },
};


  // Structured data for main page
const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cygnuzai.com/",
  name: "Cygnuz AI | AI Agents, Automation & Custom Software Solutions",
  description:
    "Cygnuz AI is an AI automation agency providing AI agents, business process automation, and custom AI-powered software solutions to help companies scale efficiently.",
  url: "https://cygnuzai.com/",
  mainEntity: {
    "@type": "Organization",
    name: "Cygnuz AI",
    url: "https://cygnuzai.com",
    logo: "https://cygnuzai.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/cygnuzai",
      "https://twitter.com/cygnuzai",
      "https://www.instagram.com/cygnuzai",
      "https://www.youtube.com/@cygnuzai"
    ],
  },
  hasPart: [
    {
      "@type": "WebPageElement",
      "@id": "https://cygnuzai.com/#services",
      name: "AI Services Section",
      url: "https://cygnuzai.com/#services",
    },
    {
      "@type": "WebPageElement",
      "@id": "https://cygnuzai.com/#pricing",
      name: "Pricing Plans",
      url: "https://cygnuzai.com/#pricing",
    },
    {
      "@type": "WebPageElement",
      "@id": "https://cygnuzai.com/#contact",
      name: "Contact Section",
      url: "https://cygnuzai.com/#contact",
    },
  ],
};


  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
