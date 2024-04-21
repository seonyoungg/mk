$(document).ready(function(){

//<- - - - - - - 이벤트 정리 - - - - - - ->//

//Pc,Tab, Mobile 이벤트
//A. main_page : run_icon변경(setinterval-attr)
        let b=1;
        setInterval(function(){
            b++
            if(b>8){
                b=1
            }
            $('.main_page>img').attr({
                src: `./img/run_icon2/${b}.png`
            })
        },200)
        
//A-2. contact_box : img변경(hover-attr)
    let icon=["./img/contact11.png","./img/contact22.png","./img/contact33.png","./img/contact44.png"]
    let change_icon=["./img/contact1.png","./img/contact2.png","./img/contact3.png","./img/contact4.png"]
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

//Tab, Mobile 이벤트
let windowWidth=$(window).width();
if(windowWidth<1024){
    //B. main_page>click_box 이벤트 실행
    $('.click_box').click(function(){
        $('.main_page').fadeOut(2000)
    })

    //B-2. button_con(click)
    $('.button_con').click(function(){
        let button_index=$(this).index();
        if(button_index !== 3){
            $('html,body').animate({
                scrollTop: wh*button_index
            },1000)
        }
        imgChange(button_index);
    })

    $(window).scroll(function(){
        imgAttr();
    });

    //B-3. scroll 위치값에 따른 button_con 변경
        $(window).scroll(function(){
        let s_top=$(this).scrollTop();
        let pageIndex=0;
        console.log(s_top);
        if(s_top>=0 && s_top<wh){
            pageIndex=0;
            }else if(s_top>=wh && s_top<wh*2){
                pageIndex=1;
            }else if(s_top>=wh*2 && s_top<wh*3){
                pageIndex=2;
            }
            imgChange(pageIndex);
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

    //B-3 요약
    // function imgAttr(){
    //     let swt=$(window).scrollTop();
    //     let pageIndex=Math.floor(swt/wh);
    //     let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
    //     let butIcon2=["./img/p_icon_11.png","./img/p_icon_22.png","./img/p_icon_33.png","./img/p_icon_44.png"]
        
    //     $('.button_con>img').attr({
    //         src : function(abc){
    //             return butIcon[abc]
    //             }
    //         })
    //      $('.button_con').eq(pageIndex).find('img').attr({
    //         src : function(){
    //             return butIcon2[pageIndex]
    //             }
    //         })
    //     }

    //B-4. page2 : project banner_box 기능
    // '▶' 버튼 클릭
    $('.right_but').click(function(){
        $('.pj_text').first().fadeOut(300, function(){
            $('.pj_text').eq(1).fadeIn(1000)
            $(this).appendTo('.project_text')
        });
        $('.pj_con').first().fadeOut(300, function(){
            $('.pj_con').eq(1).fadeIn(1000)
            $(this).appendTo('.con_text')
        });
        });
    // '◀' 버튼 클릭
    $('.left_but').click(function(){
        $('.pj_text').last().prependTo('.project_text')
        $('.pj_text').eq(1).fadeOut(300, function(){
            $('.pj_text').first().fadeIn(1000)
        });
        $('.pj_con').last().prependTo('.con_text')
        $('.pj_con').eq(1).fadeOut(300, function(){
            $('.pj_con').first().fadeIn(1000)
        });
        });

    // bannerAuto = setInterval함수 저장
    let swiperAuto=setInterval(function(){
        $('.right_but').trigger('click')
        },5000);

    // 'pause'버튼 클릭
    let but=0;
    $('.pause_but').click(function(){
        but++
        clearInterval(swiperAuto);
        $('.pause_but>img').attr({
            src : "./img/play.png"
        })
        if(but>1){
            but=0;
            swiperAuto=setInterval(function(){
                $('.right_but').trigger('click')
                },5000);
                $('.pause_but>img').attr({
                    src : "./img/pause.png"
                })
            }
    })
    // page2 : project banner_box 기능 끝 - - ->  

}  

})