import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button, Container, Reveal } from "@/components/ui";
import { attractions, site } from "@/constants";

const Location = () => {
  return (
    <section id="location" className="section scroll-mt-20 bg-surface">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-8 lg:col-span-5">
          <div className="space-y-4">
            <p className="eyebrow">Location & Contact</p>
            <h2 className="text-4xl sm:text-5xl">
              On the Calabar <em>waterfront</em>
            </h2>
            <p className="text-muted">
              On historic Marina Road, moments from the Slave History Museum, the
              Carnival route and the best of Calabar&apos;s food and culture.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} strokeWidth={1.5} className="shrink-0 text-accent" />
              <a href={`tel:${site.phoneLink}`} className="hover:text-ink">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} strokeWidth={1.5} className="shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} strokeWidth={1.5} className="shrink-0 text-accent" />
              <span>
                Check-in {site.checkIn} · Check-out {site.checkOut}
              </span>
            </li>
          </ul>

          <div>
            <h3 className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Nearby
            </h3>
            <ul className="divide-y divide-line border-y border-line">
              {attractions.map((place) => (
                <li key={place.name} className="flex justify-between py-3 text-sm">
                  <span className="text-ink">{place.name}</span>
                  <span className="text-muted">{place.distance}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              `${site.address.line1}, ${site.address.line2}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Get directions
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[360px] overflow-hidden rounded-2xl border border-line lg:col-span-7">
          <iframe
            title={`Map showing ${site.name}`}
            src={site.mapEmbed}
            className="h-full min-h-[360px] w-full grayscale-[60%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </Container>
    </section>
  );
};

export default Location;
