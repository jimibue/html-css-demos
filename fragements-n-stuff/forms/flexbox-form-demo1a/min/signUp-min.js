$(document).ready(function(){var e={$container:$("#signUp"),$homePage:$("#homePage"),config:{effect:"fadeToggle",speed:1e3},init:function(){$("#signUp-btn").on("click",e.show)},show:function(){e.$container.is(":hidden")&&(e.$container[e.config.effect](e.config.speed),e.$homePage[e.config.effect](e.config.speed),e.close.call(e.$container))},close:function(){var n=$(this);n.find("span.close")[0]||$("<span class=close>X</span>").prependTo("#head").on("click",function(){e.$container[e.config.effect](e.config.speed),e.$homePage[e.config.effect](e.config.speed)})}};e.init()});