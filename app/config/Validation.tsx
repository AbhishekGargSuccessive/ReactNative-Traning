const EmailValidation = (text: string) => {
  let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (!Email.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const PasswordValidation = (text: string) => {
  let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!password.test(text) === false) {
    return false;
  } else {
    return true;
  }
};
const UsernameValidation = (text: string) => {
  const usernameRegex =
    /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;

  if (!usernameRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};
const ContactValidation = (number: string) => {
  const contact = /^(\+91[\-\s]?)?[0]?(91)?[7896]\d{9}$/;
  if (!contact.test(number)) {
    return true;
  } else {
    return false;
  }
};

export {
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
  ContactValidation,
};
