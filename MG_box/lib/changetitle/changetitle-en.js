    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '(つェ⊂)Woo woo, do not leave me!';
            clearTimeout(titleTime);
        }
        else {
            document.title = '(*´∇｀*) Haha, you are back!';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 2000);
        }
    });

