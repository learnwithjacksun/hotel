import clsx from "clsx";
import { site } from "@/constants";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="#top" className={clsx("flex flex-col leading-none", className)} aria-label={site.name}>
      <span className="font-serif text-2xl font-medium tracking-[0.04em] md:text-[1.7rem]">
        {site.name}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.42em] opacity-70">
        Calabar · Nigeria
      </span>
    </a>
  );
};

export default Logo;
