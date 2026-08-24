const baseUrl = (process.argv[2] ?? "http://127.0.0.1:3010").replace(
  /\/$/,
  "",
);

const expectedTitle =
  "Steven Cabugos — Full-Stack Software Engineer & UI/UX Designer";
const expectedDescription =
  "Steven Cabugos is a Philippines-based full-stack software engineer and UI/UX designer specializing in fintech, payments, and digital products.";
const expectedSocialImage = "https://stevencabugos.me/images/hero.jpg";
const expectedSocialImageAlt =
  "Abstract white folded forms on a light gray background";
const expectedSocialProfiles = [
  "https://ph.linkedin.com/in/cabugos-steven",
  "https://github.com/stevenzct",
  "https://www.facebook.com/stevenzct/",
];

const failures = [];
let passCount = 0;

const check = (condition, label) => {
  if (condition) {
    passCount += 1;
    console.log(`PASS: ${label}`);
    return;
  }

  failures.push(label);
  console.error(`FAIL: ${label}`);
};

const fetchText = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  return { response, text: await response.text() };
};

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getMetaContent = (html, attribute, value) =>
  html.match(
    new RegExp(
      `<meta ${attribute}="${escapeRegExp(value)}" content="([^"]*)"`,
    ),
  )?.[1] ?? "";

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&apos;", "'");

const getJsonLd = (html) => {
  const source = html.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/,
  )?.[1];

  if (!source) throw new Error("JSON-LD script was not found");
  return JSON.parse(source);
};

const [homepage, about, resources, robots, sitemap, profileImage, api] =
  await Promise.all([
    fetchText("/"),
    fetchText("/about"),
    fetchText("/resources"),
    fetchText("/robots.txt"),
    fetchText("/sitemap.xml"),
    fetch(`${baseUrl}/images/about/steve-profile.png`),
    fetchText("/api/exchange-rates"),
  ]);

const homepageJsonLd = getJsonLd(homepage.text);
const aboutJsonLd = getJsonLd(about.text);
const profilePage = aboutJsonLd["@graph"].find(
  (entity) => entity["@type"] === "ProfilePage",
);
const person = aboutJsonLd["@graph"].find(
  (entity) => entity["@type"] === "Person",
);

check(homepage.response.status === 200, "Homepage returns 200");
check(
  decodeHtml(homepage.text.match(/<title>(.*?)<\/title>/)?.[1] ?? "") ===
    expectedTitle,
  "Homepage title is exact",
);
check(
  getMetaContent(homepage.text, "name", "description") ===
    expectedDescription,
  "Homepage description is exact",
);
check(
  homepage.text.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ===
    "https://stevencabugos.me",
  "Homepage canonical is the apex URL",
);
check(
  decodeHtml(getMetaContent(homepage.text, "property", "og:title")) ===
    expectedTitle,
  "Homepage Open Graph title is exact",
);
check(
  getMetaContent(homepage.text, "property", "og:description") ===
    expectedDescription,
  "Homepage Open Graph description is exact",
);
check(
  getMetaContent(homepage.text, "property", "og:url") ===
    "https://stevencabugos.me",
  "Homepage Open Graph URL is exact",
);
check(
  getMetaContent(homepage.text, "property", "og:image") ===
    expectedSocialImage &&
    getMetaContent(homepage.text, "property", "og:image:alt") ===
      expectedSocialImageAlt,
  "Homepage Open Graph image and alt text are exact",
);
check(
  getMetaContent(homepage.text, "name", "twitter:card") ===
    "summary_large_image",
  "Homepage Twitter card is present",
);
check(
  decodeHtml(getMetaContent(homepage.text, "name", "twitter:title")) ===
    expectedTitle &&
    getMetaContent(homepage.text, "name", "twitter:description") ===
      expectedDescription &&
    getMetaContent(homepage.text, "name", "twitter:image") ===
      expectedSocialImage,
  "Homepage Twitter sharing metadata is exact",
);
check(homepageJsonLd["@type"] === "WebSite", "Homepage JSON-LD is WebSite");
check(
  (homepage.text.match(/<h1[ >]/g) ?? []).length === 1,
  "Homepage has one H1",
);
check(
  ["Steven Cabugos", "full-stack", "UI/UX designer", "fintech", "payments"].every(
    (value) => homepage.text.includes(value),
  ),
  "Homepage visibly states the core identity",
);

check(about.response.status === 200, "About returns 200");
check(
  about.text.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ===
    "https://stevencabugos.me/about",
  "About canonical is exact",
);
check(
  getMetaContent(about.text, "name", "robots") === "index, follow",
  "About is indexable",
);
check(
  (about.text.match(/<h1[ >]/g) ?? []).length === 1,
  "About has one H1",
);
check(
  profilePage?.mainEntity?.["@id"] === person?.["@id"],
  "ProfilePage mainEntity resolves to Person",
);
check(person?.name === "Steven Cabugos", "Person name is exact");
check(
  person?.alternateName?.join("|") === "John Steven A. Cabugos|stevenzct",
  "Person alternate names are exact",
);
check(
  person?.jobTitle?.join("|") ===
    "Full-Stack Software Engineer|UI/UX Designer",
  "Person job titles are exact",
);
check(
  person?.knowsAbout?.join("|") ===
    "fintech|payments|UI/UX design|software development",
  "Person specializations are exact",
);
check(
  person?.url === "https://stevencabugos.me",
  "Person website is exact",
);
check(
  person?.image ===
    "https://stevencabugos.me/images/about/steve-profile.png",
  "Person image uses the existing asset",
);
check(
  person?.sameAs?.join("|") === expectedSocialProfiles.join("|"),
  "Person social profiles are exact",
);
check(
  about.text.includes(
    'alt="Portrait of Steven Cabugos, full-stack software engineer and UI/UX designer"',
  ),
  "Portrait has descriptive alternative text",
);
check(
  about.text.includes(expectedDescription) &&
    about.text.includes("Also known as John Steven A. Cabugos and stevenzct."),
  "Structured identity facts are visible",
);
check(
  ["Experience", "Selected Projects", "Credentials"].every((value) =>
    about.text.includes(value),
  ),
  "Required About sections are visible",
);
check(
  about.text.includes('rel="me noopener noreferrer"'),
  "Social identity links use rel=me",
);

check(
  getMetaContent(resources.text, "name", "robots") === "noindex, nofollow",
  "Placeholder resources remain noindex",
);
check(
  robots.text.includes("Sitemap: https://stevencabugos.me/sitemap.xml") &&
    robots.text.includes("Disallow: /api/"),
  "robots.txt advertises the sitemap and blocks the API",
);
check(
  sitemap.text.includes("<loc>https://stevencabugos.me/about</loc>"),
  "Sitemap contains About",
);
check(
  profileImage.status === 200 &&
    profileImage.headers.get("content-type") === "image/png",
  "Profile image is crawlable",
);

let apiIsJson = false;
try {
  JSON.parse(api.text);
  apiIsJson = true;
} catch {}
check(
  api.response.status === 200 && apiIsJson,
  "Exchange-rate API still returns JSON",
);

console.log(`RESULT: ${passCount} checks passed; ${failures.length} failed`);
if (failures.length > 0) process.exitCode = 1;
