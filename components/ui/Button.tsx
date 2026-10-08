import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "ghost" | "link";
  size?: "default" | "icon" | "none";
  className?: string;
} & React.ComponentProps<"button">;

export function Button({
  children,
  variant = "default",
  size = "default",
  asChild = false,
  className,
  ...rest
}: ButtonProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  const variants = {
    default: "bg-primary text-muted hover:brightness-85",
    secondary: "bg-secondary text-muted-foreground hover:text-secondary-foreground",
    ghost: "bg-transparent text-muted-foreground hover:text-secondary-foreground",
    link: "bg-transparent text-muted-foreground hover:text-secondary-foreground hover:underline",
  };

  const sizes = {
    default: "px-4 py-2",
    icon: "p-2",
    none: "p-0 !rounded-none",
  };

  return (
    <Comp
      className={`flex items-center justify-center gap-2.5 [&_svg]:h-5 [&_svg]:w-5 cursor-pointer rounded-xl text-sm font-medium duration-300 outline-0 focus-visible:ring-2 focus-visible:ring-primary ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
