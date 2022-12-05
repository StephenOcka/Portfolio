import { dataBase } from "../../config/database.js";

export class DOM {
  static modify = class {
    static image(img, src = "", alt = "") {
      img.src = src == "" ? "./assets/src/image/notFound.png" : src;
      img.alt = alt;
      img.title = alt;
    }
  };
  static create = class {
    static author = class {
      static picture(parent) {
        dataBase.modules.author.then(({ picture }) => {
          const img = DOM.create.image(picture.webp, picture.alt);
          parent.appendChild(img);
        });
      }
      static image(parent) {
        dataBase.modules.author.then(({ image }) => {
          const img = DOM.create.image(image.webp, image.alt);
          parent.appendChild(img);
        });
      }
      static networks(parent) {
        dataBase.modules.author.then(({ networks }) => {
          let i = 0;
          networks.forEach(({ link, image }) => {
            const img = DOM.create.image(image.webp, image.alt);
            img.classList.add("floating_element_image");
            img.style.animationDelay = `${i}s`;
            const li = document.createElement("li");
            li.classList.add("floating_element");
            li.appendChild(img);
            li.addEventListener("click", () => {
              window.location.href = link;
            });
            parent.appendChild(li);
            i++;
          });
        });
      }
    };
    static image(src = "", alt = "") {
      const img = document.createElement("img");
      img.src = src == "" ? "./assets/src/image/notFound.png" : src;
      img.alt = alt;
      img.title = alt;
      return img;
    }
  };
}
