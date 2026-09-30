import { ArrowRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { aboutImages, site, stats } from "@/constants";

const About = () => {
  return (
    <section id="about" className="section scroll-mt-20">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className="space-y-8">
          <p className="eyebrow">Welcome to {site.name}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem]">
            Where Calabar charm meets the <em>river breeze</em>
          </h2>
          <div className="space-y-4 text-muted">
            <p>
              Overlooking the Calabar River from the historic Marina, {site.name} has
              welcomed travellers to Nigeria&apos;s cleanest city since 2009. Our
              waterfront landmark pairs Cross River heritage with quiet, contemporary
              comfort.
            </p>
            <p>
              Seventy-two rooms and suites, three restaurants and bars, and a spa
              devoted to slow living — all attended by a team that anticipates every
              detail.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="font-serif text-4xl text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <a href="#rooms" className="link-underline text-sm font-medium text-ink">
            Discover our story <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={aboutImages.primary}
              alt="Hotel lobby with warm lighting"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden w-1/2 overflow-hidden rounded-2xl border-8 border-white shadow-xl sm:block lg:-left-16">
            <img
              src={aboutImages.secondary}
              alt="Resort pool framed by palm trees"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default About;
