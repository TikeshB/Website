interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  eyebrow: string
  title: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({ eyebrow, title, updated, sections }: LegalPageProps) {
  return (
    <div className="relative pt-40 pb-24 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-foreground/30" />
          {eyebrow}
        </span>
        <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">{title}</h1>
        <p className="text-sm font-mono text-muted-foreground mb-16">{updated}</p>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.heading} className="border-t border-foreground/10 pt-8">
              <h2 className="text-xl font-display mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
