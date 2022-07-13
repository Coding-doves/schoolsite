(function($) {
    // 
    // 
    // 
    // 
    var slide = function(ele,options) {
        var $ele = $(ele);
        // 
        var setting = {
        		// 
            speed: 2000,
            // 
            interval: 4000,
            
        };
        //
        $.extend(true, setting, options);
        // 
        var states = [
            { $zIndex: 1, width: 70, height: 150, top: 160, left: 100, $opacity: 0.5 },
            { $zIndex: 2, width: 144, height: 288, top: 10, left: 163, $opacity: 1 },
            { $zIndex: 1, width: 70, height: 150, top: 0, left: 280, $opacity: 0.5}
        ];

        var $lis = $ele.find('li');
        var timer = null;

        //
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        // 
        //
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        //
        function next() {
            //
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    // 
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // 
        return this;
    }
})(jQuery);