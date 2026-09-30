import {
  BellRing,
  Car,
  Dumbbell,
  Flower2,
  Martini,
  PawPrint,
  Plane,
  Presentation,
  Shirt,
  Smile,
  UtensilsCrossed,
  Waves,
  Wifi,
  ConciergeBell,
} from "lucide-react";

export const amenities: Amenity[] = [
  {
    title: "24/7 Concierge",
    description: "Reservations, tickets and local secrets, any hour.",
    icon: ConciergeBell,
  },
  {
    title: "Spa & Wellness",
    description: "Signature treatments, steam room and relaxation lounge.",
    icon: Flower2,
  },
  {
    title: "Infinity Pool",
    description: "Riverside infinity pool with private cabanas.",
    icon: Waves,
  },
  {
    title: "Fine Dining",
    description: "Nigerian and continental menus from our award-winning chef.",
    icon: UtensilsCrossed,
  },
  {
    title: "Rooftop Bar",
    description: "Craft cocktails and live music at sunset.",
    icon: Martini,
  },
  {
    title: "Fitness Centre",
    description: "Technogym equipment and personal trainers.",
    icon: Dumbbell,
  },
  {
    title: "Airport Transfer",
    description: "Private chauffeured arrivals and departures.",
    icon: Plane,
  },
  {
    title: "Valet Parking",
    description: "Secure on-site parking with 24/7 security.",
    icon: Car,
  },
  {
    title: "In-Room Dining",
    description: "A full menu delivered to your suite, day or night.",
    icon: BellRing,
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Complimentary fibre connection throughout.",
    icon: Wifi,
  },
  {
    title: "Events & Meetings",
    description: "Elegant spaces for weddings and gatherings.",
    icon: Presentation,
  },
  {
    title: "Kids' Club",
    description: "Supervised activities for little guests.",
    icon: Smile,
  },
  {
    title: "Laundry & Pressing",
    description: "Same-day laundry, dry cleaning and pressing.",
    icon: Shirt,
  },
  {
    title: "Pet Friendly",
    description: "Welcome amenities for four-legged companions.",
    icon: PawPrint,
  },
];
