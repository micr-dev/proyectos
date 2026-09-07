import test from "node:test";
import assert from "node:assert/strict";
import { repoMetadata } from "./repo-metadata.ts";

test("project previews never duplicate their source repository", () => {
  for (const [project, metadata] of Object.entries(repoMetadata)) {
    if (metadata.livePreviewUrl) {
      assert.notEqual(
        metadata.livePreviewUrl.replace(/\/$/, "").toLowerCase(),
        metadata.sourceUrl.replace(/\/$/, "").toLowerCase(),
        `${project} offers its source repository as a live preview`,
      );
    }
  }
});

test("package, mod, docs, and download actions describe their destination", () => {
  const expectedLabels = {
    "akron": "Leer documentos",
    "moji": "Leer documentos",
    "anydesk-legacy-bin": "Ver paquete",
    "codexport": "Ver paquete",
    "revisor": "Ver paquete",
    "camofox-mcp": "Ver paquete",
    "discord-self-mcp": "Ver paquete",
    "t3-chat-zipper": "Descargar userscript",
    "Celeste-QuartzSkin": "Ver mod"
  };
  for (const [project, label] of Object.entries(expectedLabels)) {
    assert.equal(repoMetadata[project].livePreviewLabel, label, project);
  }
});

test("actual live sites keep their preview actions", () => {
  assert.equal(repoMetadata["akron-website"].livePreviewUrl, "https://akron.micr.dev");
  assert.equal(repoMetadata.nagrom.livePreviewUrl, "https://microck.github.io/nagrom/");
});
