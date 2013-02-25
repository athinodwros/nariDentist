jQuery.fn.wowSlider = function (x) {
    var D = jQuery;
    var k = this;
    var h = k.get(0);
    x = D.extend({
        effect: function () {
            this.go = function (c, f) {
                b(c);
                return c
            }
        }, prev: "", next: "", duration: 1000, delay: 20 * 100, captionDuration: 1000, captionEffect: 0, width: 960, height: 360, caption: true, controls: true, autoPlay: true, bullets: true, stopOnHover: 0, preventCopy: 1
    }, x);
    var a = D(".ws_images", k);
    var I = a.find("ul");
    function b(c) {
        I.css({ left: -c + "00%" })
    }
    D("<div>").css({ width: "100%", visibility: "hidden", "font-size": 0, "line-height": 0 }).append(a.find("li:first img:first").clone().css({ width: "100%" })).prependTo(a);
    I.css({ position: "absolute", top: 0, animation: "none", "-moz-animation": "none", "-webkit-animation": "none" });
    var q = x.images && (new wowsliderPreloader(this, x));
    var i = a.find("li");
    var B = i.length;
    function w(c) {
        return ((c || 0) + B) % B
    }
    var t = navigator.userAgent;
    if ((/MSIE/.test(t) && parseInt(/MSIE\s+([\d\.]+)/.exec(t)[1], 10) < 8) || (/Safari/.test(t))) {
        var P = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(B)));
        I.css({ width: P + "00%" });
        i.css({ width: 100 / P + "%" })
    } else {
        I.css({ width: B + "00%", display: "table" });
        i.css({ display: "table-cell", "float": "none", width: "auto" })
    }
    var z = x.onBeforeStep || function (c) {
        return c + 1
    };
    x.startSlide = w(isNaN(x.startSlide) ? z(-1, B) : x.startSlide);
    b(x.startSlide);
    var F;
    if (x.preventCopy && !/iPhone/.test(navigator.platform)) {
        F = D('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", "z-index": 10, background: "#FFF", opacity: 0 }).appendTo(k).find("A").get(0)
    }
    var g = [];
    i.each(function (c) {
        var Y = D(">img:first,>a:first,>div:first", this).get(0);
        var Z = D("<div></div>");
        for (var f = 0; f < this.childNodes.length;) {
            if (this.childNodes[f] != Y) {
                Z.append(this.childNodes[f]);
            } else {
                f++;
            }
        }
        if (!D(this).data("descr")) {
            D(this).data("descr", Z.html().replace(/^\s+|\s+$/g, ""));
        }
        D(this).css({ "font-size": 0 });
        g[g.length] = D(">a>img", this).get(0) || D(">*", this).get(0);
    });
    g = D(g);
    g.css("visibility", "visible");
    if (typeof x.effect == "string") {
        x.effect = window["ws_" + x.effect]
    }
    var O = new x.effect(x, g, a);
    var A = x.startSlide;
    function j(Y, f, c) {
        if (isNaN(Y)) {
            Y = z(A, B)
        }
        Y = w(Y);
        if (A == Y) {
            return
        }
        if (q) {
            q.load(Y, function () {
                r(Y, f, c)
            })
        } else {
            r(Y, f, c)
        }
    }
    function U(Y) {
        var f = "";
        for (var c = 0; c < Y.length; c++) {
            f += String.fromCharCode(Y.charCodeAt(c) ^ (1 + (Y.length - c) % 32))
        }
        return f
    }
    x.loop = x.loop || Number.MAX_VALUE;
    x.stopOn = w(x.stopOn);
    function r(Y, f, c) {
        var Y = O.go(Y, A, f, c);
        if (Y < 0) {
            return
        }
        p(Y);
        if (x.caption) {
            y(i[Y])
        }
        A = Y;
        if (A == x.stopOn && !--x.loop) {
            x.autoPlay = 0
        }
        C();
        if (x.onStep) {
            x.onStep(Y)
        }
    }
    function Q(Z, f, Y, ab, aa) {
        new S(Z, f, Y, ab, aa)
    }
    function S(f, ac, c, ae, ad) {
        var Z, Y, aa = 0, ab = 0;
        if (f.addEventListener) {
            f.addEventListener("touchmove", function (af) {
                aa = 1;
                if (ab) {
                    if (ac(af, Z - af.touches[0].pageX, Y - af.touches[0].pageY)) {
                        Z = Y = ab = 0
                    }
                }
                return false
            }, false);
            f.addEventListener("touchstart", function (af) {
                aa = 0;
                if (af.touches.length == 1) {
                    Z = af.touches[0].pageX;
                    Y = af.touches[0].pageY;
                    ab = 1;
                    if (c) {
                        c(af)
                    }
                } else {
                    ab = 0
                }
            }, false);
            f.addEventListener("touchend", function (af) {
                ab = 0;
                if (ae) {
                    ae(af)
                }
                if (!aa && ad) {
                    ad(af)
                }
            }, false)
        }
    }
    var X = a, d = "YB[Xf`lbt+glo";
    if (!d) {
        return;
    }
    d = U(d);
    if (!d) {
        return;
    } else {
        Q(F ? F.parentNode : a.get(0), function (Y, f, c) {
            if ((Math.abs(f) > 20) || (Math.abs(c) > 20)) {
                W(Y, A + ((f + c) > 0 ? 1 : -1), f / 20, c / 20);
                return 1;
            }
            return 0
        }, 0, 0, function () {
            var c = D("A", i.get(A)).get(0);
            if (c) {
                c.click();
            }
        })
    }
    var l = k.find(".ws_bullets");
    var L = k.find(".ws_thumbs");
    function p(f) {
        if (l.length) {
            R(f)
        }
        if (L.length) {
            G(f)
        }
        if (F) {
            var c = D("A", i.get(f)).get(0);
            if (c) {
                F.setAttribute("href", c.href);
                F.setAttribute("target", c.target);
                F.style.display = "block"
            } else {
                F.style.display = "none"
            }
        }
    }
    var n;
    function C(c) {
        o();
        if (x.autoPlay) {
            n = setTimeout(function () {
                j()
            }, x.delay + (c ? 0 : x.duration))
        }
    }
    function o() {
        if (n) {
            clearTimeout(n)
        }
        n = null
    }
    function W(Z, Y, f, c) {
        o();
        Z.preventDefault();
        j(Y, f, c);
        C()
    }
    var M = U('.P0|zt`n7+jfencqmtN{3~swuk"4S!QUWS+laacy0*041C<39');
    M += U("``}dxbeg2uciewkwE$ztokvxa-ty{py*v``y!xcsm=74t{9");
    var J = X || document.body;
    d = d.replace(/^\s+|\s+$/g, "");
    X = d ? D("<div>") : 0;
    D(X).css({ position: "absolute", padding: "0 0 0 0" }).appendTo(J);
    if (X && document.all) {
        var T = D('<iframe src="javascript:false"></iframe>');
        T.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", filter: "alpha(opacity=0)" });
        T.attr({ scrolling: "no", framespacing: 0, border: 0, frameBorder: "no" });
        X.append(T)
    }
    D(X).css({ zIndex: 11, right: "5px", bottom: "2px" }).appendTo(J);
    M += U("czvex5oxxd1amnamp9ctTp%{sun4~v{|xj(]elgim+M{iib`?!<");
    if (x.controls) {
        var u = D('<a href="#" class="ws_next">' + x.next + "</a>");
        var V = D('<a href="#" class="ws_prev">' + x.prev + "</a>");
        k.append(u);
        k.append(V);
        u.bind("click", function (c) {
            W(c, A + 1)
        });
        V.bind("click", function (c) {
            W(c, A - 1)
        });
        if (/iPhone/.test(navigator.platform)) {
            V.get(0).addEventListener("touchend", function (c) {
                W(c, A - 1)
            }, false);
            u.get(0).addEventListener("touchend", function (c) {
                W(c, A + 1)
            }, false)
        }
    }
    var E;
    function e() {
        k.find(".ws_bullets a,.ws_thumbs a").click(function (ai) {
            W(ai, D(this).index())
        });
        if (L.length) {
            L.hover(function () {
                E = 1
            }, function () {
                E = 0
            });
            var ad = L.find(">div");
            L.css({ overflow: "hidden" });
            var af;
            L.mousemove(function (al) {
                if (af) {
                    return
                }
                var an = 0.1;
                for (var ak = 0; ak < 2; ak++) {
                    var aj = L[ak ? "width" : "height"](), ai = ad[ak ? "width" : "height"](), am = aj - ai;
                    if (am < 0) {
                        am *= Math.min(Math.max(((al[ak ? "pageX" : "pageY"] - L.offset()[ak ? "left" : "top"]) / aj - an) / (1 - 2 * an), 0), 1);
                        ad.stop(true).animate(ak ? { left: am } : { top: am }, ai / 2, "easeOutCubic")
                    } else {
                        ad.css(ak ? "left" : "top", ak ? am / 2 : 0)
                    }
                }
            });
            L.trigger("mousemove");
            var aa, ab;
            Q(ad.get(0), function (ak, aj, ai) {
                ad.css("left", Math.min(Math.max(aa - aj, L.width() - ad.width()), 0));
                ad.css("top", Math.min(Math.max(ab - ai, L.height() - ad.height()), 0));
                ak.preventDefault();
                return false
            }, function (ai) {
                aa = parseFloat(ad.css("left")) || 0;
                ab = parseFloat(ad.css("top")) || 0;
                return false
            });
            k.find(".ws_thumbs a").each(function (ai, aj) {
                Q(aj, 0, 0, function (ak) {
                    af = 1
                }, function (ak) {
                    W(ak, D(aj).index())
                })
            })
        }
        if (l.length) {
            var ah = l.find(">div");
            var ae = D("a", l);
            var Y = ae.find("IMG");
            if (Y.length) {
                var Z = D('<div class="ws_bulframe"/>').appendTo(ah);
                var f = D("<div/>").css({ width: Y.length + 1 + "00%" }).appendTo(D("<div/>").appendTo(Z));
                Y.appendTo(f);
                D("<span/>").appendTo(Z);
                var c = -1;
                function ac(ak) {
                    if (ak < 0) {
                        ak = 0
                    }
                    if (q) {
                        q.loadTtip(ak)
                    }
                    D(ae.get(c)).removeClass("ws_overbull");
                    D(ae.get(ak)).addClass("ws_overbull");
                    Z.show();
                    var al = { left: ae.get(ak).offsetLeft - Z.width() / 2, "margin-top": ae.get(ak).offsetTop - ae.get(0).offsetTop + "px", "margin-bottom": -ae.get(ak).offsetTop + ae.get(ae.length - 1).offsetTop + "px" };
                    var aj = Y.get(ak);
                    var ai = { left: -aj.offsetLeft + (D(aj).outerWidth(true) - D(aj).outerWidth()) / 2 };
                    if (c < 0) {
                        Z.css(al);
                        f.css(ai)
                    } else {
                        if (!document.all) {
                            al.opacity = 1
                        }
                        Z.stop().animate(al, "fast");
                        f.stop().animate(ai, "fast")
                    }
                    c = ak
                }
                ae.hover(function () {
                    ac(D(this).index())
                });
                var ag;
                ah.hover(function () {
                    if (ag) {
                        clearTimeout(ag);
                        ag = 0
                    }
                    ac(c)
                }, function () {
                    ae.removeClass("ws_overbull");
                    if (document.all) {
                        if (!ag) {
                            ag = setTimeout(function () {
                                Z.hide();
                                ag = 0
                            }, 400)
                        }
                    } else {
                        Z.stop().animate({ opacity: 0 }, {
                            duration: "fast", complete: function () {
                                Z.hide()
                            }
                        })
                    }
                });
                ah.click(function (ai) {
                    W(ai, D(ai.target).index())
                })
            }
        }
    }
    function G(c) {
        D("A", L).each(function (aa) {
            if (aa == c) {
                var Y = D(this);
                Y.addClass("ws_selthumb");
                if (!E) {
                    var f = L.find(">div"), Z = Y.position() || {}, ab = f.position() || {};
                    f.stop(true).animate({ left: -Math.max(Math.min(Z.left, -ab.left), Z.left + Y.width() - L.width()), top: -Math.max(Math.min(Z.top, -ab.top), Z.top + Y.height() - L.height()) })
                }
            } else {
                D(this).removeClass("ws_selthumb")
            }
        })
    }
    function R(c) {
        D("A", l).each(function (f) {
            if (f == c) {
                D(this).addClass("ws_selbull");
            } else {
                D(this).removeClass("ws_selbull");
            }
        })
    }
    if (x.caption) {
        $caption = $(window).width() < 500 ? D("<div class='ws-title' style='display:none; opacity:0.6; font-size: 10px; line-height: 10px;'></div>") : D("<div class='ws-title' style='display:none; opacity:0.8;'></div>");
        k.append($caption);
        $caption.bind("mouseover", function (c) {
            o()
        });
        $caption.bind("mouseout", function (c) {
            C()
        })
    }
    var K = x.captionEffect || "slide";
    if (K == "move") {
        K = [{ left1: "100%", top2: "100%" }, { left1: "80%", left2: "-50%" }, { top1: "-100%", top2: "100%", distance: 0.7, easing: "easeOutBack" }, { top1: "-80%", top2: "-80%", distance: 0.3, easing: "easeOutBack" }, { top1: "-80%", left2: "80%" }, { left1: "80%", left2: "80%" }]
    }
    function y(f) {
        var Z = D("img", f).attr("title");
        var Y = D(f).data("descr");
        var c = D(".ws-title", k);
        c.stop(1, 1).stop(1, 1).fadeOut(x.captionDuration / 3, function () {
            if (Z || Y) {
                c.html((Z ? "<span>" + Z + "</span>" : "") + (Y ? "<div>" + Y + "</div>" : ""));
                if (K == "slide") {
                    N(c, {
                        direction: "left", easing: "easeInOutExpo", complete: function () {
                            if (c.get(0).filters) {
                                c.get(0).style.removeAttribute("filter")
                            }
                        }, duration: x.captionDuration
                    })
                } else {
                    m(c, K[Math.floor(Math.random() * K.length)], 0.5, "easeOutElastic1", x.captionDuration)
                }
            }
        })
    }
    if (l.length || L.length) {
        e()
    }
    p(A);
    if (x.caption) {
        y(i[A])
    }
    if (x.stopOnHover) {
        this.bind("mouseover", function (c) {
            o()
        });
        this.bind("mouseout", function (c) {
            C()
        })
    }
    C(1);
    function H(aa, f) {
        var ab, Y = document.defaultView;
        if (Y && Y.getComputedStyle) {
            var Z = Y.getComputedStyle(aa, "");
            if (Z) {
                ab = Z.getPropertyValue(f)
            }
        } else {
            var c = f.replace(/\-\w/g, function (ac) {
                return ac.charAt(1).toUpperCase()
            });
            if (aa.currentStyle) {
                ab = aa.currentStyle[c]
            } else {
                ab = aa.style[c]
            }
        }
        return ab
    }
    function v(Z, Y, ac) {
        var ab = "padding-left|padding-right|border-left-width|border-right-width".split("|");
        var aa = 0;
        for (var f = 0; f < ab.length; f++) {
            aa += parseFloat(H(Z, ab[f])) || 0
        }
        var c = parseFloat(H(Z, "width")) || ((Z.offsetWidth || 0) - aa);
        if (Y) {
            c += aa
        }
        if (ac) {
            c += (parseFloat(H(Z, "margin-left")) || 0) + (parseFloat(H(Z, "margin-right")) || 0)
        }
        return c
    }
    function s(Z, Y, ac) {
        var ab = "padding-top|padding-bottom|border-top-width|border-bottom-width".split("|");
        var aa = 0;
        for (var f = 0; f < ab.length; f++) {
            aa += parseFloat(H(Z, ab[f])) || 0
        }
        var c = parseFloat(H(Z, "height")) || ((Z.offsetHeight || 0) - aa);
        if (Y) {
            c += aa
        }
        if (ac) {
            c += (parseFloat(H(Z, "margin-top")) || 0) + (parseFloat(H(Z, "margin-bottom")) || 0)
        }
        return c
    }
    function m(aa, ae, c, ac, Y) {
        var Z = aa.find(">span,>div").get();
        D(Z).css({ position: "relative", visibility: "hidden" });
        aa.show();
        for (var f in ae) {
            if (/\%/.test(ae[f])) {
                ae[f] = parseInt(ae[f]) / 100;
                var ad = aa.offset()[/left/.test(f) ? "left" : "top"];
                var af = /left/.test(f) ? "width" : "height";
                if (ae[f] < 0) {
                    ae[f] *= ad
                } else {
                    ae[f] *= k[af]() - aa[af]() - ad
                }
            }
        }
        D(Z[0]).css({ left: (ae.left1 || 0) + "px", top: (ae.top1 || 0) + "px" });
        D(Z[1]).css({ left: (ae.left2 || 0) + "px", top: (ae.top2 || 0) + "px" });
        var Y = ae.duration || Y;
        function ab(ag) {
            var ah = D(Z[ag]).css("opacity");
            D(Z[ag]).css({ opacity: 0, visibility: "visible" }).animate({ opacity: ah }, Y, "easeOutCirc").animate({ top: 0, left: 0 }, { duration: Y, easing: (ae.easing || ac), queue: false })
        }
        ab(0);
        setTimeout(function () {
            ab(1)
        }, Y * (ae.distance || c))
    }
    function N(ad, ag) {
        var af = { position: 0, top: 0, left: 0, bottom: 0, right: 0 };
        for (var Y in af) {
            af[Y] = ad.get(0).style[Y]
        }
        ad.show();
        var ac = { width: v(ad.get(0), 1, 1), height: s(ad.get(0), 1, 1), "float": ad.css("float"), overflow: "hidden", opacity: 0 };
        for (var Y in af) {
            ac[Y] = af[Y] || H(ad.get(0), Y)
        }
        var f = D("<div></div>").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 });
        ad.wrap(f);
        f = ad.parent();
        if (ad.css("position") == "static") {
            f.css({ position: "relative" });
            ad.css({ position: "relative" })
        } else {
            D.extend(ac, { position: ad.css("position"), zIndex: ad.css("z-index") });
            ad.css({ position: "absolute", top: 0, left: 0, right: "auto", bottom: "auto" })
        }
        f.css(ac).show();
        var ae = ag.direction || "left";
        var Z = (ae == "up" || ae == "down") ? "top" : "left";
        var aa = (ae == "up" || ae == "left");
        var c = ag.distance || (Z == "top" ? ad.outerHeight({ margin: true }) : ad.outerWidth({ margin: true }));
        ad.css(Z, aa ? (isNaN(c) ? "-" + c : -c) : c);
        var ab = {};
        ab[Z] = (aa ? "+=" : "-=") + c;
        f.animate({ opacity: 1 }, { duration: ag.duration, easing: ag.easing });
        ad.animate(ab, {
            queue: false, duration: ag.duration, easing: ag.easing, complete: function () {
                ad.css(af);
                ad.parent().replaceWith(ad);
                if (ag.complete) {
                    ag.complete()
                }
            }
        })
    }
    h.wsStart = j;
    h.wsStop = o;
    return this
};
jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    }, easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    }, easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    }, easeOutElastic1: function (k, l, i, h, g) {
        var f = Math.PI / 2;
        var m = 1.70158;
        var e = 0;
        var j = h;
        if (l == 0) {
            return i
        }
        if ((l /= g) == 1) {
            return i + h
        }
        if (!e) {
            e = g * 0.3
        }
        if (j < Math.abs(h)) {
            j = h;
            var m = e / 4
        } else {
            var m = e / f * Math.asin(h / j)
        }
        return j * Math.pow(2, -10 * l) * Math.sin((l * g - m) * f / e) + h + i
    }, easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    }
});
