import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".transitionMenu.svelte-1axvpla{transition:all 0.5s ease}.defaultPositionXMenu.svelte-1axvpla{transform:translateX(100%)}.showMenu.svelte-1axvpla{transform:translateX(0%)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showMenu = false } = $$props;
  if ($$props.showMenu === void 0 && $$bindings.showMenu && showMenu !== void 0)
    $$bindings.showMenu(showMenu);
  $$result.css.add(css);
  return `<div id="${"menu"}" class="${"fixed top-[5rem] w-full h-[calc(100vh-5rem)] bg-c-l-green transitionMenu z-20 " + escape(showMenu ? "showMenu" : "defaultPositionXMenu", true) + " svelte-1axvpla"}">TODO
</div>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showMenu = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"navbar"}" class="${"fixed top-0 flex w-full h-[5rem] bg-c-mint z-10"}"><h1 class="${"my-auto ml-[1rem] pr-[1rem] text-c-black font-bold text-2xl shrink-0"}">PRED - 2022
	</h1>
	<button class="${"w-[2rem] h-[2rem] ml-auto my-auto mr-[1rem] rounded-full shrink-0 " + escape(showMenu ? "bg-green-300" : "bg-red-300", true)}"></button></div>

${validate_component(Menu, "Menu").$$render(
      $$result,
      { showMenu },
      {
        showMenu: ($$value) => {
          showMenu = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
