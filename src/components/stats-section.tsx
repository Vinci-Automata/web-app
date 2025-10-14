const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "10k+", label: "Messages/Hour" },
  { value: "50+", label: "Integrations" },
  { value: "24/7", label: "Support Available" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-primary font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
