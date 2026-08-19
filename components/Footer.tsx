import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { business, navLinks } from "@/data/business";
import { ThermalDivider } from "./Illustrations";

function FacebookGlyph({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 9h2.5V6H14c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-1.8c0-.66.34-1.2 1-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-soft bg-ink-soft">
      <ThermalDivider className="h-10 w-full opacity-70" />
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-2 sm:px-8">
        <div className="grid gap-12 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight text-paper">
              Corrective<span className="text-ember">Cooling</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-dim">
              Residential heating &amp; cooling for Brandon, Mississippi — climate
              control, maintenance, repairs, and duct work, corrected right.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Corrective Cooling on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-paper-dim transition-colors hover:border-frost hover:text-frost-soft"
              >
                <FacebookGlyph size={17} />
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Corrective Cooling on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-paper-dim transition-colors hover:border-ember hover:text-ember-soft"
              >
                <MessageCircle size={17} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-paper-dim">
              <li>
                <a href={business.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                  <Phone size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-frost-soft" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="flex items-start gap-2.5 transition-colors hover:text-paper">
                  <Mail size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-frost-soft" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-frost-soft" />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border-soft py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <p>Brandon, Mississippi</p>
        </div>
      </div>
    </footer>
  );
}
