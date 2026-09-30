import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui";
import { heroImage, site } from "@/constants";
import BookingBar from "./BookingBar";

const Hero = () => {
  return (
    <>
      <section className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden text-white">
        <motion.img
          src={heroImage}
          alt={`${site.name} waterfront at sunset`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

        <Container className="relative pb-32 md:pb-40">
          <motion.div
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/80">
              Luxury hotel & spa · Calabar, Nigeria
            </p>
            <h1 className="text-5xl text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[5.5rem]">
              A quiet kind of <em className="font-normal">luxury</em>
            </h1>
            <p className="max-w-xl text-base text-white/85 md:text-lg">{site.description}</p>
          </motion.div>
        </Container>

        <a
          href="#about"
          className="absolute bottom-24 right-6 hidden items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/80 md:flex lg:right-10"
          aria-label="Scroll to discover"
        >
          Discover <ArrowDown size={14} className="animate-bounce" />
        </a>
      </section>

      <Container className="relative z-10 -mt-16">
        <BookingBar />
      </Container>
    </>
  );
};

export default Hero;
