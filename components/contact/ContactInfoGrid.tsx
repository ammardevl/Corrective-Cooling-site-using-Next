import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { business } from "@/data/business";

const cards = [
  {
    icon: Phone,
    label: "Call",
    value: business.phone,
    href: business.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us directly",
    href: business.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: business.email,
    href: business.emailHref,
  },
  {
    icon: MapPin,
    label: "Address",
    value: business.address.full,
    href: business.mapEmbedSrc.replace("&output=embed", ""),
    external: true,
  },
];

export default function ContactInfoGrid() {
  return (
    <Reveal as="div" staggerMs={90} className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <a
          key={card.label}
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          data-reveal
          className="group flex flex-col gap-4 rounded-2xl border border-border-soft bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-frost"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-frost-soft transition-colors group-hover:border-frost group-hover:bg-frost/10">
            <card.icon size={18} strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-muted">
              {card.label}
            </p>
            <p className="mt-1.5 text-sm text-paper">{card.value}</p>
          </div>
        </a>
      ))}
    </Reveal>
  );
}
