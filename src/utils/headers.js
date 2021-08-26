const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Credentials", "true");
myHeaders.append("x-api-key", `${process.env.REACT_APP_API_KEY}`);

export const defaultOptions = {
  headers: myHeaders,
};

export const headers = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "XxIWiDpit53dmgFziYiJx7vrzfxo2j6Y8PsngbW0",
  },
};
