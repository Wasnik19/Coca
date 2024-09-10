import '../assets/scss/contacts.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePartnersMobileSlider } from './components/home/slider.js';
import { usePhone } from './components/contacts/phone.js';

useTheme();
useBurger();
usePartnersMobileSlider();
usePhone();
