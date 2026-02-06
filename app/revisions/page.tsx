import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";

export default function RevisionPolicyPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />

              <div className="relative space-y-12">

                {/* Header */}
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">
                    Revision Policy
                  </h1>
                  <p className="text-neutral-400 text-lg">
                    Our revision policy is designed to ensure clarity, fairness, and smooth collaboration
                    while delivering high-quality AI automation and software solutions.
                  </p>
                </header>

                {/* Section 1 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Included Revisions
                  </h2>
                  <p className="text-neutral-300">
                    Each Cygnuz AI service package includes a defined number of revisions to refine
                    AI agents, automations, and software workflows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Starter Plan: 2 revision rounds</li>
                    <li>Growth Plan: 4 revision rounds</li>
                    <li>Enterprise Plan: Unlimited revisions within the agreed project scope</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    2. Additional Revisions
                  </h2>
                  <p className="text-neutral-300">
                    Revisions requested beyond the included amount will be billed hourly based on the service tier:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Starter Plan: $40/hour</li>
                    <li>Growth Plan: $60/hour</li>
                    <li>Enterprise Plan: $75/hour</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Scope of Revisions
                  </h2>
                  <p className="text-neutral-300">
                    Revisions are intended to improve and fine-tune the originally agreed AI workflows,
                    agent behavior, prompts, or integrations. Requests that significantly expand functionality,
                    add new features, or change the project direction may require a new scope agreement.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    4. Revision Turnaround Time
                  </h2>
                  <p className="text-neutral-300">
                    Revision turnaround time depends on the complexity of the changes and current workload.
                    Minor updates may be completed within 1–2 business days, while larger adjustments
                    may take longer.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    5. Communication & Approval
                  </h2>
                  <p className="text-neutral-300">
                    To ensure efficient progress, all revision requests should be shared clearly
                    in a single consolidated message. Once a deliverable is approved,
                    further changes may be treated as a new revision cycle.
                  </p>
                </section>

                {/* Section 6 */}
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Contact Us
                  </h2>
                  <p className="text-neutral-300">
                    If you have any questions regarding our revision policy or need clarification,
                    feel free to reach out to us:
                  </p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a
                      href="mailto:hello@cygnuzai.com"
                      className="text-lime-300 underline"
                    >
                      cygnuzai@gmail.com
                    </a>
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </>
  );
}
