type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-primary text-muted",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-sm [&_svg]:size-4 ${variants[variant]}`}>
      {children}
    </span>
  );
}
