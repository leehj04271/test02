(function ($) {



    
    $("#nav").load("nav.html .nav-box", function () {


        const loc = document.location.pathname.slice(8);
        console.log(loc)
        const list = document.querySelectorAll('#nav .list');


        list.forEach((item) => {
            const href = $(item).children('a').attr('href')
            if (href === loc) {
                item.classList.add('active');
            }
        })


    });



})(jQuery)
