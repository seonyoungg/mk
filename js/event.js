$(document).ready(function(){

//<- - - - - - - 이벤트 정리 - - - - - - ->//

//----------1. 전체 적용 이벤트----------
//1-1. main_page : run_icon변경(setinterval-attr)
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
        
//1-2. contact_box : img변경(hover-attr)
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

})