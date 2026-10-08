export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-6">
        <p className="text-[12px] md:text-sm font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} CineHub — Desenvolvido por{" "}
          <a
            href="https://github.com/andreluizpo"
            target="_blank"
            className="text-primary hover:underline outline-0 focus-visible:ring-2 focus-visible:ring-primary"
          >
            André Luiz
          </a>
          . Dados fornecidos por{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            className="text-primary hover:underline outline-0 focus-visible:ring-2 focus-visible:ring-primary"
          >
            TMDB
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
