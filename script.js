// document.querySelector(".menu-toggle").addEventListener("click", function () {
//   document.querySelector(".nav").classList.toggle("active");
// });

// window.addEventListener("scroll", function () {
//   let header = document.querySelector("header");
//   if (window.scrollY > 50) {
//     header.style.background = "#111";
//   } else {
//     header.style.background = "linear-gradient(135deg, #ff4d00, #222)";
//   }
// });
// Анімація меню на мобільних пристроях

// Зміна фону хедера при скролі
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Отримуємо елементи
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Додаємо обробник події для кнопки меню
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active"); // Перемикаємо клас для показу/приховання меню
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігає відправці форми для перевірки

    // Отримуємо значення полів
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Перевірка, чи всі поля заповнені
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
    } else {
      alert("Your message has been sent successfully!");
      // Відправляємо форму (реально відправляється, якщо використовуєте server-side logic)
      // this.submit(); // Uncomment this line to actually submit the form
    }
  });
  window.onload = function() {
    // Якщо cookies не були прийняті або відмовлено від них, показуємо модальне вікно
    if (localStorage.getItem('cookiesAccepted') === null) {
      document.getElementById('cookieModal').style.display = 'flex';
    } else if (localStorage.getItem('cookiesAccepted') === 'false') {
      document.getElementById('cookieModal').style.display = 'flex'; // Відображаємо, якщо була відмова
    }
  
    // Прийняття cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true'); // Зберігаємо інформацію про прийняття
      document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
    });
  
    // Відмова від cookies
    document.getElementById('declineCookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'false'); // Зберігаємо інформацію про відмову
      document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
    });
  };