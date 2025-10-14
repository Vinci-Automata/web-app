import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const services = [
  {
    title: "Customer Support Automation",
    description:
      "AI agents that handle customer inquiries, resolve issues, and escalate complex cases to human agents.",
    features: ["Multi-language support", "Sentiment analysis", "Ticket management", "Knowledge base integration"],
  },
  {
    title: "Sales & Lead Generation",
    description:
      "Qualify leads, schedule meetings, and nurture prospects automatically through intelligent conversations.",
    features: ["Lead qualification", "Appointment scheduling", "CRM integration", "Follow-up automation"],
  },
  {
    title: "Business Process Automation",
    description: "Streamline operations with custom workflows that connect your tools and automate repetitive tasks.",
    features: ["Data synchronization", "Report generation", "Notification systems", "Custom integrations"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored automation solutions for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full border-border hover:bg-muted bg-transparent">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
