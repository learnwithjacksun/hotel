import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Container, Reveal } from "@/components/ui";
import { newsletterSchema, type NewsletterSchema } from "@/schemas";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterSchema>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = ({ email }: NewsletterSchema) => {
    toast.success("Welcome to the Port View Circle", {
      description: `We'll send private offers to ${email}.`,
    });
    reset();
  };

  return (
    <section className="border-b border-white/10 bg-ink py-20 text-white md:py-24">
      <Container>
        <Reveal className="grid items-end gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow text-accent-soft">The Port View Circle</p>
            <h2 className="text-4xl text-white sm:text-5xl">
              Private offers, <em>first</em>
            </h2>
            <p className="max-w-md text-white/60">
              Join our list for members-only rates, seasonal menus and invitations to
              events at the hotel.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:border-b sm:border-white/30 sm:pb-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="h-12 flex-1 border-b border-white/30 bg-transparent text-white placeholder:text-white/40 focus:outline-none sm:border-0"
                {...register("email")}
              />
              <button type="submit" className="btn btn-light">
                Subscribe
              </button>
            </div>
            {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email.message}</p>}
            <p className="mt-3 text-xs text-white/40">
              By subscribing you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
};

export default Newsletter;
