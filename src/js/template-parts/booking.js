import $ from 'jquery';
import flatpickr from "flatpickr";

function chooseBookingDate() {
    const checkIn = $('#check-in');
    const checkOut = $('#check-out');

    flatpickr("#datepicker", {
        mode: "range",
        dateFormat: "Y-m-d",
        inline: true,
        onChange: function (selectedDates, dateStr, instance) {
            if (selectedDates.length === 1) {
                checkIn.val(instance.formatDate(selectedDates[0], "d-m-Y"));
                checkOut.val('');

                setFlatpickrDayClass();
                setFlatpickrDayHeight();
            } else if (selectedDates.length === 2) {
                checkIn.val(instance.formatDate(selectedDates[0], "d-m-Y"));
                checkOut.val(instance.formatDate(selectedDates[1], "d-m-Y"));

                setFlatpickrDayClass();
                setFlatpickrDayHeight();
            }
        }
    });

    setFlatpickrDayHeight();
}

function showBookingForm () {
    const bookingBtn = $('.booking-btn');
    const bookingForm = $('.booking-form');
    const bookingSelect = bookingForm.find('select, .nice-select, .current');

    console.log(bookingSelect)

    bookingBtn.on('click', function (e) {
        e.preventDefault();
        bookingBtn.toggleClass('active');
        bookingForm.toggleClass('form-visible');
    });

    $(document).on('click', function (e) {
        if(!bookingForm.is(e.target) && bookingForm.has(e.target).length === 0 && !bookingBtn.is(e.target)) {
            bookingBtn.removeClass('active');
            bookingForm.removeClass('form-visible');
        }
    });
}

function bookingFormSubmit () {
    const form = $('#booking-form');

    form.submit(function(event) {
        event.preventDefault();

        var url = 'https://be.synxis.com/?';

        var arrive = $(this).find('[name="arrive"]').val();
        var depart = $(this).find('[name="depart"]').val();
        var adultChild = $(this).find('[name="guests"]').val();

        var values = adultChild.split('-');
        var adult = values[0];
        var child = values[1];

        url += 'adult=' + adult + '&arrive=' + arrive + '&chain=10205&child=' + child + '&config=gemma&currency=EUR&depart=' + depart + '&hotel=40864&level=hotel&locale=it-IT&rooms=1&theme=gemma'

        window.location.href = url;
    });
}
function setFlatpickrDayHeight() {
    const flatpickrDay = $('.flatpickr-day');
    flatpickrDay.height(flatpickrDay.width() + 'px');
}

function setFlatpickrDayClass() {
    const flatpickrDay = $('.flatpickr-day');
    const inRange = $('.inRange');

    flatpickrDay.first().removeClass('firstR');
    flatpickrDay.last().removeClass('lastR');

    if  (inRange.length) {
        inRange.first().addClass('firstR');
        inRange.last().addClass('lastR');
    }

}

$(window).on('resize', setFlatpickrDayHeight);
$(document).on('click', setFlatpickrDayHeight)

export {chooseBookingDate, showBookingForm, bookingFormSubmit}