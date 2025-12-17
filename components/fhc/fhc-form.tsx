"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight, ArrowLeft, CheckCircle2, User, Users, Wallet, Target,
  MessageCircle, Loader2, Shield, GraduationCap, Home, HeartPulse,
  Coins, Baby
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const steps = [
  { id: 1, title: "Patient Profile", icon: User, desc: "Basic Information" },
  { id: 2, title: "Family Vitals", icon: Users, desc: "Dependents & Care" },
  { id: 3, title: "Financial Vitals", icon: Wallet, desc: "Cash Flow Health" },
  { id: 4, title: "Treatment Goals", icon: Target, desc: "Future Objectives" },
]

const ageRanges = ["25-30", "31-35", "36-40", "41-45", "46-50", "51-55", "55+"]
const familySizes = ["1 (Single)", "2 (Couple)", "3-4 (Small Family)", "5+ (Joint Family)"]
const incomeRanges = ["Below 30K", "30K - 50K", "50K - 75K", "75K - 1L", "1L - 1.5L", "1.5L - 2L", "Above 2L"]
const surplusRanges = ["Below 5K", "5K - 10K", "10K - 20K", "20K - 30K", "30K - 50K", "Above 50K"]

const existingCovers = [
  { id: "Term Insurance", icon: Shield },
  { id: "Health Insurance", icon: HeartPulse },
  { id: "SIP/Mutual Funds", icon: Coins },
  { id: "LIC/Endowment", icon: Shield },
  { id: "None", icon: CheckCircle2 }
]

const financialGoals = [
  { id: "Child Education", icon: GraduationCap },
  { id: "Child Marriage", icon: Baby },
  { id: "Home Purchase", icon: Home },
  { id: "Retirement", icon: HeartPulse },
  { id: "Emergency Fund", icon: Shield },
  { id: "Wealth Creation", icon: Coins },
]

