$(document).ready(function(){

//<- - - resize 함수영역 - - ->
    layout_tab();
    $(window).resize(function(){
            layout_tab();
            $('.page_wrap').css({
                left:0
            })
            $('.img_hide').css({
                display:'block'
            })
    })
//<함수> tab resize --//
    function layout_tab(){
        ww=$(window).innerWidth();
        wh=ww*2;
        if(ww>=768 && ww<1024){
        //-----전체 페이지 스타일 지정-----//
        $('.main_page,.page_wrap').css({
            width: ww,
            height: wh,
            top: 0,
            left: 0
        })
        //-----1.run_wrap-----//
        $('.run_wrap').css({
            display: 'none'
        })
        //-----2.main_page-----//
        $('.main_page').css({
            width: ww,
            height: wh,
            zIndex: 999,
            // display: 'none'
        })
        $('.main_page>img').css({
            width: ww,
            height:0.3*wh,
            marginTop:0.15*wh
        })
        $('.main_text').css({
            width: ww,
            marginBottom: 0.015*wh
        })
        $('.click_box').css({
            width: 0.2*ww,
            height:0.05*wh,
            lineHeight: 0.05*wh+'px',
            fontSize: 0.02*ww
        })
        //-----3.page_wrap-----(button_box/move_page)//
        $('.page_wrap').css({
            width: ww,
            height: wh*3,
            zIndex: 99,
            position: 'relative',
            display: 'none'
        })
        //1) 메뉴박스(button_box)
        $('.button_box').css({
            width: ww,
            height: 0.1*wh,
            paddingLeft: 0.1*ww,
            paddingRight: 0.1*ww,
            boxSizing: 'border-box',
            left:0,
            top: 'calc(100vh - ' + 0.1*wh + 'px)'
        })
        $('.button_con').css({
            width: 0.1*ww,
            height: 0.1*ww,
            cursor:'pointer',
            border: '',
            backgroundImage:'linear-gradient(#fff, #fff)'
        })
        $('.img_hide').css({
            display:'block'
        })
        let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
            $('.button_con>img').attr({
                src : function(abc){
                    return butIcon[abc]
                }
            })    
            $('.button_con>img').eq(0).attr({
                src:"./img/p_icon_11.png"
            })
        //2) move_page
        $('.move_page').css({
            width: ww,
            height: wh*3
        })
        $('.page').css({
            width: ww,
            height: wh
        })
        $('.page_1').css({
            paddingTop: 0.1*wh,
            // backgroundColor:"blue"
        })
        $('.page_2').css({
            paddingTop: 0.05*wh,
            backgroundColor:"purple"
        })
        $('.page_3').css({
            paddingTop: 0.1*wh,
            // backgroundColor:"darkcyan"
        })
        //----------(A)page_1 : 자기소개 영역
        $('.con_wrap').css({
            width: 0.8*ww,
            height: 0.7*wh,
            margin: '0 auto',
            // backgroundColor: 'green'
        })
        con_ww=$('.con_wrap').width();
        con_wh=$('.con_wrap').height();
        $('.left_con').css({
            width: con_ww*0.48,
            height:0.6*con_wh,
            // backgroundColor: 'black'
        })
        $('.left_con img').css({
            scale: 0.9
        })
        $('.right_con').css({
            width: con_ww*0.48,
            height:0.6*con_wh,
            // backgroundColor: 'pink'
        })
        let r_ww=$('.right_con').width();
        let r_wh=$('.right_con').height();
        $('.con_box').css({
            boxSizing: 'border-box',
            float: 'left'
        })
        $('.name_box').css({
            width: r_ww,
            height: 0.25*r_wh,
            lineHeight:0.25*r_wh+'px'
        })
        $('.birth_box,.certi_box').css({
            width: 0.5*r_ww,
            height: 0.25*r_wh
        })
        $('.skill_box').css({
            width: r_ww,
            height: 0.5*r_wh
        })
        //----------(B)page_2 : 프로젝트 영역 
        $('.swiper_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            backgroundColor: 'red'
        }) 
        $('.swiper').css({
            width: 0.6*ww,
            height: 0.45*wh,
            margin: '0 auto',
            backgroundColor: 'yellow'
        })
        $('.swiper-wrapper,.swiper-slide').css({
            width: '100%',
            height: '100%'
        })
        $('.pj_text').css({
            width: '100%',
            height: 0.05*wh,
            backgroundColor: 'blue'
        })   
        let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
        $('.swiper-slide img').attr({
            src: function(def){
                return port[def]
            }
        })
        $('.swiper-slide>img').css({
            width: '80%',
            height: 0.24*wh,
            borderRadius: '20px',
            marginTop:0.025*wh,
            marginBottom:0.025*wh,
            backgroundColor: 'green',
            marginLeft: '10%'
        })
        $('.pj_con').css({
            width: '100%',
            height: 0.05*wh,
            backgroundColor: 'blue'
        })
        let swiper_ww=$('.swiper_wrap').width()
        $('.swiper_button').css({
            width: '100%',
            height: 0.15*wh,
            // backgroundColor:'green'
        })
        $('.but_con').css({
            width: swiper_ww*0.3,
            height: swiper_ww*0.3,
            float: 'left',
            cursor: 'pointer',
            // border: '1px solid black',
            // boxSizing: 'border-box'
        })
        $('.left_but').css({
            marginLeft: swiper_ww*0.05
        })
        $('.right_but').css({
            marginRight: swiper_ww*0.05
        })
        //----------(C)page_3 : 콘텍트 영역
        $('.contact_box').css({
            width: 0.8*ww,
            height: 0.5*wh,
            margin: '0 auto',
            // backgroundColor: 'skyblue',
            padding: 0
        })
        $('.contact_box>.point_text').css({
            width: 0.8*ww,
            height: 0.1*wh,
            lineHeight: 0.1*wh+'px'
        })
        $('.call_box').css({
            width: 0.8*ww,
            height: 0.4*wh,
            padding: 0
            // backgroundColor: 'red'
        })
        let call_ww=$('.call_box').width()
        let call_wh=$('.call_box').height()
        $('.call_box div').css({
            width: call_ww*0.4,
            height: call_ww*0.4,
            // backgroundColor: 'hotpink',
        })
        $('.copyright_box').css({
            width: 0.8*ww,
            height: 0.1*wh,
            margin: '0 auto',
            marginTop: 0.025*wh
        })
    }
    }//lay_out함수의 끝

//---------------------------------------------------------------//
//------------------------------//
//----------이벤트영역-----------//
//----------2. Tab/mobile이벤트(ww<1024)----------

    //(5) scroll 위치값에 따른 button_con 변경 <TAB/MO>
    $(window).scroll(function(){
        if(ww<1024){
            let s_top=$(this).scrollTop();
            let pageIndex=0;
            if(s_top>=0 && s_top<wh){
                pageIndex=0;
                }else if(s_top>=wh && s_top<wh*2){
                    pageIndex=1;
                }else if(s_top>=wh*2 && s_top<wh*3){
                    pageIndex=2;
                }
                imgChange(pageIndex);
        }
    })
    //<함수> button_con img 변경 함수 
    function imgChange(button_index){
    let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
    let butIcon2=["./img/p_icon_11.png","./img/p_icon_22.png","./img/p_icon_33.png","./img/p_icon_44.png"]
        $('.button_con>img').attr({
            src : function(abc){
                return butIcon[abc]
            }
        })
        $('.button_con>img').eq(button_index).attr({
            src : function(){
                return butIcon2[button_index]
            }
        })
    } 

    // //(6) page2 : project banner_box 기능 <TAB/MO>
    // // '▶' 버튼 클릭
    // $('.right_but').click(function(){
    //     if(ww<1024){
    //         $('.pj_text').first().fadeOut(300, function(){
    //             $('.pj_text').eq(1).fadeIn(1000)
    //             $(this).appendTo('.project_text')
    //         });
    //         $('.pj_con').first().fadeOut(300, function(){
    //             $('.pj_con').eq(1).fadeIn(1000)
    //             $(this).appendTo('.con_text')
    //         });
    //     };
    // });
    // // '◀' 버튼 클릭
    // $('.left_but').click(function(){
    //     if(ww<1024){
    //         $('.pj_text').last().prependTo('.project_text')
    //         $('.pj_text').eq(1).fadeOut(300, function(){
    //             $('.pj_text').first().fadeIn(1000)
    //         });
    //         $('.pj_con').last().prependTo('.con_text')
    //         $('.pj_con').eq(1).fadeOut(300, function(){
    //             $('.pj_con').first().fadeIn(1000)
    //         });
    //     };
    // });
    // // bannerAuto = setInterval함수 저장
    // let swiperAuto=setInterval(function(){
    //     $('.right_but').trigger('click')
    //     },5000);
    // // 'pause'버튼 클릭
    // let but=0;
    // $('.pause_but').click(function(){
    //     if(ww<1024){
    //         but++
    //         clearInterval(swiperAuto);
    //         $('.pause_but>img').attr({
    //             src : "./img/play.png"
    //         })
    //         if(but>1){
    //             but=0;
    //             swiperAuto=setInterval(function(){
    //                 $('.right_but').trigger('click')
    //                 },5000);
    //                 $('.pause_but>img').attr({
    //                     src : "./img/pause.png"
    //                 })
    //             }
    //     }
    // })
})