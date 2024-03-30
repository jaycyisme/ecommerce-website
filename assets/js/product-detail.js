document.addEventListener("DOMContentLoaded", function() {
    const outerThumbItems = document.querySelectorAll('.outer-thumb-item');
    const mainThumbItems = document.querySelectorAll('.main-thumb-item');

    outerThumbItems.forEach(function(outerThumbItem, index) {
        outerThumbItem.addEventListener('click', function() {
            // Loại bỏ class active khỏi tất cả outer-thumb-item
            outerThumbItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Loại bỏ class active khỏi tất cả main-thumb-item
            mainThumbItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Thêm class active cho outer-thumb-item được click
            outerThumbItem.classList.add('active');
            // Thêm class active cho main-thumb-item tương ứng
            mainThumbItems[index].classList.add('active');
        });
    });
});



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


document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll(".product-title");
    const detailContents = document.querySelectorAll(".detail-content");

    titles.forEach((title, index) => {
        title.addEventListener("click", function() {
            // Xóa class active khỏi tất cả các detail-content
            detailContents.forEach(detailContent => {
                detailContent.classList.remove("active");
            });

            // Thêm class active cho detail-content tương ứng với index của product-title
            detailContents[index].classList.add("active");
        });
    });
});
