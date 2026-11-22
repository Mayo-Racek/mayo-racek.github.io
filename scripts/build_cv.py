"""Render the public CV PDF from the single, version-controlled HTML source.

Requires WeasyPrint 68.0. Called before Astro builds so every GitHub Pages
deployment includes a CV that matches the latest resume page.
"""
from pathlib import Path

from weasyprint import HTML
from weasyprint.pdf import PDF

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "scripts" / "cv-print.html"
DEST = ROOT / "public" / "Mayo_Racek_CV.pdf"


def main() -> None:
    html = SOURCE.read_text(encoding="utf-8")
    if "Mayo Racek" not in html or "Data &amp; AI Solutions Architect" not in html:
        raise SystemExit("CV source is incomplete.")
    document = HTML(filename=str(SOURCE)).render()
    if len(document.pages) != 2:
        raise SystemExit(f"CV must render to exactly two pages, got {len(document.pages)}.")
    document.write_pdf(str(DEST))
    data = DEST.read_bytes()
    if not data.startswith(b"%PDF-") or len(data) < 10_000:
        raise SystemExit("Generated CV PDF failed sanity checks.")
    print(f"CV generated: {DEST.name}, 2 pages, {len(data)} bytes")


if __name__ == "__main__":
    main()
