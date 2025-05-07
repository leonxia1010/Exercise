const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const generateBtn = document.getElementById('generate');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const lengthEl = document.getElementById('length');

const typeToFunction = {
  // 注意call对象的函数的写法
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
  const password = resultEl.innerText;
  if (!password) return;

  navigator.clipboard.writeText(password);
  alert('Password has been copied to clipboard.');
});

generateBtn.addEventListener('click', () => {
  const hasLowerCase = lowerCaseEl.checked;
  const hasUpperCase = upperCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  const passwordLength = +lengthEl.value;

  resultEl.innerText = generatePassword(
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSymbol,
    passwordLength
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;

  if (typesCount === 0) return '';
  // object的语法再复习下
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );

  typesArr.forEach((type) => {
    const newChar = generateChar(type);
    generatedPassword += newChar;
  });

  const restCharLength = length - typesCount;

  for (i = 0; i < restCharLength; i += typesCount) {
    typesArr.forEach((type) => {
      const newChar = generateChar(type);
      generatedPassword += newChar;
    });
  }

  const finalPassword = shuffleString(generatedPassword.slice(0, length));
  return finalPassword;
}

function shuffleString(str) {
  return str
    .split('')
    .sort((a, b) => Math.random() - 0.5)
    .join('');
}

function generateChar(type) {
  const typeKey = Object.keys(type)[0];
  return typeToFunction[typeKey]();
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}-_=+/<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
