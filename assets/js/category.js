// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        const clickedBtn = this.nextElementSibling.classList.contains("active");

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;

            if (accordion[i].classList.contains("active")) {
                // accordion[i].classList.remove("active");
                accordionBtn[i].classList.remove("active");
            }
        }

        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}




document.addEventListener("DOMContentLoaded", function() {
    const colorItems = document.querySelectorAll('.color-item');

    colorItems.forEach(function(colorItem) {
        colorItem.addEventListener('click', function() {
            // Loại bỏ class active khỏi tất cả color-item
            colorItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Thêm class active cho color-item được click
            colorItem.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const colorItems = document.querySelectorAll('.size');

    colorItems.forEach(function(colorItem) {
        colorItem.addEventListener('click', function() {
            // Loại bỏ class active khỏi tất cả color-item
            colorItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Thêm class active cho color-item được click
            colorItem.classList.add('active');
        });
    });
});