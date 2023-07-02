$(document).ready(function() {
    $('.parallax').parallax();

    $('.tooltipped').tooltip({
        inDuration: 600,
        outDuration: 200,
        enterDelay: 600,
        exitDelay: 500,
        position: 'right',
    });

    $('.materialboxed').materialbox({
        inDuration: 1500,
        outDuration: 1500
    })

    $('#btn-enterWeb').on('click', function() {
        var obj = document.getElementById('bgMusic')
        obj.play();
        obj.loop = true;
        $('#musicEnable').hide();
        $('#musicDisable').show();
        $("body").css("overflow", "visible");
        const mainPageDiv = document.getElementById("main-page");
        mainPageDiv.replaceWith(...mainPageDiv.childNodes);
    });

    $('#musicEnable').on('click', function() {
        var obj = document.getElementById('bgMusic')
        obj.play();
        obj.loop = true;
        $('#musicEnable').hide();
        $('#musicDisable').show();
        $('#musicEnable2').hide();
        $('#musicDisable2').show();


        M.Toast.dismissAll();
        M.toast({
            html: '<h6>Now playing: øneheart - this feeling <i class="fa-solid fa-volume-low left"></i></h6>',
            displayLength: 3000,
            inDuration: 3000,
            outDuration: 0
        });
    });

    $('#musicDisable').on('click', function() {
        var obj = document.getElementById('bgMusic')
        obj.pause();
        $('#musicEnable').show();
        $('#musicDisable').hide();
        $('#musicEnable2').show();
        $('#musicDisable2').hide();

        M.Toast.dismissAll();
        M.toast({
            html: '<h6 class="left">Music turned off <i class="fa-solid fa-volume-xmark left"></i></h6>',
            displayLength: 3000,
            inDuration: 3000,
            outDuration: 0,
        }); 
    });

    $('#musicEnable2').on('click', function() {
        var obj = document.getElementById('bgMusic')
        obj.play();
        obj.loop = true;
        $('#musicEnable').hide();
        $('#musicDisable').show();
        $('#musicEnable2').hide();
        $('#musicDisable2').show();

        M.Toast.dismissAll();
        M.toast({
            html: '<h6>Now playing: øneheart - this feeling <i class="fa-solid fa-volume-low left"></i></h6>',
            displayLength: 3000,
            inDuration: 3000,
            outDuration: 0
        });
    });

    $('#musicDisable2').on('click', function() {
        var obj = document.getElementById('bgMusic')
        obj.pause();
        $('#musicEnable').show();
        $('#musicDisable').hide();
        $('#musicEnable2').show();
        $('#musicDisable2').hide();

        M.Toast.dismissAll();
        M.toast({
            html: '<h6 class="left">Music turned off <i class="fa-solid fa-volume-xmark left"></i></h6>',
            displayLength: 3000,
            inDuration: 3000,
            outDuration: 0,
        }); 
    });


    $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });

    $('.pushpin').pushpin();
    $('.scrollspy').scrollSpy();
});
    
    var loader = document.getElementById("preloader");
        window.addEventListener("load", function() {
            loader.style.display = "none";
            
})
