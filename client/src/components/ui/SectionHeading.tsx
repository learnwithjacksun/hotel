import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:flex-col md:items-center",
        className
      )}
    >
      <div className={clsx("max-w-2xl space-y-4", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem]">{title}</h2>
        {description && <p className="text-muted max-w-xl">{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default SectionHeading;
