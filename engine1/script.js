
function ws_basic_linear(c, a, b) {
    var d = jQuery;
    var e = d("<div></div>").css({ position: "absolute", display: "none", "z-index": 2, width: "200%", height: "100%" }).appendTo(b);
    this.go = function (f, i) {
        e.stop(1, 1);
        var g = (!!((f - i + 1) % a.length) ^ c.revers ? "left" : "right");
        d(a[i]).clone().css({ position: "absolute", left: "auto", right: "auto", top: 0, width: "50%" }).appendTo(e).css(g, 0);
        d(a[f]).clone().css({ position: "absolute", left: "auto", right: "auto", top: 0, width: "50%" }).appendTo(e).css(g, "50%").show();
        e.css({ left: "auto", right: "auto", top: 0 }).css(g, 0).show();
        var h = {};
        h[g] = "-100%";
        e.animate(h, c.duration, "easeInOutExpo", function () {
            b.find("ul").css({ left: -f + "00%" });
            d(this).hide().html("")
        });
        return f
    }
}
;

jQuery("#wowslider-container1").wowSlider(
    {
        effect: "basic_linear",
        prev: "",
        next: "",
        duration: 20 * 100,
        delay: 50 * 100,
        width: 960,
        height: 360,
        autoPlay: true,
        stopOnHover: true,
        loop: false,
        bullets: true,
        caption: true,
        captionEffect: "slide",
        controls: true,
        logo: "engine1/loading.gif",
        onBeforeStep: 0,
        images: 0
    });
