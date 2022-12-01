import { dataBase } from "../../../modules/js/controllers/dataBase.js";
export class footer {
  static #network({ networks }) {
    let i = 0;
    const ul = document.createElement("ul");
    networks.forEach(({ link, image }) => {
      const img = document.createElement("img");
      img.src = image.webp || image.png;
      img.alt = image.alt;
      img.style.animationDelay = `${i}s`;
      i += 1;
      const li = document.createElement("li");
      li.appendChild(img);
      li.addEventListener("click", () => {
        window.location.href = link;
      });
      ul.appendChild(li);
    });
    const parent = document.querySelector("[data-footer_network]");
    parent.appendChild(ul);
  }
  static #author({ image }) {
    const img = document.createElement("img");
    img.src = image.webp || image.png;
    img.alt = image.alt;
    const parent = document.querySelector("[data-footer_author]");
    parent.appendChild(img);
  }
  static #date({ date }) {
    const span = document.createElement("span");
    span.textContent = `${date.month} / ${date.year}`;
    const parent = document.querySelector("[data-footer_date]");
    parent.appendChild(span);
  }
  static init() {
    // dataBase.modules.proyect.author(this.#network);
    // dataBase.modules.proyect.author(this.#author);
    // dataBase.modules.proyect.data(this.#date);
  }
}
