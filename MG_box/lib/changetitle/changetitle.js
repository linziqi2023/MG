    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '(つェ⊂)呜呜呜，别离开我！';
            clearTimeout(titleTime);
        }
        else {
            document.title = '(*´∇｀*) 哈哈，你回来啦！';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 2000);
        }
    });

