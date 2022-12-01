import { dataBase } from "../../../modules/js/controllers/dataBase.js";
export class header {
  static #author({ author, image }) {
    const img = document.createElement("img");
    img.setAttribute("data-header_author_image", "");
    img.src = image.webp || image.png;
    img.alt = image.alt;
    const p = document.createElement("p");
    p.setAttribute("data-header_author_text", "");
    p.textContent = author;
    const parent = document.querySelector("[data-header_author]");
    parent.appendChild(img);
    parent.appendChild(p);
  }
  static #menu(menu) {
    const ul = document.createElement("ul");
    ul.setAttribute("data-header_menu_list", "");
    menu.forEach(({ text, href }) => {
      const li = document.createElement("li");
      li.setAttribute("data-header_menu_list_element", "");
      li.textContent = text;
      li.addEventListener("click", () => {
        window.location.href = href;
      });
      ul.appendChild(li);
    });
    const parent = document.querySelector("[data-header_menu]");
    parent.appendChild(ul);
  }
  static init() {
    dataBase.pages.home.header.menu(this.#menu);
    dataBase.modules.proyect.author(this.#author);
  }
}
