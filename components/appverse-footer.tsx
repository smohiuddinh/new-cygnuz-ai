"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline:
    "Cygnuz AI builds intelligent AI agents, automates business workflows, and delivers custom AI-powered software to help companies scale faster.",
  copyright: "© 2025 — Cygnuz AI. All rights reserved.",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("cygnuzai-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black
                       shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
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
      </div>

      {/* AI Platform Preview */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">
                AUTOMATE. SCALE. GROW.
              </p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Monitor & manage AI agents from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Track conversations, automate workflows, review AI decisions,
                and scale operations from one unified dashboard.
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay
                    loop
                    muted
                    playsInline
                    aria-label="Cygnuz AI dashboard preview"
                  />

                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-4xl font-extrabold text-lime-300">
                        AI Control Center
                      </div>
                      <p className="text-xs text-white/80">
                        Full visibility & automation in one place
                      </p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5
                                      text-[10px] uppercase tracking-wider text-lime-300">
                        Smart Automation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/cygnuz/cygnuzlogo.png"
                  alt="Cygnuz AI logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold text-lime-300">
                  Cygnuz AI
                </span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                {content.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Company
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Services", "Pricing", "Blog", "FAQ", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="hover:text-lime-300"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Social
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/cygnuzai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                    >
                      X / Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/@cygnuzai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/cygnuzai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.link/rc25na"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4
                          border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-lime-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-lime-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
