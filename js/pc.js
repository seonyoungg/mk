$(document).ready(function(){

    //<레이아웃영역1~3>
    let ww=$(window).innerWidth();
    let wh=$(window).innerHeight();

    //<- - - resize 함수영역 - - ->
    layout_pc()
    $(window).resize(function(){
            layout_pc();
            $('.page_wrap').css({
                display: 'block',
                left: 0
        })
    })
    //<함수> pc resize --//
    function layout_pc(){
        ww=$(window).innerWidth();
        wh=$(window).innerHeight();
        if(ww>=1024){
        //-----전체 페이지 스타일 지정-----//
        $('.run_wrap,.main_page,.page_wrap').css({
            width: ww,
            height: wh,
            top: 0
        })
        //-----1.run_wrap-----//
        $('.run_wrap').css({
            display: 'none',
            left:0, //main_page내 버튼 클릭과 동시에 left:-ww
            zIndex: 999
        })
        $('.run_wrap>img').css({
            width: 0.73*ww,
            height: 0.63*wh,
            left:'50%',
            top:'50%',
            marginLeft: -0.365*ww,
            marginTop: -0.315*wh
        })
        //-----2.main_page-----//
        $('.main_page').css({
            left:0,
            zIndex: 999
        })
        $('.main_page>img').css({
            // position: 'absolute',
            width: ww,
            height:0.5*wh,
            marginTop:0.15*wh
        })
        $('.main_text').css({
            width: ww,
            marginBottom: 0.03*wh
        })
        $('.click_box').css({
            width: 0.09*ww,
            height:0.07*wh,
            lineHeight: 0.07*wh+'px',
            fontSize: 0.013*ww
        })
        //-----3.page_wrap-----//1) button_box 2)move_page>page1-3
        $('.page_wrap').css({
            // pc버전 디자인 작업 때 확인하기 위해 임시로 left:0
            // left:0,
            left:ww,
            zIndex: 99,
            overflow:'hidden'
        })
        //1) 메뉴박스(button_box)
        $('.button_box').css({
            width: 0.035*ww,
            height: 0.25*wh,
            top: 0.2*wh,
            left: 0.87*ww
        })
        $('.button_con').css({
            width: 0.02*ww,
            height: 0.02*ww,
            borderRadius: 0.03*ww
        })
        let but_h=$('.button_con').height();
        $('.button_con').css({
            lineHeight: but_h+'px'
        })
        // resize : mo>pc icon변경필요
        let butIcon=["./img/1.png","./img/2.png","./img/3.png","./img/4.png"]
        $('.button_con>img').attr({
            src : function(abc){
                return butIcon[abc]
            }
        })

        // resize : button_con 길이 유지
        let moveTop=$('.move_page').position().top;
        if(ww>=1024){
        if(moveTop==0){
            moveIndex(0)
        }else if(moveTop==-wh){
            moveIndex(1)
        }else if(moveTop==-wh*2){
            moveIndex(2)
        }
        }
        function moveIndex(index_num){
            $('.button_con').css({ 
                width: 0.02*ww,
                border:'2px solid transparent',
                backgroundImage:'linear-gradient(#fff, #fff), linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)',
                backgroundOrigin:'border-box',
                backgroundClip:'padding-box, border-box'
            });
            $('.button_con').eq(index_num).css({
                width: 0.06*ww,
                backgroundImage: 'linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
                backgroundOrigin:'border-box',
                backgroundClip:'',
                color:'#fff'
            })
            $('.img_hide').eq(index_num).css({
                display: 'none'
            })
            $('.hide_text').eq(index_num).css({
                display: 'block'
            })
        }

        //------------------------------------------------//
        //2). move_page
        $('.move_page').css({
            width: ww,
            height: wh*3 
        })
        $('.page').css({
            width: ww,
            height: wh
        })
        //----------(A)page_1 : 자기소개 영역
        $('.con_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            marginTop:0.1*wh
        })
        con_ww=$('.con_wrap').width();
        con_wh=$('.con_wrap').height();
        $('.left_con').css({
            width: 0.3*con_ww,
            height:0.8*con_wh
        })
        $('.right_con').css({
            width: 0.6*con_ww,
            height:0.8*con_wh
        })
        let r_ww=$('.right_con').width();
        let r_wh=$('.right_con').height();
        $('.con_box').css({
            paddingLeft: 0.02*ww,
            boxSizing: 'border-box',
            float: 'left'
        })
        $('.name_box,.skill_box').css({
            width: r_ww,
            height: 0.25*r_wh
        })
        //con_box(1):이름
        $('.name_box').css({
            marginTop: 0.1*r_wh,
            marginBottom: 0.04*r_wh,
            lineHeight: 0.25*r_wh+'px'
        })
        $('.name_box>.point_text').css({
            textAlign:'start'
        })
        $('.name_box p,.top_text').css({
            fontSize: '1.5rem'
        })
        //con_box(2-3):생년월일, 자격증
        $('.birth_box,.certi_box').css({
            width: 0.5*r_ww,
            height: 0.3*r_wh
        })
        $('.con_box>.top_text').css({
            paddingLeft: 0.01*ww
        })
        $('.con_box p').css({
            marginTop: 0.015*wh,
            paddingLeft: 0.015*ww,
            boxSizing: 'border-box'
        })
        //con_box(4):기술
        $('.skill_box').css({
            paddingRight: 0.02*ww,
            boxSizing: 'border-box'
        })
        $('.skill_img').css({
            paddingLeft: 0.015*ww,
            boxSizing: 'border-box'
        })
        //----------(B)page_2 : 프로젝트 영역
        $('.swiper_wrap').css({
            width: 0.8*ww,
            height: 0.8*wh,
            marginLeft:0.1*ww
        })
        $('.swiper').css({
            width: 0.7*ww,
            height: 0.6*wh
        })
        
        //pc swiper img삽입
                // let port=["./img/a1b.png","./img/a2b.png","./img/a3b.png","./img/a4b.png","./img/a5b.png"]
                // $('.swiper-slide img').attr({
                //     src: function(img){
                //         return port[img]
                //     }
                //     })    
                //흑백-컬러 hover시 무한반복 루트 설정시 오류발생
        let color_port=["./img/a1.png","./img/a2.png","./img/a3.png","./img/a4.png","./img/a5.png"]
        $('.swiper-slide img').attr({
            src: function(index_abc){
                return color_port[index_abc]
            }
            })
        //----------(C)page_3 : 콘텍트 영역
        $('.page_3').css({
            padding: 0
        })
        $('.contact_box').css({
            width: 0.5*ww,
            height: 0.4*wh,
            marginTop: 0.3*wh
        })
        let contact_ww=$('.contact_box').width();
        let contact_wh=$('.contact_box').height();
        $('.contact_box').css({
            paddingTop:0.05*wh,
            paddingBottom:0.05*wh,
            boxSizing: 'border-box'
        })
        $('.contact_box>.point_text').css({
            width: 0.4*ww,
            height: 0.1*wh,
            lineHeight: 0.1*wh+'px',
            // backgroundColor: 'red',
            margin: '0 auto'
        })
        $('.call_box').css({  
            width: 0.4*ww,
            height: 0.2*wh,
            margin: '0 auto',
            // backgroundColor: 'yellow',
        })
        $('.call_box>div').css({
            width: contact_ww*0.2
        })
    }//ww>=1024조건 끝
    }//lay_out함수의 끝

    //---------------------------------------------------------------//
    //-------------------------------//
    //----------이벤트영역-----------//
    
    //(1) main_page>click_box 클릭 이벤트 실행
    //----------(PC의 경우 다른페이지 추가 초기화 작업 필요)
    $('.click_box').click(function(){ 
        if(ww>=1024){
            a=0; //달리기이미지초기화작업필요
            $('.main_page').fadeOut(1000)
            $('.run_wrap').css({
                display: 'block',
                left: -ww
            })
            $('.run_wrap').animate({
                left: 0
            },2000,function(){
            // run_po=$('.run_wrap').position().left;
            run_po=$('.run_wrap').offset().left;
            })
            $('.page_wrap').delay(2000).animate({
                left:0
                },1000,function(){
                if(run_po==0){
                    $('.run_wrap>img').css({
                        transform: 'scale(0.55)'
                    })
                    $('.run_wrap>img').animate({
                        marginLeft: -0.64*ww,
                        marginTop: -0.25*wh
                    },1200)
                    $('.run_wrap').fadeOut(7000)
                    $('.left_con>img').fadeIn(10000)
                }
            })
        }else if(ww<1024){
            $('.main_page').fadeOut(2000)
            $('.page_wrap').css({
                display: 'block'
            })
        }
    }) 

    //(2). run_wrap ▶ 달리기img(0~45) <PC>
    let a=0;
    setInterval(function(){
        a++
        if(a>45){
            a=45
        }
        $('.run_wrap>img').attr({
            src: `./img/run_img/${a}.jpg`
        })
    },200)
    
    //(3) page_wrap : button_box(hover) <PC>
    but_con=["./img/1.png","./img/2.png","./img/3.png","./img/4.png"]
    but_cha=["./img/1_2.png","./img/2_2.png","./img/3_2.png","./img/4_2.png"]
    if(ww>=1024){
        $('.button_con').hover(function(){
        let but_index=$(this).index()
        $(this).find('img').attr({
            src: function(){
                return but_cha[but_index]
            }
        })
        },function(){
            let but_index=$(this).index()
            $(this).find('img').attr({
                src: function(){
                    return but_con[but_index]
                }
            })
        })
    }
        
    //(4) page_wrap 휠이벤트 <PC>
    let direction=false;
    let box_index=0;
    //<함수> - - - button_con 휠에 따른 함수(movewheel함수에 적용)
        function scrollBut(box_index){
        if(ww>=1024){
        $('.button_con').css({ 
            width: 0.02*ww,
            border:'2px solid transparent',
            backgroundImage:'linear-gradient(#fff, #fff), linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)',
            backgroundOrigin:'border-box',
            backgroundClip:'padding-box, border-box'
        });
        $('.hide_text').css({
            display:'none'
        });
        $('.img_hide').css({
            display:'block'
        });
        $('.button_con').eq(box_index).css({
            backgroundImage: 'linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
            backgroundOrigin:'border-box',
            backgroundClip:'',
            color:'#fff'
        }).animate({
            width: 0.06*ww
            },400);
            $('.hide_text').eq(box_index).css({
                display:'block'
            });
            $('.img_hide').eq(box_index).css({
                display:'none'
            }); 
        }
        }//- - - 함수 끝
            
    //<함수> - - - 마우스 휠 함수
        function movewheelUP(delta){
            direction=true;
            box_index--;
            if(box_index<0){
                box_index=0;
            };
            $('.move_page').stop().animate({
                top: -wh*box_index
            },1000,function(){
                direction=false;
                }); 
            scrollBut(box_index);
            if(box_index==2){
                $('.top_page').fadeIn(1000);   
                $('.page_wrap').off('mousewheel');
            };
        }
        function movewheelDOWN(delta){
            direction=true;
            box_index++;
            if(box_index>=2){
                box_index=2;
            };
            $('.move_page').stop().animate({
                top: -wh*box_index
            },1000,function(){
                direction=false;
                });
            scrollBut(box_index);
            if(box_index==2){
                $('.top_page').fadeIn(1000);
                $('.page_wrap').off('mousewheel');
            };
        }      
    //<실행> 마우스 휠 함수의 실행
    $('.page_wrap').on('mousewheel',function(event,delta){
        if(ww>=1024){
            if(delta>0 && direction==false){
                movewheelUP(delta)
            }else if(delta<0 && direction==false){
                movewheelDOWN(delta);
            }
        }
    })
        
    //(5) button_con 클릭 이벤트 <PC>
    // page1 : button_con 스타일(기본)
    scrollBut(0);
    //button_con 클릭 시 이벤트 발생
    $('.button_con').click(function(){
        if(ww>=1024){
            let click_index=$(this).index(); 
            //click 이벤트와 연결(페이지1-3)
            if(click_index<3){ 
                scrollBut(click_index)
                $('.move_page').animate({
                top: -wh*click_index
            },1000)
            //click 이벤트와 연결(main-page)
            }else if(click_index==3){ 
                //run_wrap의 초기화
                a=0;
                $('.run_wrap>img').css({
                    transform: 'scale(1)', 
                    left: '50%',
                    top: '50%',
                    marginLeft: -0.365*ww,
                    marginTop: -0.315*wh

                })
                $('.run_wrap').css({
                    display: 'block',
                    left:-ww
                })
                //메인페이지/page_wrap초기화 작업
                $('.main_page').css({
                    left:0
                })
                $('.page_wrap').css({
                    left:ww,
                    top:0
                }) 
                $('.move_page').css({
                    top: 0
                })
                //메인페이지 연결
                $('.main_page').fadeIn(500);
                //button_con 초기화
                scrollBut(0);
            }//메인페이지 연결이벤트종료
        }else if(ww<1024){
            let button_index=$(this).index();
            let wh=ww*2
            if(button_index !== 3){
                $('html,body').animate({
                    scrollTop: wh*button_index
                },1000)
                imgChange(button_index);
            }else if(button_index=3){
                $('.main_page').fadeIn(500)
                $('html,body').animate({
                    scrollTop: 0
                },1000)
                $('.page_wrap').css({
                    display: 'none'
                })
            }
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
    
    //(5-2) top_page클릭 <PC>
    // <- - - top_page 연결 //마우스휠OFF
    $('.button_con').eq(2).click(function(){
        if(ww>=1024){
        $('.top_page').fadeIn(1000);
        $('.page_wrap').off('mousewheel');
        }
    })
    // <- - - close_but의 클릭 : 2페이지로 이동 //마우스휠ON
    $('.close_but').click(function(){
        if(ww>=1024){
            $('.top_page').fadeOut(1000)  
            $('.page_wrap').on('mousewheel',function(event,delta){
                if(delta>0 && direction==false){
                    movewheelUP(delta)
                }else if(delta<0 && direction==false){
                    movewheelDOWN(delta);
                }
            })
            box_index=1;
            scrollBut(1); 
            $('.move_page').animate({
                top: -wh
            },1000) 
        }
        })
    
        // H. swiper_wrap img변경(hover)
        // let port=["./img/a1b.png","./img/a2b.png","./img/a3b.png","./img/a4b.png","./img/a5b.png"]
        // let color_port=["./img/a1.png","./img/a2.png","./img/a3.png","./img/a4.png","./img/a5.png"]
        // $('.swiper-wrapper>.swiper-slide').hover(function(){
        //     let port_num=$(this).index()
        //     //     $('.swiper-slide img').eq(port_num).attr({
        //     //     src: function(){
        //     //         return color_port[port_num]
        //     //     }
        //     //     })
        //     // }, function(){  
        //     //     let port_num=$(this).index()
        //     //     $('.swiper-slide img').eq(port_num).attr({
        //     //     src: function(){
        //     //         return port[port_num]
        //     //     }
        //     //     })
        //     $('.swiper-slide img').attr({
        //         src: `./img/${a}b.png`
        //     })
        //     })
    })