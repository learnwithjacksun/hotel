import { BedDouble, Maximize2, Users, Eye } from "lucide-react";
import { formatCurrency } from "@/helpers/formatCurrency";

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <article className="group flex flex-col">
      <a href="#booking" className="block overflow-hidden rounded-xl" aria-label={`Book ${room.name}`}>
        <img
          src={room.image}
          alt={room.name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </a>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl">{room.name}</h3>
        </div>
        <p className="mt-2 text-sm text-muted">{room.description}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
          <li className="flex items-center gap-1.5">
            <Maximize2 size={13} strokeWidth={1.5} /> {room.size} m²
          </li>
          <li className="flex items-center gap-1.5">
            <Users size={13} strokeWidth={1.5} /> Up to {room.guests}
          </li>
          <li className="flex items-center gap-1.5">
            <BedDouble size={13} strokeWidth={1.5} /> {room.bed}
          </li>
          <li className="flex items-center gap-1.5">
            <Eye size={13} strokeWidth={1.5} /> {room.view}
          </li>
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <p className="text-xs text-muted">
            From{" "}
            <span className="font-serif text-2xl text-ink">{formatCurrency(room.price)}</span>{" "}
            / night
          </p>
          <a href="#booking" className="link-underline text-xs font-medium text-ink">
            Book now
          </a>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
