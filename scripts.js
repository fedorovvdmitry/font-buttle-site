document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const menuPopup = document.getElementById('menuPopup');

    menuButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        menuPopup.classList.toggle('show');
    });

    menuPopup.addEventListener('click', () => {
        menuPopup.classList.remove('show');
    });

    document.addEventListener('click', (event) => {
        if (!menuPopup.contains(event.target) && !menuButton.contains(event.target)) {
            menuPopup.classList.remove('show');
        }
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = event.target.name.value;
        let thankYouMessage = document.getElementById('thankYouMessage');
        let thankYouText = document.getElementById('thankYouText');
        thankYouText.textContent = name + ", спасибо, мы получили ваше сообщение и ответим в ближайшее время.";
        thankYouMessage.style.display = 'flex';
        thankYouMessage.style.visibility = 'visible';
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        let thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.style.display = 'none';
        thankYouMessage.style.visibility = 'hidden';
    });
});
