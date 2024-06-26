// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
    modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
    notificationToast.classList.add("closed");
});



// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        const clickedBtn = this.nextElementSibling.classList.contains("active");

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;

            if (accordion[i].classList.contains("active")) {
                accordion[i].classList.remove("active");
                accordionBtn[i].classList.remove("active");
            }
        }

        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const cartOverlay = document.querySelector('.cart-popup-overlay');
    const cartPopup = document.getElementById('data-cart');
    const cartBtn = document.querySelector('.bag-handle');

    // Hàm để thêm lớp active
    function addActiveClass(element) {
        cartOverlay.classList.add('active');
        element.classList.add('active');
    }

    function removeActiveClass() {
        cartOverlay.classList.remove('active');
        cartPopup.classList.remove('active');
    }

    cartBtn.addEventListener('click', function() {
        removeActiveClass();
        addActiveClass(cartPopup);
    });

    cartOverlay.addEventListener('click', removeActiveClass);
    document.querySelectorAll('.close-trigger').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', removeActiveClass);
});

});