import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = [
  "static/seo-local/index.html",
  "static/seo-local/solicitar/index.html",
  "static/demo/estetica/index.html",
  "static/laudos/index.html",
];
const allowedTypes = new Set(["Organization", "Service", "WebPage", "WebSite", "CollectionPage"]);
const forbiddenKeys = new Set(["LocalBusiness", "PostalAddress", "telephone", "geo", "openingHours"]);
const organizationId = "https://nicebyte.ia.br/#organization";

function keys(value, result = []) {
  if (!value || typeof value !== "object") return result;
  for (const [key, child] of Object.entries(value)) {
    result.push(key);
    keys(child, result);
  }
  return result;
}

for (const relative of pages) {
  const file = path.join(root, relative);
  const html = await readFile(file, "utf8");
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocks.length !== 1) throw new Error(`${relative}: expected one JSON-LD block, got ${blocks.length}`);

  const data = JSON.parse(blocks[0][1]);
  if (data["@context"] !== "https://schema.org" || !Array.isArray(data["@graph"])) {
    throw new Error(`${relative}: expected Schema.org @graph`);
  }

  const organizations = data["@graph"].filter((entity) => entity["@type"] === "Organization");
  if (organizations.length !== 1) throw new Error(`${relative}: expected one Organization`);
  const organization = organizations[0];
  const expectedOrganization = {
    "@type": "Organization",
    "@id": organizationId,
    name: "NiceByte",
    url: "https://nicebyte.ia.br/",
    logo: "https://nicebyte.ia.br/assets/nicebyte-official-exact.jpg",
    email: "contato@nicebyte.ia.br",
  };
  if (JSON.stringify(organization) !== JSON.stringify(expectedOrganization)) {
    throw new Error(`${relative}: non-canonical Organization or unverified field`);
  }

  for (const entity of data["@graph"]) {
    if (!allowedTypes.has(entity["@type"])) throw new Error(`${relative}: unsupported @type ${entity["@type"]}`);
    for (const key of keys(entity)) {
      if (forbiddenKeys.has(key)) throw new Error(`${relative}: forbidden key ${key}`);
    }
  }

  if (relative === "static/seo-local/index.html") {
    const service = data["@graph"].find((entity) => entity["@type"] === "Service");
    if (!service || service.provider?.["@id"] !== organizationId) {
      throw new Error(`${relative}: Service.provider must reference Organization by @id`);
    }
  }

  console.log(`${relative}: JSON valid; @types=${data["@graph"].map((entity) => entity["@type"]).join(",")}`);
}

const prerender = await readFile(path.join(root, "scripts/prerender.mjs"), "utf8");
for (const marker of ["const ORGANIZATION =", "function jsonLdWithOrganization", "jsonLdWithOrganization(route.jsonLd)"]) {
  if (!prerender.includes(marker)) throw new Error(`scripts/prerender.mjs: missing ${marker}`);
}
console.log("scripts/prerender.mjs: Organization wrapper present for generated routes");
