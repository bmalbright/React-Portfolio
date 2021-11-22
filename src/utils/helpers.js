export function validateEmail(email) {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

export function checkContactName(input) {
  const name = /^[A-Za-z]\w{1,56}$/;
  if (input.match(name)) {
    return true;
  }
  return false;
}

export function checkMessage(input) {
  const message = /^[A-Za-z]\w{1,500}$/;
  if (input.match(message)) {
    return true;
  }
  return false;
}