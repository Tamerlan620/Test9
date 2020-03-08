function Fixed(){
    if ($('html').scrollTop()>=400)
    {
      
      $('.fixed_navbar').css({"transform":"translateY(0)","z-index":"9999","transition":"0.5s"});
    }

    if($('html').scrollTop()<400){
        $('.fixed_navbar').css({"transform":"translateY(-100%)","transition":"0.5s"});
    }
}

Fixed();
    
$(window).scroll(function(){
    Fixed();
})

let photos=["slider-1.jpg","slider-2.jpg","slider-3.jpg","slider-4.jpg","slider-5.jpg","slider-6.jpg","slider-7.jpg"]

let counter = 0

$(".fast1").click(function (){
    console.log(counter)
    counter--
    if(counter < 0){
        counter = photos.length-1
    }
    $(".mainimg").attr("src",photos[counter])
    $(".mainimg").css("transition","0.5s")
})

$(".fast2").click(function (){
    counter++
    if(counter >photos.length ){
        counter = 0
    }
    $(".mainimg").attr("src",photos[counter])
    $(".mainimg").css("transition","0.5s")
})

function Sliderright(){
    counter++
    if(counter >photos.length ){
        counter = 0
    }
    $(".mainimg").attr("src",photos[counter])
    $(".mainimg").css("transition","0.5s")
}


setInterval(Sliderright,5000)



// Menus

$(".desserts").click(function(){
    $(this).addClass("activemenu")
    $(".foods").removeClass("activemenu")
    $(".drinks").removeClass("activemenu")
    $(".sirniyat").fadeIn()
    $(".ickiler").fadeOut()
    $(".yemekler").fadeOut()
    
})
$(".drinks").click(function(){
    $(this).addClass("activemenu")
    $(".foods").removeClass("activemenu")
    $(".desserts").removeClass("activemenu")
    $(".ickiler").fadeIn()
    $(".yemekler").fadeOut()
    $(".sirniyat").fadeOut()
    
})
$(".foods").click(function(){
    $(this).addClass("activemenu")
    $(".drinks").removeClass("activemenu")
    $(".desserts").removeClass("activemenu")
    $(".yemekler").fadeIn(1000)
    $(".sirniyat").fadeOut()
    $(".ickiler").fadeOut()
    
})



// slayder

var slayd =document.querySelector(".people")
var peoples = document.getElementsByClassName("peoplesays")
var n = 0
var size = peoples[0].clientWidth

$(".right").click(function(){
    n++
    if(n>peoples.length-3){
        n=peoples.length-3
    }
    slayd.style.transition = "transform 0.4s ease-in-out"
    slayd.style.transform = "translateX("+ (-size*n )+"px)"


    if(n===3){
        $(".point2").css("background-color","red")
        $(".point1").css("background-color","rgb(218, 208, 208)")
    }
})

$(".left").click(function(){
    n--
    if(n<0){
        n=0
    }
    slayd.style.transition = "transform 0.4s ease-in-out"
    slayd.style.transform = "translateX("+ (-size*n )+"px)"

    if(n===0){
        $(".point1").css("background-color","red")
        $(".point2").css("background-color","rgb(218, 208, 208)")
    }
})

$(".point2").click(function(){
    n=3
    slayd.style.transition = "transform 0.4s ease-in-out"
    slayd.style.transform = "translateX("+ (-size*n )+"px)"
    $(this).css("background-color","red")
    $(".point1").css("background-color","rgb(218, 208, 208)")
})

$(".point1").click(function(){
    n=0
    slayd.style.transition = "transform 0.4s ease-in-out"
    slayd.style.transform = "translateX("+ (size*n )+"px)"
    $(".point2").css("background-color","rgb(218, 208, 208)")
    $(this).css("background-color","red")
})









