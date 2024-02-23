/*

    1. Створення інтерфейсу
        1.1. Створити HTML-структуру для форми пошуку, індикатора завантаження, галереї та карток зображень.
        1.2. Підключити необхідні бібліотеки для індикатора завантаження ('css-loader', 'iziToast', 'SimpleLightbox').
        1.3. Створити стилі для елементів інтерфейсу у CSS.

    2. Обробка подій користувача
        2.1. Написати JS-код для обробки події відправки форми пошуку.
        2.2. Перевірити, чи введено ключове слово для пошуку, та вивести відповідне повідомлення, якщо поле порожнє.
        2.3. Показувати індикатор завантаження перед відправкою запиту на бекенд.
    
    3. HTTP-запити до Pixabay API
        3.1. Використати 'fetch' для виклику Pixabay API з введеним користувачем ключовим словом та необхідними параметрами.
        3.2. Обробити відповідь в форматі JSON та перевірити, чи має відповідь коректну структуру.

    4. Обробка результатів
        4.1. При отриманні відповіді від бекенда, приховуйте індикатор завантаження.
        4.2. Перевіряйте, чи отримано зображення від бекенда. Якщо так, виводьте їх в галерею.
        4.3. Якщо ні, виведіть повідомлення про відсутність результатів.

    5. Відображення зображень у галереї
        5.1. Створити функцію для додавання карток зображень до галереї.
        5.2. Для кожного отриманого зображення створити DOM-елемент і додати його до галереї.
        5.3. Забезпечити можливість відкривати великі версії зображення у модальному вікні за допомогою SimpleLightbox.

    6. Оновлення галереї
        6.1. Перед пошуком за новим ключовим словом очистити галерію, щоб уникнути змішаних результатів.

    7. Обробка помилок
        7.1. Використати обробники  then() та catch() для відловлення можливих помилок під час виконання HTTP-запитів та їх обробки. 
        7.2. Вивести повідомлення про помилку та приховати індикатор завантаження.

    8. Оновлення SimpleLightbox
        8.1. Після додавання нових елементів до галереї викликати метод refresh() для оновлення SimpleLightbox.

*/

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "../js/pixabay-api";
import { showImages } from "../js/render-functions";

const LOADER = document.getElementById('loader');
const GALLERY = document.getElementById('gallery');
const lightbox = new SimpleLightbox('.gallery a');
const SEARCH_FORM = document.getElementById('search-form');
const SEARCH_INPUT = document.getElementById('search-input');


SEARCH_FORM.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = SEARCH_INPUT.value.trim();

    if (query === "") {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term!',
            theme: 'dark',
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            iconUrl: '../img/error.svg',
        });
        return;
    }


    LOADER.style.display = 'block';

    GALLERY.innerHTML = "";


    fetchImages(query)
        .then((data) => {
            setTimeout(() => {
                LOADER.style.display = 'none';
            }, 1500);
           
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'No results',
                    message: 'Sorry, there are no images matching your search.Please try again!',
                     theme: 'dark',
                    position: 'topRight',
                    backgroundColor: '#ffa000',
                    messageColor: '#fafafb',
                     iconUrl: '../img/caution.svg',
                });
            } else {
                showImages(data.hits);
            }
        })
        .catch((error) => {
            LOADER.style.display = 'none';

            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again!'
            });
            console.error('Error fetching images:', error);
        });
});




    


