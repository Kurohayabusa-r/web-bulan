$(document).ready(function() {

    var currentindex = 0;
    var img = document.getElementById('slider');
    var widths = img.clientWidth;

    console.log(widths)
    function sliding(){
        
        if(currentindex != 2){
            $('.slider').animate({left: `-=${widths}`}, 500);
            currentindex++;
        }else{
            $('.slider').animate({left: 0}, 500);
            currentindex = 0;
        }
    }
    if(screen.width < 800){
        function sliding(){
        
            if(currentindex != 2){
                $('.slider').animate({left: `-=${screen.width}`}, 500);
                currentindex++;
            }else{
                $('.slider').animate({left: 0}, 500);
                currentindex = 0;
            }
        }
    }
    setInterval(sliding,4000)
});