$(document).ready(function(){
    var title = document.title;
    var mq = window.matchMedia("screen and (max-width: 600px)");
    var lightDarkValue = "light";
    var rotateValue = "false";
    var singerCount = 1;
    var guitarPlayCount = 1;
    function lightDark(value) {
        if (value == "dark") {
            $("header, #clickmenu, #menu, #container_background, footer, .under_bar").css("background-color", "#323232");
            $("#container_background #noncolor").css("background-color", "#282828");
            $(".logocursor, .light, .dark, .main, .menu_txt span, #menu ul li a, .scroll, .contactMail p").css("color", "white");
            $(".clickmenu .menu_icon .line, .phraseBox_title_line").css("background-color", "white");
            $(".category, .phraseBox_title_text, .phraseBox_content > div, .phraseBox .prev_next_btn > div").css("color", "white");
            $(".configure-border-1, .configure-border-2").css("background-color", "#282828");
            $(".timeline_title .prev_next_btn, .timeline_line_year > div").css("color", "white");
            $(".timeline_line").css("background", "#282828");
            if ($(".jeju").hasClass("on")) {
                $("#color").css("background", "#323232");
            }
            if ($(".timeline_title").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "#323232");
            }
            $(".gist_year_title, .postech_year_title, .gist_year_content, .postech_year_content, .gist .prev_next_btn > div, .postech .prev_next_btn > div, .textArrange").css("color", "white");
            $(".gist_year_title, .postech_year_title, .textTitle").css("border-bottom", "1px solid white");
            if ($(".leftPoint").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "#323232");
            }
            $(".name").css("color", "white");
            $(".programming_section .prev_next_btn > div, .web_section .prev_next_btn > div, .design_section .prev_next_btn > div, .music_section .prev_next_btn > div, .etc_section .prev_next_btn > div").css("color", "white");
            $(".korea .prev_next_btn > div").css("color", "white");
            if ($(".korea").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "#323232");
            }
            $(".gyeonggi, .gangwon, .chungcheongbuk, .chungcheongnam, .gyeongsangbuk, .gyeongsangnam, .jeollabuk, .jeollanam, .jejumap").css("background", "#323232");
            if ($(".playlist").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "#323232");
            }
            $(".playlist .prev_next_btn > div").css("color", "white");
            if ($(".guitarist").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "#323232");
            }
            $(".guitarist .prev_next_btn > div").css("color", "white");
        } else if (value == "light") {
            $("header, #clickmenu, #menu, #container_background, footer, .under_bar").css("background-color", "white");
            $("#container_background #noncolor").css("background-color", "whitesmoke");
            $(".logocursor, .light, .dark, .main, .menu_txt span, #menu ul li a, .scroll, .contactMail p").css("color", "black");
            $(".clickmenu .menu_icon .line, .phraseBox_title_line").css("background-color", "black");
            $(".category, .phraseBox_title_text, .phraseBox_content > div, .phraseBox .prev_next_btn > div").css("color", "black");
            $(".configure-border-1, .configure-border-2").css("background-color", "white");
            $(".timeline_title .prev_next_btn, .timeline_line_year > div").css("color", "black");
            $(".timeline_line").css("background", "whitesmoke");
            if ($(".jeju").hasClass("on")) {
                $("#color").css("background", "white");
            }
            if ($(".timeline_title").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "white");
            }
            $(".gist_year_title, .postech_year_title, .gist_year_content, .postech_year_content, .gist .prev_next_btn > div, .postech .prev_next_btn > div, .textArrange").css("color", "black");
            $(".gist_year_title, .postech_year_title, .textTitle").css("border-bottom", "1px solid black");
            if ($(".leftPoint").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "white");
            }
            $(".name").css("color", "black");
            $(".programming_section .prev_next_btn > div, .web_section .prev_next_btn > div, .design_section .prev_next_btn > div, .music_section .prev_next_btn > div, .etc_section .prev_next_btn > div").css("color", "black");
            $(".korea .prev_next_btn > div").css("color", "black");
            if ($(".korea").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "white");
            }
            $(".gyeonggi, .gangwon, .chungcheongbuk, .chungcheongnam, .gyeongsangbuk, .gyeongsangnam, .jeollabuk, .jeollanam, .jejumap").css("background", "white");
            if ($(".playlist").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "white");
            }
            $(".playlist .prev_next_btn > div").css("color", "black");
            if ($(".guitarist").hasClass("on")) {
                $("#color").css("transition", ".4s");
                $("#color").css("background", "white");
            }
            $(".guitarist .prev_next_btn > div").css("color", "black");
        }
    }
    if (title == "sekwang") {
        $(".spinner-box, .configure-core, #container_background #color, #menu .colorwall").css("background-color", "#FF5A5A");
        $(".title .point").css("color", "#FF5A5A");
        $(".category").text("");
        $(".main:nth-child(1)").text("HE");
        $(".main:nth-child(2)").text("LLO");
        $(".point").text(".");
        $(".phraseBox_title_text").text("Region.");
        $(".phraseBox_content > div:nth-child(1)").text("Do it steadily every day, ");
        $(".phraseBox_content > div:nth-child(2)").text("then your life will change.");
        $(".phraseBox .prev_next_btn > div:nth-child(2)").click(function(){
            $(".jeju_background, .jeju").addClass("on");
            $(".phraseBox, .title").css("transition", "0.5s");
            $(".jeju_background, .jeju, #color").css("transition", "0.5s 0.5s");
            $(".jeju_background, .jeju").css("opacity", "1");
            $(".phraseBox, .title").css("opacity", "0");
            if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            } else if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            }
            $(".phraseBox").removeClass("on");
        });
        $(".jeju .prev_next_btn > div:nth-child(1)").click(function(){
            $(".phraseBox").addClass("on");
            $(".phraseBox, .title, #color").css("transition", "0.5s 0.5s");
            $(".jeju_background, .jeju").css("transition", "0.5s");
            $(".jeju_background, .jeju").css("opacity", "0");
            $(".phraseBox, .title").css("opacity", "1");
            $("#color").css("background", "#FF5A5A");
            $(".jeju_background, .jeju").removeClass("on");
        });
        $(".jeju .prev_next_btn > div:nth-child(2)").click(function(){
            $(".timeline_title").addClass("on");
            $(".region").addClass("on");
            $(".timeline_title, #color").css("transition", "0.5s 0.5s");
            $(".region").css("transition", "0.5s 1s");
            if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            } else if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            }
            $(".jeju_background, .jeju").css("transition", "0.5s");
            $(".jeju_background, .jeju").css("opacity", "0");
            $(".timeline_title, .region").css("opacity", "1");
            $(".jeju_background, .jeju").removeClass("on");
        });
        $(".timeline_title .prev_next_btn").click(function(){
            $(".jeju_background, .jeju").addClass("on");
            $(".jeju_background, .jeju, #color").css("transition", "0.5s 0.5s");
            $(".jeju_background, .jeju").css("opacity", "1");
            if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            } else if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            }
            $(".timeline_title, .region").css("transition", "0.5s");
            $(".timeline_title, .region").css("opacity", "0");
            $(".timeline_title, .region").removeClass("on");
        });
    } else if (title == "sekwang - universities") {
        $(".spinner-box, .configure-core, #container_background #color, #menu .colorwall").css("background-color", "#BE2457");
        $(".title .point").css("color", "#BE2457");
        $(".category").text("Universities");
        $(".category").css("font-weight", "500");
        $(".main:nth-child(1)").text("UNIVER");
        $(".main:nth-child(2)").text("SITIES");
        $(".point").text(".");
        $(".main").css("margin-left", "-270px");
        $(".point").css("left", "55%");
        $(".phraseBox_title_text").text("Universities.");
        $(".phraseBox_content > div:nth-child(1)").text("If you have an earnest goal, ");
        $(".phraseBox_content > div:nth-child(2)").text("you will achieve it.");
        if (mq.matches) {
            $(".main:nth-child(1)").text("UN");
            $(".main:nth-child(2)").text("IV");
            $(".main").css("margin-left", "-103px");
            $(".point").css("left", "31%");
        }
        $(".phraseBox .prev_next_btn > div:nth-child(2)").click(function(){
            $(".gist, .gist_content").addClass("on");
            $("#color").css("transition", "1.5s 0.5s ease-in-out");
            $("#noncolor, .gist, .gist_content").css("transition", "0.5s 2s");
            $(".phraseBox, .title").css("transition", "0.5s");
            $(".phraseBox, .title").css("opacity", "0");
            $("#color").css("width", "50%");
            $("#color").css("background", "#FF7F50");
            $("#noncolor, .gist, .gist_content").css("opacity", "1");
            $(".phraseBox").removeClass("on");
        });
        $(".gist .prev_next_btn > div:nth-child(1)").click(function(){
            $(".phraseBox").addClass("on");
            $(".gist, #noncolor, .gist_content").css("transition", "0.5s");
            $("#color").css("transition", "1.5s 0.5s ease-in-out");
            $(".phraseBox, .title").css("transition", "0.5s 2s");
            $("#color").css("background", "#BE2457");
            $("#color").css("width", "100%");
            $(".gist, .gist_content, #noncolor").css("opacity", "0");
            $(".phraseBox, .title").css("opacity", "1");
            $(".gist, .gist_content").removeClass("on");
        });
        $(".gist .prev_next_btn > div:nth-child(2)").click(function(){
            $(".postech, .postech_content").addClass("on");
            $(".gist, .gist_content").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".postech, .postech_content").css("transition", "0.5s 1s");
            $(".gist, .gist_content").css("opacity", "0");
            $("#color").css("background", "#BE2457");
            $(".postech, .postech_content").css("opacity", "1");
            $(".gist, .gist_content").removeClass("on");
        });
        $(".postech .prev_next_btn > div").click(function(){
            $(".gist, .gist_content").addClass("on");
            $(".postech, .postech_content").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".gist, .gist_content").css("transition", "0.5s 1s");
            $(".postech, .postech_content").css("opacity", "0");
            $("#color").css("background", "#FF7F50");
            $(".gist, .gist_content").css("opacity", "1");
            $(".postech, .postech_content").removeClass("on");
        });
        $(".gist_logo").click(function(){
            window.open("https://www.gist.ac.kr");
        });
        $(".postech_logo").click(function(){
            window.open("https://www.postech.ac.kr");
        });
    } else if (title == "sekwang - academic values") {
        $(".spinner-box, .configure-core, #container_background #color, #menu .colorwall").css("background-color", "#5AD18F");
        $(".title .point").css("color", "#5AD18F");
        $(".category").text("Academic Values");
        $(".category").css("font-weight", "500");
        $(".main:nth-child(1)").text("ACADEMIC");
        $(".main:nth-child(2)").text("VALUES");
        $(".point").text(".");
        $(".main").css("margin-left", "-397px");
        $(".point").css("left", "53%");
        $(".phraseBox_title_text").text("Academic Values.");
        $(".phraseBox_content > div:nth-child(1)").text("Do your best at");
        $(".phraseBox_content > div:nth-child(2)").text("every moment of your life.");
        if (mq.matches) {
            $(".main:nth-child(1)").text("VAL");
            $(".main:nth-child(2)").text("UES");
            $(".main").css("margin-left", "-142px");
        }
        $(".phraseBox .prev_next_btn > div:nth-child(2)").click(function(){
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").addClass("on");
            $(".phraseBox, .title").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").css("transition", "0.5s 1s");
            $(".phraseBox, .title").css("opacity", "0");
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").css("opacity", "1");
            setTimeout(function(){
                $("#noncolor, .title").css("z-index", "-2");
            }, 1000);
            if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            } else if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            }
        });
        $(".programming_section .prev_next_btn > div:nth-child(1)").click(function(){
            $("#noncolor, .title").css("z-index", "0");
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").css("opacity", "0");
            $("#color").css("background", "#5AD18F");
            setTimeout(function(){
                $(".phraseBox, .title").css("transition", "0.5s");
                $(".phraseBox, .title").css("opacity", "1");
            }, 1000);
            $(".leftPoint, .rightPoint, .topPoint, .bottomPoint, .programming_section").removeClass("on");
        });
        $(".programming_section .prev_next_btn > div:nth-child(2)").click(function(){
            $(".web_section").addClass("on");
            $(".programming_section").css("transition", "0.5s");
            $(".web_section").css("transition", "0.5s 0.5s");
            $(".programming_section").css("opacity", "0");
            $(".web_section").css("opacity", "1");
            $(".programming_section").removeClass("on");
        });
        $(".web_section .prev_next_btn > div:nth-child(1)").click(function(){
            $(".programming_section").addClass("on");
            $(".web_section").css("transition", "0.5s");
            $(".programming_section").css("transition", "0.5s 0.5s");
            $(".web_section").css("opacity", "0");
            $(".programming_section").css("opacity", "1");
            $(".web_section").removeClass("on");
        });
        $(".web_section .prev_next_btn > div:nth-child(2)").click(function(){
            $(".design_section").addClass("on");
            $(".web_section").css("transition", "0.5s");
            $(".design_section").css("transition", "0.5s 0.5s");
            $(".web_section").css("opacity", "0");
            $(".design_section").css("opacity", "1");
            $(".web_section").removeClass("on");
        });
        $(".design_section .prev_next_btn > div:nth-child(1)").click(function(){
            $(".web_section").addClass("on");
            $(".design_section").css("transition", "0.5s");
            $(".web_section").css("transition", "0.5s 0.5s");
            $(".design_section").css("opacity", "0");
            $(".web_section").css("opacity", "1");
            $(".design_section").removeClass("on");
        });
        $(".design_section .prev_next_btn > div:nth-child(2)").click(function(){
            $(".music_section").addClass("on");
            $(".design_section").css("transition", "0.5s");
            $(".music_section").css("transition", "0.5s 0.5s");
            $(".design_section").css("opacity", "0");
            $(".music_section").css("opacity", "1");
            $(".design_section").removeClass("on");
        });
        $(".music_section .prev_next_btn > div:nth-child(1)").click(function(){
            $(".design_section").addClass("on");
            $(".music_section").css("transition", "0.5s");
            $(".design_section").css("transition", "0.5s 0.5s");
            $(".music_section").css("opacity", "0");
            $(".design_section").css("opacity", "1");
            $(".music_section").removeClass("on");
        });
        $(".music_section .prev_next_btn > div:nth-child(2)").click(function(){
            $(".etc_section").addClass("on");
            $(".music_section").css("transition", "0.5s");
            $(".etc_section").css("transition", "0.5s 0.5s");
            $(".music_section").css("opacity", "0");
            $(".etc_section").css("opacity", "1");
            $(".music_section").removeClass("on");
        });
        $(".etc_section .prev_next_btn > div:nth-child(1)").click(function(){
            $(".music_section").addClass("on");
            $(".etc_section").css("transition", "0.5s");
            $(".music_section").css("transition", "0.5s 0.5s");
            $(".etc_section").css("opacity", "0");
            $(".music_section").css("opacity", "1");
            $(".etc_section").removeClass("on");
        });
    } else if (title == "sekwang - music") {
        $(".spinner-box, .configure-core, #container_background #color, #menu .colorwall").css("background-color", "#FFC846");
        $(".title .point").css("color", "#FFC846");
        $(".category").text("Music");
        $(".category").css("font-weight", "500");
        $(".main:nth-child(1)").text("MU");
        $(".main:nth-child(2)").text("SIC");
        $(".point").text(".");
        $(".point").css("left", "49%");
        $(".phraseBox_title_text").text("Music.");
        $(".phraseBox_content > div:nth-child(1)").text("If it is not impossible, ");
        $(".phraseBox_content > div:nth-child(2)").text("just try it.");
        $(".phraseBox .prev_next_btn > div:nth-child(2)").click(function(){
            $(".playlist").addClass("on");
            $(".phraseBox, .title").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".playlist").css("transition", "0.5s 1s");
            $(".phraseBox, .title").css("opacity", "0");
            if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            } else if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            }
            $(".playlist").css("opacity", "1");
            setTimeout(function(){
                $("#noncolor, .title").css("z-index", "-2");
            }, 1000);
            $(".phraseBox").removeClass("on");
        });
        $(".playlist .prev_next_btn > div:nth-child(1)").click(function(){
            $(".phraseBox").addClass("on");
            $("#noncolor, .title").css("z-index", "0");
            $(".playlist").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".playlist").css("opacity", "0");
            $("#color").css("background", "#FFC846");
            setTimeout(function(){
                $(".title").css("transition", "0.5s");
                $(".phraseBox, .title").css("opacity", "1");
            }, 1000);
            $(".playlist").removeClass("on");
        });
        $(".playlist_play .playlist_startbtn").click(function(){
            if (rotateValue == "false") {
                if ($(".playlist_play").hasClass("clickstartbtn1")) {
                    $(".playlist_play.clickstartbtn1, .playlist_play .playlist_startbtn.clickstartbtn2").css("animation-play-state", "running");
                } else {
                    $(".playlist_play").addClass("clickstartbtn1");
                    $(".playlist_play .playlist_startbtn").addClass("clickstartbtn2");
                }
                rotateValue = "true";
            } else if (rotateValue == "true") {
                $(".playlist_play.clickstartbtn1, .playlist_play .playlist_startbtn.clickstartbtn2").css("animation-play-state", "paused");
                rotateValue = "false";
            }
        });
        $(".playlist_prevbtn").click(function(){
            $(".playlist_play .singer > div").css("display", "none");
            if (singerCount == 1) {
                singerCount = document.querySelector(".singer").childElementCount;
            } else {
                singerCount--;
            }
            $(".playlist_play .singer > div:nth-child("+singerCount+")").css("display", "block");
        });
        $(".playlist_nextbtn").click(function(){
            $(".playlist_play .singer > div").css("display", "none");
            if (singerCount == document.querySelector(".singer").childElementCount) {
                singerCount = 1;
            } else {
                singerCount++;
            }
            $(".playlist_play .singer > div:nth-child("+singerCount+")").css("display", "block");
        });
        $(".playlist .prev_next_btn > div:nth-child(2)").click(function(){
            $(".guitarist").addClass("on");
            $(".playlist").css("transition", "0.5s");
            $(".guitarist").css("transition", "0.5s 0.5s");
            $(".playlist").css("opacity", "0");
            $(".guitarist").css("opacity", "1");
            $(".playlist").removeClass("on");
        });
        $(".guitarist .prev_next_btn > div").click(function(){
            $(".playlist").addClass("on");
            $(".guitarist").css("transition", "0.5s");
            $(".playlist").css("transition", "0.5s 0.5s");
            $(".guitarist").css("opacity", "0");
            $(".playlist").css("opacity", "1");
            $(".guitarist").removeClass("on");
        });
        $(".guitarist_instagram").click(function(){
            window.open("https://www.instagram.com/sse._.guitarist/");
        });
        $(".guitarist_play > div").click(function(){
            $(".guitarist_play > div").css("display", "none")
            if (guitarPlayCount == document.querySelector(".guitarist_play").childElementCount) {
                guitarPlayCount = 1;
            } else {
                guitarPlayCount++;
            }
            $(".guitarist_play > div:nth-child("+guitarPlayCount+")").css("display", "block");
        });
        $(".mediaquery_guitarist_play > div").click(function(){
            $(".mediaquery_guitarist_play > div").css("display", "none")
            if (guitarPlayCount == document.querySelector(".mediaquery_guitarist_play").childElementCount) {
                guitarPlayCount = 1;
            } else {
                guitarPlayCount++;
            }
            $(".mediaquery_guitarist_play > div:nth-child("+guitarPlayCount+")").css("display", "block");
        });
    } else if (title == "sekwang - travel") {
        $(".spinner-box, .configure-core, #container_background #color, #menu .colorwall").css("background-color", "#6482FF");
        $(".title .point").css("color", "#6482FF");
        $(".category").text("Travel");
        $(".category").css("font-weight", "500");
        $(".main:nth-child(1)").text("TRA");
        $(".main:nth-child(2)").text("VEL");
        $(".point").text(".");
        $(".main").css("left", "49%");
        $(".phraseBox_title_text").text("Travel.");
        $(".phraseBox_content > div:nth-child(1)").text("The best way");
        $(".phraseBox_content > div:nth-child(2)").text("to get experience.");
        $(".phraseBox .prev_next_btn > div:nth-child(2)").click(function(){
            $(".korea").addClass("on");
            $(".phraseBox, .title").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".korea").css("transition", "0.5s 1s");
            $(".phraseBox, .title").css("opacity", "0");
            if (lightDarkValue == "light") {
                $("#color").css("background", "white");
            } else if (lightDarkValue == "dark") {
                $("#color").css("background", "#323232");
            }
            $(".korea").css("opacity", "1");
            setTimeout(function(){
                $("#noncolor, .title").css("z-index", "-2");
            }, 1000);
            $(".phraseBox").removeClass("on");
        });
        $(".korea .prev_next_btn > div").click(function(){
            $(".phraseBox").addClass("on");
            $(".korea").css("transition", "0.5s");
            $("#color").css("transition", "0.5s 0.5s");
            $(".korea").css("opacity", "0");
            $("#color").css("background", "#6482FF");
            $("#noncolor, .title").css("z-index", "0");
            setTimeout(function(){
                $(".phraseBox, .title").css("transition", "0.5s");
                $(".phraseBox, .title").css("opacity", "1");
            }, 1000);
            $(".korea").removeClass("on");
        });
        $(".gyeonggi_text").click(function(){
            $(".gyeonggi").addClass("on");
            $(".gyeonggi").css("transition", "0.5s");
            $(".gyeonggi").css("opacity", "0.9");
        });
        $(".gyeonggi").click(function(){
            $(".gyeonggi").css("transition", "0.5s");
            $(".gyeonggi").css("opacity", "0");
            $(".gyeonggi").removeClass("on");
        });
        $(".gangwon_text").click(function(){
            $(".gangwon").addClass("on");
            $(".gangwon").css("transition", "0.5s");
            $(".gangwon").css("opacity", "0.9");
        });
        $(".gangwon").click(function(){
            $(".gangwon").css("transition", "0.5s");
            $(".gangwon").css("opacity", "0");
            $(".gangwon").removeClass("on");
        });
        $(".chungcheongbuk_text").click(function(){
            $(".chungcheongbuk").addClass("on");
            $(".chungcheongbuk").css("transition", "0.5s");
            $(".chungcheongbuk").css("opacity", "0.9");
        });
        $(".chungcheongbuk").click(function(){
            $(".chungcheongbuk").css("transition", "0.5s");
            $(".chungcheongbuk").css("opacity", "0");
            $(".chungcheongbuk").removeClass("on");
        });
        $(".chungcheongnam_text").click(function(){
            $(".chungcheongnam").addClass("on");
            $(".chungcheongnam").css("transition", "0.5s");
            $(".chungcheongnam").css("opacity", "0.9");
        });
        $(".chungcheongnam").click(function(){
            $(".chungcheongnam").css("transition", "0.5s");
            $(".chungcheongnam").css("opacity", "0");
            $(".chungcheongnam").removeClass("on");
        });
        $(".gyeongsangbuk_text").click(function(){
            $(".gyeongsangbuk").addClass("on");
            $(".gyeongsangbuk").css("transition", "0.5s");
            $(".gyeongsangbuk").css("opacity", "0.9");
        });
        $(".gyeongsangbuk").click(function(){
            $(".gyeongsangbuk").css("transition", "0.5s");
            $(".gyeongsangbuk").css("opacity", "0");
            $(".gyeongsangbuk").removeClass("on");
        });
        $(".gyeongsangnam_text").click(function(){
            $(".gyeongsangnam").addClass("on");
            $(".gyeongsangnam").css("transition", "0.5s");
            $(".gyeongsangnam").css("opacity", "0.9");
        });
        $(".gyeongsangnam").click(function(){
            $(".gyeongsangnam").css("transition", "0.5s");
            $(".gyeongsangnam").css("opacity", "0");
            $(".gyeongsangnam").removeClass("on");
        });
        $(".jeollabuk_text").click(function(){
            $(".jeollabuk").addClass("on");
            $(".jeollabuk").css("transition", "0.5s");
            $(".jeollabuk").css("opacity", "0.9");
        });
        $(".jeollabuk").click(function(){
            $(".jeollabuk").css("transition", "0.5s");
            $(".jeollabuk").css("opacity", "0");
            $(".jeollabuk").removeClass("on");
        });
        $(".jeollanam_text").click(function(){
            $(".jeollanam").addClass("on");
            $(".jeollanam").css("transition", "0.5s");
            $(".jeollanam").css("opacity", "0.9");
        });
        $(".jeollanam").click(function(){
            $(".jeollabuk").css("transition", "0.5s");
            $(".jeollanam").css("opacity", "0");
            $(".jeollanam").removeClass("on");
        });
        $(".jejumap_text").click(function(){
            $(".jejumap").addClass("on");
            $(".jejumap").css("transition", "0.5s");
            $(".jejumap").css("opacity", "0.9");
        });
        $(".jejumap").click(function(){
            $(".jejumap").css("transition", "0.5s");
            $(".jejumap").css("opacity", "0");
            $(".jejumap").removeClass("on");
        });
    }
    $(".light").click(function(){
        $(".menu_txt span, .category, .phraseBox_title_text, .phraseBox_content > div, .phraseBox .prev_next_btn > div, .phraseBox_title_line, #noncolor, .scroll").css("transition", ".4s");
        $(".timeline_title .prev_next_btn, .timeline_line_year > div, .timeline_line").css("transition", "0.4s");
        $(".gist_year_title, .postech_year_title, .gist_year_content, .postech_year_content, .gist .prev_next_btn > div, .postech .prev_next_btn > div, .textTitle, .textArrange").css("transition", "0.4s");
        $(".name").css("transition", "0.4s");
        $(".programming_section .prev_next_btn > div, .web_section .prev_next_btn > div, .design_section .prev_next_btn > div, .music_section .prev_next_btn > div, .etc_section .prev_next_btn > div").css("transition", "0.4s");
        $(".korea .prev_next_btn > div").css("transition", "0.4s");
        $(".gyeonggi, .gangwon, .chungcheongbuk, .chungcheongnam, .gyeongsangbuk, .gyeongsangnam, .jeollabuk, .jeollanam, .jejumap").css("transition", "0.4s");
        $(".playlist .prev_next_btn > div, .guitarist .prev_next_btn > div").css("transition", "0.4s");
        lightDarkValue = "light";
        lightDark(lightDarkValue);
    });
    $(".dark").click(function(){
        $(".menu_txt span, .category, .phraseBox_title_text, .phraseBox_content > div, .phraseBox .prev_next_btn > div, .phraseBox_title_line, #noncolor, .scroll").css("transition", ".4s");
        $(".timeline_title .prev_next_btn, .timeline_line_year > div, .timeline_line").css("transition", "0.4s");
        $(".gist_year_title, .postech_year_title, .gist_year_content, .postech_year_content, .gist .prev_next_btn > div, .postech .prev_next_btn > div, .textTitle, .textArrange").css("transition", "0.4s");
        $(".name").css("transition", "0.4s");
        $(".programming_section .prev_next_btn > div, .web_section .prev_next_btn > div, .design_section .prev_next_btn > div, .music_section .prev_next_btn > div, .etc_section .prev_next_btn > div").css("transition", "0.4s");
        $(".korea .prev_next_btn > div").css("transition", "0.4s");
        $(".gyeonggi, .gangwon, .chungcheongbuk, .chungcheongnam, .gyeongsangbuk, .gyeongsangnam, .jeollabuk, .jeollanam, .jejumap").css("transition", "0.4s");
        $(".playlist .prev_next_btn > div, .guitarist .prev_next_btn > div").css("transition", "0.4s");
        lightDarkValue = "dark";
        lightDark(lightDarkValue);
    });
    $('.clickmenu').hover(function(){
        $("#color, .title, .scroll").css("transition", ".6s");
        if (window.innerWidth > 600) {
            $("#color").css("left", "7%");
            $(".scroll").css("right", "17%");
        }
        $(".title").css("left", "3%");
    }, function(){
        $("#color, .scroll, .title").css("transition", "1.4s");
        $("#color").css("left", "0%");
        $(".title").css("left", "0%");
        $(".scroll").css("right", "3%");
    });
    $(".clickmenu").click(function(){
        $("#menu").addClass("on");
    });
    $("#menu .cancelMenu").click(function(){
        $("#menu").removeClass("on");
    });
    $("button.github").click(function(){
        window.open("https://github.com/sse-maker");
    });
    $("button.instagram").click(function(){
        window.open("https://www.instagram.com/sse._.kwang/");
    });
    $(".category").click(function(){
        location.reload();
    });
    $(".scroll").click(function(){
        $(".phraseBox").addClass("on");
        $("#color, .title").css("transition", "1.5s 0.5s ease-in-out");
        $("#noncolor").css("transition", "0.5s");
        $(this).css("transition", "0.5s");
        $("#color").css("width", "100%");
        $("#noncolor").css("opacity", "0");
        $(this).css("opacity", "0");
        $(".title").css("transform", "translateX(50%)");
        $(".phraseBox").css("transition", "1s 2s");
        $(".phraseBox").css("opacity", "1");
    });
    $(".phraseBox .prev_next_btn > div:nth-child(1)").click(function(){
        $("#color, .title, .phraseBox").css("transition", "1.5s ease-in-out");
        $("#noncolor, .scroll").css("transition", "0.5s 1.5s");
        $("#color").css("width", "50%");
        $(".phraseBox").css("opacity", "0");
        $("#noncolor, .scroll").css("opacity", "1");
        $(".title").css("transform", "translateX(0%)");
        $(".phraseBox").removeClass("on");
    });
});