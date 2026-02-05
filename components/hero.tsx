import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          {/* Brand */}
          <div className="mb-5 flex items-center gap-2">
            <Image
              src="/cygnuz/cygnuzlogo.png"
              alt="Cygnuz AI logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">
              Cygnuz AI
            </p>
          </div>

          {/* Headline */}
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">AI AGENTS &</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              BUSINESS AUTOMATION
            </span>
            <span className="block">THAT SCALE</span>
          </h1>

          {/* Sub text */}
          <p className="mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-300">
            We build intelligent AI agents, automate workflows, and deliver
            custom AI-powered software that helps businesses operate faster,
            smarter, and cheaper.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
            >
              <a
                href="https://wa.link/rc25na"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to an AI Expert
              </a>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {cardData.map((c, i) => {
              const visibility =
                i <= 2
                  ? "block"
                  : i === 3
                  ? "hidden md:block"
                  : i === 4
                  ? "hidden xl:block"
                  : "hidden"

              return (
                <div key={i} className={visibility}>
                  <AICard {...c} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- AI Card ---------------- */

function AICard({
  title,
  sub,
  tone,
  videoSrc,
}: {
  title: string
  sub: string
  tone: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay
          loop
          muted
          playsInline
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-2xl font-bold text-white/90">
              {title}
            </div>
            <p className="text-xs text-white/70">{sub}</p>

            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Card Data ---------------- */

const cardData = [
  {
    title: "AI Agents",
    sub: "24/7 smart agents for support, sales & ops.",
    tone: "automation",
  },
  {
    title: "Workflow Speed",
    sub: "Automate tasks & cut manual work by 70%.",
    tone: "efficiency",
  },
  {
    title: "CRM & Support",
    sub: "AI-powered customer journeys.",
    tone: "growth",
  },
  {
    title: "Custom AI",
    sub: "Built-to-fit AI software solutions.",
    tone: "custom",
  },
  {
    title: "Enterprise Scale",
    sub: "Secure, scalable AI infrastructure.",
    tone: "enterprise",
  },
]
