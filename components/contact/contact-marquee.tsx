const items = [
  "Contact AEIV Global",
  "sidaeivarc@gmail.com",
  "Nagpur · Maharashtra · India",
  "Response within one business day",
  "Blisswork",
  "GRC",
  "WCAG",
];

export function ContactMarquee() {
  const row = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-b border-foreground/10 py-5">
      <div className="flex w-max marquee">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-foreground/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
