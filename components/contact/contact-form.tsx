"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [product, setProduct] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(`Thanks, ${name.split(" ")[0]}. We'll be in touch shortly.`);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-start justify-center min-h-[400px] border border-foreground/10 p-10 lg:p-14">
        <CheckCircle2 className="w-12 h-12 mb-6" />
        <h3 className="text-3xl font-display mb-3">Message sent.</h3>
        <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
          Thank you for reaching out to AEIV Global Private Limited. Our team will get back to
          you at sidaeivarc@gmail.com&apos;s reply address within one business day.
        </p>
        <Button
          variant="outline"
          className="rounded-full border-foreground/20 hover:bg-foreground/5"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-2">
        <span className="w-8 h-px bg-foreground/30" />
        Send a message
      </span>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="h-12"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company name" className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product">Interested in</Label>
          <Select value={product} onValueChange={setProduct} name="product">
            <SelectTrigger id="product" className="h-12">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blisswork">Blisswork</SelectItem>
              <SelectItem value="grc">GRC</SelectItem>
              <SelectItem value="wcag">WCAG</SelectItem>
              <SelectItem value="general">General inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us a bit about your team and what you're looking for..."
          className="min-h-[160px] resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
}
