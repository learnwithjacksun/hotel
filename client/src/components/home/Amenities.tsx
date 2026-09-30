import { Container, Reveal, SectionHeading } from "@/components/ui";
import { amenities } from "@/constants";

const Amenities = () => {
  return (
    <section id="amenities" className="section scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Services & Amenities"
            title={
              <>
                Everything you need, <em>nothing you don't</em>
              </>
            }
            description="Thoughtful services and five-star facilities, attended by a team available around the clock."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {amenities.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 bg-white p-6 transition-colors duration-300 hover:bg-surface"
            >
              <span className="center h-11 w-11 rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                <Icon size={20} strokeWidth={1.4} />
              </span>
              <div className="space-y-1.5">
                <h3 className="font-sans text-sm font-medium tracking-normal">{title}</h3>
                <p className="text-xs leading-relaxed text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Amenities;
