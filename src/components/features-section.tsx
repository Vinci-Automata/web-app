import { Card } from "@/components/ui/card"
import { Bot, Workflow, MessageCircle, Zap, Brain, Clock } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Agents",
    description:
      "Intelligent agents that understand context, learn from interactions, and provide human-like responses to your customers.",
  },
  {
    icon: Workflow,
    title: "n8n Workflows",
    description:
      "Build complex automation workflows with visual programming. Connect hundreds of apps and services effortlessly.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Reach customers where they are. Seamless WhatsApp integration for instant communication and support.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of requests simultaneously with sub-second response times. Scale without limits.",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "Our AI continuously learns from interactions, improving accuracy and efficiency over time.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry. Your AI agents work around the clock, every day of the year.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Cutting-Edge Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade automation tools designed for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
