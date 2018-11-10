/*--------------------------------------------------------------------
 *JAVASCRIPT "pagePreloader.js"
 *Version:    1.0.0 - 2015
 *author:     Ivo Valkov
 *website:    http://www.inspiretheme.com
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
 
    $.fn.pagePreloader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide pagePreloader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '10001',  // Default zIndex 
            bgColor: '#ffffff', // Default background color
            spinner:'spinner1', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="sk-rotating-plane"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div></div>';
        var spinner04 = '<div class="fl spinner4"><div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="sk-spinner sk-spinner-pulse"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div></div>';
        var spinner08 = '<div class="fl spinner8"><div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div></div>';
        var spinner09 = '<div class="fl spinner9"><div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div></div>';
        var spinner10 = '<div class="fl spinner10"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div>';
        var spinner11 = '<div class="fl spinner11"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div>';

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    case 'spinner8':
                            el.html(spinner08);
                        break;
                    case 'spinner9':
                            el.html(spinner09);
                        break;
                    case 'spinner10':
                            el.html(spinner10);
                        break;
                    case 'spinner11':
                            el.html(spinner11);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl customimage"><img src="'+settings.imagePath+'"></div>');
                }
                centerLoader();
        });

        //Time to hide pagePreloader
        if (settings.timeToHide !== false) {
            setTimeout(function(){
                $(el).fadeOut();
            }, settings.timeToHide);
        }

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




