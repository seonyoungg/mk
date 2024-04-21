$(document).ready(function(){

//<- - - resize 함수영역 - - ->
    layout_mo();
    $(window).resize(function(){
        layout_mo();
    })

//<함수> layout_mobile
    function layout_mo(){
        ww=$(window).innerWidth();
        wh=ww*2;
        if(ww<768){
        $('.run_wrap').css({
            display: 'none'
        })
        $('.main_page').css({
            width: ww,
            height: wh,
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 999,
            display: 'none' //편집하기 위함 - 추후 삭제
        })
        $('.page_wrap').css({
            width: ww,
            height: wh*3,
            backgroundColor: 'white',
            zIndex: 99,
            position: 'relative',
        })

    //1. run_wrap : pc에서만 display:bldck 그 외 none
    //2. main_page - - - - - - - - - - - - 
        $('.main_page>img').css({
            position: 'absolute',
            width: 0.6*ww,
            height:0.5*wh,
            marginLeft:0.2*ww,
            marginTop:0.12*wh
        })
            
        $('.main_text').css({
            width: 0.8*ww,
            height:0.15*wh,
            fontSize: "5rem",
            marginLeft:-0.4*ww,
            boxSizing: 'border-box',
            // lineHeight: 0.15*wh+'px'
        })
        $('.click_box').css({
            width: 0.07*ww,
            height:0.07*wh,
            backgroundColor:'black',
            color:'#fff',
            lineHeight: 0.07*wh+'px',
            marginLeft:-0.035*ww,
            marginTop: 0.15*wh,
            fontSize: 0.013*ww,
            cursor: 'pointer'   
        })
    //3. page_wrap(button_box/move_page) - - - - - - - - - - - - 
        //3-1. mobile: button_box
        $('.button_box').css({
            width: ww,
            height: 0.1*wh,
            // marginTop: 0.9*wh,
            paddingLeft: 0.1*ww,
            paddingRight: 0.1*ww,
            boxSizing: 'border-box',
        })
        $('.button_con').css({
            width: 0.1*ww,
            height: 0.1*ww,
            cursor:'pointer'
        })
        let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
        $('.button_con>img').attr({
            src : function(abc){
                return butIcon[abc]
            }
        })
        //3-2. move_page
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
            backgroundColor:"red"
        })
        $('.page_2').css({
            paddingTop: 0.05*wh,
            // backgroundColor:"purple"
        })
        $('.page_3').css({
            paddingTop: 0.25*wh,
            // backgroundColor:"darkcyan"
        })
        //3-2.(A)page_1 : 자기소개 영역
        // con_wrap : (left_con/right_con의 부모)
        $('.con_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            backgroundColor: 'darkgrey'
        })
        con_ww=$('.con_wrap').width();
        con_wh=$('.con_wrap').height();
        $('.left_con').css({
            width: con_ww,
            height:0.4*con_wh,
            // border: '1px solid black'
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
            backgroundColor: 'red'
        })
        $('.birth_box,.certi_box').css({
            width: 0.5*r_ww,
            height: 0.5*r_wh,
            backgroundColor: 'blue',
        })
        $('.skill_box').css({
            width: con_ww,
            height: 0.35*r_wh,
            backgroundColor: 'pink'
        })
        //3-2(B)page_2 : 프로젝트 영역
        $('.swiper_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            backgroundColor: 'darkgrey',
            boxSizing: 'borderBox'
        })        
        let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
        $('.swiper-slide img').attr({
            src: function(def){
                return port[def]
            }
            })
        $('.project_text').css({
            width: '100%',
            height: 0.1*wh,
            backgroundColor: 'blue',
            position:'relative'
        })
        $('.swiper').css({
            width: '86%',
            marginLeft: '7%',
            height: 0.35*wh,
            marginTop: 0.01*wh,
            marginBottom: 0.01*wh,
            borderRadius: '20px',
            backgroundColor: "red"
        })
        $('.swiper-wrapper,.swiper-slide').css({
            width: '100%',
            height: '100%'
        })
        let swiper_ww=$('.swiper_wrap').width()
        let swiper_wh=$('.swiper').height()
        $('.swiper_button').css({
            width: '100%',
            height: 0.15*wh,
            backgroundColor:'green'
        })
        $('.swiper input').css({
            display: 'none'
        })
        $('.but_con').css({
            width: swiper_ww*0.3,
            height: swiper_ww*0.3,
            float: 'left',
            cursor: 'pointer',
            border: '1px solid black',
            boxSizing: 'border-box',
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
            height: 0.15*wh,
            marginTop: 0.01*wh,
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
        //3-2.(C)page_3 : 콘텍트 영역
        $('.contact_box').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            backgroundColor: 'white'
        })
        $('.call_box').css({
            width: '100%',
            height: 0.4*wh,
            backgroundColor: 'red'
        })
        let call_ww=$('.call_box').width()
        let call_wh=$('.call_box').height()
        $('.call_box>div').css({
            width: call_ww*0.4,
            height: call_ww*0.4,
            backgroundColor: 'hotpink',
        })
        } 
    }
    //lay_out함수의 끝

    
    //<- - - - - 모바일 이벤트영역- - - - ->
    
 



})