$(document).ready(function(){
    $(".e-hlnk ul").each(function(){
        var $this=$(this);
        var $page=$this.find('button.active');
        var $link=$page.find('a');
        var $panel=$($link.attr('href'));        
        $this.on('click','button',function(e){
            e.preventDefault();
            var $link=$(this);
            var id=$link.find('a').attr('href');
            if(id && !$link.is('.active')){
                $panel.removeClass('show');
                $page.removeClass('active');

                $panel=$(id).addClass('show');
                $page=$link.addClass('active');

            }
        });
    });
}); 
