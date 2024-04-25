$(document).ready(function(){
    
    //------------------------------홈페이지 로드 시 실행 함수
    let ww=$(window).innerWidth();
        layout();
        if(ww>=1024){
            layoutPC()
        }else if(ww<1024){
            layoutTM();
            if(ww>=768 && ww<1024){
                layoutTAB();
            }else if(ww<768){
                layoutMO();
            };
        };

    //------------------------------RESIZE 함수
    $(window).resize(function(){
        ww=$(window).innerWidth();
        layout();
        if(ww>=1024){
            layoutPC()
        }else if(ww<1024){
            layoutTM();
            if(ww>=768 && ww<1024){
                layoutTAB();
            }else if(ww<768){
                layoutMO();
            };
        };
    })

    //------------------------------layout함수구분
    //------------------(layout/layoutPC/layoutTM/layoutTAB/layoutMO)

    //공통영역
    function layout(){
        ww=$(window).innerWidth();
        //공통영역 반응형별 높이값 구분 
        if(ww>=1024){   // PC ver
            wh=$(window).innerHeight();
        }else if(ww>=768 && ww<1024){  
            wh=ww*1.5  // TAB ver
        }else if(ww<768){
            wh=ww*2  // MOBILE ver
        }
        //-----전체 페이지 스타일 지정-----//
        $('.run_wrap,.main_page').css({
            width: ww,
            height: wh
        })
        $('.run_wrap').css({
            position: 'absolute',
            top: 0
        })        
        //인페이지 공통 처리//
        $('.in_page').css({
            width: 0.8*ww,
            overflow: 'hidden',
            position: 'relative',
            margin: '0 auto'
        })
        //-----2.main_page-----//
        $('.main_page').css({
            left: 0,
            top:0,
            zIndex:999,
            boxSizing: 'border-box',
            position: 'fixed'
        });
        $('.main_text').css({
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '5rem'
        })
        $('.click_box').css({
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            margin: '0 auto',
            borderRadius:'40px',
            cursor: 'pointer'
        });
        //-----3.page_wrap-----(button_box/move_page)//
        $('.page_wrap').css({
            width: ww,
            height: wh*3,
            position: 'absolute',
            top: 0,
            left:0,
            //resize시 마다 page_wrap가 0이 되어있어야 화면에 나타남
            //main_page>click_box 클릭 시 left:ww>0 으로 이동
            zIndex:9
        })
        //2) page영역
        $('.page').css({
            width: ww,
            height: wh,
            position: 'relative',
            boxSizing: 'border-box',
            padding:0
        })
        //----------(A)page_1 : 자기소개 영역
        $('.left_con img').css({
            scale : 1
        })
        $('.right_con').css({
            margin: 0
        })
        $('.con_box').css({
            boxSizing: 'border-box',
            padding: 0,
        })
        //con_box(1):이름
        r_ww=$('.right_con').width();
        r_wh=$('.right_con').height();
        $('.name_box').css({
            margin:0,
        }) 
        $('.con_box>.top_text').css({
            borderLeft: '5px solid',
            borderImage: 'linear-gradient(to top,#dd5875,#f39b00,#75bd4d,#059ee2)',
            borderImageSlice:1
        })
        $('.skill_box').css({
            margin: 0,
            marginTop: '10px'
        })
        $('.skill_img').css({
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        })
        //----------(B)page_2 : 프로젝트 영역 
        $('.swiper_wrap').css({
            padding:0
        }) 
        $('.swiper').css({
            width: 0.7*ww,
            margin: '0 auto'
            //height 각 조정
        })        
        $('.swiper-wrapper').css({
            width: '100%',
            height: '100%'
        }) 
        $('.swiper-slide>img').css({
            objectFit: 'contain'
        }) 
        $('.swiper-slide').css({
            width: '100%',
            height: '100%'
        })  
        $('.contact_box').css({
            padding: 0
        })
    };
    
    //PC영역
    function layoutPC(){
        ww=$(window).innerWidth();
        wh=$(window).innerHeight();
        //-----1.run_wrap-----//
        $('.run_wrap').css({
            left: -ww,
            zIndex:99,
            display: 'block'
        });
        $('.run_wrap>img').css({
            width: 0.73*ww,
            height: 0.63*wh,
            position: 'absolute',
            left:'50%',
            top: '20%',
            marginLeft: -0.365*ww,
            marginTop:0,
            transition: '5s',
            transform: 'scale(1)'
        })
        //-----2.main_page-----//        
        $('.main_page img').css({
            height: 0.5*wh,
        })
        $('.click_box').css({
            width: 0.09*ww,
            height:0.07*wh,
            lineHeight: 0.07*wh+'px',
            borderRadius:'50px',
            fontSize: 0.015*ww
        })
        $('.main_text').css({
            width: 0.8*ww,
            marginBottom: 0.03*wh
        })        
        main_IH=$('.main_page>.in_page').height();
        console.log(main_IH);
        $('.main_page>.in_page').css({
            top: 'calc( 50% - ' + main_IH/2 + 'px)'
        })
        //-----3.page_wrap-----//
        //1) 메뉴박스(button)
        $('.pc_button').css({
            // position: 'fixed' css지정
            display: 'block',
            width: 0.035*ww,
            height: 0.22*wh,
            top: 0.2*wh,
            left: 0.87*ww
        })
        $('.pc_but').css({
            width: 0.022*ww,
            height: 0.022*ww,
            lineHeight: 0.022*ww+'px',
            marginTop: 0.009*ww,
            borderRadius: 0.03*ww,
            color: '#fff',
            border:'2px solid transparent',
            backgroundImage:'linear-gradient(#fff, #fff), linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
            backgroundOrigin:'border-box',
            backgroundClip:'padding-box, border-box'
        })        
        $('.pc_img').css({
            display: 'block'
        })
        $('.pc_text').css({
            display: 'none',
        })
        $('.tm_button').css({
            display: 'none'
        })
        //* resize시 마다 pc_but 설정값 유지        
        let scTop=$('html,body').scrollTop();
        let resizeIndex = Math.abs(Math.round(scTop/wh));
        // console.log(scTop);
        // console.log(resizeIndex);
        $('.pc_but').eq(resizeIndex).css({
            width: 0.06 * ww,
            backgroundImage: 'linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)',
            backgroundOrigin:'unset',
            backgroundClip:'padding-box',
            color: '#fff'
        });
        $('.pc_but').eq(resizeIndex).find('.pc_img').css({
            display: 'none'
        });
        $('.pc_but').eq(resizeIndex).find('.pc_text').css({
            display: 'block'
        });

        //2) page영역
        //----------(A)page_1 : 자기소개 영역
        con_ww=0.8*ww
        con_wh=0.8*wh
        $('.left_con').css({
            width: 0.3*con_ww,
            height:0.8*con_wh
        })
        $('.left_con img').css({
            width: 0.3*con_ww,
            height:0.8*con_wh
        })
        $('.right_con').css({
            width: 0.6*con_ww,
            overflow: 'hidden'
        })
        $('.con_box').css({
            paddingLeft: 0.02*ww
        })
        //con_box(1):이름
        r_ww=$('.right_con').width();
        $('.name_box>.point_text').css({
            textAlign: 'start'
        })           
        $('.name_box').css({
            width: r_ww,
            overflow: 'hidden',
            marginTop: 0.1*con_wh,
            marginBottom: 0.04*con_wh,
        })
        $('.name_box p,.top_text').css({
            fontSize: '1.5rem'
        })    
        $('.point_text').css({
            fontSize: '4rem'
        })
        $('.point_text>span').css({
            fontSize: '2rem'
        })
        $('.point_text .sub_text').css({
            fontSize: '1.5rem'
        })
        $('.con_box>.top_text').css({
            paddingLeft: 0.01*ww
        })
        $('.con_box p').css({
            marginTop: 0.015*wh,
            paddingLeft: 0.015*ww,
            boxSizing: 'border-box'
        })        
        //con_box(2-3):생년월일, 자격증
        $('.birth_box,.certi_box').css({
            width: 0.5*r_ww,
            overflow: 'hidden',
            margin: 0
        })        
        //con_box(4):기술
        $('.skill_box').css({
            width: r_ww,
            overflow: 'hidden',
            //
            marginTop: 0.04*con_wh,
            paddingRight: 0.02*ww 
            //(전체)con_box에 boxsizing적용 및 padding=0
        })
        $('.skill_img').css({
            paddingLeft: 0.015*ww
        })
        main_1H=$('.page_1>.in_page').height();        
        console.log('main_1H');
        console.log(main_1H);
        $('.page_1>.in_page').css({
            top: 'calc( 50% - ' + main_1H/2 + 'px)'
        })

        //----------(B)page_2 : 프로젝트 영역 
        $('.swiper').css({
            height: 0.6*wh
        })
        $('.swiper-slide>img').css({
            width: '100%',
            height: '100%',
            margin: 0
        })
        let swiperPC=["./img/pro1.png","./img/pro2.png","./img/pro3.png","./img/pro4.png","./img/pro5.png"]
        $('.swiper-slide img').attr({
            src: function(abc){
                return swiperPC[abc]
            }
            })     
        
        main_2H=$('.page_2>.in_page').height();
        console.log('main_2H');
        console.log(main_2H);
        $('.page_2>.in_page').css({
            top: 'calc( 50% - ' + main_2H/2 + 'px)'
        })
        
        //----------(C)page_3 : contact 
        $('.page_3').css({
            // display: 'none',
            zIndex: 999999,
        })         
        $('.contact_box').css({
            width: 0.5*ww,
            // height: 0.4*wh,
            overflow: 'hidden',
            top: 'calc( 50% - ' + 0.2*wh + 'px)',
            paddingTop:0.06*wh,
            paddingBottom:0.06*wh,
            boxSizing: 'border-box'
        })
        $('.contact_box>.point_text').css({
            width: 0.4*ww,
            // height: 0.08*wh,
            // lineHeight: 0.08*wh+'px',
            margin: '0 auto',
            marginBottom: '30px'
        })
        $('.call_box').css({  
            width: 0.4*ww,
            // height: 0.2*wh,
            overflow: 'hidden',
            margin: '0 auto'
        })
        contact_ww=$('.contact_box').width();
        $('.call_box>div').css({
            width: contact_ww*0.21,
            height: contact_ww*0.21,
        })
        $('.hide_pc').css({
            display: 'none'
        })

        main_2H=$('.page_2>.in_page').height();
        $('.page_2>.in_page').css({
            top: 'calc( 50% - ' + main_2H/2 + 'px)'
        })
        
    };

    //TAB&MOBILE 영역
    function layoutTM(){
        ww=$(window).innerWidth();
        if(ww>=768){
            wh=ww*1.5;
        }else if(ww<768){
            wh=ww*2;
        }
        //-----1.run_wrap-----//
        $('.run_wrap').css({
            display: 'none'
        })
        //-----2.main_page-----//        
        $('.main_text').css({
            width: 0.7*ww,
            marginBottom: 0.015*wh,
        })            
        $('.click_box').css({
            width: 0.2*ww,
            height:0.05*wh,
            lineHeight: 0.05*wh+'px',
            fontSize: 0.03*ww
        })
        $('.page').css({
            paddingBottom: 0.1*wh
        })
        //-----3.page_wrap-----//
        //1) 메뉴박스(button)
        $('.pc_button').css({
            display: 'none'
        })
        $('.tm_button').css({
        // position: 'fixed' (css bottom:0 left:0)
            width: ww,
            height: 0.1*wh,
            display: 'block',
            paddingLeft: 0.1*ww,
            paddingRight: 0.1*ww,
            // paddingTop: '5%',
            boxSizing: 'border-box'
        })
        $('.tm_but').css({
            cursor:'pointer',
            width: 0.1*ww,
            height: 0.1*ww,
            marginLeft: 0.1*ww,
            float: 'left'
        }) 
        $('.tm_but').first().css({
            marginLeft: 0.05*ww
        })        
        //----------(A)page_1 : 자기소개 영역
        con_ww=0.8*ww
        con_wh=0.8*wh
        $('.left_con').css({
            width: con_ww,
            height:0.4*con_wh
        })
        $('.left_con img').css({
            width: con_ww,
            height:0.4*con_wh
        })
        $('.right_con').css({
            width: con_ww,
            overflow: 'hidden',
            marginTop: '10px'
        })
        r_ww=$('.right_con').width();
        //con_box(1):이름
        $('.name_box').css({
            width: r_ww,
            overflow: 'hidden',
            height: 0.1*con_wh,
            lineHeight: 0.1*con_wh+'px',
            marginBottom: '10px'
        })              
        //con_box(2-3):생년월일, 자격증
        $('.birth_box,.certi_box').css({
            width: 0.45*r_ww,
            overflow: 'hidden'
        })  
        $('.birth_box').css({
            marginLeft:0.05*r_ww,
        })
        $('.certi_box').css({
            marginRight:0.05*r_ww
        }) 
        //con_box(4):기술
        $('.skill_box').css({
            width: 0.9*r_ww,
            overflow: 'hidden',
            marginLeft:0.05*r_ww,
            marginRight:0.05*r_ww,
        })
        $('.skill_img').css({
            marginTop: '10px',
            padding: 0
        }) 
        //----------세부내용
        $('.name_box>.point_text').css({
            textAlign: 'center'
        })           
        $('.point_text').css({
            fontSize: '3rem'
        })
        $('.point_text>span').css({
            fontSize: '1.5rem'
        })
        $('.point_text .sun_text').css({
            fontSize: '1rem'
        })
        $('.con_box>.top_text').css({
            paddingLeft: '10px'
        })
        $('.con_box p').css({
            marginTop: '10px',
            paddingLeft: '15px',
            boxSizing: 'border-box'
        })
        //----------(B)page_2 : 프로젝트 영역    
        $('.swiper').css({
            overflow: 'hidden',
            marginBottom: '30px'
        }) 
        $('.pj_text').css({
            width: '100%',
            overflow: 'hidden',
            margin: 0
        })        
        $('.pj_con').css({
            width: '90%',
            overflow: 'hidden',
            margin: '0 auto'
        })
        $('.swiper-slide>img').css({
            width: '90%',
            height: 0.35*wh,
            marginLeft: '5%'
        })        
        let swiperTM=["./img/pro_mo1.jpg","./img/pro_mo2.jpg","./img/pro_mo3.jpg","./img/pro_mo4.jpg","./img/pro_mo5.jpg"]
        $('.swiper-slide img').attr({
            src: function(def){
                return swiperTM[def]
                }
            })  

        //----------(C)page_3 : 콘텍트 영역
        $('.page_3').css({
            display: 'block',
            zIndex: 999,
        })
        $('.contact_box').css({
            overflow: 'hidden'
        })
        $('.contact_box>.point_text').css({
            width: 0.8*ww,
            marginBottom: '30px'
        })            
        $('.call_box').css({
            width: 0.8*ww,
            overflow: 'hidden',
            margin: '0 auto'
        })
        call_ww=$('.call_box').width()
        $('.call_box>div').css({
            width: call_ww*0.4,
            height: call_ww*0.4
        })
        $('.copyright_box').css({
            width: 0.8*ww,
            overflow: 'hidden',
            margin: '0 auto',
            marginTop: '30px'
        })
        $('.hide_pc').css({
            display: 'block'
        })
    };

    //TAB 영역
    function layoutTAB(){
        ww=$(window).innerWidth();
        wh=ww*1.5
        $('.tm_button').css({
            paddingTop: '2.5%'
        })
        $('.main_page img').css({
            height: 0.4*wh,
        })        
        main_IH=$('.main_page>.in_page').height();
        $('.main_page>.in_page').css({
            top: 'calc( 50% - ' + main_IH/2 + 'px)'
        })
        //----------(A)page_1 : 자기소개 영역  
        $('.skill_img').css({
            padding: 0
        }) 
        main_1H=$('.page_1>.in_page').height();
        $('.page_1>.in_page').css({
            top: 'calc( 50% - ' + main_1H/2 + 'px)'
        })
        //----------(B)page_2 : 프로젝트영역  
        $('.pj_text').css({
            width: '100%',
            overflow: 'hidden',
            marginBottom: '30px'
        })        
        $('.pj_con').css({
            width: '90%',
            overflow: 'hidden',
            margin: '0 auto',            
            marginTop: '30px'
        })
        $('.swiper_button').css({
            width: '70%',
            overflow: 'hidden',
            margin: '0 auto',
        })
        button_ww=$('.swiper_button').width()
        $('.but_con').css({
            width: button_ww*0.3,
            height: button_ww*0.3,
            float: 'left',
            cursor: 'pointer'
        })
        $('.left_but').css({
            marginLeft: button_ww*0.05
        })
        $('.right_but').css({
            marginRight: button_ww*0.05
        })
        main_2H=$('.page_2>.in_page').height();
        // console.log(main_2H);
        $('.page_2>.in_page').css({
            top: 'calc( 50% - ' + main_2H/2 + 'px)'
        })

        //----------(C)page_3 : CONTACT  
        main_3H=$('.page_3>.in_page').height();
        console.log(main_3H);
        $('.page_3>.in_page').css({
            top: 'calc( 50% - ' + main_3H/2 + 'px)'
        })
    }
    
    //MOBILE 영역
    function layoutMO(){
        ww=$(window).innerWidth();
        wh=ww*2
        $('.tm_button').css({
            paddingTop: '5%' 
        })
        $('.main_page img').css({
            height: 0.3*wh,
        })           
        main_IH=$('.main_page>.in_page').height();
        console.log(main_IH);
        $('.main_page>.in_page').css({
            top: 'calc( 50% - ' + main_IH/2 + 'px)'
        })     
        //----------(A)page_1 : 자기소개 영역  
        $('.skill_img').css({
            padding: '0 10%'
        }) 
        main_1H=$('.page_1>.in_page').height();        
        // console.log('main_1H');
        // console.log(main_1H);
        $('.page_1>.in_page').css({
            top: 'calc( 50% - ' + main_1H/2 + 'px)'
        })
        //----------(B)page_2 : 프로젝트영역   
        $('.swiper_button').css({
            width: '90%',
            margin: '0 auto',
            overflow: 'hidden'
        })
        button_ww=$('.swiper_button').width()
        $('.but_con').css({
            width: button_ww*0.3,
            height: button_ww*0.3,
            float: 'left',
            cursor: 'pointer'
        })
        $('.left_but').css({
            marginLeft: button_ww*0.05
        })
        $('.right_but').css({
            marginRight: button_ww*0.05
        })
        main_2H=$('.page_2>.in_page').height();
        // console.log('main_2H');
        // console.log(main_2H);
        $('.page_2>.in_page').css({
            top: 'calc( 50% - ' + main_2H/2 + 'px)'
        })
        
        //----------(C)page_3 : CONTACT  
        main_3H=$('.page_3>.in_page').height();
        // console.log('main_3H');        
        // console.log(main_3H);
        $('.page_3>.in_page').css({
            top: 'calc( 50% - ' + main_3H/2 + 'px)'
        })
    }
})