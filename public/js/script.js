$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left" aria-hidden="true"></i>',
        '<i class="bi bi-arrow-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/**
 * Tạo kiểu cho search-container
 */


const searchContainer = document.querySelector('.search-container');
const searchArea = searchContainer.querySelector('.search-area');
const searchIcon = searchContainer.querySelector('.search-icon');
const searchX = searchArea.querySelector('.btn-x');

searchIcon.addEventListener('click', () => {
    const searchInput = searchArea.querySelector('.search-input');
    searchX.addEventListener('click', () => {
        searchArea.classList.remove('show');
        searchIcon.classList.remove('active');
        searchX.classList.remove('active');
    });
    searchArea.classList.add('show');
    searchIcon.classList.add('active');
    searchX.classList.add('active');
    searchInput.addEventListener('focus', () => {
        searchInput.removeAttribute('placeholder');
    });
    searchInput.addEventListener('blur', () => {
        searchInput.setAttribute('placeholder', 'Tìm kiếm');
    });
});

const sliderRevolution = document.querySelector('#slider-revolution');
sliderRevolution.addEventListener('click', () => {
    if (searchX) {
        searchX.click();
    }
}) 
