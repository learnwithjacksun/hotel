import { Container } from "@/components/ui";
import { footerLinks, site, socials } from "@/constants";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:py-20">
        <div className="space-y-5 text-white">
          <Logo />
          <p className="max-w-xs text-sm text-white/60">{site.description}</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent-soft/80">
            Calabar · Cross River State · Nigeria
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-white">
              {group.title}
            </h3>
            <ul className="space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-white">
            Contact
          </h3>
          <address className="space-y-3 text-sm not-italic">
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <a href={`tel:${site.phoneLink}`} className="block hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">
              {site.email}
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
