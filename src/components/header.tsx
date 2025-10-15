import {Button} from "@/components/ui/button"
import {MessageSquare} from "lucide-react"
import Image from "next/image";
import {getT} from "@/app/i18n";

export async function Header() {

  const {t} = await getT('header')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary relative overflow-hidden">
              <Image src='/logo-vinci-automata-v2.png' alt={t('logoAlt')} fill/>
            </div>
            <span className="text-xl font-bold">{t('brandName')}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.features')}
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.services')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <MessageSquare className="mr-2 h-4 w-4" />
            {t('cta')}
          </Button>
        </div>
      </div>
    </header>
  )
}
