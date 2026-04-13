// 1. Находим элемент по классу (точка перед названием обязательна, как в CSS!)
const btn = document.querySelector('.btn2');

// 2. Добавляем "слушатель событий" (EventListener)
// Первый аргумент — ЧТО ловим ('click')
// Второй аргумент — ЧТО делаем (функция)
btn.addEventListener('click', function() {
    alert('Кто нажал тот ГЕЙ');
});
