Telegram.WebApp.ready();
document.querySelector("#info").innerHTML = JSON.stringify(
  Telegram.WebApp,
  null,
  2
);
