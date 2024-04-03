document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các ion-icon trong phần payment-methods
    const icons = document.querySelectorAll('.payment-methods ion-icon');

    // Duyệt qua từng icon và thêm sự kiện click
    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            // Xóa class active từ tất cả các icon
            icons.forEach(function(icon) {
                icon.classList.remove('active');
            });
            
            // Thêm class active vào icon được click
            this.classList.add('active');
        });
    });
});
