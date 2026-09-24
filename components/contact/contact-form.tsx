"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Loader2,
  Check,
  HeartHandshake,
  ShieldCheck,
  Accessibility,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const MAX_MESSAGE = 600;

const productOptions = [
  { value: "blisswork", name: "Blisswork", tag: "Workplace experience", icon: HeartHandshake },
  { value: "grc", name: "GRC", tag: "Governance, risk & compliance", icon: ShieldCheck },
  { value: "wcag", name: "WCAG", tag: "Digital accessibility", icon: Accessibility },
  { value: "general", name: "Something else", tag: "A general inquiry", icon: MessageSquare },
];

const timelines = ["As soon as possible", "This quarter", "This year", "Just exploring"];

const steps = ["About you", "What you need", "Your message"];

const nextSteps = [
  { number: "01", text: "We read your note and route it to the right specialist." },
  { number: "02", text: "A member of our team replies within one business day." },
  { number: "03", text: "We set up a short call or demo around your priorities." },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  product: string;
  timeline: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  product: "",
  timeline: "",
  message: "",
  consent: false,
};

function validate(step: number, form: FormState): Errors {
  const errors: Errors = {};

  if (step === 0) {
    if (!form.name.trim()) errors.name = "Please tell us your name.";
    if (!form.email.trim()) errors.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "That email doesn't look quite right.";
  }

  if (step === 1 && !form.product) {
    errors.product = "Pick what you'd like to talk about.";
  }

  if (step === 2) {
    if (!form.message.trim()) errors.message = "A sentence or two is plenty.";
    if (!form.consent) errors.consent = "Please accept so we can respond.";
  }

  return errors;
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  autoComplete,
  textarea,
  maxLength,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  error?: string;
  autoComplete?: string;
  textarea?: boolean;
  maxLength?: number;
  hint?: ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  const shared = {
    id,
    name: id,
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    autoComplete,
    maxLength,
    className:
      "peer w-full resize-none bg-transparent pt-6 pb-2 text-lg leading-snug outline-none placeholder:text-transparent",
  };

  return (
    <div className="relative">
      {textarea ? (
        <textarea {...shared} rows={4} placeholder={label} className={cn(shared.className, "min-h-[132px]")} />
      ) : (
        <input {...shared} type={type} placeholder={label} />
      )}

      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 transition-all duration-300 ease-out",
          floated
            ? "top-0 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            : "top-6 text-base text-muted-foreground",
        )}
      >
        {label}
      </label>

      <span className="absolute bottom-0 left-0 h-px w-full bg-foreground/20" />
      <span
        className={cn(
          "absolute bottom-0 left-0 h-px bg-foreground transition-all duration-500 ease-out",
          focused ? "w-full" : "w-0",
        )}
      />

      <div className="mt-2 flex items-start justify-between gap-4 min-h-[1rem]">
        <p
          id={`${id}-error`}
          role={error ? "alert" : undefined}
          className={cn(
            "font-mono text-xs transition-all duration-300",
            error ? "text-destructive opacity-100" : "opacity-0",
          )}
        >
          {error || "\u00A0"}
        </p>
        {hint}
      </div>
    </div>
  );
}

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const isLast = step === steps.length - 1;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function goNext() {
    const found = validate(step, form);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setErrors({});
    setDirection("forward");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setErrors({});
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLast) {
      goNext();
      return;
    }

    const found = validate(step, form);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(`Thanks, ${form.name.trim().split(" ")[0] || "there"}. We'll be in touch shortly.`);
  }

  function reset() {
    setForm(initialForm);
    setErrors({});
    setStep(0);
    setDirection("forward");
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return (
      <div className="relative flex flex-col justify-center min-h-[560px] overflow-hidden border border-foreground/10 p-10 lg:p-14">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-foreground/[0.03] pointer-events-none" />

        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background mb-8">
            <Check className="h-6 w-6" />
          </div>

          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground/30" />
            Message received
          </span>

          <h3 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Thank you, {form.name.trim().split(" ")[0] || "there"}.
          </h3>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Your message has reached the AEIV Global team. Here&apos;s what happens next.
          </p>

          <div className="mt-10 space-y-5 border-t border-foreground/10 pt-8">
            {nextSteps.map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-0.5">{item.number}</span>
                <span className="text-muted-foreground leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-10 rounded-full border-foreground/20 hover:bg-foreground/5"
            onClick={reset}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      {/* Progress */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {steps[step]}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
      </div>
      <div className="flex gap-1 mb-10">
        {steps.map((label, i) => (
          <span
            key={label}
            className={cn(
              "h-px flex-1 transition-colors duration-500",
              i <= step ? "bg-foreground" : "bg-foreground/15",
            )}
          />
        ))}
      </div>

      {/* Steps */}
      <div
        key={step}
        className={cn(
          "animate-in fade-in duration-400",
          direction === "forward" ? "slide-in-from-right-6" : "slide-in-from-left-6",
        )}
      >
        {step === 0 && (
          <div className="space-y-2">
            <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-8">
              First, the basics.
            </h3>
            <FloatingField
              id="name"
              label="Full name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              autoComplete="name"
              error={errors.name}
            />
            <FloatingField
              id="email"
              label="Work email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
              error={errors.email}
            />
            <FloatingField
              id="company"
              label="Company (optional)"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              autoComplete="organization"
            />
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-8">
              What would you like to talk about?
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {productOptions.map((option) => {
                const Icon = option.icon;
                const selected = form.product === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => update("product", option.value)}
                    aria-pressed={selected}
                    className={cn(
                      "group flex flex-col items-start gap-3 border p-5 text-left transition-all duration-300",
                      selected
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/10 hover:border-foreground/40 hover:bg-foreground/[0.02] hover:-translate-y-0.5",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-colors",
                        selected ? "text-background" : "text-muted-foreground group-hover:text-foreground",
                      )}
                    />
                    <span className="font-medium">{option.name}</span>
                    <span className={cn("text-xs", selected ? "text-background/70" : "text-muted-foreground")}>
                      {option.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Timeline (optional)
              </span>
              <div className="flex flex-wrap gap-2 mt-4">
                {timelines.map((option) => {
                  const selected = form.timeline === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("timeline", selected ? "" : option)}
                      aria-pressed={selected}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                        selected
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/15 text-foreground/80 hover:border-foreground/40 hover:bg-foreground/[0.03]",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <p
              role={errors.product ? "alert" : undefined}
              className={cn(
                "mt-6 font-mono text-xs transition-opacity duration-300",
                errors.product ? "text-destructive opacity-100" : "opacity-0",
              )}
            >
              {errors.product || "\u00A0"}
            </p>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-8">
              Tell us a little more.
            </h3>

            <FloatingField
              id="message"
              label="Your message"
              textarea
              maxLength={MAX_MESSAGE}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              error={errors.message}
              hint={
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {form.message.length}/{MAX_MESSAGE}
                </span>
              }
            />

            <button
              type="button"
              onClick={() => update("consent", !form.consent)}
              aria-pressed={form.consent}
              className="mt-4 flex items-start gap-3 text-left group"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-300",
                  form.consent
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/30 group-hover:border-foreground",
                )}
              >
                {form.consent && <Check className="h-3.5 w-3.5" />}
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">
                I agree that AEIV Global may use these details to respond to my inquiry.
              </span>
            </button>
            <p
              role={errors.consent ? "alert" : undefined}
              className={cn(
                "mt-2 ml-8 font-mono text-xs transition-opacity duration-300",
                errors.consent ? "text-destructive opacity-100" : "opacity-0",
              )}
            >
              {errors.consent || "\u00A0"}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground max-w-[16rem]">
            Prefer email?{" "}
            <a
              href="mailto:sidaeivarc@gmail.com"
              className="text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
            >
              sidaeivarc@gmail.com
            </a>
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group shrink-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : isLast ? (
            <>
              Send message
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
