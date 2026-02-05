"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Bot } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string }

const ACCENT = "#84cc16" // Cygnuz AI green

function FeatureItem({ text }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-lime-400" />
      <span className="text-sm text-neutral-200">{text}</span>
    </li>
  )
}

type Currency = "USD" | "INR"

const PRICES: Record<
  Currency,
  { starter: string; growth: string; scale: string }
> = {
  USD: {
    starter: "$499",
    growth: "$1,299",
    scale: "$3,499",
  },
  INR: {
    starter: "₹45,000",
    growth: "₹1,10,000",
    scale: "₹3,00,000",
  },
}

function guessLocalCurrency(): Currency {
  if (typeof Intl === "undefined") return "USD"
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""
  if (/India|Kolkata|Karachi/i.test(tz)) return "INR"
  return "USD"
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD")
  const [openPlan, setOpenPlan] = useState<
    null | "Starter" | "Growth" | "Scale"
  >(null)

  useEffect(() => {
    setCurrency(guessLocalCurrency())
  }, [])

  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-1 text-xs font-semibold text-lime-400">
            <Bot className="h-3.5 w-3.5" />
            Cygnuz AI Pricing
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Simple, scalable AI pricing
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400">
            Choose a plan that fits your business stage. Upgrade anytime as you
            scale with AI.
          </p>

          <div className="mt-6">
            <Button asChild className="rounded-full bg-white text-black">
              <Link href="https://wa.link/65mf3i" target="_blank">
                Talk to an AI expert
              </Link>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <Card className="liquid-glass rounded-2xl border border-white/10">
            <CardHeader className="space-y-3">
              <h3 className="text-lg font-semibold">Starter</h3>
              <div className="text-2xl font-bold">
                {PRICES[currency].starter}
                <span className="ml-1 text-xs text-neutral-400">/ month</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="grid gap-2">
                <FeatureItem text="1 AI agent (chat or task-based)" />
                <FeatureItem text="Basic workflow automation" />
                <FeatureItem text="CRM / WhatsApp integration" />
                <FeatureItem text="Email support" />
                <FeatureItem text="2–3 weeks setup time" />
              </ul>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button
                onClick={() => setOpenPlan("Starter")}
                variant="outline"
                className="flex-1 rounded-full"
              >
                View demo
              </Button>
              <Button
                asChild
                className="flex-1 rounded-full bg-lime-400 text-black"
              >
                <Link href="/checkout?plan=starter">Select</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Growth */}
          <Card className="liquid-glass rounded-2xl border border-lime-400/30 shadow-lg">
            <CardHeader className="space-y-3">
              <h3 className="text-lg font-semibold">Growth</h3>
              <div className="text-2xl font-bold">
                {PRICES[currency].growth}
                <span className="ml-1 text-xs text-neutral-400">/ month</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="grid gap-2">
                <FeatureItem text="Up to 3 AI agents" />
                <FeatureItem text="Advanced workflow automation" />
                <FeatureItem text="CRM, Slack, WhatsApp, API integrations" />
                <FeatureItem text="Analytics & performance tracking" />
                <FeatureItem text="Priority support" />
              </ul>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button
                onClick={() => setOpenPlan("Growth")}
                variant="outline"
                className="flex-1 rounded-full"
              >
                View demo
              </Button>
              <Button
                asChild
                className="flex-1 rounded-full bg-lime-400 text-black"
              >
                <Link href="/checkout?plan=growth">Select</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Scale */}
          <Card className="liquid-glass rounded-2xl border border-white/10">
            <CardHeader className="space-y-3">
              <h3 className="text-lg font-semibold">Scale</h3>
              <div className="text-2xl font-bold">
                {PRICES[currency].scale}
                <span className="ml-1 text-xs text-neutral-400">/ month</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="grid gap-2">
                <FeatureItem text="Unlimited AI agents" />
                <FeatureItem text="Custom AI workflows & models" />
                <FeatureItem text="Internal tools & dashboards" />
                <FeatureItem text="Dedicated AI engineer" />
                <FeatureItem text="SLA & enterprise security" />
              </ul>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button
                onClick={() => setOpenPlan("Scale")}
                variant="outline"
                className="flex-1 rounded-full"
              >
                View demo
              </Button>
              <Button
                asChild
                className="flex-1 rounded-full bg-lime-400 text-black"
              >
                <Link href="/checkout?plan=scale">Select</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Demo dialogs */}
      <ExamplesDialog
        open={openPlan === "Starter"}
        onOpenChange={(v) => setOpenPlan(v ? "Starter" : null)}
        planName="Starter AI Demo"
        price={PRICES[currency].starter}
        videoIds={["dQw4w9WgXcQ"]}
      />

      <ExamplesDialog
        open={openPlan === "Growth"}
        onOpenChange={(v) => setOpenPlan(v ? "Growth" : null)}
        planName="Growth AI Demo"
        price={PRICES[currency].growth}
        videoIds={["ASV2myPRfKA"]}
      />

      <ExamplesDialog
        open={openPlan === "Scale"}
        onOpenChange={(v) => setOpenPlan(v ? "Scale" : null)}
        planName="Scale AI Demo"
        price={PRICES[currency].scale}
        videoIds={["pRpeEdMmmQ0"]}
      />
    </section>
  )
}
