const button = document.getElementById("changeButton");

const description = document.getElementById("description");

button.addEventListener("click", function() {
    description.textContent = "У меня получилось создать первый сайт! 🎉";

    button.textContent = "Получилось!";
});