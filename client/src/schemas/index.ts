import { z } from "zod";

export const bookingSchema = z
  .object({
    checkIn: z.string().min(1, "Select a check-in date"),
    checkOut: z.string().min(1, "Select a check-out date"),
    guests: z.string().min(1),
    rooms: z.string().min(1),
  })
  .refine((data) => !data.checkIn || !data.checkOut || data.checkOut > data.checkIn, {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

export type BookingSchema = z.infer<typeof bookingSchema>;

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address"),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
