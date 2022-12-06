import { DOM } from "../../modules/js/dom.js";
import { dataBase } from "../../config/database.js";
import { validity } from "../../modules/js/validity.js";
class createDom {
  static header = class {
    static #author() {
      const parent = document.querySelector("[data-header_author]");
      DOM.create.author.image(parent);
    }
    static init() {
      this.#author();
    }
  };
  static main = class {
    static #banner() {
      const author = document.querySelector("[data-main_banner]");
      DOM.create.author.picture(author);
      const networks = document.querySelector("[data-main_banner_list]");
      DOM.create.author.networks(networks);
    }
    static #experience() {
      dataBase.pages.home.then(({ experiences }) => {
        const parent = document.querySelector(
          "[data-main_experience_container]"
        );
        experiences.forEach(({ title, proyect, link, image, technologies }) => {
          const h3 = document.createElement("h3");
          h3.textContent = title;
          const p = document.createElement("p");
          p.textContent = proyect;
          const technologiesImplemented = document.createElement("ul");
          technologies.forEach((imgTechno) => {
            const imgTechnology = DOM.create.image(
              imgTechno.webp,
              imgTechno.alt
            );
            const technology = document.createElement("li");
            technology.appendChild(imgTechnology);
            technologiesImplemented.appendChild(technology);
          });
          const btnDemo = document.createElement("btn");
          btnDemo.classList.add("button_89");
          btnDemo.textContent = "View Demo";
          btnDemo.addEventListener("click", () => {
            window.location.href = link.demo;
          });
          const btnRepo = document.createElement("btn");
          btnRepo.classList.add("button_89");
          btnRepo.textContent = "Repository";
          btnRepo.addEventListener("click", () => {
            window.location.href = link.repository;
          });
          const buttons = document.createElement("div");
          buttons.appendChild(btnDemo);
          buttons.appendChild(btnRepo);
          const content = document.createElement("section");
          content.appendChild(h3);
          content.appendChild(p);
          content.appendChild(technologiesImplemented);
          content.appendChild(buttons);
          const img = DOM.create.image(image.webp, image.alt);
          const div = document.createElement("div");
          div.appendChild(img);
          div.appendChild(content);
          parent.appendChild(div);
        });
      });
    }
    static #skills() {
      dataBase.pages.home.then(({ skills }) => {
        const parent = document.querySelector("[data-main_skills]");
        for (const [key, value] of Object.entries(skills)) {
          const container = document.createElement("div");
          value.forEach(({ title, text, image }) => {
            const h4 = document.createElement("h4");
            h4.classList.add("card_content_title");
            h4.textContent = title;
            const p = document.createElement("p");
            p.classList.add("card_content_text");
            p.textContent = text;
            const content = document.createElement("section");
            content.classList.add("card_content");
            content.appendChild(h4);
            content.appendChild(p);
            const img = DOM.create.image(image.webp, image.alt);
            img.classList.add("card_imgbox_image");
            const imgBox = document.createElement("div");
            imgBox.classList.add("card_imgbox");
            imgBox.appendChild(img);
            const card = document.createElement("div");
            card.classList.add("card");
            card.appendChild(imgBox);
            card.appendChild(content);
            container.appendChild(card);
          });
          const h3 = document.createElement("h3");
          h3.textContent = key.charAt(0).toUpperCase() + key.slice(1);
          const category = document.createElement("section");
          category.appendChild(h3);
          category.appendChild(container);
          parent.appendChild(category);
        }
      });
    }
    static #softSkills() {
      dataBase.pages.home.then(({ softSkills }) => {
        let i = 0;
        const images = [];
        const h3 = document.createElement("h3");
        const img = DOM.create.image("", "");
        const parent = document.querySelector(
          "[data-main_softSkills_container]"
        );
        parent.appendChild(h3);
        parent.appendChild(img);
        function showImage(element) {
          h3.textContent = element.title;
          DOM.modify.image(img, element.image.webp, element.image.alt);
        }
        function animation() {
          let animation, deleteAnimation;
          animation = setTimeout(() => {
            parent.classList.add("animation-softSkill_container");
            h3.classList.add("animation-softSkill_container_title");
            img.classList.add("animation-softSkill_container_image");
            nextImage.disabled = true;
          }, 0);
          setTimeout(() => {
            showImage(images[i]);
          }, 1000);
          deleteAnimation = setTimeout(() => {
            parent.classList.remove("animation-softSkill_container");
            h3.classList.remove("animation-softSkill_container_title");
            img.classList.remove("animation-softSkill_container_image");
            nextImage.disabled = false;
          }, 2000);
        }
        softSkills.forEach((element) => {
          images.push(element);
        });
        const nextImage = document.querySelector("[data-main_softSkills_next]");
        nextImage.textContent = ">";
        nextImage.addEventListener("click", (e) => {
          e.preventDefault();
          i++;
          if (i == images.length) {
            i = 0;
          }
          if (!nextImage.disabled) {
            animation();
          }
        });
        const previousImage = document.querySelector(
          "[data-main_softSkills_previous]"
        );
        previousImage.textContent = "<";
        previousImage.addEventListener("click", (e) => {
          e.preventDefault();
          i--;
          if (i < 0) {
            i = images.length - 1;
          }
          if (!previousImage.disabled) {
            animation();
          }
        });
        showImage(images[0]);
      });
    }
    static #hobbies() {
      dataBase.pages.home.then(({ hobbies }) => {
        let numChild = 0;
        const lengthHobbies = hobbies.length;
        const parent = document.querySelector("[data-main_hobbies_container]");
        hobbies.forEach(({ title, image }) => {
          numChild++;
          const h3 = document.createElement("h3");
          h3.classList.add("slider_content_text");
          h3.textContent = title;
          const img = DOM.create.image(image.webp, image.alt);
          img.classList.add("slider_content_image");
          const bg = document.createElement("div");
          bg.classList.add("slider_content_background");
          const content = document.createElement("div");
          content.classList.add("slider_content");
          content.style.transform = `rotateY(${
            numChild * (360 / lengthHobbies)
          }deg) translateZ(360px)`;
          content.addEventListener("mouseover", () => {
            parent.style.animationPlayState = "paused";
          });
          content.addEventListener("mouseout", () => {
            parent.style.animationPlayState = "running";
          });
          content.appendChild(bg);
          content.appendChild(h3);
          content.appendChild(img);
          parent.appendChild(content);
        });
      });
    }
    static #education() {
      dataBase.pages.home.then(({ education }) => {
        const parent = document.querySelector(
          "[data-main_education_container]"
        );
        education.forEach(({ title, institute, year, image }) => {
          const h3 = document.createElement("h3");
          h3.textContent = title;
          const p = document.createElement("p");
          p.textContent = `${institute}`;
          const span = document.createElement("span");
          span.textContent = `${year}`;
          const back = document.createElement("section");
          back.classList.add("cardDV_face", "cardDV_face_back");
          back.appendChild(h3);
          back.appendChild(p);
          back.appendChild(span);
          const img = DOM.create.image(image.webp, image.alt);
          const front = document.createElement("div");
          front.classList.add("cardDV_face", "cardDV_face_front");
          front.appendChild(img);
          const div = document.createElement("div");
          div.classList.add("cardDV");
          div.appendChild(front);
          div.appendChild(back);
          parent.appendChild(div);
        });
      });
    }
    static #contact() {
      const inputs = document.querySelectorAll(
        "[data-main_contact_form_fieldset_contain]"
      );
      const btn = document.querySelector("[data-main_contact_button]");
      const form = document.querySelector("[data-main_contact_form]");
      function checkEmptyInputs() {
        for (let i = 0; i < inputs.length; i++) {
          if (!inputs[i].value == "") {
            btn.style.visibility = "visible";
            break;
          } else {
            btn.style.visibility = "hidden";
          }
        }
      }
      inputs.forEach((input) => {
        validity.customError(input);
        input.addEventListener("focus", () => {
          input.previousElementSibling.style.display = "block";
        });
        input.addEventListener("blur", () => {
          validity.customError(input);
        });
        input.addEventListener("keyup", () => {
          checkEmptyInputs();
          validity.customError(input);
        });
      });
      btn.addEventListener("click", () => {
        validity.reportInvalidity(inputs);
      });
      form.addEventListener("submit", () => {
        validity.sendEmail(form);
      });
    }
    static init() {
      this.#banner();
      this.#experience();
      this.#skills();
      this.#softSkills();
      this.#hobbies();
      this.#education();
      this.#contact();
    }
  };
  static footer = class {
    static #author() {
      const author = document.querySelector("[data-footer_author]");
      DOM.create.author.image(author);
      const networks = document.querySelector("[data-footer_network_list]");
      DOM.create.author.networks(networks);
    }
    static init() {
      this.#author();
    }
  };
  static create() {
    this.header.init();
    this.main.init();
    this.footer.init();
  }
}
(function () {
  sessionStorage.setItem("timeLoad", "3000");
  document.addEventListener("readystatechange", (event) => {
    let session = sessionStorage.getItem("complete");
    let timeLoad = parseInt(sessionStorage.getItem("timeLoad"));
    let background = document.querySelector("[data-background]");
    if (event.target.readyState === "complete") {
      background.classList.add("chargingScreen");
      createDom.create();
      if (session === null || session === undefined) {
        sessionStorage.setItem("complete", "0");
        setTimeout(() => {
          background.classList.remove("chargingScreen");
          background.classList.add("background");
          document.body.style.overflowY = "auto";
        }, timeLoad);
      } else {
        sessionStorage.setItem("complete", "1");
        background.classList.remove("chargingScreen");
        background.classList.add("background");
        document.body.style.overflowY = "auto";
      }
    }
  });
})();
