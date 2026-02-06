import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">

                {/* Header */}
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-neutral-400 text-lg">
                    Common questions about AI agents, automation, and custom software solutions at Cygnuz AI.
                  </p>
                </header>

                {/* FAQ 1 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. What does Cygnuz AI do?
                  </h2>
                  <p className="text-neutral-300">
                    Cygnuz AI is an AI automation agency that builds intelligent AI agents, automates business processes,
                    and develops custom AI-powered software to help companies scale efficiently.
                  </p>
                </section>

                {/* FAQ 2 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    2. What types of AI agents do you provide?
                  </h2>
                  <p className="text-neutral-300">
                    We build AI agents for customer support, sales, lead qualification, appointment booking,
                    WhatsApp automation, voice calling, and internal business operations.
                  </p>
                </section>

                {/* FAQ 3 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Can your AI solutions integrate with our existing systems?
                  </h2>
                  <p className="text-neutral-300">
                    Yes. Our solutions integrate seamlessly with CRMs, websites, WhatsApp, APIs, databases,
                    payment systems, and internal tools.
                  </p>
                </section>

                {/* FAQ 4 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    4. Do you build custom AI software or only automations?
                  </h2>
                  <p className="text-neutral-300">
                    We do both. From fully custom AI-powered dashboards and SaaS platforms to workflow automation
                    and AI agent deployment — everything is tailored to your business needs.
                  </p>
                </section>

                {/* FAQ 5 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    5. How is pricing determined?
                  </h2>
                  <p className="text-neutral-300">
                    Pricing depends on the complexity of the AI agent, integrations required, automation scope,
                    and ongoing support. We offer flexible plans and custom quotes.
                  </p>
                </section>

                {/* FAQ 6 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. How long does it take to deploy an AI agent?
                  </h2>
                  <p className="text-neutral-300">
                    Simple automations can be deployed within a few days, while advanced AI agents and
                    software solutions typically take 1–3 weeks depending on scope.
                  </p>
                </section>

                {/* FAQ 7 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    7. Is my business data secure?
                  </h2>
                  <p className="text-neutral-300">
                    Absolutely. We follow strict security practices, use encrypted connections,
                    and ensure data privacy in all AI workflows and integrations.
                  </p>
                </section>

                {/* FAQ 8 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Can AI replace human customer support?
                  </h2>
                  <p className="text-neutral-300">
                    AI works best alongside humans. Our AI agents handle repetitive tasks 24/7,
                    while complex cases can be seamlessly handed over to human agents.
                  </p>
                </section>

                {/* FAQ 9 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Do you offer ongoing support and optimization?
                  </h2>
                  <p className="text-neutral-300">
                    Yes. We provide continuous monitoring, improvements, training updates,
                    and optimization to ensure your AI systems perform at peak efficiency.
                  </p>
                </section>

                {/* FAQ 10 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    10. How do we get started?
                  </h2>
                  <p className="text-neutral-300">
                    Simply{" "}
                    <a href="/contact" className="text-lime-300 underline">
                      contact us
                    </a>{" "}
                    with your business goals. We’ll analyze your workflow and propose
                    the best AI automation solution for you.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </>
  )
}
