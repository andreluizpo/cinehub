import { ClapperboardIcon } from "@solar-icons/react/bold/clapperboard";

export function PosterFallback() {
  return (
    <div
      role="img"
      aria-label="Pôster indisponível"
      className="absolute inset-0 flex items-center justify-center bg-secondary text-muted-foreground"
    >
      <ClapperboardIcon className="size-1/4" />
    </div>
  );
}
