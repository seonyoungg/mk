$(document).ready(function(){
    
    let ww=$(window).innerWidth();
    let wh=$(window).innerHeight();

//<- - - resize 함수영역 - - ->

    layout_tab();
    $(window).resize(function(){
            layout_tab();
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
            bottom:0
        })
        $('.button_con').css({
            width: 0.1*ww,
            height: 0.1*ww,
            cursor:'pointer',
            // backgroundColor: 'red'
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
            backgroundColor:"blue"
        })
        $('.page_2').css({
            paddingTop: 0.05*wh,
            backgroundColor:"purple"
        })
        $('.page_3').css({
            paddingTop: 0.1*wh,
            backgroundColor:"darkcyan"
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
        $('.project_text').css({
            width: '100%',
            height: 0.05*wh,
            backgroundColor: 'blue',
            position:'relative'
        })
        $('.swiper_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            backgroundColor: 'red',
            paddingLeft: '5%',
            paddingRight: '5%',
            boxSizing: 'borderBox'
        }) 
        $('.swiper-wrapper,.swiper-slide').css({
            width: '100%',
            height: '100%'
        })   
        let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
        $('.swiper-slide img').attr({
            src: function(def){
                return port[def]
            }
        })
        $('.con_text').css({
            width: '100%',
            height: 0.05*wh,
            backgroundColor: 'blue',
            position:'relative',
            marginBottom: 0.01*wh
        })
        $('.swiper').css({
            width: '86%',
            marginLeft: '7%',
            height: 0.35*wh,
            marginTop: 0.01*wh,
            marginBottom: 0.01*wh,
            borderRadius: '20px',
            backgroundColor: "green"
        })
        let swiper_ww=$('.swiper_wrap').width()
        $('.swiper_button').css({
            width: '100%',
            height: 0.15*wh,
            backgroundColor:'green'
        })
        $('.but_con').css({
            width: swiper_ww*0.3,
            height: swiper_ww*0.3,
            float: 'left',
            cursor: 'pointer',
            border: '1px solid black',
            boxSizing: 'border-box'
        })
        $('.left_but').css({
            marginLeft: swiper_ww*0.05
        })
        $('.right_but').css({
            marginRight: swiper_ww*0.05
        })
        $('.pj_text,.pj_con').css({
            display: 'none'
        })
        $('.con_text').css({
            width: '100%',
            height: 0.1*wh,
            marginTop: 0.03*wh,
            marginBottom: 0.01*wh,
            backgroundColor: 'skyblue',
            position:'relative'
        })
        $('.pj_con').css({
            width: '90%',
            marginLeft: '5%',
            backgroundColor: 'white'
        })
        $('.pj_text').eq(0).css({
            display: 'block'
        })
        $('.pj_con').eq(0).css({
            display: 'block'
        })
        //----------(C)page_3 : 콘텍트 영역
        $('.contact_box').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            // backgroundColor: 'white'
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
            // backgroundColor: 'hotpink',
        })
    }
    }//lay_out함수의 끝

    })