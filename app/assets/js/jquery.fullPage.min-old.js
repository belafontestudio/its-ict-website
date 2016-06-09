/**
 * fullPage 2.1.2
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(a) {
    a.fn.fullpage = function(c) {
        function L() {
            a(".section").each(function() {
                var b = a(this).find(".slide");
                b.length ? b.each(function() {
                    z(a(this))
                }) : z(a(this))
            });
            a.isFunction(c.afterRender) && c.afterRender.call(this)
        }

        function M() {
            if (!c.autoScrolling) {
                var b = a(window).scrollTop(),
                    d = a(".section").map(function() {
                        if (a(this).offset().top < b + 100) return a(this)
                    }),
                    d = d[d.length - 1];
                if (!d.hasClass("active")) {
                    var e = a(".section.active").index(".section") + 1;
                    H = !0;
                    var f = I(d);
                    d.addClass("active").siblings().removeClass("active");
                    var g = d.data("anchor");
                    a.isFunction(c.onLeave) && c.onLeave.call(this, e, d.index(".section") + 1, f);
                    a.isFunction(c.afterLoad) && c.afterLoad.call(this, g, d.index(".section") + 1);
                    N(g);
                    O(g, 0);
                    c.anchors.length && !t && (u = g, location.hash = g);
                    clearTimeout(P);
                    P = setTimeout(function() {
                        H = !1
                    }, 100)
                }
            }
        }

        function da(b) {
            var d = b.originalEvent;
            c.autoScrolling && b.preventDefault();
            if (!Q(b.target) && (b = a(".section.active"), !t && !s))
                if (d = R(d), w = d.y, A = d.x, b.find(".slides").length && Math.abs(B - A) > Math.abs(x - w)) Math.abs(B - A) > a(window).width() /
                    100 * c.touchSensitivity && (B > A ? a.fn.fullpage.moveSlideRight() : a.fn.fullpage.moveSlideLeft());
                else if (c.autoScrolling && (d = b.find(".slides").length ? b.find(".slide.active").find(".scrollable") : b.find(".scrollable"), Math.abs(x - w) > a(window).height() / 100 * c.touchSensitivity))
                if (x > w)
                    if (0 < d.length)
                        if (C("bottom", d)) a.fn.fullpage.moveSectionDown();
                        else return !0;
            else a.fn.fullpage.moveSectionDown();
            else if (w > x)
                if (0 < d.length)
                    if (C("top", d)) a.fn.fullpage.moveSectionUp();
                    else return !0;
            else a.fn.fullpage.moveSectionUp()
        }

        function Q(b, d) {
            d = d || 0;
            var e = a(b).parent();
            return d < c.normalScrollElementTouchThreshold && e.is(c.normalScrollElements) ? !0 : d == c.normalScrollElementTouchThreshold ? !1 : Q(e, ++d)
        }

        function ea(b) {
            b = R(b.originalEvent);
            x = b.y;
            B = b.x
        }

        function p(b) {
            if (c.autoScrolling) {
                b = window.event || b;
                b = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
                var d;
                d = a(".section.active");
                if (!t)
                    if (d = d.find(".slides").length ? d.find(".slide.active").find(".scrollable") : d.find(".scrollable"), 0 > b)
                        if (0 < d.length)
                            if (C("bottom", d)) a.fn.fullpage.moveSectionDown();
                            else return !0;
                else a.fn.fullpage.moveSectionDown();
                else if (0 < d.length)
                    if (C("top", d)) a.fn.fullpage.moveSectionUp();
                    else return !0;
                else a.fn.fullpage.moveSectionUp();
                return !1
            }
        }

        function S(b) {
            var d = a(".section.active").find(".slides");
            if (d.length && !s) {
                var e = d.find(".slide.active"),
                    f = null,
                    f = "prev" === b ? e.prev(".slide") : e.next(".slide");
                if (!f.length) {
                    if (!c.loopHorizontal) return;
                    f = "prev" === b ? e.siblings(":last") : e.siblings(":first")
                }
                s = !0;
                q(d, f)
            }
        }

        function h(b, d, e) {
            var f = {},
                g = b.position();
            if ("undefined" !== typeof g) {
                var g =
                    g.top,
                    m = I(b),
                    r = b.data("anchor"),
                    y = b.index(".section"),
                    k = b.find(".slide.active"),
                    D = a(".section.active"),
                    s = D.index(".section") + 1,
                    F = E;
                if (k.length) var p = k.data("anchor"),
                    q = k.index();
                if (c.autoScrolling && c.continuousVertical && "undefined" !== typeof e && (!e && "up" == m || e && "down" == m)) {
                    e ? a(".section.active").before(D.nextAll(".section")) : a(".section.active").after(D.prevAll(".section").get().reverse());
                    v(a(".section.active").position().top);
                    var h = D,
                        g = b.position(),
                        g = g.top,
                        m = I(b)
                }
                b.addClass("active").siblings().removeClass("active");
                t = !0;
                "undefined" !== typeof r && T(q, p, r);
                c.autoScrolling ? (f.top = -g, b = l.selector) : (f.scrollTop = g, b = "html, body");
                var n = function() {
                    h && h.length && (e ? a(".section:first").before(h) : a(".section:last").after(h), v(a(".section.active").position().top))
                };
                c.css3 && c.autoScrolling ? (a.isFunction(c.onLeave) && !F && c.onLeave.call(this, s, y + 1, m), U("translate3d(0px, -" + g + "px, 0px)", !0), setTimeout(function() {
                    n();
                    a.isFunction(c.afterLoad) && !F && c.afterLoad.call(this, r, y + 1);
                    setTimeout(function() {
                            t = !1;
                            a.isFunction(d) && d.call(this)
                        },
                        V)
                }, c.scrollingSpeed)) : (a.isFunction(c.onLeave) && !F && c.onLeave.call(this, s, y + 1, m), a(b).animate(f, c.scrollingSpeed, c.easing, function() {
                    n();
                    a.isFunction(c.afterLoad) && !F && c.afterLoad.call(this, r, y + 1);
                    setTimeout(function() {
                        t = !1;
                        a.isFunction(d) && d.call(this)
                    }, V)
                }));
                u = r;
                c.autoScrolling && (N(r), O(r, y))
            }
        }

        function W() {
            if (!H) {
                var b = window.location.hash.replace("#", "").split("/"),
                    a = b[0],
                    b = b[1],
                    c = "undefined" === typeof u,
                    f = "undefined" === typeof u && "undefined" === typeof b;
                (a && a !== u && !c || f || !s && J != b) && K(a, b)
            }
        }

        function q(b,
            d) {
            var e = d.position(),
                f = b.find(".slidesContainer").parent(),
                g = d.index(),
                m = b.closest(".section"),
                r = m.index(".section"),
                h = m.data("anchor"),
                l = m.find(".fullPage-slidesNav"),
                k = d.data("anchor"),
                n = E;
            if (c.onSlideLeave) {
                var p = m.find(".slide.active").index(),
                    q;
                q = p == g ? "none" : p > g ? "left" : "right";
                n || a.isFunction(c.onSlideLeave) && c.onSlideLeave.call(this, h, r + 1, p, q)
            }
            d.addClass("active").siblings().removeClass("active");
            "undefined" === typeof k && (k = g);
            m.hasClass("active") && (c.loopHorizontal || (m.find(".controlArrow.prev").toggle(0 !=
                g), m.find(".controlArrow.next").toggle(!d.is(":last-child"))), T(g, k, h));
            c.css3 ? (e = "translate3d(-" + e.left + "px, 0px, 0px)", b.find(".slidesContainer").toggleClass("easing", 0 < c.scrollingSpeed).css(X(e)), setTimeout(function() {
                n || a.isFunction(c.afterSlideLoad) && c.afterSlideLoad.call(this, h, r + 1, k, g);
                s = !1
            }, c.scrollingSpeed, c.easing)) : f.animate({
                scrollLeft: e.left
            }, c.scrollingSpeed, c.easing, function() {
                n || a.isFunction(c.afterSlideLoad) && c.afterSlideLoad.call(this, h, r + 1, k, g);
                s = !1
            });
            l.find(".active").removeClass("active");
            l.find("li").eq(g).find("a").addClass("active")
        }

        function fa(b, d) {
            var c = 825,
                f = b;
            825 > b || 900 > d ? (900 > d && (f = d, c = 900), c = (100 * f / c).toFixed(2), a("body").css("font-size", c + "%")) : a("body").css("font-size", "100%")
        }

        function O(b, d) {
            c.navigation && (a("#fullPage-nav").find(".active").removeClass("active"), b ? a("#fullPage-nav").find('a[href="#' + b + '"]').addClass("active") : a("#fullPage-nav").find("li").eq(d).find("a").addClass("active"))
        }

        function N(b) {
            c.menu && (a(c.menu).find(".active").removeClass("active"), a(c.menu).find('[data-menuanchor="' +
                b + '"]').addClass("active"))
        }

        function C(b, a) {
            if ("top" === b) return !a.scrollTop();
            if ("bottom" === b) return a.scrollTop() + 1 + a.innerHeight() >= a[0].scrollHeight
        }

        function I(b) {
            var c = a(".section.active").index(".section");
            b = b.index(".section");
            return c > b ? "up" : "down"
        }

        function z(b) {
            b.css("overflow", "hidden");
            var a = b.closest(".section"),
                e = b.find(".scrollable");
            if (e.length) var f = b.find(".scrollable").get(0).scrollHeight;
            else f = b.get(0).scrollHeight, c.verticalCentered && (f = b.find(".tableCell").get(0).scrollHeight);
            a = k - parseInt(a.css("padding-bottom")) - parseInt(a.css("padding-top"));
            f > a ? e.length ? e.css("height", a + "px").parent().css("height", a + "px") : (c.verticalCentered ? b.find(".tableCell").wrapInner('<div class="scrollable" />') : b.wrapInner('<div class="scrollable" />'), b.find(".scrollable").slimScroll({
                height: a + "px",
                size: "10px",
                alwaysVisible: !0
            })) : Y(b);
            b.css("overflow", "")
        }

        function Y(a) {
            a.find(".scrollable").children().first().unwrap().unwrap();
            a.find(".slimScrollBar").remove();
            a.find(".slimScrollRail").remove()
        }

        function Z(a) {
            a.addClass("table").wrapInner('<div class="tableCell" style="height:' + $(a) + 'px;" />')
        }

        function $(a) {
            var d = k;
            if (c.paddingTop || c.paddingBottom) d = a, d.hasClass("section") || (d = a.closest(".section")), a = parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")), d = k - a;
            return d
        }

        function U(a, c) {
            l.toggleClass("easing", c);
            l.css(X(a))
        }

        function K(b, c) {
            "undefined" === typeof c && (c = 0);
            var e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".section").eq(b - 1);
            b === u || e.hasClass("active") ? aa(e, c) : h(e, function() {
                aa(e,
                    c)
            })
        }

        function aa(a, c) {
            if ("undefined" != typeof c) {
                var e = a.find(".slides"),
                    f = e.find('[data-anchor="' + c + '"]');
                f.length || (f = e.find(".slide").eq(c));
                f.length && q(e, f)
            }
        }

        function ga(a, d) {
            a.append('<div class="fullPage-slidesNav"><ul></ul></div>');
            var e = a.find(".fullPage-slidesNav");
            e.addClass(c.slidesNavPosition);
            for (var f = 0; f < d; f++) e.find("ul").append('<li><a href="#"><span></span></a></li>');
            e.css("margin-left", "-" + e.width() / 2 + "px");
            e.find("li").first().find("a").addClass("active")
        }

        function T(a, d, e) {
            var f =
                "";
            c.anchors.length && (a ? ("undefined" !== typeof e && (f = e), "undefined" === typeof d && (d = a), J = d, location.hash = f + "/" + d) : ("undefined" !== typeof a && (J = d), location.hash = e))
        }

        function ha() {
            var a = document.createElement("p"),
                c, e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            document.body.insertBefore(a, null);
            for (var f in e) void 0 !== a.style[f] && (a.style[f] = "translate3d(1px,1px,1px)", c = window.getComputedStyle(a).getPropertyValue(e[f]));
            document.body.removeChild(a);
            return void 0 !== c && 0 < c.length && "none" !== c
        }

        function ba() {
            return window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function R(a) {
            var c = [];
            window.navigator.msPointerEnabled ? (c.y = a.pageY, c.x = a.pageX) : (c.y = a.touches[0].pageY, c.x = a.touches[0].pageX);
            return c
        }

        function v(a) {
            c.css3 ? U("translate3d(0px, -" + a + "px, 0px)", !1) : l.css("top", -a)
        }

        function X(a) {
            return {
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                transform: a
            }
        }

        function ia() {
            v(0);
            a("#fullPage-nav, .fullPage-slidesNav, .controlArrow").remove();
            a(".section").css({
                height: "",
                "background-color": "",
                padding: ""
            });
            a(".slide").css({
                width: ""
            });
            l.css({
                height: "",
                position: "",
                "-ms-touch-action": ""
            });
            a(".section, .slide").each(function() {
                Y(a(this));
                a(this).removeClass("table active")
            });
            l.find(".easing").removeClass("easing");
            l.find(".tableCell, .slidesContainer, .slides").each(function() {
                a(this).replaceWith(this.childNodes)
            });
            a("html, body").scrollTop(0);
            l.addClass("fullpage-used")
        }
        c = a.extend({
            verticalCentered: !0,
            resize: !0,
            slidesColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: "easeInQuart",
            menu: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            controlArrowColor: "#fff",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            autoScrolling: !0,
            scrollOverflow: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            continuousVertical: !1,
            animateAnchor: !0,
            normalScrollElementTouchThreshold: 5,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, c);
        c.continuousVertical && (c.loopTop || c.loopBottom) && (c.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
        var V = 600;
        a.fn.fullpage.setAutoScrolling = function(b) {
            c.autoScrolling = b;
            b = a(".section.active");
            c.autoScrolling ? (a("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), b.length && v(b.position().top)) : (a("html, body").css({
                overflow: "auto",
                height: "auto"
            }), v(0), a("html, body").scrollTop(b.position().top))
        };
        a.fn.fullpage.setScrollingSpeed = function(a) {
            c.scrollingSpeed = a
        };
        a.fn.fullpage.setMouseWheelScrolling = function(a) {
            a ? document.addEventListener ? (document.addEventListener("mousewheel", p, !1), document.addEventListener("wheel", p, !1)) : document.attachEvent("onmousewheel", p) : document.addEventListener ? (document.removeEventListener("mousewheel", p, !1), document.removeEventListener("wheel",
                p, !1)) : document.detachEvent("onmousewheel", p)
        };
        a.fn.fullpage.setAllowScrolling = function(b) {
            b ? (a.fn.fullpage.setMouseWheelScrolling(!0), G && (MSPointer = ba(), a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, ea), a(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, da))) : (a.fn.fullpage.setMouseWheelScrolling(!1), G && (MSPointer = ba(), a(document).off("touchstart " + MSPointer.down), a(document).off("touchmove " + MSPointer.move)))
        };
        a.fn.fullpage.setKeyboardScrolling =
            function(a) {
                c.keyboardScrolling = a
            };
        var s = !1,
            G = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
            l = a(this),
            k = a(window).height(),
            t = !1,
            E = !1,
            u, J;
        a.fn.fullpage.setAllowScrolling(!0);
        c.css3 && (c.css3 = ha());
        a(this).length ? l.css({
            height: "100%",
            position: "relative",
            "-ms-touch-action": "none"
        }) : (a("body").wrapInner('<div id="superContainer" />'), l = a("#superContainer"));
        if (c.navigation) {
            a("body").append('<div id="fullPage-nav"><ul></ul></div>');
            var n = a("#fullPage-nav");
            n.css("color", c.navigationColor);
            n.addClass(c.navigationPosition)
        }
        a(".section").each(function(b) {
            var d = a(this),
                e = a(this).find(".slide"),
                f = e.length;
            b || 0 !== a(".section.active").length || a(this).addClass("active");
            a(this).css("height", k + "px");
            (c.paddingTop || c.paddingBottom) && a(this).css("padding", c.paddingTop + " 0 " + c.paddingBottom + " 0");
            "undefined" !== typeof c.slidesColor[b] && a(this).css("background-color", c.slidesColor[b]);
            "undefined" !== typeof c.anchors[b] && a(this).attr("data-anchor", c.anchors[b]);
            if (c.navigation) {
                var g =
                    "";
                c.anchors.length && (g = c.anchors[b]);
                b = c.navigationTooltips[b];
                "undefined" === typeof b && (b = "");
                n.find("ul").append('<li data-tooltip="' + b + '"><a href="#' + g + '"><span></span></a></li>')
            }
            if (1 < f) {
                var g = 100 * f,
                    h = 100 / f;
                e.wrapAll('<div class="slidesContainer" />');
                e.parent().wrap('<div class="slides" />');
                a(this).find(".slidesContainer").css("width", g + "%");
                a(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');
                "#fff" != c.controlArrowColor && (a(this).find(".controlArrow.next").css("border-color",
                    "transparent transparent transparent " + c.controlArrowColor), a(this).find(".controlArrow.prev").css("border-color", "transparent " + c.controlArrowColor + " transparent transparent"));
                c.loopHorizontal || a(this).find(".controlArrow.prev").hide();
                c.slidesNavigation && ga(a(this), f);
                e.each(function(b) {
                    b || 0 != d.find(".slide.active").length || a(this).addClass("active");
                    a(this).css("width", h + "%");
                    c.verticalCentered && Z(a(this))
                })
            } else c.verticalCentered && Z(a(this))
        }).promise().done(function() {
            a.fn.fullpage.setAutoScrolling(c.autoScrolling);
            var b = a(".section.active").find(".slide.active");
            if (b.length && (0 != a(".section.active").index(".section") || 0 == a(".section.active").index(".section") && 0 != b.index())) {
                var d = c.scrollingSpeed;
                a.fn.fullpage.setScrollingSpeed(0);
                q(a(".section.active").find(".slides"), b);
                a.fn.fullpage.setScrollingSpeed(d)
            }
            c.fixedElements && c.css3 && a(c.fixedElements).appendTo("body");
            c.navigation && (n.css("margin-top", "-" + n.height() / 2 + "px"), n.find("li").eq(a(".section.active").index(".section")).find("a").addClass("active"));
            c.menu && c.css3 && a(c.menu).appendTo("body");
            c.scrollOverflow ? (l.hasClass("fullpage-used") && L(), a(window).on("load", L)) : a.isFunction(c.afterRender) && c.afterRender.call(this);
            b = window.location.hash.replace("#", "").split("/")[0];
            b.length && (d = a('[data-anchor="' + b + '"]'), !c.animateAnchor && d.length && (v(d.position().top), a.isFunction(c.afterLoad) && c.afterLoad.call(this, b, d.index(".section") + 1), d.addClass("active").siblings().removeClass("active")));
            a(window).on("load", function() {
                var a = window.location.hash.replace("#",
                        "").split("/"),
                    b = a[0],
                    a = a[1];
                b && K(b, a)
            })
        });
        var P, H = !1;
        a(window).on("scroll", M);
        var x = 0,
            B = 0,
            w = 0,
            A = 0;
        a.fn.fullpage.moveSectionUp = function() {
            var b = a(".section.active").prev(".section");
            b.length || !c.loopTop && !c.continuousVertical || (b = a(".section").last());
            b.length && h(b, null, !0)
        };
        a.fn.fullpage.moveSectionDown = function() {
            var b = a(".section.active").next(".section");
            b.length || !c.loopBottom && !c.continuousVertical || (b = a(".section").first());
            (0 < b.length || !b.length && (c.loopBottom || c.continuousVertical)) && h(b,
                null, !1)
        };
        a.fn.fullpage.moveTo = function(b, c) {
            var e = "",
                e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".section").eq(b - 1);
            "undefined" !== typeof c ? K(b, c) : 0 < e.length && h(e)
        };
        a.fn.fullpage.moveSlideRight = function() {
            S("next")
        };
        a.fn.fullpage.moveSlideLeft = function() {
            S("prev")
        };
        a(window).on("hashchange", W);
        a(document).keydown(function(b) {
            if (c.keyboardScrolling && !t) switch (b.which) {
                case 38:
                case 33:
                    a.fn.fullpage.moveSectionUp();
                    break;
                case 40:
                case 34:
                    a.fn.fullpage.moveSectionDown();
                    break;
                case 36:
                    a.fn.fullpage.moveTo(1);
                    break;
                case 35:
                    a.fn.fullpage.moveTo(a(".section").length);
                    break;
                case 37:
                    a.fn.fullpage.moveSlideLeft();
                    break;
                case 39:
                    a.fn.fullpage.moveSlideRight()
            }
        });
        a(document).on("click", "#fullPage-nav a", function(b) {
            b.preventDefault();
            b = a(this).parent().index();
            h(a(".section").eq(b))
        });
        a(document).on({
                mouseenter: function() {
                    var b = a(this).data("tooltip");
                    a('<div class="fullPage-tooltip ' + c.navigationPosition + '">' + b + "</div>").hide().appendTo(a(this)).fadeIn(200)
                },
                mouseleave: function() {
                    a(this).find(".fullPage-tooltip").fadeOut().remove()
                }
            },
            "#fullPage-nav li");
        c.normalScrollElements && (a(document).on("mouseover", c.normalScrollElements, function() {
            a.fn.fullpage.setMouseWheelScrolling(!1)
        }), a(document).on("mouseout", c.normalScrollElements, function() {
            a.fn.fullpage.setMouseWheelScrolling(!0)
        }));
        a(".section").on("click", ".controlArrow", function() {
            a(this).hasClass("prev") ? a.fn.fullpage.moveSlideLeft() : a.fn.fullpage.moveSlideRight()
        });
        a(".section").on("click", ".toSlide", function(b) {
            b.preventDefault();
            b = a(this).closest(".section").find(".slides");
            b.find(".slide.active");
            var c = null,
                c = b.find(".slide").eq(a(this).data("index") - 1);
            0 < c.length && q(b, c)
        });
        if (!G) {
            var ca;
            a(window).resize(function() {
                clearTimeout(ca);
                ca = setTimeout(a.fn.fullpage.reBuild, 500)
            })
        }
        var ja = "onorientationchange" in window ? "orientationchange" : "resize";
        a(window).bind(ja, function() {
            G && a.fn.fullpage.reBuild()
        });
        a.fn.fullpage.reBuild = function() {
            E = !0;
            var b = a(window).width();
            k = a(window).height();
            c.resize && fa(k, b);
            a(".section").each(function() {
                parseInt(a(this).css("padding-bottom"));
                parseInt(a(this).css("padding-top"));
                c.verticalCentered && a(this).find(".tableCell").css("height", $(a(this)) + "px");
                a(this).css("height", k + "px");
                if (c.scrollOverflow) {
                    var b = a(this).find(".slide");
                    b.length ? b.each(function() {
                        z(a(this))
                    }) : z(a(this))
                }
                b = a(this).find(".slides");
                b.length && q(b, b.find(".slide.active"))
            });
            a(".section.active").position();
            b = a(".section.active");
            b.index(".section") && h(b);
            E = !1;
            a.isFunction(c.afterResize) && c.afterResize.call(this)
        };
        a(document).on("click", ".fullPage-slidesNav a", function(b) {
            b.preventDefault();
            b = a(this).closest(".section").find(".slides");
            var c = b.find(".slide").eq(a(this).closest("li").index());
            q(b, c)
        });
        a.fn.fullpage.destroy = function(b) {
            a.fn.fullpage.setAutoScrolling(!1);
            a.fn.fullpage.setAllowScrolling(!1);
            a.fn.fullpage.setKeyboardScrolling(!1);
            a(window).off("scroll", M).off("hashchange", W);
            a(document).off("click", "#fullPage-nav a").off("mouseenter", "#fullPage-nav li").off("mouseleave", "#fullPage-nav li").off("click", ".fullPage-slidesNav a").off("mouseover", c.normalScrollElements).off("mouseout",
                c.normalScrollElements);
            a(".section").off("click", ".controlArrow").off("click", ".toSlide");
            b && ia()
        }
    }
})(jQuery);