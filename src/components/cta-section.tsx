import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {getT} from "@/app/i18n";

export async function CTASection() {
  const {t} = await getT('cta-section')

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-12 border border-border">
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-border hover:bg-muted bg-transparent"
              >
                {t('ctaSecondary')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
