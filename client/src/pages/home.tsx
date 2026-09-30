import {
  About,
  Amenities,
  Experiences,
  Gallery,
  Hero,
  Location,
  Newsletter,
  Offers,
  Rooms,
  Testimonials,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Experiences />
      <Offers />
      <Gallery />
      <Testimonials />
      <Location />
      <Newsletter />
    </>
  );
}
