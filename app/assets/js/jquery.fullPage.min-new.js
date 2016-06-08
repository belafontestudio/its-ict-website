/*!
 * fullPage 2.8.1
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var r="fullpage-wrapper",a="."+r,l="fp-scrollable",s="."+l,c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",h="fp-viewing",p="active",v="."+p,m="fp-completely",g="."+m,S=".section",w="fp-section",y="."+w,b=y+v,C=y+":first",T=y+":last",x="fp-tableCell",k="."+x,L="fp-auto-height",M="fp-normal-scroll",A="fp-nav",E="#"+A,I="fp-tooltip",O="."+I,B="fp-show-active",H=".slide",R="fp-slide",D="."+R,z=D+v,P="fp-slides",F="."+P,V="fp-slidesContainer",U="."+V,W="fp-table",q="fp-slidesNav",Y="."+q,X=Y+" a",N="fp-controlArrow",j="."+N,K="fp-prev",Q="."+K,G=N+" "+K,J=j+Q,Z="fp-next",$="."+Z,_=N+" "+Z,ee=j+$,ne=e(n),te=e(t),oe={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,click:!0};e.fn.fullpage=function(l){function s(){l.css3&&(l.css3=bn()),l.scrollBar=l.scrollBar||l.hybrid,Q(),Z(),Un.setAllowScrolling(!0),Un.setAutoScrolling(l.autoScrolling,"internal");var n=e(b).find(z);n.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==n.index())&&In(n),_e(),yn(),"complete"===t.readyState&&Fe(),ne.on("load",Fe)}function N(){ne.on("scroll",ve).on("hashchange",Ve).blur(je).resize($e),te.keydown(Ue).keyup(qe).on("click touchstart",E+" a",Ke).on("click touchstart",X,Qe).on("click",O,We),e(y).on("click touchstart",j,Ne),l.normalScrollElements&&(te.on("mouseenter",l.normalScrollElements,function(){Un.setMouseWheelScrolling(!1)}),te.on("mouseleave",l.normalScrollElements,function(){Un.setMouseWheelScrolling(!0)}))}function Q(){var n=Kn.find(l.sectionSelector);l.anchors.length||(l.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),l.navigationTooltips.length||(l.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function Z(){Kn.css({height:"100%",position:"relative"}),Kn.addClass(r),e("html").addClass(u),Qn=ne.height(),Kn.removeClass(f),le(),e(y).each(function(n){var t=e(this),o=t.find(D),i=o.length;re(t,n),ae(t,n),i>0?$(t,o,i):l.verticalCentered&&cn(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(Vn),l.navigation&&ce(),fe(),ue(),l.scrollOverflow?("complete"===t.readyState&&de(),ne.on("load",de)):pe()}function $(n,t,o){var i=100*o,r=100/o;t.wrapAll('<div class="'+V+'" />'),t.parent().wrap('<div class="'+P+'" />'),n.find(U).css("width",i+"%"),o>1&&(l.controlArrows&&se(n),l.slidesNavigation&&mn(n,o)),t.each(function(n){e(this).css("width",r+"%"),l.verticalCentered&&cn(e(this))});var a=n.find(z);a.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==a.index())?In(a):t.eq(0).addClass(p)}function re(n,t){t||0!==e(b).length||n.addClass(p),n.css("height",Qn+"px"),l.paddingTop&&n.css("padding-top",l.paddingTop),l.paddingBottom&&n.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[t]&&n.css("background-color",l.sectionsColor[t]),"undefined"!=typeof l.anchors[t]&&n.attr("data-anchor",l.anchors[t])}function ae(n,t){"undefined"!=typeof l.anchors[t]&&n.hasClass(p)&&rn(l.anchors[t],t),l.menu&&l.css3&&e(l.menu).closest(a).length&&e(l.menu).appendTo(Vn)}function le(){e(l.sectionSelector).each(function(){e(this).addClass(w)}),e(l.slideSelector).each(function(){e(this).addClass(R)})}function se(e){e.find(F).after('<div class="'+G+'"></div><div class="'+_+'"></div>'),"#fff"!=l.controlArrowColor&&(e.find(ee).css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(J).css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(J).hide()}function ce(){Vn.append('<div id="'+A+'"><ul></ul></div>');var n=e(E);n.addClass(function(){return l.showActiveTooltip?B+" "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(y).length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',r=l.navigationTooltips[t];"undefined"!=typeof r&&""!==r&&(i+='<div class="'+I+" "+l.navigationPosition+'">'+r+"</div>"),i+="</li>",n.find("ul").append(i)}e(E).css("margin-top","-"+e(E).height()/2+"px"),e(E).find("li").eq(e(b).index(y)).find("a").addClass(p)}function de(){e(y).each(function(){var n=e(this).find(D);n.length?n.each(function(){sn(e(this))}):sn(e(this))}),pe()}function fe(){Kn.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=he(e(this).attr("src"));e(this).attr("src",e(this).attr("src")+n+"enablejsapi=1")})}function ue(){Kn.find('iframe[src*="player.vimeo.com/"]').each(function(){var n=he(e(this).attr("src"));e(this).attr("src",e(this).attr("src")+n+"api=1")})}function he(e){return/\?/.test(e)?"&":"?"}function pe(){var n=e(b);n.addClass(m),l.scrollOverflowHandler.afterRender&&l.scrollOverflowHandler.afterRender(n),Re(n),De(n),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(l.afterRender)&&l.afterRender.call(Kn)}function ve(){var n;if(!l.autoScrolling||l.scrollBar){for(var o=ne.scrollTop(),i=ge(o),r=0,a=o+ne.height()/2,s=t.querySelectorAll(y),c=0;c<s.length;++c){var d=s[c];d.offsetTop<=a&&(r=c)}if(me(i)&&(e(b).hasClass(m)||e(b).addClass(m).siblings().removeClass(m)),n=e(s).eq(r),!n.hasClass(p)){lt=!0;var f=e(b),u=f.index(y)+1,h=an(n),v=n.data("anchor"),g=n.index(y)+1,S=n.find(z);if(S.length)var w=S.data("anchor"),C=S.index();Zn&&(n.addClass(p).siblings().removeClass(p),e.isFunction(l.onLeave)&&l.onLeave.call(f,u,g,h),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,v,g),Re(n),rn(v,g-1),l.anchors.length&&(Wn=v,gn(C,w,v,g))),clearTimeout(ot),ot=setTimeout(function(){lt=!1},100)}l.fitToSection&&(clearTimeout(it),it=setTimeout(function(){Zn&&l.fitToSection&&(e(b).is(n)&&(Gn=!0),Ae(e(b)),Gn=!1)},l.fitToSectionDelay))}}function me(n){var t=e(b).position().top,o=t+ne.height();return"up"==n?o>=ne.scrollTop()+ne.height():t<=ne.scrollTop()}function ge(e){var n=e>st?"down":"up";return st=e,n}function Se(e,n){if(_n.m[e]){var t,o;if("down"==e?(t="bottom",o=Un.moveSectionDown):(t="top",o=Un.moveSectionUp),n.length>0){if(!l.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function we(n){var t=n.originalEvent;if(!ye(n.target)&&be(t)){l.autoScrolling&&n.preventDefault();var i=e(b),r=l.scrollOverflowHandler.scrollable(i);if(Zn&&!Xn){var a=En(t);ft=a.y,ut=a.x,i.find(F).length&&o.abs(dt-ut)>o.abs(ct-ft)?o.abs(dt-ut)>ne.outerWidth()/100*l.touchSensitivity&&(dt>ut?_n.m.right&&Un.moveSlideRight():_n.m.left&&Un.moveSlideLeft()):l.autoScrolling&&o.abs(ct-ft)>ne.height()/100*l.touchSensitivity&&(ct>ft?Se("down",r):ft>ct&&Se("up",r))}}}function ye(n,t){t=t||0;var o=e(n).parent();return t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements)?!0:t==l.normalScrollElementTouchThreshold?!1:ye(o,++t)}function be(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Ce(e){var n=e.originalEvent;if(l.fitToSection&&Fn.stop(),be(n)){var t=En(n);ct=t.y,dt=t.x}}function Te(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),r=0;r<i.length;r++)t+=i[r];return o.ceil(t/n)}function xe(t){var i=(new Date).getTime(),r=e(g).hasClass(M);if(l.autoScrolling&&!Yn&&!r){t=t||n.event;var a=t.wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,a)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,d=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!c;$n.length>149&&$n.shift(),$n.push(o.abs(a)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var f=e(b),u=l.scrollOverflowHandler.scrollable(f),h=i-ht;if(ht=i,h>200&&($n=[]),Zn){var p=Te($n,10),v=Te($n,70),m=p>=v;m&&d&&(0>s?Se("down",u):Se("up",u))}return!1}l.fitToSection&&Fn.stop()}function ke(n,t){var o="undefined"==typeof t?e(b):t,i=o.find(F),r=i.find(D).length;if(!(!i.length||Xn||2>r)){var a=i.find(z),s=null;if(s="prev"===n?a.prev(D):a.next(D),!s.length){if(!l.loopHorizontal)return;s="prev"===n?a.siblings(":last"):a.siblings(":first")}Xn=!0,Ze(i,s)}}function Le(){e(z).each(function(){In(e(this),"internal")})}function Me(e){var n=e.position(),t=n.top,o=n.top>pt,i=t-Qn+e.outerHeight();return e.outerHeight()>Qn?o||(t=i):(o||Gn&&e.is(":last-child"))&&(t=i),pt=t,t}function Ae(n,t,o){if("undefined"!=typeof n){var i=Me(n),r={element:n,callback:t,isMovementUp:o,dtop:i,yMovement:an(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(z),activeSection:e(b),leavingSection:e(b).index(y)+1,localIsResizing:Gn};if(!(r.activeSection.is(n)&&!Gn||l.scrollBar&&ne.scrollTop()===r.dtop&&!n.hasClass(L))){if(r.activeSlide.length)var a=r.activeSlide.data("anchor"),s=r.activeSlide.index();l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&(r=Oe(r)),(!e.isFunction(l.onLeave)||r.localIsResizing||l.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement)!==!1)&&(ze(r.activeSection),n.addClass(p).siblings().removeClass(p),Re(n),l.scrollOverflowHandler.onLeave(),Zn=!1,gn(s,a,r.anchorLink,r.sectionIndex),Ee(r),Wn=r.anchorLink,rn(r.anchorLink,r.sectionIndex))}}}function Ee(n){if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+n.dtop+"px, 0px)";fn(t,!0),l.scrollingSpeed?nt=setTimeout(function(){He(n)},l.scrollingSpeed):He(n)}else{var o=Ie(n);e(o.element).animate(o.options,l.scrollingSpeed,l.easing).promise().done(function(){l.scrollBar?setTimeout(function(){He(n)},30):He(n)})}}function Ie(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=a):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Oe(n){return n.isMovementUp?e(b).before(n.activeSection.nextAll(y)):e(b).after(n.activeSection.prevAll(y).get().reverse()),On(e(b).position().top),Le(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=an(n.element),n}function Be(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(C).before(n.wrapAroundElements):e(T).after(n.wrapAroundElements),On(e(b).position().top),Le())}function He(n){Be(n),n.element.find(".fp-scrollable").mouseover(),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),l.scrollOverflowHandler.afterLoad(),De(n.element),n.element.addClass(m).siblings().removeClass(m),Zn=!0,e.isFunction(n.callback)&&n.callback.call(this)}function Re(n){var n=Pe(n);n.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function De(n){var n=Pe(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&n.hasAttribute("data-autoplay")&&n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")})}function ze(n){var n=Pe(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),n.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Pe(n){var t=n.find(z);return t.length&&(n=e(t)),n}function Fe(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(l.animateAnchor?pn(t,o):Un.silentMoveTo(t,o))}function Ve(){if(!lt&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i="undefined"==typeof Wn,r="undefined"==typeof Wn&&"undefined"==typeof o&&!Xn;t.length&&(t&&t!==Wn&&!i||r||!Xn&&qn!=o)&&pn(t,o)}}function Ue(n){clearTimeout(rt);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&l.keyboardScrolling&&l.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),Yn=n.ctrlKey,rt=setTimeout(function(){Ge(n)},150)}}function We(){e(this).prev().trigger("click")}function qe(e){Jn&&(Yn=e.ctrlKey)}function Ye(e){2==e.which&&(vt=e.pageY,Kn.on("mousemove",Je))}function Xe(e){2==e.which&&Kn.off("mousemove")}function Ne(){var n=e(this).closest(y);e(this).hasClass(K)?_n.m.left&&Un.moveSlideLeft(n):_n.m.right&&Un.moveSlideRight(n)}function je(){Jn=!1,Yn=!1}function Ke(n){n.preventDefault();var t=e(this).parent().index();Ae(e(y).eq(t))}function Qe(n){n.preventDefault();var t=e(this).closest(y).find(F),o=t.find(D).eq(e(this).closest("li").index());Ze(t,o)}function Ge(n){var t=n.shiftKey;switch(n.which){case 38:case 33:_n.k.up&&Un.moveSectionUp();break;case 32:if(t&&_n.k.up){Un.moveSectionUp();break}case 40:case 34:_n.k.down&&Un.moveSectionDown();break;case 36:_n.k.up&&Un.moveTo(1);break;case 35:_n.k.down&&Un.moveTo(e(y).length);break;case 37:_n.k.left&&Un.moveSlideLeft();break;case 39:_n.k.right&&Un.moveSlideRight();break;default:return}}function Je(e){Zn&&(e.pageY<vt&&_n.m.up?Un.moveSectionUp():e.pageY>vt&&_n.m.down&&Un.moveSectionDown()),vt=e.pageY}function Ze(n,t){var i=t.position(),r=t.index(),a=n.closest(y),s=a.index(y),c=a.data("anchor"),d=a.find(Y),f=wn(t),u=a.find(z),h=Gn;if(l.onSlideLeave){var m=u.index(),g=ln(m,r);if(!h&&"none"!==g&&e.isFunction(l.onSlideLeave)&&l.onSlideLeave.call(u,c,s+1,m,g,r)===!1)return void(Xn=!1)}ze(u),t.addClass(p).siblings().removeClass(p),h||Re(t),!l.loopHorizontal&&l.controlArrows&&(a.find(J).toggle(0!==r),a.find(ee).toggle(!t.is(":last-child"))),a.hasClass(p)&&gn(r,f,c,s);var S=function(){h||e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(t,c,s+1,f,r),De(t),Xn=!1};if(l.css3){var w="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";en(n.find(U),l.scrollingSpeed>0).css(Bn(w)),tt=setTimeout(function(){S()},l.scrollingSpeed,l.easing)}else n.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){S()});d.find(v).removeClass(p),d.find("li").eq(r).find("a").addClass(p)}function $e(){if(_e(),Nn){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ne.height();o.abs(i-mt)>20*o.max(mt,i)/100&&(Un.reBuild(!0),mt=i)}}else clearTimeout(et),et=setTimeout(function(){Un.reBuild(!0)},350)}function _e(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&ne.outerWidth()<e,o=n&&ne.height()<n;e&&n?Un.setResponsive(t||o):e?Un.setResponsive(t):n&&Un.setResponsive(o)}function en(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function nn(e){return e.addClass(d)}function tn(n,t){l.navigation&&(e(E).find(v).removeClass(p),n?e(E).find('a[href="#'+n+'"]').addClass(p):e(E).find("li").eq(t).find("a").addClass(p))}function on(n){l.menu&&(e(l.menu).find(v).removeClass(p),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass(p))}function rn(e,n){on(e),tn(e,n)}function an(n){var t=e(b).index(y),o=n.index(y);return t==o?"none":t>o?"up":"down"}function ln(e,n){return e==n?"none":e>n?"left":"right"}function sn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=l.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(y),r=t.scrollable(e);r.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var a=Qn-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>a?r.length?t.update(e,a):(l.verticalCentered?e.find(k).wrapInner(o):e.wrapInner(o),t.create(e,a)):t.remove(e),e.css("overflow","")}}function cn(e){e.addClass(W).wrapInner('<div class="'+x+'" style="height:'+dn(e)+'px;" />')}function dn(e){var n=Qn;if(l.paddingTop||l.paddingBottom){var t=e;t.hasClass(w)||(t=e.closest(y));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=Qn-o}return n}function fn(e,n){n?en(Kn):nn(Kn),Kn.css(Bn(e)),setTimeout(function(){Kn.removeClass(d)},10)}function un(n){var t=Kn.find(y+'[data-anchor="'+n+'"]');return t.length||(t=e(y).eq(n-1)),t}function hn(e,n){var t=n.find(F),o=t.find(D+'[data-anchor="'+e+'"]');return o.length||(o=t.find(D).eq(e)),o}function pn(e,n){var t=un(e);"undefined"==typeof n&&(n=0),e===Wn||t.hasClass(p)?vn(t,n):Ae(t,function(){vn(t,n)})}function vn(e,n){if("undefined"!=typeof n){var t=e.find(F),o=hn(n,e);o.length&&Ze(t,o)}}function mn(e,n){e.append('<div class="'+q+'"><ul></ul></div>');var t=e.find(Y);t.addClass(l.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(p)}function gn(e,n,t,o){var i="";l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),qn=n,Sn(i+"/"+n)):"undefined"!=typeof e?(qn=n,Sn(t)):Sn(t)),yn()}function Sn(e){if(l.recordHistory)location.hash=e;else if(Nn||jn)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function wn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function yn(){var n=e(b),t=n.find(z),o=wn(n),i=wn(t),r=String(o);t.length&&(r=r+"-"+i),r=r.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");Vn[0].className=Vn[0].className.replace(a,""),Vn.addClass(h+"-"+r)}function bn(){var e,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var a in r)o.style[a]!==i&&(o.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(r[a]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function Cn(){t.addEventListener?(t.removeEventListener("mousewheel",xe,!1),t.removeEventListener("wheel",xe,!1),t.removeEventListener("MozMousePixelScroll",xe,!1)):t.detachEvent("onmousewheel",xe)}function Tn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?t[e](o+"MozMousePixelScroll",xe,!1):t[e](o+r,xe,!1)}function xn(){Kn.on("mousedown",Ye).on("mouseup",Xe)}function kn(){Kn.off("mousedown",Ye).off("mouseup",Xe)}function Ln(){if(Nn||jn){var n=An();e(a).off("touchstart "+n.down).on("touchstart "+n.down,Ce),e(a).off("touchmove "+n.move).on("touchmove "+n.move,we)}}function Mn(){if(Nn||jn){var n=An();e(a).off("touchstart "+n.down),e(a).off("touchmove "+n.move)}}function An(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function En(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,jn&&be(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function In(e,n){Un.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Gn=!0),Ze(e.closest(F),e),"undefined"!=typeof n&&(Gn=!1),Un.setScrollingSpeed(at.scrollingSpeed,"internal")}function On(e){if(l.scrollBar)Kn.scrollTop(e);else if(l.css3){var n="translate3d(0px, -"+e+"px, 0px)";fn(n,!1)}else Kn.css("top",-e)}function Bn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Hn(e,n,t){switch(n){case"up":_n[t].up=e;break;case"down":_n[t].down=e;break;case"left":_n[t].left=e;break;case"right":_n[t].right=e;break;case"all":"m"==t?Un.setAllowScrolling(e):Un.setKeyboardScrolling(e)}}function Rn(){On(0),e(E+", "+Y+", "+j).remove(),e(y).css({height:"","background-color":"",padding:""}),e(D).css({width:""}),Kn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),Fn.css({overflow:"",height:""}),e("html").removeClass(u),e.each(Vn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(h)&&Vn.removeClass(n)}),e(y+", "+D).each(function(){l.scrollOverflowHandler.remove(e(this)),e(this).removeClass(W+" "+p)}),nn(Kn),Kn.find(k+", "+U+", "+F).each(function(){e(this).replaceWith(this.childNodes)}),Fn.scrollTop(0);var n=[w,R,V];e.each(n,function(n,t){e("."+t).removeClass(t)})}function Dn(e,n,t){l[e]=n,"internal"!==t&&(at[e]=n)}function zn(){return e("html").hasClass(u)?void Pn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,Pn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&Pn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),l.continuousVertical&&l.scrollBar&&(l.continuousVertical=!1,Pn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),void e.each(l.anchors,function(n,t){var o=te.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=te.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(Pn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&Pn("error",'"'+t+'" is is being used by another element `id` property'),o.length&&Pn("error",'"'+t+'" is is being used by another element `name` property'))}))}function Pn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(u))return void zn();var Fn=e("html, body"),Vn=e("body"),Un=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ie,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:S,slideSelector:H,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},l),zn(),oe=e.extend(oe,l.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),Un.setAutoScrolling=function(n,t){Dn("autoScrolling",n,t);var o=e(b);l.autoScrolling&&!l.scrollBar?(Fn.css({overflow:"hidden",height:"100%"}),Un.setRecordHistory(at.recordHistory,"internal"),Kn.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&On(o.position().top)):(Fn.css({overflow:"visible",height:"initial"}),Un.setRecordHistory(!1,"internal"),Kn.css({"-ms-touch-action":"","touch-action":""}),On(0),o.length&&Fn.scrollTop(o.position().top))},Un.setRecordHistory=function(e,n){Dn("recordHistory",e,n)},Un.setScrollingSpeed=function(e,n){Dn("scrollingSpeed",e,n)},Un.setFitToSection=function(e,n){Dn("fitToSection",e,n)},Un.setLockAnchors=function(e){l.lockAnchors=e},Un.setMouseWheelScrolling=function(e){e?(Tn(),xn()):(Cn(),kn())},Un.setAllowScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Hn(n,t,"m")})):n?(Un.setMouseWheelScrolling(!0),Ln()):(Un.setMouseWheelScrolling(!1),Mn())},Un.setKeyboardScrolling=function(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Hn(n,t,"k")})):l.keyboardScrolling=n},Un.moveSectionUp=function(){var n=e(b).prev(y);n.length||!l.loopTop&&!l.continuousVertical||(n=e(y).last()),n.length&&Ae(n,null,!0)},Un.moveSectionDown=function(){var n=e(b).next(y);n.length||!l.loopBottom&&!l.continuousVertical||(n=e(y).first()),n.length&&Ae(n,null,!1)},Un.silentMoveTo=function(e,n){Un.setScrollingSpeed(0,"internal"),Un.moveTo(e,n),Un.setScrollingSpeed(at.scrollingSpeed,"internal")},Un.moveTo=function(e,n){var t=un(e);"undefined"!=typeof n?pn(e,n):t.length>0&&Ae(t)},Un.moveSlideRight=function(e){ke("next",e)},Un.moveSlideLeft=function(e){ke("prev",e)},Un.reBuild=function(n){if(!Kn.hasClass(f)){Gn=!0,Qn=ne.height(),e(y).each(function(){var n=e(this).find(F),t=e(this).find(D);l.verticalCentered&&e(this).find(k).css("height",dn(e(this))+"px"),e(this).css("height",Qn+"px"),l.scrollOverflow&&(t.length?t.each(function(){sn(e(this))}):sn(e(this))),t.length>1&&Ze(n,n.find(z))});var t=e(b),o=t.index(y);o&&Un.silentMoveTo(o+1),Gn=!1,e.isFunction(l.afterResize)&&n&&l.afterResize.call(Kn),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(Kn)}},Un.setResponsive=function(n){var t=Vn.hasClass(c);n?t||(Un.setAutoScrolling(!1,"internal"),Un.setFitToSection(!1,"internal"),e(E).hide(),Vn.addClass(c)):t&&(Un.setAutoScrolling(at.autoScrolling,"internal"),Un.setFitToSection(at.autoScrolling,"internal"),e(E).show(),Vn.removeClass(c))};var Wn,qn,Yn,Xn=!1,Nn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),jn="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Kn=e(this),Qn=ne.height(),Gn=!1,Jn=!0,Zn=!0,$n=[],_n={};_n.m={up:!0,down:!0,left:!0,right:!0},_n.k=e.extend(!0,{},_n.m);var et,nt,tt,ot,it,rt,at=e.extend(!0,{},l);e(this).length&&(s(),N());var lt=!1,st=0,ct=0,dt=0,ft=0,ut=0,ht=(new Date).getTime(),pt=0,vt=0,mt=Qn;Un.destroy=function(n){Un.setAutoScrolling(!1,"internal"),Un.setAllowScrolling(!1),Un.setKeyboardScrolling(!1),Kn.addClass(f),clearTimeout(tt),clearTimeout(nt),clearTimeout(et),clearTimeout(ot),clearTimeout(it),ne.off("scroll",ve).off("hashchange",Ve).off("resize",$e),te.off("click",E+" a").off("mouseenter",E+" li").off("mouseleave",E+" li").off("click",X).off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(y).off("click",j),clearTimeout(tt),clearTimeout(nt),n&&Rn()}},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ie={refreshId:null,iScrollInstances:[],onLeave:function(){var n=e(b).find(s).data("iscrollInstance");"undefined"!=typeof n&&n&&n.wheelOff()},afterLoad:function(){var n=e(b).find(s).data("iscrollInstance");"undefined"!=typeof n&&n&&n.wheelOn()},create:function(n,t){var o=n.find(s);o.height(t),o.each(function(){var n=jQuery(this),t=n.data("iscrollInstance");t&&e.each(ie.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),oe),ie.iScrollInstances.push(t),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return t?"top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0:!1},scrollable:function(e){return e.find(F).length?e.find(z).find(s):e.find(s)},scrollHeight:function(e){return e.find(s).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(s);if(n.length){var t=n.data("iscrollInstance");t.destroy(),n.data("iscrollInstance","undefined")}e.find(s).children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(ie.refreshId),ie.refreshId=setTimeout(function(){e.each(ie.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(s).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+l+'"><div class="fp-scroller"></div></div>'}}});
