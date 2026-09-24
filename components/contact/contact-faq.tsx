"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "We aim to respond to every inquiry within one business day. Messages about active support issues are prioritized.",
  },
  {
    q: "Can I request a product demo?",
    a: "Yes. Mention the product you're interested in — Blisswork, GRC, or WCAG — and we'll arrange a focused walkthrough with the team that builds it.",
  },
  {
    q: "Do you support existing customers here?",
    a: "This form works for both new inquiries and current customers. For anything urgent, email sidaeivarc@gmail.com directly and mark it as a support request.",
  },
  {
    q: "Where is AEIV Global located?",
    a: "AEIV Global Private Limited is registered in Nagpur, Maharashtra, India, and works with organizations across geographies.",
  },
  {
    q: "How do I report an accessibility or security issue?",
    a: "Send the details through the form or by email. Accessibility reports help us improve WCAG, and security matters are routed to the team immediately.",
  },
];

export function ContactFaq() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Common questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight leading-[1.05]">
              Before you
              <br />
              write to us.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              Answers to the questions we hear most often. If yours isn&apos;t here, the form is
              the fastest way to reach the team.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-foreground/10">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-foreground/10">
                  <AccordionTrigger className="py-6 text-lg lg:text-xl font-display hover:no-underline hover:text-foreground gap-6">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-left">{faq.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pl-9 pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
