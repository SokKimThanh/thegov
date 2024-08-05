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
});



/**
 * Lập trình tắt/mở menu mobile (menu-bar-icon)
 */

const menuBarIcon = document.querySelector('.menu-bar-icon');

menuBarIcon.addEventListener('click', () => {
    // tìm thấy menu overlay 
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuContainerSlider = document.querySelector('.menu-container-slider');

    // active menu overlay
    menuOverlay.classList.add('active');
    menuContainerSlider.classList.add('active');
    menuOverlay.addEventListener('click', ()=>{
        menuOverlay.classList.remove('active');
        menuContainerSlider.classList.remove('active');
    });
});
