import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.join(
    __dirname,
    "../public/proposals/arthur-foreclosure-mvp-proposal.html",
  );
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const outDir = path.join(__dirname, "../public/proposals");
  fs.mkdirSync(outDir, { recursive: true });

  const pdfPath = path.join(outDir, "arthur-foreclosure-mvp-proposal.pdf");
  await page.pdf({
    path: pdfPath,
    format: "Letter",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log(`Exported ${pdfPath}`);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
