export const site = {
  name: "Port View Hotel",
  shortName: "Port View",
  tagline: "A quiet kind of luxury",
  description:
    "An intimate luxury retreat on the Calabar waterfront, where timeless design, warm Cross River hospitality and the calm of the river come together.",
  phone: "+234 813 741 1338",
  phoneLink: "+2348137411338",
  email: "reservations@portviewhotel.com",
  address: {
    line1: "18 Marina Road, Calabar South",
    line2: "Calabar, Cross River State 540241",
    country: "Nigeria",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Marina+Resort+Calabar+Cross+River+Nigeria&output=embed",
  checkIn: "3:00 PM",
  checkOut: "12:00 PM",
};

export const navLinks: NavLink[] = [
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Dining", href: "#experiences" },
  { label: "Spa & Wellness", href: "#amenities" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#location" },
];

export const socials: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "TripAdvisor", href: "https://tripadvisor.com" },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "The Hotel",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Awards", href: "#about" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Stay",
    links: [
      { label: "Rooms & Suites", href: "#rooms" },
      { label: "Offers & Packages", href: "#offers" },
      { label: "Gift Cards", href: "#" },
      { label: "Manage Booking", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Spa & Wellness", href: "#amenities" },
      { label: "Dining", href: "#experiences" },
      { label: "Weddings & Events", href: "#experiences" },
      { label: "Concierge", href: "#amenities" },
    ],
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80";

export const aboutImages = {
  primary:
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  secondary:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
};

export const stats = [
  { value: "72", label: "Rooms & Suites" },
  { value: "4.9", label: "Guest Rating" },
  { value: "3", label: "Restaurants & Bars" },
  { value: "2009", label: "Established" },
];
