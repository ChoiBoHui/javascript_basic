$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'choi,s portfolio', 'copyright']
    // fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        // navigation: true,
        css3: false,
        // 풀페이지에서 배경 fixed 기능을 사용하기 위해서 적용시킴
        afterLoad: function (page, num) {
            // 첫페이지는 안붙음
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')
        },
    });




    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        asNavFor: '.basicSlider',
        // 여러개의 슬라이더를 동시에 돌아가게 하는 방법
    });

    $('.productSlider .slide_menu li').on('click', function () {
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    });

    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
    });


    $('.allOpen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').slideToggle();
    })


});