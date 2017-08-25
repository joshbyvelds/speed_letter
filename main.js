(function(){
    var gameRunning = true;
    var time = 1000;
    var startTime = 1000;
    var gameloop = null;
    function init(){
        $("#answer").focus();
        $("#answer").keypress(function(){
            alert("Key Press");
        });
    }

    gameloop = setInterval(function(){
        if(gameRunning){
            time -= 10;
            $("#timer_inside").css("width", Math.floor(time / startTime * 100) + "%");
        }
    }, 10);

    $(document).ready(init);
}());
