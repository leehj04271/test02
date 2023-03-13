(function ($) {





  

    function activeLink() {
        list.forEach((item) =>

            item.classList.remove('active'));
        this.classList.add('active');
    }

    list.forEach((item) => { console.log(item); item.addEventListener('click', activeLink) }



    )




})(jQuery)