export function FHCForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    age: "",
    familySize: "",
    incomeRange: "",
    existingCovers: [] as string[],
    financialGoals: [] as string[],
    monthlySurplus: "",
    whatsappConsent: false,
  })

  // Scroll to top on step change for mobile
  useEffect(() => {
    const formElement = document.getElementById('fhc-form-container')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [currentStep])

  const updateFormData = (field: string, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: "existingCovers" | "financialGoals", item: string) => {
    const currentArray = formData[field]
    let newArray;

    if (item === "None" && field === "existingCovers") {
      // If None is selected, clear others; if None is deselected, just remove it
      newArray = currentArray.includes("None") ? [] : ["None"];
    } else {
      // If other items selected, remove 'None' if it exists
      const arrayWithoutNone = currentArray.filter(i => i !== "None");
      newArray = arrayWithoutNone.includes(item)
        ? arrayWithoutNone.filter((i) => i !== item)
        : [...arrayWithoutNone, item];
    }

    updateFormData(field, newArray)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate API/Processing delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Confetti / Success Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />

        <div className="max-w-xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 text-center shadow-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent/20">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Diagnosis Initiated!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Thank you, <span className="text-accent font-semibold">{formData.name}</span>. Your Chart has been successfully created. Dr. Finance is reviewing your vitals.
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/5">
              <p className="text-sm text-primary-foreground/60 mb-2">Next Step:</p>
              <p className="text-white font-medium">
                We will send your preliminary report on WhatsApp shortly. Please reply with a time for your full consultation.
              </p>
            </div>

            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300">
              <a href="https://wa.me/9779847668986" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Open WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background relative" id="fhc-form-container">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Progress Sidebar (Desktop) / Topbar (Mobile) */}
          <div className="lg:col-span-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sticky top-24">
              <h3 className="font-heading font-bold text-lg mb-6 hidden lg:block">Diagnosis Progress</h3>

              <div className="flex lg:flex-col justify-between lg:justify-start lg:space-y-8 relative">
                {/* Connecting Line (Mobile Horizontal / Desktop Vertical) */}
                <div className="absolute top-[1.125rem] left-0 w-full h-0.5 bg-border -z-10 lg:hidden" />
                <div className="absolute left-[1.125rem] top-2 h-[calc(100%-2rem)] w-0.5 bg-border -z-10 hidden lg:block" />

                {steps.map((step) => {
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id

                  return (
                    <div key={step.id} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 transition-all duration-300">
                      <div className={`
                                w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 z-10
                                ${isActive ? "bg-accent border-accent text-accent-foreground scale-110 shadow-lg shadow-accent/20" :
                          isCompleted ? "bg-accent/20 border-accent text-accent" : "bg-card border-border text-muted-foreground"}
                           `}>
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <step.icon className="w-4 h-4" />}
                      </div>
                      <div className="hidden lg:block pt-1">
                        <p className={`text-sm font-bold ${isActive || isCompleted ? "text-foreground" : "text-muted-foreground"}`}>{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit}>
              <div className="bg-card border border-border shadow-2xl shadow-black/5 rounded-3xl overflow-hidden min-h-[500px] flex flex-col">

                {/* Header */}
                <div className="bg-primary/5 px-8 py-6 border-b border-border">
                  <h2 className="font-heading font-bold text-2xl text-foreground flex items-center gap-3">
                    {steps[currentStep - 1].icon && (
                      <div className="p-2 bg-accent/10 rounded-lg">
                        {(() => {
                          const Icon = steps[currentStep - 1].icon;
                          return <Icon className="w-6 h-6 text-accent" />;
                        })()}
                      </div>
                    )}
                    {steps[currentStep - 1].title}
                  </h2>
                  <p className="text-muted-foreground mt-1 ml-11">{steps[currentStep - 1].desc}</p>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 flex-grow">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => updateFormData("name", e.target.value)}
                              placeholder="e.g. Ram Kumar"
                              className="h-12 bg-background border-input focus:border-accent hover:border-accent/50 transition-colors"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-base font-medium">City / Location</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => updateFormData("city", e.target.value)}
                              placeholder="e.g. Pokhara-10"
                              className="h-12 bg-background border-input focus:border-accent hover:border-accent/50 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-base font-medium">Your Age Group</Label>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {ageRanges.map((age) => (
                              <button
                                key={age}
                                type="button"
                                onClick={() => updateFormData("age", age)}
                                className={`
                                py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 border
                                ${formData.age === age
                                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20 scale-[1.02]"
                                    : "bg-secondary/50 text-foreground border-transparent hover:bg-secondary hover:border-border"}
                              `}
                              >
                                {age}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-3">
                          <Label className="text-base font-medium">Dependents / Family Size</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {familySizes.map((size) => (
                              <button
                                key={size}
                                type="button"
                                onClick={() => updateFormData("familySize", size)}
                                className={`
                                p-4 rounded-xl text-left transition-all duration-200 border flex items-center gap-3
                                ${formData.familySize === size
                                    ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                                    : "bg-secondary/50 text-foreground border-transparent hover:bg-secondary hover:border-border"}
                              `}
                              >
                                <div className={`p-2 rounded-full ${formData.familySize === size ? "bg-white/20" : "bg-background/80"}`}>
                                  <Users className="w-5 h-5" />
                                </div>
                                <span className="font-medium">{size}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-base font-medium">Existing Protection (Select Multiple)</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {existingCovers.map((cover) => (
                              <button
                                key={cover.id}
                                type="button"
                                onClick={() => toggleArrayItem("existingCovers", cover.id)}
                                className={`
                                p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group
                                ${formData.existingCovers.includes(cover.id)
                                    ? "bg-accent/10 border-accent text-accent shadow-sm"
                                    : "bg-secondary/30 text-foreground border-transparent hover:bg-secondary/80 hover:border-border"}
                              `}
                              >
                                <div className="flex items-center gap-3">
                                  <cover.icon className={`w-5 h-5 ${formData.existingCovers.includes(cover.id) ? "text-accent" : "text-muted-foreground group-hover:text-foreground"}`} />
                                  <span className="font-medium">{cover.id}</span>
                                </div>
                                {formData.existingCovers.includes(cover.id) && <CheckCircle2 className="w-5 h-5 text-accent" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-3">
                          <Label className="text-base font-medium">Monthly Income (NPR)</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {incomeRanges.map((range) => (
                              <button
                                key={range}
                                type="button"
                                onClick={() => updateFormData("incomeRange", range)}
                                className={`
                                py-4 px-3 rounded-xl text-sm font-medium transition-all duration-200 border
                                ${formData.incomeRange === range
                                    ? "bg-accent/10 text-accent border-accent"
                                    : "bg-secondary/50 text-foreground border-transparent hover:bg-secondary hover:border-border"}
                              `}
                              >
                                {range}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl">
                          <Label className="text-base font-medium mb-4 block">Investible Surplus (Monthly)</Label>
                          <p className="text-sm text-muted-foreground mb-4">How much can you comfortably set aside for your goals?</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {surplusRanges.map((range) => (
                              <button
                                key={range}
                                type="button"
                                onClick={() => updateFormData("monthlySurplus", range)}
                                className={`
                                    py-3 px-3 rounded-lg text-sm font-medium transition-all duration-200 border
                                    ${formData.monthlySurplus === range
                                    ? "bg-accent text-accent-foreground border-accent shadow-md"
                                    : "bg-background text-foreground border-border hover:border-accent/50"}
                                `}
                              >
                                {range}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <Label className="text-base font-medium">Primary Treatment Goals (Select Top 3)</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {financialGoals.map((goal) => (
                              <button
                                key={goal.id}
                                type="button"
                                onClick={() => toggleArrayItem("financialGoals", goal.id)}
                                className={`
                                relative p-5 rounded-xl text-left transition-all duration-200 border overflow-hidden group
                                ${formData.financialGoals.includes(goal.id)
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                                    : "bg-secondary/30 text-foreground border-transparent hover:bg-secondary/50 hover:border-border"}
                              `}
                              >
                                <div className="flex items-start justify-between relative z-10">
                                  <div className="space-y-1">
                                    <span className="font-bold block">{goal.id}</span>
                                    <span className="text-xs opacity-70 block">Long term protection</span>
                                  </div>
                                  <div className={`p-2 rounded-full ${formData.financialGoals.includes(goal.id) ? "bg-white/20" : "bg-background/50"}`}>
                                    <goal.icon className="w-5 h-5" />
                                  </div>
                                </div>
                                {/* Selection Indicator */}
                                {formData.financialGoals.includes(goal.id) && (
                                  <div className="absolute bottom-0 right-0 p-2">
                                    <CheckCircle2 className="w-12 h-12 text-white/5" />
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-border">
                          <div className="bg-secondary/30 p-4 rounded-xl flex items-start space-x-3">
                            <Checkbox
                              id="whatsapp-consent"
                              checked={formData.whatsappConsent}
                              onCheckedChange={(checked) => updateFormData("whatsappConsent", checked as boolean)}
                              className="mt-1"
                            />
                            <div className="grid gap-1.5 leading-snug">
                              <Label htmlFor="whatsapp-consent" className="text-sm font-semibold cursor-pointer">
                                Digital Consent
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                I authorize NavaGanga to generate my Financial Health Report and discuss it via WhatsApp. I understand this is 100% private.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer / Navigation */}
                <div className="bg-secondary/20 p-6 border-t border-border flex justify-between items-center">
                  {currentStep > 1 ? (
                    <Button type="button" variant="ghost" onClick={prevStep} className="gap-2 h-11 text-muted-foreground hover:text-foreground">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-xl shadow-lg shadow-primary/20"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.whatsappConsent || isProcessing}
                      className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 rounded-xl shadow-lg shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Diagnosing...
                        </>
                      ) : (
                        <>
                          Submit Vitals
                          <CheckCircle2 className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
