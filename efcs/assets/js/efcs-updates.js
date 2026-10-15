/* EFCS website changes (Oct 2026). Loaded at the end of every page, after Swiper and Bootstrap. */

/* Social media links used in the header top bar, footer and contact page.
   An empty value ('') keeps the icon visible but not clickable until the link is available. */
var EFCS_SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/p/Efcs-Polishing-61580737208186/',
    instagram: 'https://www.instagram.com/efcs_polishing/',
    linkedin: '',
    youtube: 'https://www.youtube.com/@EFCS_BLR',
    whatsapp: 'https://wa.me/918904312966'
};

(function () {
    function applySocialLinks() {
        document.querySelectorAll('a[data-social]').forEach(function (a) {
            var url = EFCS_SOCIAL_LINKS[a.getAttribute('data-social')];
            if (url) {
                a.href = url;
                a.target = '_blank';
                a.rel = 'noopener';
            } else {
                a.removeAttribute('href');
                a.removeAttribute('target');
                a.setAttribute('aria-disabled', 'true');
                a.style.cursor = 'default';
            }
        });
    }

    // Phone fields: digits only, exactly 10 digits
    function setupPhoneFields() {
        document.querySelectorAll('input[type="tel" i]').forEach(function (input) {
            input.setAttribute('maxlength', '10');
            input.setAttribute('minlength', '10');
            input.setAttribute('pattern', '[0-9]{10}');
            input.setAttribute('inputmode', 'numeric');
            function check() {
                var digits = input.value.replace(/\D/g, '').slice(0, 10);
                if (digits !== input.value) input.value = digits;
                input.setCustomValidity(digits.length === 10 || digits.length === 0 ? '' : 'Please enter a valid 10-digit mobile number.');
            }
            input.addEventListener('input', check);
            input.addEventListener('blur', check);
        });
    }

    // Visit date is mandatory and cannot be in the past
    function setupDateFields() {
        var d = new Date();
        var today = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        document.querySelectorAll('form input[type="date"]').forEach(function (input) {
            input.required = true;
            input.min = today;
        });
    }

    // Keep the page from jumping when the header's nav row becomes fixed on scroll
    function reserveHeaderSpace() {
        var header = document.querySelector('.efcs-header');
        if (!header) return;
        function measure() {
            var wasSticky = header.classList.contains('sticky');
            header.classList.remove('sticky');
            header.style.minHeight = '';
            header.style.minHeight = header.offsetHeight + 'px';
            if (wasSticky) header.classList.add('sticky');
        }
        measure();
        window.addEventListener('resize', measure);
        window.addEventListener('load', measure);
    }

    function setupServicesSlider() {
        if (typeof Swiper === 'undefined' || !document.querySelector('.swiper-services')) return;
        new Swiper('.swiper-services', {
            autoplay: { delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false },
            loop: true,
            grabCursor: true,
            spaceBetween: 10,
            navigation: { nextEl: '.services-next', prevEl: '.services-prev' },
            breakpoints: {
                300: { slidesPerView: 1 },
                551: { slidesPerView: 2 },
                769: { slidesPerView: 3 },
                1100: { slidesPerView: 4 }
            }
        });
    }

    function setYear() {
        document.querySelectorAll('.js-year').forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    }

    function init() {
        applySocialLinks();
        setupPhoneFields();
        setupDateFields();
        reserveHeaderSpace();
        setupServicesSlider();
        setYear();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
