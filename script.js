function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  const button = document.querySelector("#switch button");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    button.setAttribute("aria-label", "Ativar modo escuro");
  }
  else {
    img.setAttribute("src", "./assets/avatar.png");
    button.setAttribute("aria-label", "Ativar modo claro");
  }
}
