/** Smooth-scroll to hash targets with header offset. */
export function smoothScrollToHash(hash: string) {
  if (!hash || hash === "#") return;
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 80) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}

export function bindSmoothAnchors() {
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    smoothScrollToHash(href);
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
