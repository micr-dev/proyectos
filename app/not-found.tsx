import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-cal-sans text-5xl">Proyecto no encontrado</h1>
      <p>La p&aacute;gina que buscas no existe.</p>
      <Link
        href="/"
        className="rounded-xl bg-foreground px-4 py-3 text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        Volver a los proyectos
      </Link>
    </main>
  );
}
