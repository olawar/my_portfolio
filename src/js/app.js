var Application = function(){

    function testStart(){
        console.log('Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com');
    }

    function navigationToggle(){
        // var hamburgerMenu = $('.navigation-bubble'),
        //     navigationState = $('.navigation-state'),
        //     navigationTray = $('.navigation-wrapper'),
        //     navigationLinks = $('.navigation-wrapper a');
        //
        // hamburgerMenu.on('click', function(){
        //     navigationState.toggleClass('navigation-open');
        //     navigationTray.toggleClass('hidden').toggleClass('navigation-wrapper-visible');
        //     if(window.matchMedia('(max-width: 899px)').matches){
        //         $('body').toggleClass('no-scroll');
        //     }
        // });
        //
        // navigationLinks.on('click', function(){
        //     navigationState.toggleClass('navigation-open');
        //     navigationTray.toggleClass('hidden').toggleClass('navigation-wrapper-visible');
        //     if(window.matchMedia('(max-width: 899px)').matches){
        //         $('body').toggleClass('no-scroll');
        //     }
        // });

    }

    function experienceTabs(){
        var experienceTopics = $('.exp-title');

        $('.experience-navigation').find('.exp-title-active').attr('aria-expanded', 'true').attr('aria-selected', 'true');
        $('.experience-items').find('.experience-section-active').attr('aria-expanded', 'true').attr('aria-selected', 'true');

        experienceTopics.on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('exp-title-active')) {
                return false;
            }
            else {
                $('.experience-navigation').find('.exp-title-active').removeClass('exp-title-active').attr('aria-expanded', 'false').attr('aria-selected', 'false');
                $('.experience-items').find('.experience-section-active').removeClass('experience-section-active').addClass('hidden').attr('aria-hidden', 'true');
                $(this).addClass('exp-title-active').attr('aria-expanded', 'true').attr('aria-selected', 'true');

                if($(this).hasClass('exp-title-coding')) {
                    $('.experience-coding').removeClass('hidden').addClass('experience-section-active').attr('aria-hidden', 'false');
                }
                else if ($(this).hasClass('exp-title-communications')) {
                    $('.experience-communications').removeClass('hidden').addClass('experience-section-active').attr('aria-hidden', 'false');
                }
                else {
                    $('.experience-education').removeClass('hidden').addClass('experience-section-active').attr('aria-hidden', 'false');
                }
            }
        });

    }

    function accessibleClick(){

        $('.navigation-bubble, .exp-title, .navigation-wrapper a').on('keypress', function(e){
            if(e.which == 13) {
                $(this).trigger('click');
            }
        });

    }

    function worksMask(){

        var worksItems = $('.item-mask');

        worksItems.on('focus', function(e){
            worksItems.removeClass('mask-active');
            $(this).addClass('mask-active');
        });

        worksItems.find('a').on('focus', function(e){
            worksItems.removeClass('mask-active');
            $(this).parents('.item-mask').addClass('mask-active');
        });

    }

    return {
        testStart:testStart,
        navigationToggle:navigationToggle,
        experienceTabs:experienceTabs,
        accessibleClick:accessibleClick,
        worksMask:worksMask
    }
};

$(function(){

    var app = new Application();
    app.testStart();
    app.navigationToggle();
    app.experienceTabs();
    app.accessibleClick();
    app.worksMask();
});
