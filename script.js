function countdown() {
    const anniversaryDate = new Date('2025-09-13'); // Дата годовщины в следующем году
    const now = new Date();
    const timeDifference = anniversaryDate - now;

    if (timeDifference < 0) {
        document.getElementById('timer').innerHTML = "С годовщиной!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days} ${declensionDays(days)} ${hours} ${declensionHours(hours)} ${minutes} ${declensionMinutes(minutes)} ${seconds} ${declensionSeconds(seconds)}`;
    }
}

function declensionDays(number) {
    const cases = ['день', 'дня', 'дней'];
    return declension(number, cases);
}

function declensionHours(number) {
    const cases = ['час', 'часа', 'часов'];
    return declension(number, cases);
}

function declensionMinutes(number) {
    const cases = ['минута', 'минуты', 'минут'];
    return declension(number, cases);
}

function declensionSeconds(number) {
    const cases = ['секунда', 'секунды', 'секунд'];
    return declension(number, cases);
}

function declension(number, cases) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return cases[2];
    }
    if (lastDigit === 1) {
        return cases[0];
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return cases[1];
    }
    return cases[2];
}

countdown(); // Добавлен вызов функции при загрузке страницы

setInterval(countdown, 1000);