import { Mail, MapPin, Building2 } from "lucide-react";

export function ContactDetails() {
  return (
    <div className="space-y-10">
      <div>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-foreground/30" />
          Reach us directly
        </span>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:sidaeivarc@gmail.com"
                className="text-lg font-medium hover:underline break-all"
              >
                sidaeivarc@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-1">
                Registered address
              </p>
              <p className="text-lg font-medium leading-snug">
                24 B Layout, Bezonbagh, Nagpur,
                <br />
                Nagpur, Maharashtra, India, 440014
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-foreground/10">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-1">CIN</p>
              <p className="text-lg font-medium">U62011MH2024PTC419187</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 border border-foreground/10 bg-foreground/[0.02]">
        <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-3">Office hours</p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Monday – Friday
          <br />
          9:30 AM – 6:30 PM IST
        </p>
      </div>
    </div>
  );
}
