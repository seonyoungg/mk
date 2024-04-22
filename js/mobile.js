$(document).ready(function(){
    
//<- - - resize 함수영역 - - ->
    layout_mo();
    $(window).resize(function(){
            layout_mo();
            $('.page_wrap').css({
                display: 'block',
                left: 0
            })
            $('.img_hide').css({
                display:'block'
            })
    })
//<함수> layout_mobile
    function layout_mo(){
        ww=$(window).innerWidth();
        wh=ww*2;
        if(ww<768){
        //-----전체 페이지 스타일 지정-----//
        $('.main_page,.page_wrap').css({
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
            display: 'none' 
        })
        $('.main_page>img').css({
            width: ww,
            height:0.3*wh,
            marginTop:0.15*wh
        })
        $('.main_text').css({
            width: 0.5*ww,
            // backgroundColor: 'red',
            marginBottom: 0.015*wh
        })
        $('.click_box').css({
            width: 0.2*ww,
            height:0.05*wh,
            lineHeight: 0.05*wh+'px',
            fontSize: 0.03*ww
        })
        //-----3.page_wrap-----(button_box/move_page)//
        $('.page_wrap').css({
            width: ww,
            height: wh*3,
            zIndex: 99,
            position: 'relative',
            // display: 'none'
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
            paddingTop: 0.05*wh,
            // backgroundColor:"red"
        })
        $('.page_2').css({
            paddingTop: 0.1*wh,
            // backgroundColor:"purple"
        })
        $('.page_3').css({
            paddingTop: 0.1*wh,
            // backgroundColor:"darkcyan"
        })
        /*----------(A)page_1 : 자기소개 영역*/
        // con_wrap : (left_con/right_con의 부모)
        $('.con_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            // backgroundColor: 'darkgrey'
        })
        con_ww=$('.con_wrap').width();
        con_wh=$('.con_wrap').height();
        $('.left_con').css({
            width: con_ww,
            height:0.4*con_wh
        })
        $('.right_con').css({
            width: con_ww,
            height: 0.6*con_wh,
            marginTop: '10px',
            // backgroundColor: 'yellow'
        })
        let r_ww=$('.right_con').width();
        let r_wh=$('.right_con').height();
        $('.con_box').css({
            boxSizing: 'border-box',
            float: 'left'
        })
        //con_box
        $('.name_box').css({
            width: con_ww,
            height: 0.15*r_wh,
            lineHeight:0.15*r_wh+'px',
            // backgroundColor: 'red'
        })
        $('.birth_box,.certi_box').css({
            width: 0.45*r_ww,
            height: 0.4*r_wh,
            // backgroundColor: 'blue',
        })
        $('.birth_box').css({
            marginLeft:0.05*r_ww,
        })
        $('.certi_box').css({
            marginRight:0.05*r_ww,
        })
        $('.skill_box').css({
            marginLeft:0.05*r_ww,
            marginRight:0.05*r_ww,
            width: 0.95*r_ww,
            height: 0.35*r_wh,
            // backgroundColor: 'pink'
        })
        $('.skill_img').css({
            marginTop: 0.02*r_wh 
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
            // backgroundColor: 'red'
        })
        let call_ww=$('.call_box').width()
        let call_wh=$('.call_box').height()
        $('.call_box div').css({
            width: call_ww*0.4,
            height: call_ww*0.4,
            padding: 0
            // backgroundColor: 'hotpink',
        })
        } 
        $('.copyright_box').css({
            width: 0.8*ww,
            height: 0.1*wh,
            margin: '0 auto',
            marginTop: 0.025*wh
        })
    }
    //lay_out함수의 끝
})