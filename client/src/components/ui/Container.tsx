import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={clsx("container-x", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
