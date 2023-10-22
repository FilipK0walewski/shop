import {
  Link
} from "/build/_shared/chunk-3JG2347J.js";
import {
  createHotContext
} from "/build/_shared/chunk-46OPWVYQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_react = __toESM(require_react(), 1);

// app/components/button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/button.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/button.jsx"
  );
  import.meta.hot.lastModified = "1697987359459.6462";
}
function CustomButton() {
  const btnStyle = {
    color: "red"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: btnStyle, children: "przycisk testowy" }, void 0, false, {
    fileName: "app/components/button.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = CustomButton;
var _c;
$RefreshReg$(_c, "CustomButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1697987359459.6462";
}
function Component() {
  _s();
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/dupa", children: "test" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 33,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 33,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Strona domowa" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, {}, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Component, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c2 = Component;
var _c2;
$RefreshReg$(_c2, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default
};
//# sourceMappingURL=/build/routes/_index-3M2N3FEC.js.map
