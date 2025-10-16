import Image from 'next/image'
import { getT } from '@/app/i18n'
import Link from 'next/link'

const footerColumns = [
  {
    key: 'product',
    links: [
      { href: '#features' },
      { href: '#pricing' },
      { href: '/docs' },
      { href: '/api' },
    ],
  },
  {
    key: 'company',
    links: [
      { href: '/about' },
      { href: '/blog' },
      { href: '/careers' },
      { href: '/contact' },
    ],
  },
  {
    key: 'legal',
    links: [{ href: '/privacy' }, { href: '/terms' }, { href: '/security' }],
  },
]

export async function Footer() {
  const { t } = await getT('footer')

  return (
      <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary relative overflow-hidden">
                  <Image
                      src="/assets/images/logo-vinci-automata-v2.png"
                      alt={t('brand.name') + ' logo'}
                      fill
                  />
                </div>
                <span className="text-xl font-bold">{t('brand.name')}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('brand.tagline')}
              </p>
            </div>

            {footerColumns.map((column) => (
                <div key={column.key}>
                  <h3 className="font-semibold mb-4">
                    {t(`columns.${column.key}.title`)}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {column.links.map((link, index) => (
                        <li key={index}>
                          <Link
                              href={link.href}
                              className="hover:text-foreground transition-colors"
                          >
                            {t(`columns.${column.key}.links.${index}`)}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
  )
}