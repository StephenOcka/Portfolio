export class customError {
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
  //   static error(element, typeElement) {
  //     if (!element.validity.valid) {
  //       let message = "";
  //       for (let error of this.#typeError) {
  //         if (element.validity[error]) {
  //           message = this.#errorMessage[typeElement][error];
  //         }
  //       }
  //       return element.setCustomValidity(message);
  //     }
  //   }
  //   static reportInvalidity(array) {
  //     let valid = true;
  //     for (let element of array) {
  //       if (!element.validity.valid) {
  //         element.reportValidity();
  //         valid = false;
  //         break;
  //       }
  //     }
  //   }
}
