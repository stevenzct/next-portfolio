// A static, crawler-friendly adaptation of components/hompage/Hero.tsx.
// Run from the repository root after changing the hero's copy or artwork:
// node scripts/generate-social-image.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const root = new URL("../", import.meta.url);
const load = (path) => readFile(new URL(path, root));
const [mediumFont, bookFont, ...artwork] = await Promise.all([
  load("public/fonts/PPNeueMontreal-Medium.otf"),
  load("public/fonts/PPNeueMontreal-Book.otf"),
  ...[1, 5, 9, 4, 8, 3, 6, 2].map((n) => load(`public/images/Image${n}.jpg`)),
]);

const box = (style, ...children) => h("div", { style: { display: "flex", ...style } }, ...children);
const rail = (images, top) => box(
  { flexDirection: "column", width: 224, gap: 12, marginTop: top },
  ...images.map((data, index) => h("img", {
    key: index,
    src: `data:image/jpeg;base64,${data.toString("base64")}`,
    width: 224,
    height: 171,
    style: { borderRadius: 8, objectFit: "contain" },
  })),
);

const response = new ImageResponse(
  box(
    {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(circle at 16% 72%, #151515, #000000 55%)",
      color: "#ffffff",
      fontFamily: "Neue Montreal",
    },
    box(
      { position: "absolute", left: 52, top: 42, fontSize: 23, fontWeight: 500 },
      "Steven Cabugos",
    ),
    box(
      { position: "absolute", left: 52, top: 183, width: 610, flexDirection: "column" },
      box(
        { flexDirection: "column", fontSize: 53, lineHeight: 1.02, letterSpacing: "-2.9px", fontWeight: 500 },
        box({}, "Designed to impress"),
        box({ marginTop: 6, color: "#858585", fontWeight: 400 }, "Built to convert"),
      ),
      box(
        { marginTop: 25, maxWidth: 490, fontSize: 21, lineHeight: 1.55, color: "#b3b3b3", fontWeight: 400 },
        "I create custom websites, mobile apps, and software solutions that help businesses stand out, connect with customers, and achieve real results.",
      ),
      box(
        { marginTop: 26, gap: 12 },
        box(
          { width: 175, height: 46, alignItems: "center", justifyContent: "center", borderRadius: 8, background: "#ffffff", color: "#000000", fontSize: 16, fontWeight: 500 },
          "View Projects",
          h("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { marginLeft: 9 } },
            h("path", { d: "M4 12h16m-6-6 6 6-6 6", fill: "none", stroke: "#000000", strokeWidth: 1.5 }),
          ),
        ),
        box(
          { width: 175, height: 46, alignItems: "center", justifyContent: "center", borderRadius: 8, background: "#161616", border: "1px solid #303030", fontSize: 16, fontWeight: 500 },
          "See Reviews",
          h("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { marginLeft: 9 } },
            h("path", { d: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z", fill: "none", stroke: "#ffffff", strokeWidth: 1.5 }),
          ),
        ),
      ),
    ),
    box(
      { position: "absolute", left: 692, top: 0, width: 460, height: 630, overflow: "hidden", gap: 12 },
      rail(artwork.slice(0, 4), -32),
      rail(artwork.slice(4), -112),
    ),
    box(
      { position: "absolute", left: 52, bottom: 37, fontSize: 17, color: "#858585", fontWeight: 400 },
      "stevencabugos.me",
    ),
  ),
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Neue Montreal", data: mediumFont, weight: 500, style: "normal" },
      { name: "Neue Montreal", data: bookFont, weight: 400, style: "normal" },
    ],
  },
);

const destination = new URL("public/images/social/hero-preview-v1.png", root);
await mkdir(new URL("public/images/social/", root), { recursive: true });
await writeFile(destination, Buffer.from(await response.arrayBuffer()));
console.log(`Created ${fileURLToPath(destination)} (1200 x 630)`);
