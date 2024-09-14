document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    yesButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    noButton.addEventListener('click', () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const newX = Math.random() * (windowWidth - buttonWidth);
        const newY = Math.random() * (windowHeight - buttonHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
