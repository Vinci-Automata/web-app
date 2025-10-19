import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getT } from '@/app/i18n';

export async function HeroSection() {
  const { t } = await getT('hero-section');

  return (
    <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto max-w-6xl'>
        <div className='text-center space-y-8'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border'>
            <Sparkles className='h-4 w-4 text-primary' />
            <span className='text-sm font-mono text-muted-foreground'>
              {t('poweredBy')}
            </span>
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance'>
            {t('title')}{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary'>
              {t('highlightedTitle')}
            </span>
          </h1>

          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed'>
            {t('description')}
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8'
            >
              {t('ctaPrimary')}
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-base px-8 border-border hover:bg-muted bg-transparent'
            >
              {t('ctaSecondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
