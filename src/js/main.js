import $ from "jquery";

// Parts
import { toggleHeaderMenu, setHeaderPositionFixed } from './template-parts/header/header';
import { getSlider } from './template-parts/slider';
import { toggleDropdown } from './template-parts/dropdown';
import { getFormAccept } from './template-parts/formAccept';
import { postFilter } from './template-parts/post-filter';
import { chooseBookingDate, showBookingForm, bookingFormSubmit } from './template-parts/booking';
import { showFormPhone, copyFormImage, hiddenContent } from './template-parts/form';

// Animations
import './animations/appearence';
import './template-parts/nice-select';


toggleHeaderMenu();
setHeaderPositionFixed();
getSlider();
toggleDropdown();
getFormAccept();
postFilter();
chooseBookingDate();
showBookingForm();
bookingFormSubmit();
showFormPhone();
copyFormImage();
hiddenContent();