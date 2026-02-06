"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ArrowRight, ChevronLeft } from "lucide-react"

interface OrderState {
  package: {
    name: string
    price: string
    priceValue: number
    includes3DModeling: boolean
  } | null
  has3DModel: boolean | null
  modelingAddOn: {
    name: string
    price: number
    complexity: string
  } | null
  needsRenders: boolean | null
  renderPackage: {
    name: string
    price: number
    quantity: number
  } | null
}

/* ------------------ PRICING (USD ONLY) ------------------ */

const PRICE_VALUES = {
  startup: 299,
  pro: 699,
  premium: 2049,
}

const PRICES = {
  startup: "$299",
  pro: "$699",
  premium: "$2,049",
}

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [currentStep, setCurrentStep] = useState(1)
  const [isInitialized, setIsInitialized] = useState(false)
  const [totalSteps, setTotalSteps] = useState(4)

  const [order, setOrder] = useState<OrderState>({
    package: null,
    has3DModel: null,
    modelingAddOn: null,
    needsRenders: null,
    renderPackage: null,
  })

  const [orderConfig, setOrderConfig] = useState({
    whatsappNumber: "+918384092211",
    modelingOptions: {
      simple: { price: 35, description: "Basic shapes, minimal details" },
      medium: { price: 60, description: "Moderate details, textures" },
      complex: { price: 120, description: "High detail, advanced geometry" },
    },
    renderOptions: {
      basic: { price: 25, quantity: 3 },
      standard: { price: 35, quantity: 5 },
      premium: { price: 60, quantity: 10 },
    },
  })

  /* ------------------ LOAD CONFIG ------------------ */

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      const content = JSON.parse(savedContent)
      if (content.orderForm) {
        setOrderConfig(content.orderForm)
      }
    }
  }, [])

  /* ------------------ INIT FROM URL ------------------ */

  useEffect(() => {
    if (isInitialized) return

    const plan = searchParams.get("plan")
    if (!plan || !["startup", "pro", "premium"].includes(plan)) {
      router.push("/")
      return
    }

    const planKey = plan as keyof typeof PRICES

    setOrder({
      package: {
        name: planKey.charAt(0).toUpperCase() + planKey.slice(1),
        price: PRICES[planKey],
        priceValue: PRICE_VALUES[planKey],
        includes3DModeling: planKey !== "pro",
      },
      has3DModel: null,
      modelingAddOn: null,
      needsRenders: null,
      renderPackage: null,
    })

    setTotalSteps(planKey === "pro" ? 4 : 3)
    setIsInitialized(true)
  }, [searchParams, isInitialized, router])

  /* ------------------ HELPERS ------------------ */

  const formatPrice = (price: number) => `$${price.toLocaleString()}`

  const calculateTotal = () => {
    let total = order.package?.priceValue || 0
    if (order.modelingAddOn) total += order.modelingAddOn.price
    if (order.renderPackage) total += order.renderPackage.price
    return total
  }

  const updateOrder = (updates: Partial<OrderState>) => {
    setOrder((prev) => ({ ...prev, ...updates }))
  }

  /* ------------------ NAVIGATION ------------------ */

  const handleNext = () => setCurrentStep((s) => s + 1)
  const handleBack = () => (currentStep === 1 ? router.push("/") : setCurrentStep((s) => s - 1))

  /* ------------------ WHATSAPP ------------------ */

  const generateWhatsAppMessage = () => {
    let msg = `Hi, I’d like to place an order:\n\n`
    msg += `📦 Package: ${order.package?.name} - ${order.package?.price}\n`

    if (order.modelingAddOn)
      msg += `🎨 3D Modeling: ${order.modelingAddOn.name} - ${formatPrice(order.modelingAddOn.price)}\n`

    if (order.renderPackage)
      msg += `🖼️ Renders: ${order.renderPackage.name} (${order.renderPackage.quantity}) - ${formatPrice(order.renderPackage.price)}\n`

    msg += `\n💰 Total: ${formatPrice(calculateTotal())}\n`
    msg += `Currency: USD\n\nPlease confirm next steps.`

    return encodeURIComponent(msg)
  }

  const handleConfirmOrder = () => {
    const url = `https://wa.me/${orderConfig.whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${generateWhatsAppMessage()}`
    window.open(url, "_blank")
    router.push("/")
  }

  /* ------------------ LOADING ------------------ */

  if (!isInitialized || !order.package) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#C6FF3A] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  /* ------------------ UI ------------------ */

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-neutral-900 p-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={handleBack}>
            {currentStep === 1 ? <X /> : <ChevronLeft />}
          </Button>
          <div className="font-semibold">{order.package.name} Plan</div>
          <div className="font-bold text-[#C6FF3A]">
            {formatPrice(calculateTotal())}
          </div>
        </div>
      </div>

      {/* Summary (shortened for clarity) */}
      <div className="p-6 max-w-md mx-auto space-y-6">
        <Card className="border-neutral-800">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between">
              <span>{order.package.name} Plan</span>
              <span>{order.package.price}</span>
            </div>

            {order.modelingAddOn && (
              <div className="flex justify-between">
                <span>3D Modeling ({order.modelingAddOn.name})</span>
                <span>+{formatPrice(order.modelingAddOn.price)}</span>
              </div>
            )}

            {order.renderPackage && (
              <div className="flex justify-between">
                <span>{order.renderPackage.name}</span>
                <span>+{formatPrice(order.renderPackage.price)}</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-[#C6FF3A] pt-4 border-t border-neutral-800">
              <span>Total</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleConfirmOrder}
          className="w-full bg-[#C6FF3A] text-black font-semibold h-12 rounded-xl"
        >
          Send Order via WhatsApp
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
