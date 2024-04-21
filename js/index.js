$(document).ready(function(){

    // layout();
    // $(window).resize(function(){
    //     layout();
    // })

    // function layout(){
    //     ww=$(window).innerWidth();
    //     wh=$(window).innerHeight();

    //     if(ww>=1024){
    //     //-----전체 페이지 스타일 지정-----//
    //     $('.run_wrap,.main_page,.page_wrap').css({
    //         width: ww,
    //         height: wh,
    //         top: 0
    //     })
    //     //-----1.run_wrap-----//
    //     $('.run_wrap').css({
    //         display: 'none',
    //         left:0, //main_page내 버튼 클릭과 동시에 left:-ww
    //         zIndex: 999
    //     })
    //     $('.run_wrap>img').css({
    //         width: 0.73*ww,
    //         height: 0.63*wh,
    //         left:'50%',
    //         top:'50%',
    //         marginLeft: -0.365*ww,
    //         marginTop: -0.315*wh
    //     })
    //     //-----2.main_page-----//
    //     $('.main_page').css({
    //         left:0,
    //         zIndex: 999
    //     })
    //     $('.main_page>img').css({
    //         // position: 'absolute',
    //         width: ww,
    //         height:0.5*wh,
    //         marginTop:0.15*wh
    //     })
    //     $('.main_text').css({
    //         width: ww,
    //         marginBottom: 0.03*wh
    //     })
    //     $('.click_box').css({
    //         width: 0.09*ww,
    //         height:0.07*wh,
    //         lineHeight: 0.07*wh+'px',
    //         fontSize: 0.013*ww
    //     })
    //     //-----3.page_wrap-----//1) button_box 2)move_page>page1-3
    //     $('.page_wrap').css({
    //         // pc버전 디자인 작업 때 확인하기 위해 임시로 left:0
    //         // left:0,
    //         left:ww,
    //         zIndex: 99,
    //         overflow:'hidden'
    //     })
    //     //1) 메뉴박스(button_box)
    //     $('.button_box').css({
    //         width: 0.035*ww,
    //         height: 0.25*wh,
    //         top: 0.2*wh,
    //         left: 0.87*ww
    //     })
    //     $('.button_con').css({
    //         width: 0.02*ww,
    //         height: 0.02*ww,
    //         borderRadius: 0.03*ww
    //     })
    //     let but_h=$('.button_con').height();
    //     $('.button_con').css({
    //         lineHeight: but_h+'px'
    //     })
    //     // resize : mo>pc icon변경필요
    //     let butIcon=["./img/1.png","./img/2.png","./img/3.png","./img/4.png"]
    //     $('.button_con>img').attr({
    //         src : function(abc){
    //             return butIcon[abc]
    //         }
    //     })
    //     // resize : button_con 길이 유지
    //     let moveTop=$('.move_page').position().top;
    //     if(moveTop==0){
    //         moveIndex(0)
    //     }else if(moveTop==-wh){
    //         moveIndex(1)
    //     }else if(moveTop==-wh*2){
    //         moveIndex(2)
    //     }
    //     function moveIndex(moveICon){
    //         $('.button_con').css({ 
    //             width: 0.02*ww,
    //             border:'2px solid transparent',
    //             backgroundImage:'linear-gradient(#fff, #fff), linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)',
    //             backgroundOrigin:'border-box',
    //             backgroundClip:'padding-box, border-box'
    //         });
    //         $('.button_con').eq(moveICon).css({
    //             width: 0.06*ww,
    //             backgroundImage: 'linear-gradient(45deg,#dd5875,#f39b00,#75bd4d,#059ee2)', 
    //             backgroundOrigin:'border-box',
    //             backgroundClip:'',
    //             color:'#fff'
    //         })
    //     }
    //     //------------------------------------------------//
    //     //2). move_page
    //     $('.move_page').css({
    //         width: ww,
    //         height: wh*3 
    //     })
    //     $('.page').css({
    //         width: ww,
    //         height: wh
    //     })
    //     //----------(A)page_1 : 자기소개 영역
    //     $('.con_wrap').css({
    //         width: 0.8*ww,
    //         height: 0.8*wh,
    //         marginTop:0.1*wh
    //     })
    //     con_ww=$('.con_wrap').width();
    //     con_wh=$('.con_wrap').height();
    //     $('.left_con').css({
    //         width: 0.3*con_ww,
    //         height:0.8*con_wh
    //     })
    //     $('.right_con').css({
    //         width: 0.6*con_ww,
    //         height:0.8*con_wh
    //     })
    //     let r_ww=$('.right_con').width();
    //     let r_wh=$('.right_con').height();
    //     $('.con_box').css({
    //         paddingLeft: 0.02*ww,
    //         boxSizing: 'border-box',
    //         float: 'left'
    //     })
    //     $('.name_box,.skill_box').css({
    //         width: r_ww,
    //         height: 0.25*r_wh
    //     })
    //     //con_box(1):이름
    //     $('.name_box').css({
    //         marginTop: 0.1*r_wh,
    //         marginBottom: 0.04*r_wh,
    //         lineHeight: 0.25*r_wh+'px'
    //     })
    //     $('.name_box>.point_text').css({
    //         textAlign:'start'
    //     })
    //     $('.name_box p,.top_text').css({
    //         fontSize: '1.5rem'
    //     })
    //     //con_box(2-3):생년월일, 자격증
    //     $('.birth_box,.certi_box').css({
    //         width: 0.5*r_ww,
    //         height: 0.3*r_wh
    //     })
    //     $('.con_box>.top_text').css({
    //         paddingLeft: 0.01*ww
    //     })
    //     $('.con_box p').css({
    //         marginTop: 0.015*wh,
    //         paddingLeft: 0.015*ww,
    //         boxSizing: 'border-box'
    //     })
    //     //con_box(4):기술
    //     $('.skill_box').css({
    //         paddingRight: 0.02*ww,
    //         boxSizing: 'border-box'
    //     })
    //     $('.skill_img').css({
    //         paddingLeft: 0.015*ww,
    //         boxSizing: 'border-box'
    //     })
    //     //----------(B)page_2 : 프로젝트 영역
    //     $('.swiper_wrap').css({
    //         width: 0.8*ww,
    //         height: 0.8*wh,
    //         marginLeft:0.1*ww
    //     })
    //     $('.swiper').css({
    //         width: 0.7*ww,
    //         height: 0.6*wh
    //     })
        
    //     //pc swiper img삽입
    //             // let port=["./img/a1b.png","./img/a2b.png","./img/a3b.png","./img/a4b.png","./img/a5b.png"]
    //             // $('.swiper-slide img').attr({
    //             //     src: function(img){
    //             //         return port[img]
    //             //     }
    //             //     })    
    //             //흑백-컬러 hover시 무한반복 루트 설정시 오류발생
    //     let color_port=["./img/a1.png","./img/a2.png","./img/a3.png","./img/a4.png","./img/a5.png"]
    //     $('.swiper-slide img').attr({
    //         src: function(index_abc){
    //             return color_port[index_abc]
    //         }
    //         })
    //     //----------(C)page_3 : 콘텍트 영역
    //     $('.contact_box').css({
    //         width: 0.5*ww,
    //         height: 0.4*wh,
    //         marginTop: 0.3*wh
    //     })
    //     let contact_ww=$('.contact_box').width();
    //     let contact_wh=$('.contact_box').height();
    //     $('.contact_box').css({
    //         paddingLeft: contact_ww*0.1,
    //         paddingRight: contact_ww*0.1,
    //         paddingTop: contact_wh*0.1,
    //         paddingBottom: contact_wh*0.1,
    //         boxSizing: 'border-box'
    //     })
    //     $('.call_box>div').css({
    //         width: contact_ww*0.2
    //     })
    //     //ww>=1024조건 끝
    // }else if(ww>=768 && ww<1024){
    //         //-----전체 페이지 스타일 지정-----//
    //         $('.main_page,.page_wrap').css({
    //             width: ww,
    //             height: wh,
    //             top: 0,
    //             left: 0
    //         })
    //         //-----1.run_wrap-----//
    //         $('.run_wrap').css({
    //             display: 'none'
    //         })
    //         //-----2.main_page-----//
    //         $('.main_page').css({
    //             width: ww,
    //             height: wh,
    //             zIndex: 999,
    //             // display: 'none'
    //         })
    //         $('.main_page>img').css({
    //             width: ww,
    //             height:0.3*wh,
    //             marginTop:0.15*wh
    //         })
    //         $('.main_text').css({
    //             width: ww,
    //             marginBottom: 0.015*wh
    //         })
    //         $('.click_box').css({
    //             width: 0.2*ww,
    //             height:0.05*wh,
    //             lineHeight: 0.05*wh+'px',
    //             fontSize: 0.02*ww
    //         })
    //         //-----3.page_wrap-----(button_box/move_page)//
    //         $('.page_wrap').css({
    //             width: ww,
    //             height: wh*3,
    //             zIndex: 99,
    //             position: 'relative',
    //             display: 'none'
    //         })
    //         //1) 메뉴박스(button_box)
    //         $('.button_box').css({
    //             width: ww,
    //             height: 0.1*wh,
    //             paddingLeft: 0.1*ww,
    //             paddingRight: 0.1*ww,
    //             boxSizing: 'border-box',
    //             left:0,
    //             bottom:0
    //         })
    //         $('.button_con').css({
    //             width: 0.1*ww,
    //             height: 0.1*ww,
    //             cursor:'pointer',
    //             // backgroundColor: 'red'
    //         })
    //         let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
    //             $('.button_con>img').attr({
    //                 src : function(abc){
    //                     return butIcon[abc]
    //                 }
    //             })    
    //             $('.button_con>img').eq(0).attr({
    //                 src:"./img/p_icon_11.png"
    //             })
    //         //2) move_page
    //         $('.move_page').css({
    //             width: ww,
    //             height: wh*3
    //         })
    //         $('.page').css({
    //             width: ww,
    //             height: wh
    //         })
    //         $('.page_1').css({
    //             paddingTop: 0.1*wh,
    //             backgroundColor:"blue"
    //         })
    //         $('.page_2').css({
    //             paddingTop: 0.05*wh,
    //             backgroundColor:"purple"
    //         })
    //         $('.page_3').css({
    //             paddingTop: 0.1*wh,
    //             backgroundColor:"darkcyan"
    //         })
    //         //----------(A)page_1 : 자기소개 영역
    //         $('.con_wrap').css({
    //             width: 0.8*ww,
    //             height: 0.7*wh,
    //             margin: '0 auto',
    //             // backgroundColor: 'green'
    //         })
    //         con_ww=$('.con_wrap').width();
    //         con_wh=$('.con_wrap').height();
    //         $('.left_con').css({
    //             width: con_ww*0.48,
    //             height:0.6*con_wh,
    //             // backgroundColor: 'black'
    //         })
    //         $('.left_con img').css({
    //             scale: 0.9
    //         })
    //         $('.right_con').css({
    //             width: con_ww*0.48,
    //             height:0.6*con_wh,
    //             // backgroundColor: 'pink'
    //         })
    //         let r_ww=$('.right_con').width();
    //         let r_wh=$('.right_con').height();
    //         $('.con_box').css({
    //             boxSizing: 'border-box',
    //             float: 'left'
    //         })
    //         $('.name_box').css({
    //             width: r_ww,
    //             height: 0.25*r_wh,
    //             lineHeight:0.25*r_wh+'px'
    //         })
    //         $('.birth_box,.certi_box').css({
    //             width: 0.5*r_ww,
    //             height: 0.25*r_wh
    //         })
    //         $('.skill_box').css({
    //             width: r_ww,
    //             height: 0.5*r_wh
    //         })
    //         //----------(B)page_2 : 프로젝트 영역
    //         $('.project_text').css({
    //             width: '100%',
    //             height: 0.05*wh,
    //             backgroundColor: 'blue',
    //             position:'relative'
    //         })
    //         $('.swiper_wrap').css({
    //             width: 0.8*ww,
    //             height: 0.8*wh,
    //             margin: '0 auto',
    //             backgroundColor: 'red',
    //             paddingLeft: '5%',
    //             paddingRight: '5%',
    //             boxSizing: 'borderBox'
    //         }) 
    //         $('.swiper-wrapper,.swiper-slide').css({
    //             width: '100%',
    //             height: '100%'
    //         })   
    //         let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
    //         $('.swiper-slide img').attr({
    //             src: function(def){
    //                 return port[def]
    //             }
    //         })
    //         $('.con_text').css({
    //             width: '100%',
    //             height: 0.05*wh,
    //             backgroundColor: 'blue',
    //             position:'relative',
    //             marginBottom: 0.01*wh
    //         })
    //         $('.swiper').css({
    //             width: '86%',
    //             marginLeft: '7%',
    //             height: 0.35*wh,
    //             marginTop: 0.01*wh,
    //             marginBottom: 0.01*wh,
    //             borderRadius: '20px',
    //             backgroundColor: "green"
    //         })
    //         let swiper_ww=$('.swiper_wrap').width()
    //         $('.swiper_button').css({
    //             width: '100%',
    //             height: 0.15*wh,
    //             backgroundColor:'green'
    //         })
    //         $('.but_con').css({
    //             width: swiper_ww*0.3,
    //             height: swiper_ww*0.3,
    //             float: 'left',
    //             cursor: 'pointer',
    //             border: '1px solid black',
    //             boxSizing: 'border-box'
    //         })
    //         $('.left_but').css({
    //             marginLeft: swiper_ww*0.05
    //         })
    //         $('.right_but').css({
    //             marginRight: swiper_ww*0.05
    //         })
    //         $('.pj_text,.pj_con').css({
    //             display: 'none'
    //         })
    //         $('.con_text').css({
    //             width: '100%',
    //             height: 0.1*wh,
    //             marginTop: 0.03*wh,
    //             marginBottom: 0.01*wh,
    //             backgroundColor: 'skyblue',
    //             position:'relative'
    //         })
    //         $('.pj_con').css({
    //             width: '90%',
    //             marginLeft: '5%',
    //             backgroundColor: 'white'
    //         })
    //         $('.pj_text').eq(0).css({
    //             display: 'block'
    //         })
    //         $('.pj_con').eq(0).css({
    //             display: 'block'
    //         })
    //         //----------(C)page_3 : 콘텍트 영역
    //         $('.contact_box').css({
    //             width: 0.8*ww,
    //             height: 0.8*wh,
    //             margin: '0 auto',
    //             // backgroundColor: 'white'
    //         })
    //         $('.call_box').css({
    //             width: 0.8*ww,
    //             height: 0.4*wh,
    //             // backgroundColor: 'red'
    //         })
    //         let call_ww=$('.call_box').width()
    //         let call_wh=$('.call_box').height()
    //         $('.call_box div').css({
    //             width: call_ww*0.4,
    //             height: call_ww*0.4,
    //             // backgroundColor: 'hotpink',
    //         })
    // }else if(ww<768){
    //       //-----전체 페이지 스타일 지정-----//
    //     $('.main_page,.page_wrap').css({
    //         top: 0,
    //         left: 0
    //     })
    //     //-----1.run_wrap-----//
    //     $('.run_wrap').css({
    //         display: 'none'
    //     })
    //     //-----2.main_page-----//
    //     $('.main_page').css({
    //         width: ww,
    //         height: wh,
    //         zIndex: 999,
    //         display: 'none' 
    //     })
    //     $('.main_page>img').css({
    //         width: ww,
    //         height:0.3*wh,
    //         marginTop:0.15*wh
    //     })
    //     $('.main_text').css({
    //         width: 0.5*ww,
    //         // backgroundColor: 'red',
    //         marginBottom: 0.015*wh
    //     })
    //     $('.click_box').css({
    //         width: 0.2*ww,
    //         height:0.05*wh,
    //         lineHeight: 0.05*wh+'px',
    //         fontSize: 0.03*ww
    //     })
    //     //-----3.page_wrap-----(button_box/move_page)//
    //     $('.page_wrap').css({
    //         width: ww,
    //         height: wh*3,
    //         zIndex: 99,
    //         position: 'relative',
    //         // display: 'none'
    //     })
    //     //1) 메뉴박스(button_box)
    //     $('.button_box').css({
    //         width: ww,
    //         height: 0.1*wh,
    //         paddingLeft: 0.1*ww,
    //         paddingRight: 0.1*ww,
    //         boxSizing: 'border-box',
    //         left:0,
    //         bottom:0
    //     })
    //     $('.button_con').css({
    //         width: 0.1*ww,
    //         height: 0.1*ww,
    //         cursor:'pointer'
    //     })
    //     let butIcon=["./img/p_icon_1.png","./img/p_icon_2.png","./img/p_icon_3.png","./img/p_icon_4.png"]
    //     $('.button_con>img').attr({
    //         src : function(abc){
    //             return butIcon[abc]
    //         }
    //     })
    //     //2) move_page
    //     $('.move_page').css({
    //         width: ww,
    //         height: wh*3
    //     })
    //     $('.page').css({
    //         width: ww,
    //         height: wh
    //     })
    //     $('.page_1').css({
    //         paddingTop: 0.05*wh,
    //         // backgroundColor:"red"
    //     })
    //     $('.page_2').css({
    //         paddingTop: 0.05*wh,
    //         // backgroundColor:"purple"
    //     })
    //     $('.page_3').css({
    //         paddingTop: 0.1*wh,
    //         // backgroundColor:"darkcyan"
    //     })
    //     /*----------(A)page_1 : 자기소개 영역*/
    //     // con_wrap : (left_con/right_con의 부모)
    //     $('.con_wrap').css({
    //         width: 0.8*ww,
    //         height: 0.8*wh,
    //         margin: '0 auto',
    //         // backgroundColor: 'darkgrey'
    //     })
    //     con_ww=$('.con_wrap').width();
    //     con_wh=$('.con_wrap').height();
    //     $('.left_con').css({
    //         width: con_ww,
    //         height:0.4*con_wh
    //     })
    //     $('.right_con').css({
    //         width: con_ww,
    //         height: 0.6*con_wh,
    //         marginTop: '10px',
    //         // backgroundColor: 'yellow'
    //     })
    //     let r_ww=$('.right_con').width();
    //     let r_wh=$('.right_con').height();
    //     $('.con_box').css({
    //         boxSizing: 'border-box',
    //         float: 'left'
    //     })
    //     //con_box
    //     $('.name_box').css({
    //         width: con_ww,
    //         height: 0.15*r_wh,
    //         lineHeight:0.15*r_wh+'px',
    //         // backgroundColor: 'red'
    //     })
    //     $('.birth_box,.certi_box').css({
    //         width: 0.5*r_ww,
    //         height: 0.4*r_wh,
    //         // backgroundColor: 'blue',
    //     })
    //     $('.skill_box').css({
    //         width: con_ww,
    //         height: 0.35*r_wh,
    //         // backgroundColor: 'pink'
    //     })
    //     $('.skill_img').css({
    //         marginTop: 0.02*r_wh 
    //     })
    //     //----------(B)page_2 : 프로젝트 영역
    //     $('.project_text').css({
    //         width: '100%',
    //         height: 0.05*wh,
    //         // backgroundColor: 'blue',
    //         position:'relative'
    //     })
    //     $('.swiper_wrap').css({
    //         width: 0.8*ww,
    //         height: 0.8*wh,
    //         margin: '0 auto',
    //         // backgroundColor: 'darkgrey',
    //         paddingLeft: '5%',
    //         paddingRight: '5%',
    //         boxSizing: 'borderBox'
    //     })   
    //     $('.swiper-wrapper,.swiper-slide').css({
    //         width: '100%',
    //         height: '100%'
    //     })     
    //     let port=["./img/mo1.jpg","./img/mo2.jpg","./img/mo3.jpg","./img/mo4.jpg","./img/mo5.jpg"]
    //     $('.swiper-slide img').attr({
    //         src: function(def){
    //             return port[def]
    //         }
    //         })
    //     $('.con_text').css({
    //         width: '100%',
    //         height: 0.05*wh,
    //         // backgroundColor: 'blue',
    //         position:'relative',
    //         marginBottom: 0.01*wh
    //     })
    //     $('.swiper').css({
    //         width: '86%',
    //         marginLeft: '7%',
    //         height: 0.35*wh,
    //         marginTop: 0.02*wh,
    //         marginBottom: 0.02*wh,
    //         borderRadius: '20px',
    //         // backgroundColor: "red"
    //     })
    //     let swiper_ww=$('.swiper_wrap').width()
    //     $('.swiper_button').css({
    //         width: '100%',
    //         height: 0.15*wh,
    //         // backgroundColor:'green'
    //     })
    //     $('.but_con').css({
    //         width: swiper_ww*0.3,
    //         height: swiper_ww*0.3,
    //         float: 'left',
    //         cursor: 'pointer',
    //         // border: '1px solid black',
    //         boxSizing: 'border-box',
    //     })
    //     $('.left_but').css({
    //         marginLeft: swiper_ww*0.05
    //     })
    //     $('.right_but').css({
    //         marginRight: swiper_ww*0.05
    //     })
    //     $('.pj_text,.pj_con').css({
    //         display: 'none'
    //     })
    //     $('.con_text').css({
    //         width: '100%',
    //         height: 0.1*wh,
    //         marginTop: 0.03*wh,
    //         marginBottom: 0.01*wh,
    //         // backgroundColor: 'skyblue',
    //         position:'relative'
    //     })
    //     $('.pj_con').css({
    //         width: '90%',
    //         marginLeft: '5%',
    //         backgroundColor: 'white'
    //     })
    //     $('.pj_text').eq(0).css({
    //         display: 'block'
    //     })
    //     $('.pj_con').eq(0).css({
    //         display: 'block'
    //     })
    //     //----------(C)page_3 : 콘텍트 영역
    //     $('.contact_box').css({
    //         width: 0.8*ww,
    //         height: 0.8*wh,
    //         margin: '0 auto',
    //         backgroundColor: 'white'
    //     })
    //     $('.call_box').css({
    //         width: 0.8*ww,
    //         height: 0.4*wh,
    //         // backgroundColor: 'red'
    //     })
    //     let call_ww=$('.call_box').width()
    //     let call_wh=$('.call_box').height()
    //     $('.call_box div').css({
    //         width: call_ww*0.4,
    //         height: call_ww*0.4,
    //         // backgroundColor: 'hotpink',
    //     })
    // }
    // }
})