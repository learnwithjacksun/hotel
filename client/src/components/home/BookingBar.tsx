import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CalendarDays, Users, BedDouble } from "lucide-react";
import clsx from "clsx";
import { bookingSchema, type BookingSchema } from "@/schemas";

const today = () => new Date().toISOString().split("T")[0];

interface FieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

const Field = ({ label, icon, error, children }: FieldProps) => (
  <label className="group relative flex flex-1 flex-col gap-1 px-5 py-4 lg:py-3">
    <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
      {icon}
      {label}
    </span>
    {children}
    {error && <span className="text-xs text-red-600">{error}</span>}
  </label>
);

const inputClass =
  "w-full bg-transparent text-[15px] text-ink outline-none [color-scheme:light] cursor-pointer";

const BookingBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { checkIn: "", checkOut: "", guests: "2", rooms: "1" },
  });

  const checkIn = watch("checkIn");

  const onSubmit = (data: BookingSchema) => {
    toast.success("Checking availability…", {
      description: `${data.checkIn} → ${data.checkOut} · ${data.guests} guest(s), ${data.rooms} room(s)`,
    });
  };

  return (
    <form
      id="booking"
      onSubmit={handleSubmit(onSubmit)}
      className="scroll-mt-28 grid rounded-2xl border border-line bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] lg:flex lg:items-stretch lg:rounded-full lg:p-2"
      noValidate
    >
      <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:flex lg:flex-1 lg:divide-x">
        <Field label="Check-in" icon={<CalendarDays size={12} />} error={errors.checkIn?.message}>
          <input type="date" min={today()} className={inputClass} {...register("checkIn")} />
        </Field>
        <Field label="Check-out" icon={<CalendarDays size={12} />} error={errors.checkOut?.message}>
          <input
            type="date"
            min={checkIn || today()}
            className={inputClass}
            {...register("checkOut")}
          />
        </Field>
        <Field label="Guests" icon={<Users size={12} />}>
          <select className={clsx(inputClass, "appearance-none")} {...register("guests")}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Adult" : "Adults"}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Rooms" icon={<BedDouble size={12} />}>
          <select className={clsx(inputClass, "appearance-none")} {...register("rooms")}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Room" : "Rooms"}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="border-t border-line p-3 lg:border-0 lg:p-0">
        <button type="submit" className="btn btn-primary h-14 w-full lg:h-full lg:px-10">
          Check availability
        </button>
      </div>
    </form>
  );
};

export default BookingBar;
