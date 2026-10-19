import { ClapperboardIcon } from "@solar-icons/react/bold/clapperboard";

export function BackdropFallback() {
  return (
    <div
      role="img"
      aria-label="Imagem de fundo indisponível"
      className="absolute inset-0 flex items-center justify-center bg-secondary text-muted-foreground"
    >
      <ClapperboardIcon className="size-1/4" />
    </div>
  );
}
