import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui";
import { useLockBody } from "@/hooks";
import { navLinks, site } from "@/constants";
import Logo from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  useLockBody(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white text-ink lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-18 items-center justify-between border-b border-line px-6">
              <Logo />
              <button type="button" onClick={onClose} className="center h-10 w-10" aria-label="Close menu">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block border-b border-line py-4 font-serif text-3xl"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4 border-t border-line p-6">
              <a href={`tel:${site.phoneLink}`} className="flex items-center gap-3 text-sm text-muted">
                <Phone size={16} strokeWidth={1.5} /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-muted">
                <Mail size={16} strokeWidth={1.5} /> {site.email}
              </a>
              <Button href="#booking" onClick={onClose} className="w-full">
                Book a stay
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
