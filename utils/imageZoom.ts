export type ImagePoint = { x: number; y: number };
export type ImageView = ImagePoint & { scale: number };
type Size = { width: number; height: number };

export function constrainImageView(view: ImageView, image: Size, viewport: Size, maxZoom: number): ImageView {
  const scale = Math.min(maxZoom, Math.max(1, view.scale));
  const maxX = Math.max(0, (image.width * scale - viewport.width) / 2);
  const maxY = Math.max(0, (image.height * scale - viewport.height) / 2);
  return {
    scale,
    x: Math.min(maxX, Math.max(-maxX, view.x)),
    y: Math.min(maxY, Math.max(-maxY, view.y)),
  };
}

// Coordinates are relative to the viewport center. A moving anchor supports
// pinching and panning at the same time without losing the selected image point.
export function zoomImageView(
  view: ImageView,
  requestedScale: number,
  anchor: ImagePoint,
  maxZoom: number,
  nextAnchor: ImagePoint = anchor,
): ImageView {
  const scale = Math.min(maxZoom, Math.max(1, requestedScale));
  const ratio = scale / view.scale;
  return {
    scale,
    x: nextAnchor.x - (anchor.x - view.x) * ratio,
    y: nextAnchor.y - (anchor.y - view.y) * ratio,
  };
}
