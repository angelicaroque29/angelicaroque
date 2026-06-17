import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,
  });

  const filePath = path.join(__dirname, "../public/instagram/system-carousel.html");
  await page.goto(`file://${filePath}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const outDir = path.join(__dirname, "../public/instagram/system-carousel");
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 1; i <= 5; i++) {
    const slide = page.locator(`#slide-${i}`);
    await slide.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await slide.screenshot({
      path: path.join(outDir, `slide-${i}.png`),
    });
    console.log(`Exported slide-${i}.png`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
