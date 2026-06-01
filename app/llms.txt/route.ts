import { getRepoDisplayTitle, getRepoSlugPath } from "../repo-paths";
import { getRepoSections, type RepoItem } from "../repo-sections";

export const dynamic = "force-dynamic";

function getBaseUrl(request: Request): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host") ?? "proyectos.micr.dev";
  const normalizedHost = host.toLowerCase();
  const isLocalhost =
    normalizedHost.startsWith("localhost") ||
    normalizedHost.startsWith("127.0.0.1") ||
    normalizedHost.startsWith("[::1]");
  const protocol = isLocalhost ? "http" : "https";

  return `${protocol}://${host}`;
}

function getProjectLink(item: RepoItem): string | null {
  if (item.metadata.livePreviewUrl) {
    return item.metadata.livePreviewUrl;
  }

  if (!item.metadata.isPrivate) {
    return item.metadata.sourceUrl;
  }

  return null;
}

function formatProjectEntry(item: RepoItem, baseUrl: string): string {
  const projectName = getRepoDisplayTitle(item.title);
  const projectUrl = `${baseUrl}/${getRepoSlugPath(item.title)}`;
  const projectLink = getProjectLink(item);
  const lines = [
    `## ${projectName}`,
    `URL del portafolio: ${projectUrl}`,
    projectLink ? `Enlace del proyecto: ${projectLink}` : "Enlace del proyecto: No listado",
    `Lenguajes: ${item.description.languages.join(", ")}`,
    "",
    "Descripcion:",
    ...item.description.paragraphs,
  ];

  return lines.join("\n");
}

export async function GET(request: Request) {
  const baseUrl = getBaseUrl(request);
  const sections = await getRepoSections();
  const entries = sections.flatMap((section) => section.items);
  const projectEntries = entries.map((item) => formatProjectEntry(item, baseUrl));
  const body = [
    "# Proyectos",
    "",
    `URL: ${baseUrl}`,
    "",
    "Este archivo se genera desde los mismos datos de proyectos que usa la pagina regular del portafolio.",
    "",
    projectEntries.join("\n\n"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
