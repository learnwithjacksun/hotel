import { ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/helpers/formatCurrency";

const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <a
      href="#booking"
      className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl text-white"
    >
      <img
        src={offer.image}
        alt={offer.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
        {offer.badge}
      </span>
      <span className="center absolute right-5 top-5 h-10 w-10 rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-ink">
        <ArrowUpRight size={18} />
      </span>

      <div className="relative space-y-3 p-6 md:p-8">
        <h3 className="text-3xl text-white md:text-4xl">{offer.title}</h3>
        <p className="text-sm text-white/80">{offer.description}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {offer.perks.map((perk) => (
            <li key={perk} className="rounded-full border border-white/25 px-3 py-1 text-[11px] text-white/85">
              {perk}
            </li>
          ))}
        </ul>
        <p className="pt-2 text-xs text-white/70">
          From <span className="font-serif text-2xl text-white">{formatCurrency(offer.price)}</span> / night
        </p>
      </div>
    </a>
  );
};

export default OfferCard;
