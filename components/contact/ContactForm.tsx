"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useMagnetic } from "@/lib/motion";
import { business } from "@/data/business";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const btnRef = useMagnetic<HTMLButtonElement>(0.25);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "peer w-full rounded-xl border border-border-soft bg-surface/50 px-4 py-3.5 text-paper placeholder-transparent outline-none transition-colors focus:border-frost";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative">
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClasses}
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute -top-2.5 left-3 bg-ink px-1.5 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-paper-dim peer-focus:-top-2.5 peer-focus:bg-ink peer-focus:text-xs peer-focus:text-frost-soft"
          >
            Full name
          </label>
        </div>

        <div className="relative">
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className={inputClasses}
          />
          <label
            htmlFor="phone"
            className="pointer-events-none absolute -top-2.5 left-3 bg-ink px-1.5 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-paper-dim peer-focus:-top-2.5 peer-focus:bg-ink peer-focus:text-xs peer-focus:text-frost-soft"
          >
            Phone
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={inputClasses}
        />
        <label
          htmlFor="email"
          className="pointer-events-none absolute -top-2.5 left-3 bg-ink px-1.5 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-paper-dim peer-focus:-top-2.5 peer-focus:bg-ink peer-focus:text-xs peer-focus:text-frost-soft"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's going on with your system?"
          className={`${inputClasses} resize-none`}
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute -top-2.5 left-3 bg-ink px-1.5 text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-paper-dim peer-focus:-top-2.5 peer-focus:bg-ink peer-focus:text-xs peer-focus:text-frost-soft"
        >
          What&rsquo;s going on with your system?
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          ref={btnRef}
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 font-display text-sm font-medium text-ink transition-colors hover:bg-ember-soft"
        >
          Send message
          <Send size={15} strokeWidth={2} />
        </button>
        <p className="text-xs text-muted">
          Opens your email app with the details filled in.
        </p>
      </div>
    </form>
  );
}
