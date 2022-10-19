import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
import "../../../chunks/config.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  let errorMessage = "";
  return `<div class="${"flex w-full h-auto mt-[5rem] py-[1rem] overflow-auto"}"><form action="${"POST"}" class="${"flex flex-col w-full h-full m-auto"}"><input placeholder="${"Adresse email"}" type="${"email"}" name="${"userEmail"}" id="${"email"}" class="${"w-[50%] h-12 my-[1rem] m-auto border-2 pl-1"}"${add_attribute("value", email, 0)}>

		<input placeholder="${"Mot de passe"}" type="${"password"}" name="${"userPassword"}" id="${"password"}" class="${"w-[50%] h-12 m-auto my-[1rem] border-2 pl-1"}"${add_attribute("value", password, 0)}>

		<p class="${"w-full h-6 mt-12 overflow-auto text-center text-red-500 font-bold shrink-0"}">${escape(errorMessage)}</p>

		<button type="${"submit"}" class="${"mx-auto font-bold mt-10 w-[40%] h-12 rounded-lg shrink-0 border-2"}">Se connecter
		</button></form></div>`;
});
export {
  Page as default
};
