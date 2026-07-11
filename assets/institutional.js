(function() {
  const PAGE_CONFIG = {
    whatsappUrl: "https://bit.ly/4dADGJn"
  };

  function initMetaPixel() {
    if (typeof window.fbq === "function") {
      return;
    }

    !function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", "1058165443202577");
    window.fbq("track", "PageView");
  }

  function applyConfig() {
    document.querySelectorAll("[data-config-link]").forEach((element) => {
      const key = element.dataset.configLink;
      if (PAGE_CONFIG[key]) {
        element.href = PAGE_CONFIG[key];
      }
    });
  }

  function setupMetaPixelTracking() {
    document.querySelectorAll("[data-pixel-event]").forEach((element) => {
      element.addEventListener("click", () => {
        if (typeof window.fbq !== "function") {
          return;
        }

        window.fbq("track", element.dataset.pixelEvent, {
          content_name: "whatsapp_cta",
          content_category: "institutional_page",
          button_location: element.dataset.pixelLabel || "institutional_cta",
          destination_url: element.href
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMetaPixel();
    applyConfig();
    setupMetaPixelTracking();
  });
})();
