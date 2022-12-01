import { dataBase } from "../../../modules/js/controllers/dataBase.js";
import { customError } from "../../../modules/js/customError.js";
import { translate } from "../../../modules/js/translate.js";
export class main {
  static timeDelay = 500;
  static banner = class {
    static #author({ image }) {
      const img = document.createElement("img");
      img.setAttribute("data-main_banner_author", "");
      img.src = image.webp || image.png;
      img.alt = image.alt;
      const parent = document.querySelector("[data-main_banner]");
      parent.appendChild(img);
    }
    static #container() {
      const div = document.createElement("div");
      div.setAttribute("data-main_banner_container", "");
      const parent = document.querySelector("[data-main_banner]");
      parent.appendChild(div);
    }
    static #container_text({ title, text }) {
      const h1 = document.createElement("h1");
      h1.setAttribute("data-main_banner_container_title", "");
      h1.textContent = title;
      const p = document.createElement("p");
      p.setAttribute("data-main_banner_container_text", "");
      let containTxt = "";
      text.forEach((txt) => {
        containTxt == ""
          ? (containTxt = `${txt}`)
          : (containTxt = `${containTxt}<br><br>${txt}`);
      });
      p.innerHTML = containTxt;
      setTimeout(() => {
        const parent = document.querySelector("[data-main_banner_container]");
        parent.appendChild(h1);
        parent.appendChild(p);
      }, main.timeDelay);
    }
    static #container_network({ networks }) {
      let i = 0;
      const ul = document.createElement("ul");
      ul.setAttribute("data-main_banner_networks", "");
      ul.classList.add("floating");
      networks.forEach(({ link, image }) => {
        const img = document.createElement("img");
        img.setAttribute("data-main_banner_networks_list_image", "");
        img.classList.add("floating_element_image");
        img.src = image.webp || image.png;
        img.alt = image.alt;
        img.style.animationDelay = `${i}s`;
        const li = document.createElement("li");
        li.setAttribute("data-main_banner_networks_list", "");
        li.classList.add("floating_element");
        li.appendChild(img);
        li.addEventListener("click", () => {
          window.location.href = link;
        });
        ul.appendChild(li);
        i++;
      });
      setTimeout(() => {
        const parent = document.querySelector("[data-main_banner_container]");
        parent.appendChild(ul);
      }, main.timeDelay);
    }
    static init() {
      this.#container();
      dataBase.modules.proyect.author(this.#author);
      dataBase.pages.home.main.banner(this.#container_text);
      dataBase.modules.proyect.author(this.#container_network);
    }
  };
  static aboutMe = class {
    static #title({ title }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_aboutMe_title", "");
      h2.textContent = title;
      const parent = document.querySelector("[data-main_aboutMe]");
      parent.appendChild(h2);
    }
    static #container() {
      const div = document.createElement("div");
      div.setAttribute("data-main_aboutMe_container", "");
      const parent = document.querySelector("[data-main_aboutMe]");
      parent.appendChild(div);
    }
    static #container_text({ text }) {
      let containTxt = "";
      text.forEach((txt) => {
        containTxt == ""
          ? (containTxt = `${txt}`)
          : (containTxt = `${containTxt}<br><br>${txt}`);
      });
      const p = document.createElement("p");
      p.setAttribute("data-main_aboutMe_container_text", "");
      p.innerHTML = containTxt;
      setTimeout(() => {
        const parent = document.querySelector("[data-main_aboutMe_container]");
        parent.appendChild(p);
      }, main.timeDelay);
    }
    static #container_author({ author, nationality, yearBirth }) {
      const date = new Date();
      const containTxt = `Mi nombre es ${author}, soy ${nationality} y actualemnte tengo ${
        date.getFullYear() - yearBirth
      } años.<br><br>`;
      const p = document.createElement("p");
      p.setAttribute("data-main_aboutMe_container_author", "");
      p.innerHTML = containTxt;
      setTimeout(() => {
        const parent = document.querySelector("[data-main_aboutMe_container]");
        parent.appendChild(p);
      }, main.timeDelay);
    }
    static init() {
      this.#container();
      dataBase.pages.home.main.aboutme(this.#title);
      dataBase.modules.proyect.author(this.#container_author);
      dataBase.pages.home.main.aboutme(this.#container_text);
    }
  };
  static skills = class {
    static #title({ title }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_skills_title", "");
      h2.textContent = title;
      const parent = document.querySelector("[data-main_skills]");
      parent.appendChild(h2);
    }
    static #container({ category }) {
      for (const [key] of Object.entries(category)) {
        const h3 = document.createElement("h3");
        h3.setAttribute("data-main_skills_category_title", "");
        h3.textContent =
          translate.en_es(key).charAt(0).toUpperCase() +
          translate.en_es(key).slice(1);
        const div = document.createElement("div");
        div.setAttribute("data-main_skills_category_container", `${key}`);
        const category = document.createElement("div");
        category.setAttribute("data-main_skills_category", "");
        category.appendChild(h3);
        category.appendChild(div);
        const parent = document.querySelector("[data-main_skills]");
        parent.appendChild(category);
      }
    }
    static #container_card({ category }) {
      setTimeout(() => {
        for (const [key, value] of Object.entries(category)) {
          const container = document.querySelector(
            `[data-main_skills_category_container = ${key}]`
          );
          value.forEach(({ title, text, image }) => {
            const img = document.createElement("img");
            img.setAttribute(
              "data-main_skills_category_container_card_imgbox_image",
              ""
            );
            img.classList.add("card_imgbox_image");
            img.src = image.webp || image.png;
            img.alt = title;
            const imgBox = document.createElement("div");
            imgBox.setAttribute(
              "data-main_skills_category_container_card_imgbox",
              ""
            );
            imgBox.classList.add("card_imgbox");
            imgBox.appendChild(img);
            const h4 = document.createElement("h4");
            h4.setAttribute(
              "data-main_skills_category_container_card_content_title",
              ""
            );
            h4.classList.add("card_content_title");
            h4.textContent = title;
            const p = document.createElement("p");
            p.setAttribute(
              "data-main_skills_category_container_card_content_text",
              ""
            );
            p.classList.add("card_content_text");
            p.textContent = text;
            const content = document.createElement("div");
            content.setAttribute(
              "data-main_skills_category_container_card_content",
              ""
            );
            content.classList.add("card_content");
            content.appendChild(h4);
            content.appendChild(p);
            const card = document.createElement("div");
            card.setAttribute("data-main_skills_category_container_card", "");
            card.classList.add("card");
            card.appendChild(imgBox);
            card.appendChild(content);
            container.appendChild(card);
          });
        }
      }, main.timeDelay);
    }
    static init() {
      dataBase.pages.home.main.skills(this.#title);
      dataBase.pages.home.main.skills(this.#container);
      dataBase.pages.home.main.skills(this.#container_card);
    }
  };
  static hobbies = class {
    static #title({ title }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_hobbies_title", "");
      h2.textContent = title;
      const parent = document.querySelector("[data-main_hobbies]");
      parent.appendChild(h2);
    }
    static #container() {
      const slider = document.createElement("div");
      slider.setAttribute("data-main_hobbies_container", "");
      slider.classList.add("slider");
      const parent = document.querySelector("[data-main_hobbies]");
      parent.appendChild(slider);
    }
    static #container_slider({ hobbie }) {
      setTimeout(() => {
        let numChild = 0;
        const lengthHobbies = hobbie.length;
        const parent = document.querySelector("[data-main_hobbies_container]");
        hobbie.forEach(({ text, image }) => {
          numChild++;
          const p = document.createElement("p");
          p.setAttribute("data-main_hobbies_container_content_text", "");
          p.classList.add("slider_content_text");
          p.textContent = text;
          const img = document.createElement("img");
          img.setAttribute("data-main_hobbies_container_content_image", "");
          img.classList.add("slider_content_image");
          img.src = image.webp || image.png;
          img.alt = text;
          const bg = document.createElement("div");
          bg.setAttribute("data-main_hobbies_container_content_background", "");
          bg.classList.add("slider_content_background");
          const content = document.createElement("div");
          content.setAttribute("data-main_hobbies_container_content", "");
          content.classList.add("slider_content");
          content.setAttribute("style", `--i:${numChild};`);
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
          content.appendChild(p);
          content.appendChild(img);
          parent.appendChild(content);
        });
      }, main.timeDelay);
    }
    static init() {
      this.#container();
      dataBase.pages.home.main.hobbies(this.#title);
      dataBase.pages.home.main.hobbies(this.#container_slider);
    }
  };
  static education = class {
    static #title({ title }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_education_title", "");
      h2.textContent = title;
      const parent = document.querySelector("[data-main_education]");
      parent.appendChild(h2);
    }
    static #container() {
      const div = document.createElement("div");
      div.setAttribute("data-main_education_container", "");
      const parent = document.querySelector("[data-main_education]");
      parent.appendChild(div);
    }
    static #container_card({ education }) {
      setTimeout(() => {
        const parent = document.querySelector(
          "[data-main_education_container]"
        );
        education.forEach(({ title, institute, year, image }) => {
          const h3 = document.createElement("h3");
          h3.setAttribute(
            "data-main_education_container_element_content_title",
            ""
          );
          h3.textContent = title;
          const p = document.createElement("p");
          p.setAttribute(
            "data-main_education_container_element_content_institute",
            ""
          );
          p.textContent = `${institute}`;
          const span = document.createElement("span");
          span.setAttribute(
            "data-main_education_container_element_content_year",
            ""
          );
          span.textContent = `${year}`;
          const img = document.createElement("img");
          img.setAttribute(
            "data-main_education_container_element_content_image",
            ""
          );
          img.src = image.webp || image.png;
          img.alt = institute;
          const front = document.createElement("div");
          front.setAttribute(
            "data-main_education_container_element_content",
            "front"
          );
          front.classList.add("cardDV_face");
          front.classList.add("cardDV_face_front");
          front.appendChild(img);
          const back = document.createElement("div");
          back.setAttribute(
            "data-main_education_container_element_content",
            "back"
          );
          back.classList.add("cardDV_face");
          back.classList.add("cardDV_face_back");
          back.appendChild(h3);
          back.appendChild(p);
          back.appendChild(span);
          const div = document.createElement("div");
          div.setAttribute("data-main_education_container_element", "");
          div.classList.add("cardDV");
          div.appendChild(front);
          div.appendChild(back);
          parent.appendChild(div);
        });
      }, main.timeDelay);
    }
    static init() {
      this.#container();
      dataBase.pages.home.main.educations(this.#title);
      dataBase.pages.home.main.educations(this.#container_card);
    }
  };
  static proyects = class {
    static #title({ title }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_proyects_title", "");
      h2.textContent = title;
      const parent = document.querySelector("[data-main_proyects]");
      parent.appendChild(h2);
    }
    static #container() {
      const div = document.createElement("div");
      div.setAttribute("data-main_proyects_container", "");
      const parent = document.querySelector("[data-main_proyects]");
      parent.appendChild(div);
    }
    static #container_proyect({ proyect }) {
      setTimeout(() => {
        const parent = document.querySelector("[data-main_proyects_container]");
        proyect.forEach(({ title, proyect, link, image }) => {
          const h3 = document.createElement("h3");
          h3.setAttribute(
            "data-main_proyects_container_element_content_title",
            ""
          );
          h3.textContent = title;
          const p = document.createElement("p");
          p.setAttribute(
            "data-main_proyects_container_element_content_text",
            ""
          );
          p.textContent = proyect;
          const btnDemo = document.createElement("btn");
          btnDemo.setAttribute(
            "data-main_proyects_container_element_content_buttons_demo",
            ""
          );
          btnDemo.classList.add("button_89");
          btnDemo.addEventListener("click", () => {
            window.location.href = link.demo;
          });
          btnDemo.textContent = "Ver Demo";
          const btnRepo = document.createElement("btn");
          btnRepo.setAttribute(
            "data-main_proyects_container_element_content_buttons_repo",
            ""
          );
          btnRepo.classList.add("button_89");
          btnRepo.addEventListener("click", () => {
            window.location.href = link.repository;
          });
          btnRepo.textContent = "Repositório";
          const buttons = document.createElement("div");
          buttons.setAttribute(
            "data-main_proyects_container_element_content_buttons",
            ""
          );
          buttons.appendChild(btnDemo);
          buttons.appendChild(btnRepo);
          const content = document.createElement("div");
          content.setAttribute(
            "data-main_proyects_container_element_content",
            ""
          );
          content.appendChild(h3);
          content.appendChild(p);
          content.appendChild(buttons);
          const img = document.createElement("img");
          img.setAttribute("data-main_proyects_container_element_image", "");
          img.src = image.webp || image.png;
          const div = document.createElement("div");
          div.setAttribute("data-main_proyects_container_element", "");
          div.appendChild(img);
          div.appendChild(content);
          parent.appendChild(div);
        });
      }, main.timeDelay);
    }
    static init() {
      this.#container();
      dataBase.pages.home.main.proyects(this.#title);
      dataBase.pages.home.main.proyects(this.#container_proyect);
    }
  };
  static contact = class {
    static #container({ title, subtitle, text }) {
      const h2 = document.createElement("h2");
      h2.setAttribute("data-main_contact_title", "");
      h2.textContent = title;
      const h3 = document.createElement("h3");
      h3.setAttribute("data-main_contact_subtitle", "");
      h3.textContent = subtitle;
      const p = document.createElement("p");
      p.setAttribute("data-main_contact_text", "");
      p.textContent = text;
      const form = document.createElement("form");
      form.setAttribute("data-main_contact_form", "");
      form.setAttribute(
        "action",
        "https://formsubmit.co/fknxception.x_o@hotmail.com"
      );
      form.setAttribute("method", "POST");
      const parent = document.querySelector("[data-main_contact]");
      parent.appendChild(h2);
      parent.appendChild(h3);
      parent.appendChild(p);
      parent.appendChild(form);
    }
    static #form({ form }) {
      setTimeout(() => {
        const parent = document.querySelector("[data-main_contact_form]");
        form.forEach(({ element, text, data, type, required }) => {
          const contain = document.createElement(element);
          contain.setAttribute(
            "data-main_contact_form_container_element",
            data
          );
          contain.placeholder = text;
          contain.setAttribute("type", type);
          contain.addEventListener("focus", () => {
            contain.placeholder = "";
            lb.style.display = "block";
          });
          contain.addEventListener("blur", () => {
            if (contain.value.length == 0) {
              contain.placeholder = text;
              lb.style.display = "none";
            }
            customError.error(contain, data);
          });
          contain.addEventListener("keydown", () => {
            customError.error(contain, data);
          });
          contain.required = required;
          customError.error(contain, data);
          const lb = document.createElement("label");
          lb.setAttribute("data-main_contact_form_container_label", data);
          lb.textContent = text;
          const container = document.createElement("fieldset");
          container.setAttribute("data-main_contact_form_container", data);
          container.setAttribute("name", data);
          container.appendChild(contain);
          container.appendChild(lb);
          parent.appendChild(container);
        });
      }, main.timeDelay);
    }
    static #button() {
      setTimeout(() => {
        const button = document.createElement("button");
        button.setAttribute("data-main_contact_form_container_button", "");
        button.classList.add("button_89");
        button.setAttribute("type", "submit");
        button.addEventListener("click", async (e) => {
          e.preventDefault();
          customError.reportInvalidity(
            document.querySelectorAll(
              "[data-main_contact_form_container_element]"
            )
          );
        });
        button.textContent = "Enviar";
        const div = document.createElement("div");
        div.setAttribute("data-main_contact_form_container", "button");
        div.appendChild(button);
        const parent = document.querySelector("[data-main_contact_form]");
        parent.appendChild(div);
      }, main.timeDelay);
    }
    static init() {
      dataBase.pages.home.main.contact(this.#container);
      dataBase.pages.home.main.contact(this.#form);
      this.#button();
    }
  };
  static init() {
    this.banner.init();
    this.aboutMe.init();
    this.skills.init();
    this.hobbies.init();
    this.education.init();
    this.proyects.init();
    this.contact.init();
  }
}
