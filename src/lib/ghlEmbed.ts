const GHL_IFRAME_RESIZER_ATTR = "data-iframe-resizer-initialized";
const GHL_HIDE_ATTR = "data-initial-iframe-hidden";

type IFrameResizeFn = (
  options: Record<string, unknown>,
  target?: HTMLIFrameElement,
) => void;

export type GhlFormConfig = {
  id: string;
  name: string;
  height: string;
  iframeId: string;
  minHeight: string;
  borderRadius?: string;
};

export type GhlCalendarConfig = {
  id: string;
  title: string;
  iframeId: string;
  minHeight: string;
};

/** form_embed.js hides widgets until resize; always force them visible. */
export function revealGhlIframe(iframe: HTMLIFrameElement): void {
  iframe.removeAttribute(GHL_HIDE_ATTR);
  Object.assign(iframe.style, {
    opacity: "1",
    visibility: "visible",
    pointerEvents: "auto",
    display: "block",
    position: "static",
    left: "auto",
    right: "auto",
    top: "auto",
  });
}

function applyIframeStyles(
  iframe: HTMLIFrameElement,
  minHeight: string,
  borderRadius = "20px",
) {
  Object.assign(iframe.style, {
    width: "100%",
    border: "none",
    borderRadius,
    minHeight,
    height: minHeight,
    display: "block",
    opacity: "1",
    visibility: "visible",
    pointerEvents: "auto",
    position: "static",
    left: "auto",
  });
}

export function createGhlFormIframe(config: GhlFormConfig): HTMLIFrameElement {
  const iframe = document.createElement("iframe");
  iframe.src = `https://go.4tms.com/widget/form/${config.id}`;
  iframe.id = config.iframeId;
  iframe.title = config.name;
  iframe.setAttribute("data-layout", '{"id":"INLINE"}');
  iframe.setAttribute("data-trigger-type", "alwaysShow");
  iframe.setAttribute("data-trigger-value", "");
  iframe.setAttribute("data-activation-type", "alwaysActivated");
  iframe.setAttribute("data-activation-value", "");
  iframe.setAttribute("data-deactivation-type", "neverDeactivate");
  iframe.setAttribute("data-deactivation-value", "");
  iframe.setAttribute("data-form-name", config.name);
  iframe.setAttribute("data-height", config.height);
  iframe.setAttribute("data-layout-iframe-id", config.iframeId);
  iframe.setAttribute("data-form-id", config.id);
  applyIframeStyles(iframe, config.minHeight, config.borderRadius ?? "20px");
  return iframe;
}

export function createGhlCalendarIframe(config: GhlCalendarConfig): HTMLIFrameElement {
  const iframe = document.createElement("iframe");
  iframe.src = `https://go.4tms.com/widget/booking/${config.id}`;
  iframe.id = config.iframeId;
  iframe.title = config.title;
  iframe.allow = "payment";
  iframe.scrolling = "no";
  applyIframeStyles(iframe, config.minHeight, "0");
  Object.assign(iframe.style, { overflow: "hidden", height: config.minHeight });
  return iframe;
}

/** Re-run GHL form_embed.js setup for a dynamically inserted iframe. */
export function initGhlIframe(iframe: HTMLIFrameElement): void {
  revealGhlIframe(iframe);

  const contentWindow = iframe.contentWindow;
  if (contentWindow) {
    window.dispatchEvent(
      new MessageEvent("message", {
        data: ["iframeLoaded"],
        source: contentWindow,
      }),
    );
  }

  const iFrameResize = (window as Window & { iFrameResize?: IFrameResizeFn }).iFrameResize;
  if (typeof iFrameResize !== "function") return;
  if (iframe.getAttribute(GHL_IFRAME_RESIZER_ATTR) === "true") return;

  iframe.setAttribute(GHL_IFRAME_RESIZER_ATTR, "false");
  try {
    iFrameResize(
      {
        log: false,
        checkOrigin: false,
        enablePublicMethods: true,
        scrolling: true,
        heightCalculationMethod: "offset",
        autoResize: true,
        sizeWidth: false,
        sizeHeight: true,
        resizedCallback: (data: { iframe?: HTMLIFrameElement; height?: number }) => {
          const el = data?.iframe;
          const height = data?.height;
          if (!el) return;
          revealGhlIframe(el);
          if (typeof height === "number" && height >= 0) {
            const nextHeight = `${height + 5}px`;
            el.style.height = nextHeight;
            el.style.minHeight = "0";

            const host = el.parentElement;
            if (host) {
              host.style.minHeight = "0";
              host.style.height = "auto";
            }
          }
        },
      },
      iframe,
    );
  } catch {
    revealGhlIframe(iframe);
  }
}

export function waitForGhlEmbed(iframe: HTMLIFrameElement, attempt = 0): void {
  revealGhlIframe(iframe);

  const hasScript =
    typeof (window as Window & { iFrameResize?: IFrameResizeFn }).iFrameResize === "function";

  if (hasScript || attempt >= 50) {
    initGhlIframe(iframe);
    // Fallback reveal in case resize never fires
    window.setTimeout(() => revealGhlIframe(iframe), 400);
    window.setTimeout(() => revealGhlIframe(iframe), 1200);
    return;
  }

  window.setTimeout(() => waitForGhlEmbed(iframe, attempt + 1), 100);
}

export function mountGhlForm(host: HTMLElement, config: GhlFormConfig): HTMLIFrameElement {
  host.replaceChildren();
  const iframe = createGhlFormIframe(config);
  host.appendChild(iframe);
  revealGhlIframe(iframe);
  return iframe;
}

export function mountGhlCalendar(host: HTMLElement, config: GhlCalendarConfig): HTMLIFrameElement {
  host.replaceChildren();
  const iframe = createGhlCalendarIframe(config);
  host.appendChild(iframe);
  revealGhlIframe(iframe);
  return iframe;
}

export function unmountGhlEmbed(host: HTMLElement | null): void {
  host?.replaceChildren();
}

function bindGhlIframe(iframe: HTMLIFrameElement): () => void {
  const handleLoad = () => {
    waitForGhlEmbed(iframe);
  };

  iframe.addEventListener("load", handleLoad);
  waitForGhlEmbed(iframe);

  const revealTimers = [300, 800, 1600].map((ms) =>
    window.setTimeout(() => revealGhlIframe(iframe), ms),
  );

  return () => {
    iframe.removeEventListener("load", handleLoad);
    revealTimers.forEach((id) => window.clearTimeout(id));
  };
}

export function mountAndBindGhlForm(host: HTMLElement, config: GhlFormConfig): () => void {
  const iframe = mountGhlForm(host, config);
  return bindGhlIframe(iframe);
}

export function mountAndBindGhlCalendar(
  host: HTMLElement,
  config: GhlCalendarConfig,
): () => void {
  const iframe = mountGhlCalendar(host, config);
  return bindGhlIframe(iframe);
}
