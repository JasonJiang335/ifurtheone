window.onload = function() {
    $('#selectRole').modal('show');
    var messages = [];
    var socket = io.connect('http://128.54.34.175:3700/');

    /*var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");*/

    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");
    var num7 = document.getElementById("num7");
    var num8 = document.getElementById("num8");
    var num9 = document.getElementById("num9");
    var num10 = document.getElementById("num10");
    var num11 = document.getElementById("num11");
    var num12 = document.getElementById("num12");
    var num13 = document.getElementById("num13");
    var num14 = document.getElementById("num14");
    var num15 = document.getElementById("num15");
    var num16 = document.getElementById("num16");

    var shutBtn = document.getElementById("shut");
    var blowBtn = document.getElementById("blow");
    var lightBtn = document.getElementById("light");
    var quitBtn = document.getElementById("quit");
    var allightBtn = document.getElementById("allight");
    var last;
    var shutsound = document.getElementById("shutsound");
    audiojs.events.ready(function() {
        var as = audiojs.createAll();
    });

    $("#num1").hide();
    $("#num2").hide();
    $("#num3").hide();
    $("#num4").hide();
    $("#num5").hide();
    $("#num6").hide();
    $("#num7").hide();
    $("#num8").hide();
    $("#num9").hide();
    $("#num10").hide();
    $("#num11").hide();
    $("#num12").hide();
    $("#num13").hide();
    $("#num14").hide();
    $("#num15").hide();
    $("#allight").hide();
    $("#audgroup").hide();
    $("#adminpass").hide();
    $("#shutlight").hide();
    $("#blowlight").hide();

    var selectRole;
    var submitRole = document.getElementById("submitRole");

    $(document).on('change','#roleNum',function(){
        selectRole = document.getElementById("roleNum").value;
        if(selectRole == "16")
        {
            $("#adminpass").show();
        }
    });
    
    submitRole.onclick = function(){
        selectRole = document.getElementById("roleNum").value;
        console.log(selectRole);
        switch(selectRole)
        {
            case "1":
                $("#num1").show();
                $("#wxscreen").hide();
            break;
            case "2":
                $("#num2").show();
                $("#wxscreen").hide();
            break;
            case "3":
                $("#num3").show();
                $("#wxscreen").hide();
            break;
            case "4":
                $("#num4").show();
                $("#wxscreen").hide();
            break;
            case "5":
                $("#num5").show();
                $("#wxscreen").hide();
            break;
            case "6":
                $("#num6").show();
                $("#wxscreen").hide();
            break;
            case "7":
                $("#num7").show();
                $("#wxscreen").hide();
            break;
            case "8":
                $("#num8").show();
                $("#wxscreen").hide();
            break;
            case "9":
                $("#num9").show();
                $("#wxscreen").hide();
            break;
            case "10":
                $("#num10").show();
                $("#wxscreen").hide();
            break;
            case "11":
                $("#num11").show();
                $("#wxscreen").hide();
            break;
            case "12":
                $("#num12").show();
                $("#wxscreen").hide();
            break;
            case "13":
                $("#num13").show();
                $("#wxscreen").hide();
            break;
            case "14":
                $("#num14").show();
                $("#wxscreen").hide();
            break;
            case "15":
                $("#num15").show();
                $("#wxscreen").hide();
            break;
            case "16":
                var adminpass = document.getElementById("pass").value;
                if(adminpass == "Dong930122")
                {
                    $("#num1").show();
                    $("#num2").show();
                    $("#num3").show();
                    $("#num4").show();
                    $("#num5").show();
                    $("#num6").show();
                    $("#num7").show();
                    $("#num8").show();
                    $("#num9").show();
                    $("#num10").show();
                    $("#num11").show();
                    $("#num12").show();
                    $("#num13").show();
                    $("#num14").show();
                    $("#num15").show();
                    $("#allight").show();
                    $("#audgroup").show();
                    $("#shutlight").show();
                    $("#blowlight").show();
                }
            break;
        }
    };

    /*socket.on('message', function (data)
    {
        if(data.message)
        {
            messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++)
            {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });*/
    socket.on('allightGirl', function (data)
    {
        if(data.allightGirl)
        {
            $("#num1").css("background-color", 'none');
            $("#num2").css("background-color", 'none');
            $("#num3").css("background-color", 'none');
            $("#num4").css("background-color", 'none');
            $("#num5").css("background-color", 'none');
            $("#num6").css("background-color", 'none');
            $("#num7").css("background-color", 'none');
            $("#num8").css("background-color", 'none');
            $("#num9").css("background-color", 'none');
            $("#num10").css("background-color", 'none');
            $("#num11").css("background-color", 'none');
            $("#num12").css("background-color", 'none');
            $("#num13").css("background-color", 'none');
            $("#num14").css("background-color", 'none');
            $("#num15").css("background-color", 'none');   

            $("#num1").fadeIn();
            $("#num2").fadeIn();
            $("#num3").fadeIn();
            $("#num4").fadeIn();
            $("#num5").fadeIn();
            $("#num6").fadeIn();
            $("#num7").fadeIn();
            $("#num8").fadeIn();
            $("#num9").fadeIn();
            $("#num10").fadeIn();
            $("#num11").fadeIn();
            $("#num12").fadeIn();
            $("#num13").fadeIn();
            $("#num14").fadeIn();
            $("#num15").fadeIn();
        }
    });
    socket.on('shutGirl', function (data)
    {
        switch(data.shutGirl)
        {
        case 1:
            $("#num1").css("background-color", 'd9534f');
        break;
        case 2:
            $("#num2").css("background-color", 'd9534f');
        break;
        case 3:
            $("#num3").css("background-color", 'd9534f');
        break;
        case 4:
            $("#num4").css("background-color", 'd9534f');
        break;
        case 5:
            $("#num5").css("background-color", 'd9534f');
        break;
        case 6:
            $("#num6").css("background-color", 'd9534f');
        break;
        case 7:
            $("#num7").css("background-color", 'd9534f');
        break;
        case 8:
            $("#num8").css("background-color", 'd9534f');
        break;
        case 9:
            $("#num9").css("background-color", 'd9534f');
        break;
        case 10:
            $("#num10").css("background-color", 'd9534f');
        break;
        case 11:
            $("#num11").css("background-color", 'd9534f');
        break;
        case 12:
            $("#num12").css("background-color", 'd9534f');
        break;
        case 13:
            $("#num13").css("background-color", 'd9534f');
        break;
        case 14:
            $("#num14").css("background-color", 'd9534f');
        break;
        case 15:
            $("#num15").css("background-color", 'd9534f');
        break;
        }
    });

    socket.on('lightGirl', function (data)
    {
        switch(data.lightGirl)
        {
        case 1:
            $("#num1").css("background-color", 'none');
        break;
        case 2:
            $("#num2").css("background-color", 'none');
        break;
        case 3:
            $("#num3").css("background-color", 'none');
        break;
        case 4:
            $("#num4").css("background-color", 'none');
        break;
        case 5:
            $("#num5").css("background-color", 'none');
        break;
        case 6:
            $("#num6").css("background-color", 'none');
        break;
        case 7:
            $("#num7").css("background-color", 'none');
        break;
        case 8:
            $("#num8").css("background-color", 'none');
        break;
        case 9:
            $("#num9").css("background-color", 'none');
        break;
        case 10:
            $("#num10").css("background-color", 'none');
        break;
        case 11:
            $("#num11").css("background-color", 'none');
        break;
        case 12:
            $("#num12").css("background-color", 'none');
        break;
        case 13:
            $("#num13").css("background-color", 'none');
        break;
        case 14:
            $("#num14").css("background-color", 'none');
        break;
        case 15:
            $("#num15").css("background-color", 'none');
        break;
        }
    });

    socket.on('blowGirl', function (data)
    {
        switch(data.blowGirl)
        {
        case 1:
            $("#num1").css("background-color", '5cb85c');
        break;
        case 2:
            $("#num2").css("background-color", '5cb85c');
        break;
        case 3:
            $("#num3").css("background-color", '5cb85c');
        break;
        case 4:
            $("#num4").css("background-color", '5cb85c');
        break;
        case 5:
            $("#num5").css("background-color", '5cb85c');
        break;
        case 6:
            $("#num6").css("background-color", '5cb85c');
        break;
        case 7:
            $("#num7").css("background-color", '5cb85c');
        break;
        case 8:
            $("#num8").css("background-color", '5cb85c');
        break;
        case 9:
            $("#num9").css("background-color", '5cb85c');
        break;
        case 10:
            $("#num10").css("background-color", '5cb85c');
        break;
        case 11:
            $("#num11").css("background-color", '5cb85c');
        break;
        case 12:
            $("#num12").css("background-color", '5cb85c');
        break;
        case 13:
            $("#num13").css("background-color", '5cb85c');
        break;
        case 14:
            $("#num14").css("background-color", '5cb85c');
        break;
        case 15:
            $("#num15").css("background-color", '5cb85c');
        break;
    }
    });

    socket.on('quitGirl', function (data)
    {
        switch(data.quitGirl)
        {
        case 1:
            $("#num1").fadeOut("slow");
        break;
        case 2:
            $("#num2").fadeOut("slow");
        break;
        case 3:
            $("#num3").fadeOut("slow");
        break;
        case 4:
            $("#num4").fadeOut("slow");
        break;
        case 5:
            $("#num5").fadeOut("slow");
        break;
        case 6:
            $("#num6").fadeOut("slow");
        break;
        case 7:
            $("#num7").fadeOut("slow");
        break;
        case 8:
            $("#num8").fadeOut("slow");
        break;
        case 9:
            $("#num9").fadeOut("slow");
        break;
        case 10:
            $("#num10").fadeOut("slow");
        break;
        case 11:
            $("#num11").fadeOut("slow");
        break;
        case 12:
            $("#num12").fadeOut("slow");
        break;
        case 13:
            $("#num13").fadeOut("slow");
        break;
        case 14:
            $("#num14").fadeOut("slow");
        break;
        case 15:
            $("#num15").fadeOut("slow");
        break;
    }
    });

    /*sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };*/

    shutBtn.onclick = function(){
        sound = document.getElementById('shut-sound');
        sound.loop = false;
        sound.play();

        socket.emit('shut', { shutGirl: last });
    };

    lightBtn.onclick = function(){
        socket.emit('light', { lightGirl: last });
    };

    blowBtn.onclick = function() {
        sound = document.getElementById('blow-sound');
        sound.loop = false;
        sound.play();

        socket.emit('blow', { blowGirl: last });
    };
    quitBtn.onclick = function() {
        socket.emit('quit', { quitGirl: last });
    };

    allightBtn.onclick = function() {
        sound = document.getElementById('light-sound');
        sound.loop = false;
        sound.play();
        socket.emit('allight', { allightGirl: last });
    };

    shutlight.onclick = function(){
        sound = document.getElementById('shut-sound');
        sound.loop = false;
        sound.play();
    };

    blowlight.onclick = function(){
        sound = document.getElementById('blow-sound');
        sound.loop = false;
        sound.play();
    };

    $("#num1").click(function(){
        last = 1;
    });

    $("#num2").click(function(){
        last = 2;
    });

    $("#num3").click(function(){
        last = 3;
    });

    $("#num4").click(function(){
        last = 4;
    });

    $("#num5").click(function(){
        last = 5;
    });

    $("#num6").click(function(){
        last = 6;
    });

    $("#num7").click(function(){
        last = 7;
    });

    $("#num8").click(function(){
        last = 8;
    });

    $("#num9").click(function(){
        last = 9;
    });

    $("#num10").click(function(){
        last = 10;
    });

    $("#num11").click(function(){
        last = 11;
    });

    $("#num12").click(function(){
        last = 12;
    });

    $("#num13").click(function(){
        last = 13;
    });

    $("#num14").click(function(){
        last = 14;
    });

    $("#num15").click(function(){
        last = 15;
    });
}
