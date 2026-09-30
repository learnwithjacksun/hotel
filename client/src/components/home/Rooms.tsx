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

      {/* Horizontal snap row on mobile, grid from lg */}
      <div className="container-x mt-14">
        <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {rooms.map((room, i) => (
            <Reveal
              key={room.id}
              delay={i * 0.08}
              className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
            >
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
