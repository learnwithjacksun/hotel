import clsx from "clsx";

type Variant = "primary" | "outline" | "light" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
  "ghost-light": "btn-ghost-light",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

/** Renders an <a> when `href` is set, otherwise a <button>. */
const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const classes = clsx("btn", variants[variant], className);

  if (props.href !== undefined) {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
