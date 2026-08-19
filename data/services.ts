export type Service = {
  slug: string;
  icon: "thermometer" | "wind" | "wrench" | "duct";
  name: string;
  short: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "residential-climate-control",
    icon: "thermometer",
    name: "Residential Climate Control",
    short: "Whole-home heating & cooling, balanced room to room.",
    description:
      "We look at your home as one connected system — airflow, insulation, ductwork, and equipment — so every room lands at the temperature you actually set.",
    points: [
      "Full-home comfort assessment",
      "Heating & cooling system tuning",
      "Room-by-room airflow balancing",
      "Thermostat setup & guidance",
    ],
  },
  {
    slug: "air-conditioning-maintenance",
    icon: "wind",
    name: "Air Conditioning Maintenance",
    short: "Seasonal tune-ups that keep small issues small.",
    description:
      "Routine maintenance catches wear before it becomes a breakdown. We clean, inspect, and calibrate your AC system so it runs efficiently through Mississippi summers.",
    points: [
      "Coil & filter cleaning",
      "Refrigerant level check",
      "Electrical & component inspection",
      "Performance & airflow testing",
    ],
  },
  {
    slug: "system-repairs",
    icon: "wrench",
    name: "System Repairs",
    short: "Straight diagnostics, honest fixes.",
    description:
      "No cooling, weak airflow, strange noises, or short-cycling — we diagnose the root cause first and walk you through the fix before any work begins.",
    points: [
      "Diagnostic troubleshooting",
      "Component & part replacement",
      "Emergency repair calls",
      "Clear, upfront explanations",
    ],
  },
  {
    slug: "air-duct-services",
    icon: "duct",
    name: "Air Duct Services",
    short: "Cleaner air, fewer leaks, better airflow.",
    description:
      "Leaky or dirty ductwork quietly drains efficiency. We inspect, seal, and clean your duct system so conditioned air actually reaches your living space.",
    points: [
      "Duct inspection & leak testing",
      "Sealing & insulation repair",
      "Duct cleaning",
      "Airflow & vent adjustments",
    ],
  },
];
