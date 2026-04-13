# Client Logos

Drop client logo files here. TestimonialSection picks them up automatically
via `import.meta.glob` — no code changes needed after you add files.

## Expected filenames

- `ohsu.png` (or .svg)
- `piedmont.png` (or .svg)
- `copc.png` (or .svg)

Filenames are matched case-insensitively. Any of `.png .svg .jpg .jpeg .webp`
will be picked up. Aim for transparent background PNG or SVG so the logo sits
cleanly on the white card.

## Sizing

The card reserves a 56px tall slot and renders the image at `max-h-12` (48px).
A source file around 500px wide is plenty. Horizontal wordmarks look best.

## If a file is missing

The card falls back to the plain text wordmark (OHSU / Piedmont / COPC), so the
site never breaks. Add files at your pace.
