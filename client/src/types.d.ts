interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  type: string;
  label?: string;
  error?: string;
}
interface InputWithoutIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  error?: string;
}

interface ButtonWithLoaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  initialText: string;
  loadingText: string;
}

interface SelectWithIconProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon: React.ReactNode;
  label?: string;
  error?: string;
  defaultValue?: string;
  options: {
    label: string;
    value: string;
  }[];
}

interface SelectWithoutIconProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  defaultValue?: string;
  options: {
    label: string;
    value: string;
  }[];
}

/* ------------------------------------------------------------------ */
/* Hotel domain                                                         */
/* ------------------------------------------------------------------ */
type IconType = import("lucide-react").LucideIcon;

interface NavLink {
  label: string;
  href: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  size: number; // m²
  guests: number;
  bed: string;
  view: string;
  price: number; // per night, NGN
}

interface Amenity {
  title: string;
  description: string;
  icon: IconType;
}

interface Experience {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  cta: NavLink;
}

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  price: number;
  perks: string[];
}

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  source: string;
  rating: number;
}

interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}

interface Attraction {
  name: string;
  distance: string;
}
