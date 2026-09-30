import { ArrowRight } from "lucide-react";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { rooms } from "@/constants";
import RoomCard from "./RoomCard";

const Rooms = () => {
  return (
    <section id="rooms" className="section scroll-mt-20 bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Rooms & Suites"
            title={
              <>
                Spaces designed for <em>rest</em>
              </>
            }
            description="Each room is a calm retreat of natural materials, handpicked art and views of the garden or the Calabar River."
          >
            <a href="#rooms" className="link-underline shrink-0 text-sm font-medium text-ink">
              View all rooms <ArrowRight size={16} />
            </a>
          </SectionHeading>
        </Reveal>
      </Container>

      <Container className="mt-14">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.08} className="h-full">
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Rooms;
