export const business = {
  name: "Corrective Cooling",
  legalName: "Corrective Cooling LLC",
  tagline: "Precision comfort, corrected.",
  phone: "+1 601 951 9492",
  phoneHref: "tel:+16019519492",
  whatsappHref: "https://wa.me/16019519492",
  email: "Correctivecooling@gmail.com",
  emailHref: "mailto:Correctivecooling@gmail.com",
  address: {
    line1: "1421 Barnett Bend Circle",
    line2: "Brandon, MS 39047",
    full: "1421 Barnett Bend Circle, Brandon, MS 39047",
  },
  facebook: "https://www.facebook.com/p/Corrective-Cooling-LLC-100075867414723/",
  serviceArea: "Brandon, MS & the surrounding area",
  mapEmbedSrc:
    "https://www.google.com/maps?q=1421+Barnett+Bend+Circle,+Brandon,+MS+39047&output=embed",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
