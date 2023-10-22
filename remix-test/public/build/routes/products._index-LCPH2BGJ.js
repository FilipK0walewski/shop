import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-3JG2347J.js";
import {
  createHotContext
} from "/build/_shared/chunk-46OPWVYQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/products._index.jsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products._index.jsx"
  );
  import.meta.hot.lastModified = "1697987359456.313";
}
function ProductsPage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: data.products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: product.slug, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image_url, alt: "Zdj\u0119cie produktu" }, void 0, false, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 49,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.name }, void 0, false, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 50,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        product.price,
        " z\u0142"
      ] }, void 0, true, {
        fileName: "app/routes/products._index.jsx",
        lineNumber: 51,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 48,
      columnNumber: 25
    }, this) }, product.slug, false, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 47,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "lista produkt\xF3w" }, void 0, false, {
      fileName: "app/routes/products._index.jsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products._index.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(ProductsPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = ProductsPage;
var _c;
$RefreshReg$(_c, "ProductsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsPage as default
};
//# sourceMappingURL=/build/routes/products._index-LCPH2BGJ.js.map
