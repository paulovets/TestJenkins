$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });

    //Activates the content as a modal.
    //If there is no need in the options overriding - the 'show' trigger is enough.
    $("#loginModal, #reserveTableModal").modal({
        keyboard: false,
        show: false
    });

    $("#loginModalTrigger").bind("click", function(event)
    {
        $("#loginModal").modal("show");
    });

    $("#reserveTableModalTrigger").bind("click", function(event)
    {
        $("#reserveTableModal").modal("show");
    });
});