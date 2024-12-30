function IsString(text) {
  return /^[a-zA-Z]+$/.test(str);
}

function IsNumber(text) {
  return !isNaN(Number(value));
}

export { IsString, IsNumber };
