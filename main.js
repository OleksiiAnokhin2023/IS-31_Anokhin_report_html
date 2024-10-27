// Функция для перезагрузки страницы с указанием номера лабораторной работы в параметре URL
function loadLab(labNumber) {
    window.location.href = `?lab=${labNumber}`;
}

// Добавляем обработчики событий на кнопки лабораторных работ
const labButtons = document.querySelectorAll('.all_labs button');
labButtons.forEach(button => {
    button.addEventListener('click', function() {
        const labNumber = this.textContent.match(/\d+/)[0]; // Извлекаем номер лабораторной работы
        loadLab(labNumber); // Перезагружаем страницу с параметром
    });
});

// Получаем параметры URL после перезагрузки страницы
const urlParams = new URLSearchParams(window.location.search);
const labNumber = urlParams.get('lab');

if (labNumber) {
    // Динамически загружаем скрипт лабораторной работы, если номер лабораторной работы передан в URL
    const script = document.createElement('script');
    script.src = `lab${labNumber}.js`; // Загружаем соответствующий файл JS для лабораторной работы
    document.body.appendChild(script);
}
