import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 2,
  });

  const htmlPath = path.join(
    __dirname,
    "../public/instagram/reel-systems-challenge/thumbnail.html",
  );
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const outDir = path.join(__dirname, "../public/instagram/reel-systems-challenge");
  fs.mkdirSync(outDir, { recursive: true });

  const cover = page.locator("#reel-cover");
  await cover.screenshot({
    path: path.join(outDir, "thumbnail.png"),
  });

  console.log("Exported reel-systems-challenge/thumbnail.png");
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
