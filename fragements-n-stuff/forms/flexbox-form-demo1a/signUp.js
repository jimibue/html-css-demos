/**
 * Created by jcc on 9/25/15.
 */
$(document).ready(function () {
    var signUpForm = {
        $container: $('#signUp'),
        $homePage: $('#homePage'),

        config:{
            effect: 'fadeToggle',
            speed: 1000
        },

        init:function(){
            $('#signUp-btn').on('click', signUpForm.show);
        },

        show:function(){
            //console.log(this);
            if(signUpForm.$container.is(':hidden')) {
                signUpForm.$container[signUpForm.config.effect](signUpForm.config.speed);
                signUpForm.$homePage[signUpForm.config.effect](signUpForm.config.speed);
                signUpForm.close.call(signUpForm.$container);
            }
        },

        close: function(){
            var $this = $(this); //container

            if($this.find('span.close')[0] ) return;
            $("<span class=close>X</span>")
                .prependTo("#head")
                .on('click', function(){
                    signUpForm.$container[signUpForm.config.effect](signUpForm.config.speed);
                    signUpForm.$homePage[signUpForm.config.effect](signUpForm.config.speed);
                });
        }
    };

    signUpForm.init();
});