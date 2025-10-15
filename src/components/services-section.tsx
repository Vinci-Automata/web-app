import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { getT } from '@/app/i18n'

// 1. Define the structure of your services. This array is now free of text content.
// It helps the component know how many service cards and features to render.
const servicesConfig = [
  { featureCount: 4 },
  { featureCount: 4 },
  { featureCount: 4 },
]

export async function ServicesSection() {
  const { t } = await getT('services-section')

  return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {t('heading.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('heading.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesConfig.map((service, serviceIndex) => (
                <Card
                    key={serviceIndex}
                    className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="space-y-6 flex-grow">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">
                        {t(`services.${serviceIndex}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`services.${serviceIndex}.description`)}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {/* 5. Create a loop for the features based on the configured count. */}
                      {Array.from({ length: service.featureCount }).map(
                          (_, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm">
                          {t(
                              `services.${serviceIndex}.features.${featureIndex}`,
                          )}
                        </span>
                              </li>
                          ),
                      )}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button
                        variant="outline"
                        className="w-full border-border hover:bg-muted bg-transparent"
                    >
                      {t('cta')}
                    </Button>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}