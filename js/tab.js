$(document).ready(function(){

//<- - - resize 함수영역 - - ->
    layout_tab();
    $(window).resize(function(){
        layout_tab();
    })

// <함수> layout_tab
    function layout_tab(){
        ww=$(window).innerWidth();
        wh=ww*2;
        if(ww>=768 && ww<1024){
            $('.run_wrap').css({
                display: 'none'
            })
        $('.main_page').css({
            width: ww,
            height: wh,
            backgroundColor: 'white',
            position: 'relative',
            zIndex: 999,
            display: 'none' //추후 삭제
        })
        $('.page_wrap').css({
            width: ww,
            height: wh*3,
            backgroundColor: 'white',
            zIndex: 99,
            position: 'relative',
        })
        
    //1. run_wrap : tab부터 숨김처리
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
        //3-1. tab : button_box
        $('.button_box').css({
            width: ww,
            height: 0.1*wh,
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
            // backgroundColor:"blue"
        })
        $('.page_2').css({
            paddingTop: 0.1*wh,
            backgroundColor:"purple"
        })
        $('.page_3').css({
            paddingTop: 0.1*wh,
            backgroundColor:"darkcyan"
        })
        //3-2.(A)page_1 : 자기소개 영역
        //con_wrap(left_con/right_con의 부모)
        $('.con_wrap').css({
            width: 0.8*ww,
            height: 0.7*wh,
            margin: '0 auto',
            backgroundColor: 'green'
        })
        con_ww=$('.con_wrap').width();
        con_wh=$('.con_wrap').height();
        $('.left_con').css({
            width: con_ww*0.48,
            height:0.6*con_wh,
            backgroundColor: 'black'
        })
        $('.right_con').css({
            width: con_ww*0.48,
            height:0.6*con_wh,
            backgroundColor: 'pink'
            // border: '1px solid white'
        })
        let r_ww=$('.right_con').width();
        let r_wh=$('.right_con').height();
        $('.con_box').css({
            boxSizing: 'border-box',
            float: 'left'
        })
        //con_box
        $('.name_box').css({
            width: r_ww,
            height: 0.25*r_wh,
            lineHeight:0.25*r_wh+'px',
            backgroundColor: 'red'
        })
        $('.birth_box,.certi_box').css({
            width: 0.5*r_ww,
            height: 0.25*r_wh,
            backgroundColor: 'blue'
            // border: '1px solid black'
        })
        $('.skill_box').css({
            width: r_ww,
            height: 0.5*r_wh,
            backgroundColor: 'gray'
        })
        //3-2(B)page_2 : 프로젝트 영역
        $('.swiper_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            margin: '0 auto',
            // backgroundColor: 'red',
            paddingLeft: '5%',
            paddingRight: '5%',
            boxSizing: 'borderBox'
        })        
        let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
        $('.swiper-slide img').attr({
            src: function(def){
                return port[def]
            }
            })
        $('.project_text,.con_text').css({
            width: '100%',
            height: 0.1*wh,
            backgroundColor: 'blue',
            position:'relative'
        })
        $('.swiper').css({
            width: '100%',
            height: 0.4*wh,
            marginTop: 0.01*wh,
            marginBottom: 0.01*wh,
            borderRadius: '20px',
        })
        $('.swiper_button').css({
            width: '100%',
            height: 0.15*wh,
            backgroundColor:'green'
        })
        let swiper_ww=$('.swiper').width()
        let swiper_wh=$('.swiper').height()
        $('.but_con').css({
            width: swiper_ww*0.3,
            height: swiper_ww*0.3,
            float: 'left',
            cursor: 'pointer',
            backgroundColor: 'yellow',
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
            display: 'none',
            position: 'absolute'
        })
        $('.pj_con').css({
            width: '80%',
            marginLeft: '10%',
            backgroundColor: 'white'
        })
        $('.pj_text').eq(0).css({
            display: 'block'
        })
        $('.pj_con').eq(0).css({
            display: 'block'
        })
        $('.con_text').css({
            textAlign:'center'
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


    })