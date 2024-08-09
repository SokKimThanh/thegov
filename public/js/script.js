$('.mainSlider').owlCarousel({
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
 * Tạo kiểu cho search-container (3 chỗ )
 */
const searchContainer = document.querySelectorAll('.search-container');
searchContainer.forEach(container => {
    const searchArea = container.querySelector('.search-area');
    const searchIcon = container.querySelector('.search-icon');
    const searchX = searchArea.querySelector('.btn-x');

    searchIcon.addEventListener('click', () => {
        const searchInput = searchArea.querySelectorAll('.search-input');
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

    /**
     * slider-revolution
     * Đụng vào slider sẽ tắt search
     */
    const sliderRevolution = document.querySelector('#slider-revolution');
    sliderRevolution.addEventListener('click', () => {
        if (searchX) {
            searchX.click();
        }
    })

});

// MENU DESKTOP
/**
 * JavaScript Functionality
JavaScript thêm các hành vi động cho menu:

Xử lý sự kiện click:

Khi click vào một menu-item, các menu-item khác sẽ loại bỏ class active, 
và mục được click sẽ thêm class active.
Nếu menu-item có menu con (sub-menu), menu con sẽ được hiển thị.
Xử lý sự kiện hover:

Khi hover vào một mục có menu con, menu con sẽ được hiển thị 
(subMenu.classList.add('show')).
Khi di chuyển chuột ra khỏi mục, menu con sẽ bị ẩn 
(subMenu.classList.remove('show')).
Kiểm tra và xử lý các mục không có submenu:

Nếu một menu-item không có submenu, nó sẽ được thêm class no-children, 
và mũi tên chỉ xuống (.menu-link::after) sẽ bị ẩn.
 */
/**
 * UPDATE:05/08/2024
 * Giữ lại tính năng phân loại menu: Thêm class no-children 
 * vào các mục menu không có sub-menu.
 * Xử lý sự kiện hover: Hiển thị sub-menu khi hover vào mục menu.
 * Cập nhật trạng thái active: Đảm bảo rằng khi một mục 
 * menu được chọn, nó và tất cả các mục menu cha của nó 
 * đều được thêm class active.
 */
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    const subMenu = item.querySelector('.sub-menu');

    if (!subMenu) {
        item.classList.add('no-children');
    }

    item.addEventListener('click', (e) => {
        e.stopPropagation();

        // Loại bỏ lớp active từ tất cả menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        // Thêm lớp active cho menu item được click
        item.classList.add('active');

        // Thêm lớp active cho tất cả các mục cha
        let parentItem = item.closest('.menu-item');
        while (parentItem) {
            parentItem.classList.add('active');
            parentItem = parentItem.parentElement.closest('.menu-item');
        }

        // Nếu mục menu cha có sub-menu, ngăn không đóng nó
        if (subMenu) {
            subMenu.classList.add('show');
        }
    });

    // Xử lý sự kiện hover: Hiển thị sub-menu khi hover vào mục menu
    // ở trên mobile thì không có hover
    // ở trên desktop thì có hover
    if (window.innerWidth > 1024) {
        item.addEventListener('mouseenter', () => {
            if (subMenu) {
                subMenu.classList.add('show');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (subMenu) {
                subMenu.classList.remove('show');
            }
        });
    }
});



/**
 * Lập trình tắt/mở menu mobile (menu-bar-icon)
 */

// Chọn phần tử có lớp 'menu-bar-icon' từ DOM
const menuBarIcon = document.querySelector('.menu-bar-icon');

// Thiết lập sự kiện click cho 'menuBarIcon'
menuBarIcon.addEventListener('click', () => {
    // Chọn phần tử có lớp 'menu-overlay' từ DOM
    const menuOverlay = document.querySelector('.menu-overlay');
    // Chọn phần tử có lớp 'menu-container-slider' từ DOM
    const menuContainerSlider = document.querySelector('.menu-container-slider');
    // Chọn phần tử con có lớp 'search-container' từ 'menuContainerSlider'
    const searchContainer = menuContainerSlider.querySelector('.search-container');

    // Thêm lớp 'active' vào 'menuOverlay' để hiển thị overlay
    menuOverlay.classList.add('active');
    // Thêm lớp 'active' vào 'menuContainerSlider' để hiển thị menu slider
    menuContainerSlider.classList.add('active');

    // Thiết lập sự kiện click cho 'menuOverlay'
    menuOverlay.addEventListener('click', () => {
        // Loại bỏ lớp 'active' từ 'menuOverlay' để ẩn overlay
        menuOverlay.classList.remove('active');
        // Loại bỏ lớp 'active' từ 'menuContainerSlider' để ẩn menu slider
        menuContainerSlider.classList.remove('active');
    });

    // Hiển thị phần tử 'searchContainer' bằng cách đặt thuộc tính display thành 'block'
    searchContainer.style.display = 'block';
});



//
/* section vfo */
// 

var owl = $('.box-slider');

owl.owlCarousel({
    loop: true,
    auto: true,
    margin: 30,
    dots: true,
    // auto play
    utoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

function play() {
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
}
play();

$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})
/**
 * Lập trình phân loại sự kiện
 */
const filters = document.querySelectorAll('.filter');
const events = document.querySelectorAll('.event');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentStart = 0;
const itemsPerPage = 3;
let activeFilters = new Set(['all']);
let filteredEvents = Array.from(events);

function getVisibleEventsCount() {
    return Array.from(events).filter(event => event.style.display === 'block').length;
}

function showEvents() {
    let visibleEvents = [];
    activeFilters.forEach(filterType => {
        if (filterType === 'all') {
            visibleEvents = events;
        } else {
            visibleEvents = visibleEvents.concat(Array.from(events).filter(event => event.classList.contains(filterType)));
        }
    });

    filteredEvents = visibleEvents;

    let visibleCount = getVisibleEventsCount();
    filteredEvents.forEach((event, index) => {
        if (visibleCount < itemsPerPage && index >= currentStart && index < currentStart + itemsPerPage) {
            event.style.display = 'block';
            visibleCount++;
        } else {
            event.style.display = 'none';
        }
    });

    // Disable/Enable navigation buttons
    prevBtn.disabled = currentStart === 0;
    nextBtn.disabled = currentStart + itemsPerPage >= filteredEvents.length;
}

showEvents();

filters.forEach(filter => {
    filter.addEventListener('click', function () {
        const filterType = this.getAttribute('data-filter');

        if (filterType === 'all') {
            activeFilters.clear();
            activeFilters.add('all');
        } else {
            activeFilters.delete('all');
            if (activeFilters.has(filterType)) {
                activeFilters.delete(filterType);
            } else {
                activeFilters.add(filterType);
            }
        }

        // Reset navigation
        currentStart = 0;

        // Show filtered events
        showEvents();

        // Remove active class from all filters
        filters.forEach(filter => filter.classList.remove('active'));
        // Add active class to the clicked filter
        this.classList.add('active');
    });
});

nextBtn.addEventListener('click', function () {
    currentStart += itemsPerPage;
    showEvents();
});

prevBtn.addEventListener('click', function () {
    currentStart -= itemsPerPage;
    showEvents();
});

Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
        display: [
            { id: "counter", position: "center" },
            "zoom",
            "slideshow",
            "fullscreen",
            "download",
            "thumbs",
            "close",
        ],
    },
    Thumbs: {
        autoStart: false,
    },
});

const boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(box => {
    const boxtitle = box.querySelector('.box-title');
    const boxtext = box.querySelector('.box-text');
    const boxoverlay = box.querySelector('.box-overlay');
    const hr = box.querySelector('hr');
    box.addEventListener('mouseover', () => {
        boxtitle.classList.add('active');
        boxtext.classList.add('active');
        boxoverlay.classList.add('active');
        hr.classList.add('active');
    });
    box.addEventListener('mouseleave', () => {
        boxtitle.classList.remove('active');
        boxtext.classList.remove('active');
        boxoverlay.classList.remove('active');
        hr.classList.remove('active');
    });
});

const sectionMeet = document.querySelector('#meet');
const boxImages = sectionMeet.querySelectorAll('.box-image');

// Tính toán vị trí offset từ đầu trang cho phần tử #meet
const offsetTop = sectionMeet.offsetTop;


// Thêm sự kiện lắng nghe khi cuộn trang
window.addEventListener('scroll', () => {
    if (window.innerWidth > 500) {
        // Tính toán vị trí hiện tại của cửa sổ so với đỉnh trang
        const scrollPosition = window.scrollY + window.innerHeight;

        // Kiểm tra nếu vị trí hiện tại lớn hơn vị trí offset của phần
        //  tử #meet
        if (scrollPosition > offsetTop) {
            // Thực hiện các hành động bạn muốn khi điều kiện được đáp ứng
            // Ví dụ: thêm class active cho các phần tử box-image
            boxImages.forEach(image => {
                image.classList.add('active');
            });
        } else {
            // Nếu không đáp ứng điều kiện, có thể xóa class active hoặc 
            // làm gì đó khác
            boxImages.forEach(image => {
                image.classList.remove('active');
            });
        }
    }
}); 