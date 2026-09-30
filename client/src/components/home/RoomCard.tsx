import { BedDouble, Maximize2, Users, Eye } from "lucide-react";
import { formatCurrency } from "@/helpers/formatCurrency";

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <article className="group flex h-full flex-col">
      <a href="#booking" className="block overflow-hidden rounded-lg sm:rounded-xl" aria-label={`Book ${room.name}`}>
        <img
          src={room.image}
          alt={room.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:aspect-[4/3]"
          loading="lazy"
        />
      </a>

      <div className="flex flex-1 flex-col pt-3 sm:pt-5">
        <h3 className="text-lg sm:text-2xl">{room.name}</h3>
        <p className="mt-2 hidden text-sm text-muted sm:block">{room.description}</p>

        <ul className="mb-4 mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-muted sm:mt-4 sm:gap-x-4 sm:gap-y-2 sm:text-xs">
          <li className="flex items-center gap-1.5">
            <Maximize2 size={13} strokeWidth={1.5} /> {room.size} m²
          </li>
          <li className="flex items-center gap-1.5">
            <Users size={13} strokeWidth={1.5} /> Up to {room.guests}
          </li>
          {/* Extra details only where there's room for them */}
          <li className="hidden items-center gap-1.5 sm:flex">
            <BedDouble size={13} strokeWidth={1.5} /> {room.bed}
          </li>
          <li className="hidden items-center gap-1.5 sm:flex">
            <Eye size={13} strokeWidth={1.5} /> {room.view}
          </li>
        </ul>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-t border-line pt-3 sm:pt-4">
          <p className="text-[11px] text-muted sm:text-xs">
            <span className="block sm:inline">From </span>
            <span className="font-serif text-lg text-ink sm:text-2xl">{formatCurrency(room.price)}</span>
            <span> / night</span>
          </p>
          <a href="#booking" className="link-underline text-[11px] font-medium text-ink sm:text-xs">
            Book now
          </a>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
