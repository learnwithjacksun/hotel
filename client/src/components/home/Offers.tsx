import { ArrowRight } from "lucide-react";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { offers } from "@/constants";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <section id="offers" className="section scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Offers & Packages"
            title={
              <>
                Book direct, <em>stay better</em>
              </>
            }
            description="Exclusive packages with the best available rate, flexible cancellation and complimentary perks."
          >
            <a href="#offers" className="link-underline shrink-0 text-sm font-medium text-ink">
              All offers <ArrowRight size={16} />
            </a>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 0.1}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Offers;
