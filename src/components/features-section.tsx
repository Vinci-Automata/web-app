import { Card } from '@/components/ui/card';
import { Bot, Workflow, MessageCircle, Zap, Brain, Clock } from 'lucide-react';
import { getT } from '@/app/i18n';

const features = [
  { icon: Bot },
  { icon: Workflow },
  { icon: MessageCircle },
  { icon: Zap },
  { icon: Brain },
  { icon: Clock },
];

export async function FeaturesSection() {
  const { t } = await getT('features-section');

  return (
    <section id='features' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center space-y-4 mb-16'>
          {/* 2. Replaced hardcoded strings with calls to the t function. */}
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {t('heading.title')}
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            {t('heading.description')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10'
            >
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                  <feature.icon className='h-6 w-6 text-primary' />
                </div>
                <div className='space-y-2'>
                  <h3 className='font-semibold text-lg'>
                    {t(`features.${index}.title`)}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {t(`features.${index}.description`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
