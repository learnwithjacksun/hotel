import { useState } from "react";
import clsx from "clsx";
import { Menu, Phone } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { useScrolled } from "@/hooks";
import { navLinks, site } from "@/constants";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-white/95 text-ink backdrop-blur-md"
            : "border-b border-white/15 bg-transparent text-white"
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-6 md:h-20">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide opacity-90 transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneLink}`}
              className="hidden items-center gap-2 text-[13px] xl:flex"
            >
              <Phone size={15} strokeWidth={1.5} />
              {site.phone}
            </a>
            <Button
              href="#booking"
              variant={scrolled ? "primary" : "light"}
              className="hidden h-10 px-5 sm:inline-flex"
            >
              Book a stay
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="center h-10 w-10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