// navbar


  
  
  
  let hometop = $('.section1').offset().top
  let abouttop = $('.section3').offset().top
  let teamtop = $('.section4').offset().top
  let roomstop = $('.section5').offset().top
  let menustop = $('.section7').offset().top
  let eventstop = $('.section9').offset().top
  let contacttop = $('.section10').offset().top
  
  $(".nav-link").click(function(){

    $(".nav-link").removeClass("text-red")
    $(this).addClass("text-red")
    
	
 }) 

  $(".home1").click(function(){
	 $("html").animate({'scrollTop':hometop},500)
 }) 


 $(".about1").click(function(){
	 $("html").animate({'scrollTop':abouttop},500)
 }) 


 $(".team1").click(function(){
	$("html").animate({'scrollTop':teamtop},500)
})


 $(".rooms1").click(function(){
	$("html").animate({'scrollTop':roomstop},500)
})


 $(".menus1").click(function(){
	$("html").animate({'scrollTop':menustop},500)
})


 $(".events1").click(function(){
	$("html").animate({'scrollTop':eventstop},500)
})

 $(".contacts1").click(function(){
	$("html").animate({'scrollTop':contacttop},500)
})
  

  function Active(){
	
    if($('html').scrollTop()>=0 || ('html').scrollTop()<abouttop){
        $(".nav-link").removeClass("text-red")
        $(".home1").addClass("text-red")
		
    }
    if($('html').scrollTop()>=abouttop){
        $(".home1").removeClass("text-red")
        $(".about1").addClass("text-red")
    }

    if($('html').scrollTop()>=teamtop){
        $(".about1").removeClass("text-red")
        $(".team1").addClass("text-red")
    }

    if($('html').scrollTop()>=roomstop){
        $(".team1").removeClass("text-red")
        $(".rooms1").addClass("text-red")
    }

    if($('html').scrollTop()>=menustop){
        $(".rooms1").removeClass("text-red")
        $(".menus1").addClass("text-red")
    }

    if($('html').scrollTop()>=eventstop){
        $(".menus1").removeClass("text-red")
        $(".events1").addClass("text-red")
    }

    if($('html').scrollTop()>=contacttop){
        $(".events1").removeClass("text-red")
        $(".contacts1").addClass("text-red")
    }
}
   
            

        


        // let hometop = $('.section1').offset().top
        // let abouttop = $('.section3').offset().top
        // let teamtop = $('.section4').offset().top
        // let roomstop = $('.section5').offset().top
        // let menustop = $('.section7').offset().top
        // let eventstop = $('.section9').offset().top
        // let contacttop = $('.section10').offset().top
       
        // function Active(){
        
        //     if($('html').scrollTop()>=hometop){
        //         $(".nav-link").removeClass("text-red")
        //         $(".home1").addClass("text-red")
                
        //     }
        //             if( $('html').scrollTop()>abouttop){
        //                 $(".home1").removeClass("text-red") 
        //         }
        
        //       if($('html').scrollTop()>abouttop){
               
        //         $(".about1").addClass("text-red")
                
        //     }
        //             if($('html').scrollTop()>teamtop ||$('html').scrollTop()<abouttop){
        //                 $(".about1").removeClass("text-red")
        //             }
              
        //       if($('html').scrollTop()>teamtop){
        //         $(".team1").addClass("text-red") 
        
        //     }
        //             if($('html').scrollTop()>roomstop || $('html').scrollTop()<teamtop){
        //                 $(".team1").removeClass("text-red") 
        //             }
              
        //       if($('html').scrollTop()>menustop){
        //         $(".menus1").addClass("text-red")
        
        //     }
        //             if($('html').scrollTop()>eventstop  ||  $('html').scrollTop()<menustop){
        //                 $(".menus1").removeClass("text-red")   
        //             }
              
        //       if($('html').scrollTop()>eventstop){
        //         $(".events1").addClass("text-red")
                
        //     }
        //             if($('html').scrollTop()>contacttop ||$('html').scrollTop()<eventstop){
        //                 $(".events1").removeClass("text-red")  
        //             }
        
        //       if($('html').scrollTop()>contacttop){
        //         $(".contacts1").addClass("text-red")
        
        
        //     }
        //             if(($('html').scrollTop()<contacttop)){
        //                 $(".contacts1").removeClass("text-red")  
            
        //             }  
       
        //   } 
        
          
          Active();

        $(window).scroll(function(){
            Active();
        })
         
          