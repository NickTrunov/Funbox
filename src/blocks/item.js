$('.js-card__body').on('click', function(){
    $(this).toggleClass('card__body--inactive');
    $(this).toggleClass('card__body--active');
    $(this).addClass('card__body--no-hover');

    $(this).siblings('.card__bottom').children('.card__bottom-text').toggleClass('card__bottom-text--inactive');
    $(this).siblings('.card__bottom').children('.card__bottom-link').toggleClass('card__bottom-link--inactive');
});

$('.js-card__link').on('click', function () {
    $(this).closest('.card__bottom').siblings('.js-card__body').toggleClass('card__body--inactive');
    $(this).closest('.card__bottom').siblings('.js-card__body').toggleClass('card__body--active');

    $(this).closest('.card__bottom-link').siblings('.card__bottom-text').toggleClass('card__bottom-text--inactive');
    $(this).closest('.card__bottom-link').toggleClass('card__bottom-link--inactive');
});

$('.js-card__body').on('mouseleave', function () {
    $('.js-card__body').removeClass('card__body--no-hover');
});