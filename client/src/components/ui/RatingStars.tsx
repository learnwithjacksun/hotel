import { Star } from "lucide-react";
import clsx from "clsx";

interface RatingStarsProps {
  rating: number;
  size?: number;
  className?: string;
}

const RatingStars = ({ rating, size = 14, className }: RatingStarsProps) => {
  return (
    <div className={clsx("flex gap-0.5 text-accent", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} fill={i < rating ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </div>
  );
};

export default RatingStars;
