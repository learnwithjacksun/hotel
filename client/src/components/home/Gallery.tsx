import clsx from "clsx";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { gallery } from "@/constants";

const Gallery = () => {
  return (
    <section id="gallery" className="section scroll-mt-20 bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Gallery"
            title={
              <>
                A glimpse of <em>Port View</em>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
            {gallery.map((image) => (
              <figure
                key={image.src}
                className={clsx(
                  "group relative overflow-hidden rounded-xl",
                  image.className
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Gallery;
