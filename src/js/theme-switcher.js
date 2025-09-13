import { theme } from "./refs";
function changeTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme)
}
theme.addEventListener("click", () => {
const currentTheme = document.body.classList.contains("theme-light")? "theme-light":"theme-dark"
const newTheme = currentTheme === "theme-light"? "theme-dark": "theme-light";
changeTheme(newTheme)
localStorage.setItem("theme", newTheme)
})
localStorage.getItem("theme")
const saveTheme = localStorage.getItem("theme") || "theme-dark";
changeTheme(saveTheme);