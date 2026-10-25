import { UserIcon } from "@solar-icons/react/bold/user";

export function CastFallback() {
  return (
    <div
      role="img"
      aria-label="Imagem Indisponível"
      className="absolute inset-0 flex items-center justify-center bg-secondary text-muted-foreground"
    >
      <UserIcon className="size-1/4" />
    </div>
  );
}
