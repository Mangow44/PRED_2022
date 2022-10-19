import { c as create_ssr_component } from "../../chunks/index.js";
import { d as db } from "../../chunks/config.js";
import "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blocks;
  function getBlocks() {
    getDocs(collection(db, "blocks")).then((data) => {
      data.docs.forEach((doc) => {
        let block = doc.data();
        block.id = doc.id;
        blocks = [...blocks, block];
      });
      blocks.sort((a, b) => {
        return a.index - b.index;
      });
    });
  }
  getBlocks();
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    blocks = [];
    $$rendered = `${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
