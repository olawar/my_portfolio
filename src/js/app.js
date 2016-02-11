var Application = function(){

    function testStart(){
        console.log('Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com');
    }

    function navigationToggle(){
        var hamburgerMenu = $('.navigation-bubble');
        var navigationState = $('.navigation-state');
        var navigationTray = $('.navigation-wrapper');
        var navigationLinks = $('.navigation-wrapper a');

        hamburgerMenu.on('click', function(){
            navigationState.toggleClass('navigation-open');
            navigationTray.toggleClass('hidden').toggleClass('navigation-wrapper-visible');
            $('body').toggleClass('no-scroll');
        });

        navigationLinks.on('click', function(){
            navigationState.toggleClass('navigation-open');
            navigationTray.toggleClass('hidden').toggleClass('navigation-wrapper-visible');
            $('body').toggleClass('no-scroll');
        });

    }

    function experienceTabs(){
        var experienceTopics = $('.exp-title');
        var experienceArticle = $('.experience-section');

        experienceTopics.on('click', function() {
            if($(this).hasClass('exp-title-active')) {
                return false;
            }
            else {
                $('.experience-navigation').find('.exp-title-active').removeClass('exp-title-active');
                $('.experience-items').find('.experience-section-active').removeClass('experience-section-active').addClass('hidden');
                $(this).addClass('exp-title-active');
                if($(this).hasClass('exp-title-coding')) {
                    $('.experience-coding').removeClass('hidden').addClass('experience-section-active');
                }
                else if ($(this).hasClass('exp-title-communications')) {
                    $('.experience-communications').removeClass('hidden').addClass('experience-section-active');
                }
                else {
                    $('.experience-education').removeClass('hidden').addClass('experience-section-active');
                }
            }
        });

    }

    return {
        testStart:testStart,
        navigationToggle:navigationToggle,
        experienceTabs:experienceTabs
    }
};

$(function(){

    var app = new Application();
    app.testStart();
    app.navigationToggle();
    app.experienceTabs();
});
