import {getT} from "@/app/i18n";

const stats = [
    {value: "99.9%",},
    {value: "10k+",},
    {value: "50+",},
    {value: "24/7",},
]

export async function StatsSection() {

    const {t} = await getT('stats-section')

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from({length: 4}).map((_, index) => (
                        <div key={index} className="text-center space-y-2">
                            <div
                                className="text-4xl sm:text-5xl font-bold text-primary font-mono">{stats[index].value}</div>
                            <div className="text-sm text-muted-foreground">{t(`stats.${index}.label`)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
