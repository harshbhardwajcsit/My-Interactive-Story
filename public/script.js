/**
 * Created by samsung on 12-Mar-17.
 */



$(document).ready(function(){

    // Firefox bundles all background-edits in jQuery and overwrites the original. Didn't have the time to fix this.	
    var ua = $.browser;
    if ( ua.mozilla || ua.msie) {
        $("#ditbenik").css("visibility", "hidden");
        $("#hello").append("<small>Open this website in Chrome or Safari for the best performance</small>");
    }

    // Variables
    $window = $(window);
    var yPos;
    var currentScroll;
    var screenHeight = $(window).height();

    // Align the photo of me to the bottom. 
    $('#ditbenik').css("margin-top", screenHeight - 216 + "px");
    $('#links').css("padding-bottom", screenHeight - 765 + "px");


    var parallaxEffect = function(){
        //Add parallax effects to section with data type "background"            
        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object
            var currentPos = $bgobj.css('backgroundPositionY').replace("px","");
            var i = 0;

            $(window).scroll(function() {
                i=i+1;
                currentScroll = $window.scrollTop();

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it up							
                yPos = currentPos -($window.scrollTop() / $bgobj.data('speed'));

                // Put together the final background position
                var coords =  '50% ' + yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

                //Align image to bottom
                var marginruimte = screenHeight - $bgobj.height();

                //Change the color of the background
                if(currentScroll < 308){
                    $('#wrapper').css("background", "#45d2e8");
                } else if(currentScroll >= 308){
                    $('#wrapper').css("background", "#45e8d3");
                } if(currentScroll >= 708){
                    $('#wrapper').css("background", "#96d6a5");
                } if(currentScroll >= 1104){
                    $('#wrapper').css("background", "#FF7372");
                }  if(currentScroll >= 1958){
                    $('#wrapper').css("background", "#ffc154");
                }

                // Getting Daan fixed in the screen
                if(currentScroll >= 308){
                    $('#ditbenik').css({backgroundPosition: '50% 0'});
                    $('#ditbenik').css("visibility", "visible");
                    $('#ditbenik').css("position", "fixed");
                    $('#ditbenik').css("z-index", "5");
                    $('#ditbenik').css("top", marginruimte);
                    $('#ditbenik').css("margin-top", "0");
                };

                // Getting Daan relative in the screen again
                if(currentScroll < 308){
                    $('#ditbenik').css("top", "0");
                    $('#ditbenik').css("margin-top", screenHeight - 216 + "px");
                    $('#ditbenik').css("position", "relative");
                };

                // Putting the presscard on
                $('#presscard').css("margin-top", screenHeight - 407 + "px");
                if(currentScroll >= 691){
                    $('#presscard').css("height", "118px");
                } else if(currentScroll < 691){
                    $('#presscard').css("height", "0");
                };

                //Getting the glasses fixed and visible
                if(currentScroll >= 880){
                    $('#bril').css("position", "fixed");
                    $('#bril').css("opacity", "1");
                    $('#bril').css("margin-top", -(485 - screenHeight) + "px");
                };

                //Let the glasses disappear and return to original state
                if(currentScroll < 880){
                    $('#bril').css("position", "absolute");
                    $('#bril').css("margin-top", -(485 - screenHeight) + "px");
                    $('#bril').css("opacity", "0");
                };

                //Getting the graduation hat section fixed
                if(currentScroll >= 919){
                    $('#afstuderen').css("position", "fixed");
                    $('#afstuderen').css("top", 0);
                    $('#afstuderen').css("margin-top", -(960 - screenHeight) + "px");
                };
                //Getting the graduation hat fixed on my head
                if(currentScroll >= 1536){
                    $('#afstuderen').css("background-position-y", $('#hoedje').height() - 30 + "px");
                };


                //Animate the chestpocket
                $('#chestpocket').css("top", screenHeight - 343 + "px");
                if(currentScroll >= 2143){
                    $('#chestpocket').css("height", "69px");
                } else if(currentScroll < 2143){
                    $('#chestpocket').css("height", "0");
                };

                //Animate the toolbelt
                $('#belt').css("top", screenHeight - 199 + "px");
                if(currentScroll >= 2200){
                    $('#belt').css("width", "180px");
                } else if(currentScroll < 2200){
                    $('#belt').css("width", "0");
                };

                //Let the LED's appear and animate them using .delay() and .queue()
                $('#led_red').css("top", screenHeight - 415 + "px");
                $('#led_blue').css("top", screenHeight - 415 + "px");
                if(currentScroll >= 2250){
                    $('#led_red').css("display", "block").delay(1000).queue(function() {
                        $(this).css("background", "url(red_off.png) no-repeat");
                        $(this).dequeue();
                    });
                    $('#led_red').delay(1000).queue(function() {
                        $(this).css("background", "url(red_on.png) no-repeat");
                        $(this).dequeue();
                    });

                    $('#led_blue').css("display", "block").delay(1000).queue(function() {
                        $(this).css("background", "url(blue_off.png) no-repeat");
                        $(this).dequeue();
                    });
                    $('#led_blue').delay(1000).queue(function() {
                        $(this).css("background", "url(blue_on.png) no-repeat");
                        $(this).dequeue();
                    });
                } else if(currentScroll < 2250){
                    $('#led_red').css("display", "none");
                    $('#led_blue').css("display", "none");
                };

                //Animate the antenna
                if(currentScroll >= 2270){
                    $('#antenna').css("background-position-y", "0");
                    $('#antenna').css("top", screenHeight - 600 + "px");
                    $('#antenna').css("visibility", "visible");
                } else if(currentScroll < 2270){
                    $('#antenna').css("background-position-y", "96px");
                    $('#antenna').css("visibility", "hidden");
                };


                //Getting the streetview in the screen
                $('#background').css("height",  screenHeight);

                if(currentScroll >= 3350){
                    $('#background').css("position", "fixed");
                    $('#background').css("bottom", "0");
                    $('#background').css("background-position-y", 0);
                } else if(currentScroll < 3350){
                    $('#background').css("position", "absolute");
                    $('#background').css("bottom", "");
                }

                //For every scroll distance, the streetview will lift up. The height of every shift is screenwidth/1.6 (resolution 1280x800)
                if(currentScroll >= 3460){
                    $('#background').css("background-position", "50%" + -($(window).width()/1.01851852) + "px");
                }
                if(currentScroll >= 3500){

                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*2-($(window).width()/7) + "px"));

                }
                if(currentScroll >= 3540){
                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*3-($(window).width()/7)+ "px"));
                }
                if(currentScroll >= 3580){
                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*4-($(window).width()/7)+ "px"));
                }
                if(currentScroll >= 3620){
                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*5-($(window).width()/7)+ "px"));
                }
                if(currentScroll >= 3660){
                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*6-($(window).width()/7)+ "px"));
                }
                if(currentScroll >= 3700){
                    $('#background').css("background-position", "50%" + (-($(window).width()/1.01851852)*7-($(window).width()/7)+ "px"));
                }

            }); // window scroll Ends		
        });
    };//Parallax effect
    parallaxEffect();
//Measuring tool to animate the illustrations
    $('section').click(function(){
        console.log(currentScroll);
        console.log(screenHeight);
    });

});
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");