import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import clsx from "clsx";
import { Container, RatingStars, Reveal } from "@/components/ui";
import { testimonials } from "@/constants";

const AUTOPLAY_MS = 7000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="section" aria-roledescription="carousel" aria-label="Guest reviews">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Guest Reviews</p>
          <Quote size={40} strokeWidth={1} className="mx-auto mt-8 text-accent" />

          <div className="relative mt-6 min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <blockquote className="font-serif text-2xl leading-snug text-ink sm:text-3xl lg:text-4xl">
                  “{current.quote}”
                </blockquote>
                <figcaption className="flex flex-col items-center gap-2">
                  <RatingStars rating={current.rating} />
                  <p className="text-sm font-medium text-ink">{current.name}</p>
                  <p className="text-xs text-muted">
                    {current.location} · via {current.source}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="center h-11 w-11 rounded-full border border-line transition-colors hover:border-ink"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={clsx(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index ? "w-8 bg-ink" : "w-1.5 bg-line hover:bg-muted"
                  )}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="center h-11 w-11 rounded-full border border-line transition-colors hover:border-ink"
              aria-label="Next review"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Testimonials;
