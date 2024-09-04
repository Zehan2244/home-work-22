$( function(){

    const navbar = $('.navbar')


   $(window).scroll(function(){

        const scrTop = $(window).scrollTop()
        
        if(scrTop > 200){
            
            navbar.addClass('fixed')
        } else{
            navbar.removeClass('fixed')
        }
        
   })

} )