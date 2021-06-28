const fetch = require("node-fetch");

async function getJSON() {
  let url = "https://api.github.com/users/codeniu";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
}

async function checkStatus() {
  let url = "https://api.github.com/users/codeniu";
  try {
    let response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      return await response;
    } else {
      return await { ok: false };
    }
  } catch (error) {
    console.log("Request Failed", error);
  }
}

checkStatus().then((res) => {
  console.log(res.ok);
  for (let [key, value] of res.headers.entries()) {
    console.log(`${key} : ${value}`);
  }
});
