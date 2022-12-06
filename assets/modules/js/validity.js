export class validity {
  static #valid;
  static #typeInput = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
  static #typeError = [
    // More information in: https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation#validar_formularios_utilizando_javascript
    "patternMismatch",
    "tooLong",
    "tooShort",
    "rangeOverflow",
    "rangeUnderflow",
    "typeMismatch",
    "valid",
    "valueMissing",
    "willValidate",
  ];
  static #errorMessage = {
    button: {},
    checkbox: {},
    color: {},
    date: {},
    "datetime-local": {},
    email: {
      typeMismatch: "The format must be: mail@domain.extension",
      valueMissing: "Email cannot be empty",
    },
    file: {},
    hidden: {},
    image: {},
    month: {},
    number: {},
    password: {},
    radio: {},
    range: {},
    reset: {},
    search: {},
    submit: {},
    tel: {},
    text: {
      valueMissing: "This field cannot be empty",
    },
    time: {},
    url: {},
    week: {},
  };
  static customError(element) {
    if (!element.validity.valid) {
      const type = element.getAttribute("type");
      let message = "";
      for (let error of this.#typeError) {
        if (element.validity[error]) {
          if (type === (undefined || null)) {
            message = this.#errorMessage["text"][error];
          } else {
            message = this.#errorMessage[type][error];
          }
        }
      }
      return element.setCustomValidity(message);
    }
  }
  static reportInvalidity(elements) {
    for (let element of elements) {
      if (!element.validity.valid) {
        element.reportValidity();
        this.#valid = false;
        break;
      } else {
        this.#valid = true;
      }
    }
  }
  static sendEmail(form) {
    if (this.#valid) {
      form.action = "https://formsubmit.co/fknxception.x_o@hotmail.com";
      form.method = "POST";
    }
  }
}
