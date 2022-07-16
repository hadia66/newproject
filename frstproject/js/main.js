   /* Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    */
let x=0;
function check(){
   
    let y=document.getElementById("login").value;
    let target=0;
    for(lett i=0;i<y.length;i++)
    {
        if(y[i]=="@")
        {
            target=1;
            
        }
        else{
            break;
        }
    }
    if(target==0){
        let h=document.getElementById("alert")
        h.style.display="block";
        h.innerHTML="<b> error</b>please enter coorect email";
        
    }
    else{
        
        let h=document.getElementById("alert");
        h.style.display="non";
        
    }
    
}