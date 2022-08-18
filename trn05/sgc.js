$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'choi,s portfolio']
    // fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        // navigation: true,
        css3: false,
        // 풀페이지에서 배경 fixed 기능을 사용하기 위해서 적용시킴
        afterLoad: function (page, num) {
            // 첫페이지는 안붙음
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            // $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            // console.log(num)
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);
            // $('.this_bg').css({
            //     backgroundPositionY: - 100 * (num - 1) + "px"
            // })
            // $('.this_pic img').attr({ src: `./assets/img/lesedilarona0${num}.jpg` });
            // $('.this_tp').css({ background: `./assets/img/lesedilarona0${num}.jpg` })
            // 페이지가 스크롤 되는 것에 따라 번호를 받아와서 이미지를 바꾸는 방법!! 앤티엔스 프레즐에서 적용했음!
        },
    });

    // $('.page03').on('wheel', function (e) {
    //     console.log(e.originalEvent.wheelDelta);
    //     e.originalEvent.wheelDelta > 0 && fullpage_api.moveSlideLeft();
    // });


});