var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 13,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 12,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/routes/products._index.jsx
var products_index_exports = {};
__export(products_index_exports, {
  default: () => ProductsPage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader = async ({ request }) => {
  let url = new URL(request.url), category = url.searchParams.get("category"), sex = url.searchParams.get("sex"), urlSearchParams = new URLSearchParams();
  category !== null && urlSearchParams.append("category", category), sex != null && urlSearchParams.append("sex", sex);
  let apiUrl = new URL("http://127.0.0.1:8000/products");
  apiUrl.search = urlSearchParams.toString();
  let res = await fetch(apiUrl.toString());
  return json(await res.json());
};
function ProductsPage() {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3("ul", { children: data.products.map((product) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: product.slug, children: [
      /* @__PURE__ */ jsxDEV3("img", { src: product.image_url, alt: "Zdj\u0119cie produktu" }, void 0, !1, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 28,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: product.name }, void 0, !1, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 29,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ jsxDEV3("span", { children: [
        product.price,
        " z\u0142"
      ] }, void 0, !0, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 30,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 27,
      columnNumber: 25
    }, this) }, product.slug, !1, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 26,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { children: "lista produkt\xF3w" }, void 0, !1, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products._index.jsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/products.$slug.jsx
var products_slug_exports = {};
__export(products_slug_exports, {
  default: () => Product,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { NavLink, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  let res = await fetch(`http://127.0.0.1:8000/products/${params.slug}`);
  return json2(await res.json());
};
function Product() {
  let productData = useLoaderData2();
  return /* @__PURE__ */ jsxDEV4(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV4("h3", { children: productData.name }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4(NavLink, { to: `/products?category=${productData.category.slug}`, children: productData.category.name }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: productData.price }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("img", { src: productData.image_url, alt: "Zdj\u0119cie" }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: productData.description_short }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { dangerouslySetInnerHTML: { __html: productData.description_full } }, void 0, !1, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$slug.jsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Component
});
import { useState } from "react";
import { Link as Link2 } from "@remix-run/react";

// app/components/button.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CustomButton() {
  return /* @__PURE__ */ jsxDEV5("button", { style: {
    color: "red"
  }, children: "przycisk testowy" }, void 0, !1, {
    fileName: "app/components/button.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/routes/_index.jsx
import { Fragment as Fragment3, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Component() {
  let [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxDEV6(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV6("header", { children: /* @__PURE__ */ jsxDEV6("ul", { children: /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6(Link2, { to: "/dupa", children: "test" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 15,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { children: [
      /* @__PURE__ */ jsxDEV6("h1", { children: "Strona domowa" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV6(CustomButton, {}, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("footer", {}, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { Fragment as Fragment4, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV7(Fragment4, { children: /* @__PURE__ */ jsxDEV7("h1", { children: "about page!" }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VGNSPRDT.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-3JG2347J.js", "/build/_shared/chunk-46OPWVYQ.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HZLLIZS6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3M2N3FEC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-F62IHUBQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/products.$slug": { id: "routes/products.$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$slug-OYBPKYVE.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/products._index": { id: "routes/products._index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products._index-LCPH2BGJ.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "31724188", hmr: { runtime: "/build/_shared/chunk-46OPWVYQ.js", timestamp: 1697987368798 }, url: "/build/manifest-31724188.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products._index": {
    id: "routes/products._index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_index_exports
  },
  "routes/products.$slug": {
    id: "routes/products.$slug",
    parentId: "root",
    path: "products/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: products_slug_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
