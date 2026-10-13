type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "light";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-primary text-muted",
    secondary: "bg-secondary text-secondary-foreground",
    light: "bg-primary/15 text-primary",
  };

  return (
    <span
      className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium [&_svg]:size-4 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
