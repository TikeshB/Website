import { Mail, MapPin, Building2, Clock } from "lucide-react";

const contactRows = [
  {
    icon: Mail,
    label: "Email",
    value: "sidaeivarc@gmail.com",
    href: "mailto:sidaeivarc@gmail.com",
    breakAll: true,
  },
  {
    icon: MapPin,
    label: "Registered address",
    value: "24 B Layout, Bezonbagh, Nagpur, Maharashtra, India, 440014",
  },
  {
    icon: Building2,
    label: "CIN",
    value: "U62011MH2024PTC419187",
  },
];

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
        <span className="w-8 h-px bg-foreground/30" />
        Reach us directly
      </span>

      <div className="space-y-px">
        {contactRows.map((row) => {
          const Icon = row.icon;
          const inner = (
            <>
              <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10 group-hover:border-foreground/30 group-hover:bg-foreground group-hover:text-background transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-1">
                  {row.label}
                </p>
                <p
                  className={`text-lg font-medium leading-snug ${
                    row.breakAll ? "break-all" : ""
                  }`}
                >
                  {row.value}
                </p>
              </div>
            </>
          );

          return row.href ? (
            <a
              key={row.label}
              href={row.href}
              className="group flex items-start gap-4 border border-foreground/10 p-6 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-colors"
            >
              {inner}
            </a>
          ) : (
            <div
              key={row.label}
              className="group flex items-start gap-4 border border-foreground/10 p-6 hover:border-foreground/30 transition-colors"
            >
              {inner}
            </div>
          );
        })}
      </div>

      <div className="border border-foreground/10 p-6 flex items-start gap-4 bg-foreground/[0.02]">
        <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Office hours
          </p>
          <p className="text-lg font-medium leading-snug">Monday – Friday</p>
          <p className="text-muted-foreground">9:30 AM – 6:30 PM IST</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground font-mono pt-2">
        AEIV Global Private Limited &middot; Nagpur, India
      </p>
    </div>
  );
}
