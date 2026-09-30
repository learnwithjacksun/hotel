import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { experiences } from "@/constants";

const Experiences = () => {
  return (
    <section id="experiences" className="section scroll-mt-20 bg-surface">
      <Container className="space-y-24 md:space-y-32">
        {experiences.map((item, i) => (
          <div
            key={item.id}
            className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <Reveal
              className={clsx(
                "overflow-hidden rounded-2xl lg:col-span-7",
                i % 2 === 1 && "lg:order-2"
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </Reveal>

            <Reveal delay={0.1} className="space-y-6 lg:col-span-5">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 className="text-4xl sm:text-5xl">{item.title}</h2>
              <p className="text-muted">{item.description}</p>
              <ul className="space-y-3 border-t border-line pt-6">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm">
                    <Check size={15} className="text-accent" /> {h}
                  </li>
                ))}
              </ul>
              <a href={item.cta.href} className="link-underline text-sm font-medium text-ink">
                {item.cta.label} <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experiences;
