$(function() {
    
    $(".custom-menu-primary").addClass("js-enabled");
    $(".custom-menu-primary .hs-menu-wrapper").before('<div class="mobile-trigger cta_border_button"><i></i></div>');
    $(".custom-menu-primary .flyouts .hs-item-has-children > a").after(' <div class="child-trigger"><i></i></div>');
    $(".mobile-trigger").click(function() {
        $(this).next(".custom-menu-primary .hs-menu-wrapper").slideToggle(250);
        $("body").toggleClass("mobile-open");
        $(".child-trigger").removeClass("child-open");
        $(".hs-menu-children-wrapper").slideUp(250);
        return false
    });
    
    $(".child-trigger").click(function() {
        $(this).parent().siblings(".hs-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).parent().siblings(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").slideToggle(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).toggleClass("child-open");
        return false
    });
    
    var c = $(".accordion");
    c.find(".accordion_content").hide();
    c.find(".accordion_group.expanded .accordion_content").show();
    c.find(".accordion_header").click(function() {
        c.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass("expanded").children(".accordion_content").stop(true, true).slideUp();
        if (!$(this).parent(".accordion_group").hasClass("expanded")) {
            $(this).parent(".accordion_group").addClass("expanded").children(".accordion_content").stop(true, true).slideDown()
        } else {
            $(this).parent(".accordion_group").removeClass("expanded").children(".accordion_content").stop(true, true).slideUp()
        }
    });
    
    $("#well .close").click(function() {
        $(this).parent("#well").fadeOut()
    });
    
    var d = $(".background-image").find("img").attr("src");
    $("#banner-background-image").css("background-image", "url(" + d + ")");
    var b = $(".offer-image").find("img").attr("src");
    $("#offer-background-image").css("background-image", "url(" + b + ")");
   
    var a = $(".back-to-top");
    a.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            a.fadeIn()
        } else {
            a.fadeOut()
        }
    });
    a.find("a").click(function(f) {
        f.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });
    
    $(window).scroll(function() {
        var g = $("body");
        var f = $(window).scrollTop();
        var e = $(".body-container .row-fluid-wrapper:nth-child(2)").offset();
        if (f > e.top) {
            g.addClass("small-header")
        } else {
            g.removeClass("small-header")
        }
    });
    
    $(".tab-pane").not(".active").hide();
    $(".tabber-content .tab-pane").each(function(e, f) {
        $(f).attr("id", "tab-" + e)
    });
    $(".tabber-tabs a").each(function(f, g) {
        $(g).attr("href", "#tab-" + f);
        var e = $(g).attr("href");
        $(this).click(function(h) {
            h.preventDefault();
            if (!$(this).parent().hasClass("active")) {
                $(this).parent().addClass("active").siblings().removeClass("active");
                $(e).fadeIn().siblings().hide()
            }
        })
    })
    
});
