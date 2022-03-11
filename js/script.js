$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev slick"><img src="icons/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next slick"><img src="icons/chevron-right-solid.svg"></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlider(item) {
        $(item).each(function (i){
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlider('.catalog-item__back')
    toggleSlider('.catalog-item__link')

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    })

    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function FormValidate(item) {
        $(item).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Нужно ввести {0} или больше символов!")
                },
                tel: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите вашу почту",
                    email: "Не правильно введён адрес почты"
                }
            }
        });
    };

    FormValidate('#consultation-form')
    FormValidate('#consultation form')
    FormValidate('#order form')

});