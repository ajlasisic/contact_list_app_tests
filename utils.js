const generateRandomEmail = () => {
  let rndnum = Math.random();
  let emailValue = "contacts.test+" + rndnum + "@random.com";
  return emailValue;
};

const generateRandomPassword = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

const verifyToEqual = async (first, second) => {
  await expect(first).toEqual(second);
};

export { generateRandomEmail, generateRandomPassword, verifyToEqual };
