import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        slidesPerView: '1',
        spaceBetween: 32,
        loop: true,
        modules: [Navigation],

        navigation: {
            nextEl: '.testimonials__btn--next',
            prevEl: '.testimonials__btn--prev',
        },
    });
};

export const usePartnersMobileSlider = () => {
    new Swiper('.partners__slider', {
        slidesPerView: '3',
        spaceBetween: 5,
        loop: true,
        centeredSlides: true,
        modules: [Autoplay],

        autoplay: {
            delay: 1000,
        },
    });
};
