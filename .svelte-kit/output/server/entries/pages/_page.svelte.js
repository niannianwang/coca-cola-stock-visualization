import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import "papaparse";
import "d3";
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: ".graph-container.svelte-yfb0p1{margin-top:20px}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`<h2>Loading...</h2>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
