$(document).ready(function(){
    //이벤트 정리

    //----------------이미지 애니메이션
    //1. main_page : run_icon 변경 *공통영역
    let a=1;
    setInterval(function(){
        a++
        if(a>7){
            a=0
        };
        $('.main_page img').attr({
            src: `./img/run_icon2/${a}.png`
        });
    },200)

    //2. run_wrap : run_img 변경 *PC
    let b=0;
    setInterval(function(){
        b++
        if(b>45){
            b=45
        }
        $('.run_wrap>img').attr({
            src: `./img/run_img/${b}.jpg`
        })
    },200)

    //----------------이미지 hover *PC
    //3. contact_box>call_box img(hover) 
    let icon=["./img/contact1.png","./img/contact2.png","./img/contact3.png","./img/contact4.png"]
    let change_icon=["./img/contact11.png","./img/contact22.png","./img/contact33.png","./img/contact44.png"]
    $('.call_box div').hover(function(){
        let index=$(this).index()
        $('.contact_icon').eq(index).attr({
            src: function(){
                return change_icon[index]
            }
        })         
        },function(){
        let index=$(this).index()
        $('.contact_icon').eq(index).attr({
            src: function(){
            return icon[index]
            }
        })
        }
    ) 
    //4. page_wrap>pc_but img(hover)
    pc_icon=["./img/pc1.png","./img/pc2.png","./img/pc3.png","./img/pc4.png"]
    pc_change=["./img/pc11.png","./img/pc22.png","./img/pc33.png","./img/pc44.png"]
    $('.pc_but').hover(function(){
        let pc_index=$(this).index()
        $(this).find('img').attr({
            src: function(){
                return pc_change[pc_index]
            }
        })
        },function(){
        let pc_index=$(this).index()
        $(this).find('img').attr({
            src: function(){
                return pc_icon[pc_index]
            }
        })
        }
    )

    //----------------메인페이지 클릭이벤트 
    //5. main-page>click_Box click event *공통영역(세부조건설정)
    $('.click_box').click(function(){
        ww=$(window).innerWidth();
            $('.page_wrap').css({
                left: ww
                //click_box클릭시 left:ww 보내주고 다시 데리고 와야함
            }) 
            $('.main_page').fadeOut(1000);
        
        if(ww>=1024){
        b=0;  
        //run_img초기화
        $('.pc_button').css({
            display:'none'
        })
        $('.left_con>img').css({
            display:'none'
        })
        $('.run_wrap').animate({
            left: 0
        },2000,function(){
            $('.page_wrap').animate({
                left:0
            },1000,function(){
                $('.run_wrap>img').css({
                    transform: 'scale(0.5)'
                })
                $('.run_wrap>img').animate({
                    marginLeft: -0.64*ww,
                    marginTop: 0.03*wh
                },1200)
                $('.run_wrap').fadeOut(7000);
                $('.left_con>img').fadeIn(10000);
                pcBut(0);
                $('.pc_button').fadeIn(1000);
                $('body,html').scrollTop(0);
            })
        })
        }else if(ww<1024){
            $('.page_wrap').animate({
                left:0
            },500)
            tmBut(0);
            $('body,html').scrollTop(0)
        }
    })

    //----------------page_button click event *button 두버전
    //1) pc_button click *PC
    $('.pc_but').click(function(){
        ww=$(window).innerWidth();
        wh=$(window).innerHeight();

        let pcIndex=$(this).index();
        console.log(pcIndex)
        if(pcIndex!==3){
            pcBut(pcIndex)
            $('html,body').animate({
                scrollTop: wh*pcIndex
            },1000)
        }else if(pcIndex==3){
            //run_wrap의 초기화
            b=0;
            $('.run_wrap').css({
                display: 'block',
                left: -ww
            })
            $('.run_wrap>img').css({
                transform: 'scale(1)', 
                left: '50%',
                top: '20%',
                marginLeft: -0.365*ww,
                marginTop:0
            })
            //main_page 연결
            $('.main_page').fadeIn(2000,function(){
                $('html,body').scrollTop(0);
            });
            //pc_but 초기화
            pcBut(0);
        }
    })
    //2) tm_button click *TAM & MOBILE
    $('.tm_but').click(function(){
        ww=$(window).innerWidth();
        if(ww>=768){
            wh=ww*1.5;
        }else if(ww<768){
            wh=ww*2;
        }
        let tmIndex=$(this).index();
        if(tmIndex!==3){
            $('html,body').animate({
                scrollTop: wh*tmIndex
            },1000);
        }else if(tmIndex==3){
            $('.main_page').fadeIn(2000,function(){
                $('html,body').scrollTop(0);    
            });
            // $('html,body').scrollTop(0);
        }
    })

    //----------------wheel 이벤트 *PC 
    let direction=false;
    let page_num=0;
    //<함수> 마우스 휠 함수
    function movewheelUP(delta){
        wh=$(window).innerHeight();
        direction=true;
        page_num--;
        if(page_num<=0){
            page_num=0
        };
        $('html,body').stop().animate({
            scrollTop: wh*page_num
        },1000,function(){
            direction=false;
            }); 
        pcBut(page_num);
        if(page_num==2){
            $('.page_3').fadeIn(1000);   
            $('.page_wrap').off('mousewheel');
        };
    }
    function movewheelDOWN(delta){
        wh=$(window).innerHeight();
        direction=true;
        page_num++;
        if(page_num>=2){
            page_num=2
        };
        $('html,body').stop().animate({
            scrollTop: wh*page_num
        },1000,function(){
            direction=false;
            });
        pcBut(page_num);
        if(page_num==2){
            $('.page_3').fadeIn(1000);
            // $('.page_1, .page_2').fadeOut(1000);
            $('.page_wrap').off('mousewheel');
        };
    }   
    //<실행> 마우스 휠 함수의 실행
    $('.page_wrap').on('mousewheel',function(event,delta){
        ww=$(window).innerWidth();
        if(ww>=1024){
            if(delta>0 && direction==false){
                movewheelUP(delta)
            }else if(delta<0 && direction==false){
                movewheelDOWN(delta);
            }
        }
    })

    //----------------page_3 wheel OFF
    $('.pc_but').eq(2).click(function(){
        $('.page_3').fadeIn(1000);
        // $('.page_1,.page_2').fadeOut(1000);
        $('.page_wrap').off('mousewheel');  
    })
    
    //close_but의 클릭 : 2페이지로 이동 // WHEEL ON
    $('.close_but').click(function(){
        ww=$(window).innerWidth();
        wh=$(window).innerHeight();
        $('.page_3').fadeOut(1000);  
        // $('.page_1,.page_2').fadeIn(1000);
        $('.page_wrap').on('mousewheel',function(event,delta){
            if(delta>0 && direction==false){
                movewheelUP(delta)
            }else if(delta<0 && direction==false){
                movewheelDOWN(delta);
            }
        })
        //페이지번호 및 버튼 스타일 설정
        page_num=1;
        pcBut(1); 
        //페이지2로 스크롤 이동
        // $('html,body').scrollTop(wh*2)
        $('html,body').animate({
            scrollTop: wh
        },1000)  
    })
    
    //----------------scroll 위치값에 따라 tm_but과 연결 *TAB & MOBILE
    $(window).scroll(function(){
        ww=$(window).innerWidth();
        if(ww>=768){
            wh=ww*1.5;
        }else if(ww<768){
            wh=ww*2;
        }

        if(ww<1024){
            let sct=$(this).scrollTop();
            let sctIndex=Math.round(sct/wh);
            tmBut(sctIndex);
            // console.log(sct);
            // console.log(sctIndex);
        }
    })

    //----------------함수정리
    //(A) tmBut : tm_but 이미지 변경 함수
    function tmBut(button_index){
        tm_icon=["./img/mo1.png","./img/mo2.png","./img/mo3.png","./img/mo4.png"]
        tm_change=["./img/mo11.png","./img/mo22.png","./img/mo33.png","./img/mo44.png"]
        $('.tm_but>img').attr({
            src: function(tmnum){
                return tm_icon[tmnum]
            }
        })
        $('.tm_but>img').eq(button_index).attr({
            src: function(tmnum){
                return tm_change[button_index]
            }
        })
    }
    //(B) pcBut : pc_but 스타일 변경 함수(movewheel함수에 적용)
    function pcBut(page_index){
        $('.pc_but').css({ 
            width: 0.022*ww,
            color: '#fff',
            border:'2px solid transparent',
            backgroundImage:'linear-gradient(#fff, #fff), linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
            backgroundOrigin:'border-box',
            backgroundClip:'padding-box, border-box'
        });
        $('.pc_text').css({
            display:'none'
        });
        $('.pc_img').css({
            display:'block'
        });
        $('.pc_but').eq(page_index).css({
            backgroundImage: 'linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
            backgroundOrigin:'unset',
            backgroundClip:'padding-box',
            color:'#fff'
        }).animate({
            width: 0.06*ww
            },400);
        $('.pc_text').eq(page_index).css({
            display:'block'
        });
        $('.pc_img').eq(page_index).css({
            display:'none'
        }); 
    }



})