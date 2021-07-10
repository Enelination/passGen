const alpha = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "0123456789";
const sysmbols = "!@#$%^&*_+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += sysmbols) : "";
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
