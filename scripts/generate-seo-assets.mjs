import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://www.sinemlojistik.com";

const cityLabelMap = {
  Istanbul: "İstanbul",
  Bursa: "Bursa",
  Izmit: "İzmit",
  Kocaeli: "Kocaeli",
  Bolu: "Bolu",
  Ankara: "Ankara",
  Aksaray: "Aksaray",
  Adana: "Adana",
  Mersin: "Mersin",
  Osmaniye: "Osmaniye",
  Gaziantep: "Gaziantep",
  Sanliurfa: "Şanlıurfa",
  Diyarbakir: "Diyarbakır"
};

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function extractMatches(pattern, source) {
  return [...source.matchAll(pattern)];
}

function buildOgSvg(title, subtitle) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0F2749"/>
  <rect x="54" y="54" width="1092" height="522" rx="32" fill="#F8FAFC"/>
  <rect x="96" y="96" width="220" height="48" rx="14" fill="#F97316"/>
  <text x="130" y="128" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="24" font-weight="700">Sinem Lojistik</text>
  <text x="96" y="238" fill="#0F2749" font-family="Arial, sans-serif" font-size="58" font-weight="700">${safeTitle}</text>
  <text x="96" y="326" fill="#334155" font-family="Arial, sans-serif" font-size="30">${safeSubtitle}</text>
  <rect x="96" y="404" width="286" height="68" rx="18" fill="#0F2749"/>
  <text x="142" y="448" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="28" font-weight="700">+90 543 542 87 63</text>
  <path d="M764 425C844 340 940 286 1052 262" stroke="#F97316" stroke-width="18" stroke-linecap="round"/>
  <circle cx="742" cy="448" r="54" fill="#0F2749"/>
  <circle cx="742" cy="448" r="22" fill="#CBD5E1"/>
  <circle cx="1018" cy="448" r="54" fill="#0F2749"/>
  <circle cx="1018" cy="448" r="22" fill="#CBD5E1"/>
</svg>`;
}

async function main() {
  const servicesSource = await readFile(path.join(root, "src/data/services.ts"), "utf8");
  const routesSource = await readFile(path.join(root, "src/data/routes.ts"), "utf8");
  const blogSource = await readFile(path.join(root, "src/data/blog-posts.ts"), "utf8");

  const baseServiceMatches = extractMatches(
    /slug:\s*"([^"]+)"[\s\S]*?shortTitle:\s*"([^"]+)"[\s\S]*?type:\s*"core"/g,
    servicesSource
  );
  const cityMatches = extractMatches(
    /slug:\s*"([^"]+)",\s*shortTitle:\s*"([^"]+)",\s*city:\s*"([^"]+)"/g,
    servicesSource
  );
  const routeMatches = extractMatches(
    /from:\s*"([^"]+)",\s*to:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g,
    routesSource
  );
  const blogMatches = extractMatches(
    /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"/g,
    blogSource
  );

  const serviceEntries = [
    ...baseServiceMatches.map((match) => ({
      slug: match[1],
      title: match[2],
      subtitle: "Şehirler arası araç taşıma hizmeti"
    })),
    ...cityMatches.map((match) => ({
      slug: match[1],
      title: match[2],
      subtitle: `${cityLabelMap[match[3]]} odaklı araç taşıma çözümleri`
    })),
    ...routeMatches.map((match) => ({
      slug: match[3],
      title: `${cityLabelMap[match[1]]} - ${cityLabelMap[match[2]]}`,
      subtitle: "Rota bazlı hızlı fiyat ve güvenli taşıma"
    }))
  ];

  const blogEntries = blogMatches.map((match) => ({
    slug: match[1],
    title: match[2],
    subtitle: "SEO odaklı araç taşıma rehberi"
  }));

  const allUrls = [
    "/",
    "/blog/",
    "/hizmetler/",
    "/hakkimizda/",
    "/iletisim/",
    ...blogEntries.map((entry) => `/blog/${entry.slug}/`),
    ...serviceEntries.map((entry) => `/hizmetler/${entry.slug}/`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc></url>`).join("\n")}
</urlset>
`;

  const ogRoot = path.join(root, "public/og");
  const ogBlogDir = path.join(ogRoot, "blog");
  const ogServiceDir = path.join(ogRoot, "services");

  await mkdir(ogBlogDir, { recursive: true });
  await mkdir(ogServiceDir, { recursive: true });

  await writeFile(path.join(root, "public/sitemap.xml"), sitemap, "utf8");
  await writeFile(
    path.join(ogRoot, "home.svg"),
    buildOgSvg("Şehirler Arası Araç Taşıma", "İstanbul'dan Diyarbakır'a uzanan güçlü hat"),
    "utf8"
  );
  await writeFile(
    path.join(ogRoot, "blog.svg"),
    buildOgSvg("Araç Taşıma Blogu", "Şehir, rota ve süreç odaklı SEO içerikleri"),
    "utf8"
  );
  await writeFile(
    path.join(ogRoot, "services.svg"),
    buildOgSvg("Hizmet Sayfaları", "Şehir ve rota bazlı araç taşıma landing'leri"),
    "utf8"
  );
  await writeFile(
    path.join(ogRoot, "contact.svg"),
    buildOgSvg("Hemen Ara", "Telefon ve WhatsApp ile doğrudan iletişim"),
    "utf8"
  );

  await Promise.all(
    serviceEntries.map((entry) =>
      writeFile(
        path.join(ogServiceDir, `${entry.slug}.svg`),
        buildOgSvg(entry.title, entry.subtitle),
        "utf8"
      )
    )
  );

  await Promise.all(
    blogEntries.map((entry) =>
      writeFile(
        path.join(ogBlogDir, `${entry.slug}.svg`),
        buildOgSvg(entry.title, entry.subtitle),
        "utf8"
      )
    )
  );
}

await main();
