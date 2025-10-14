import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary relative overflow-hidden">
              <Image src='/logo-vinci-automata-v2.png' alt='VINCI Automata logo' fill/>
              {/*<span className="font-mono text-lg font-bold text-primary-foreground">VA</span>*/}
            </div>
            <span className="text-xl font-bold">VINCI Automata</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <MessageSquare className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
