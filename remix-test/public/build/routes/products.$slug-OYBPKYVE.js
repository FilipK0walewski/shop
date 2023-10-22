import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  NavLink,
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

// app/routes/products.$slug.jsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.$slug.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.$slug.jsx"
  );
  import.meta.hot.lastModified = "1697987359456.313";
}
function Product() {
  _s();
  const productData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: productData.name }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `/products?category=${productData.category.slug}`, children: productData.category.name }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: productData.price }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: productData.image_url, alt: "Zdj\u0119cie" }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: productData.description_short }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
      __html: productData.description_full
    } }, void 0, false, {
      fileName: "app/routes/products.$slug.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$slug.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Product, "8Bu0pNbhqyYyPac4OTbA8a2piqM=", false, function() {
  return [useLoaderData];
});
_c = Product;
var _c;
$RefreshReg$(_c, "Product");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Product as default
};
//# sourceMappingURL=/build/routes/products.$slug-OYBPKYVE.js.map
