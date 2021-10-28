(function (G) {
    var d = G, k = document, p = d.location, D = d.performance;
    if (!d.TJ58) {
        d.TJ58 = !0;
        null == d.String.prototype.trim && (d.String.prototype.trim = function () {
            return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        });
        d.TJ58Obj = {};
        var e = {
            curURL: p.href,
            referrer: k.referrer,
            protocol: p.protocol,
            window_size: k.documentElement.clientWidth + "x" + k.documentElement.clientHeight,
            screen_size: d.screen.width + "," + d.screen.height,
            domain: function () {
                var c = p.host.toLowerCase(), a = /.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/;
                return a.test(c) ? "." + c.replace(a, "$1") : ""
            }(),
            navigation_type: function () {
                var c = "-1";
                try {
                    D && D.navigation && (c = D.navigation.type)
                } catch (a) {
                    return "-1"
                }
                return c
            }(),
            setCookie: function () {
                if (!k.cookie) return !1;
                var c = new Date;
                2 < arguments.length ? c.setTime(c.getTime() + 864E5 * arguments[2]) : c.setTime(c.getTime() + 18E5);
                2 <= arguments.length && (k.cookie = arguments[0] + "=" + escape(arguments[1]) + "; expires=" + c.toGMTString() + "; domain=" + e.domain + "; path=/")
            },
            getCookie: function (c) {
                if (!k.cookie) return "";
                var a;
                return (a = k.cookie.match(RegExp("(^| )" +
                    c + "=([^;]*)(;|$)"))) ? unescape(a[2]) : ""
            },
            ajaxsend: function (c) {
                (new Image).src = c
            },
            getGTID: function (c, a, b) {
                function d(a, c, b) {
                    a = ("" + a).length < c ? (Array(c + 1).join("0") + a).slice(-c) : "" + a;
                    return -1 == b ? a : a.substring(0, b) + "-" + a.substring(b)
                }

                var e = {home: "1", index: "2", list: "3", detail: "4", post: "5", special: "6"};
                c = e[c] ? parseInt(e[c]).toString(16) : 0;
                a = a.split(",");
                a = a[a.length - 1];
                a = parseInt(a) ? parseInt(a).toString(16) : 0;
                b = b.split(",");
                b = b[b.length - 1];
                b = parseInt(b) ? parseInt(b).toString(16) : 0;
                e = (13).toString(16);
                return "llpccccc-tttt-txxx-xxxx-xxxxxxxxxxxx".replace(/x/g,
                    function (a) {
                        return (16 * Math.random() | 0).toString(16)
                    }).replace(/ccccc/, d(a, 5, -1)).replace(/tttt-t/, d(b, 5, 4)).replace(/p/, d(c, 1, -1)).replace(/ll/, d(e, 2, -1))
            },
            setLocalStorage: function (c, a) {
                try {
                    d.localStorage && d.localStorage.setItem(c, a)
                } catch (b) {
                }
            },
            getLocalStorage: function (c) {
                try {
                    return d.localStorage ? d.localStorage.getItem(c) : ""
                } catch (a) {
                    return ""
                }
            },
            getUUID: function (c) {
                var a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                        var c = 16 * d.Math.random() | 0;
                        return ("x" == a ? c : c & 3 | 8).toString(16)
                    }),
                    a = this.getCookie(c) || this.getLocalStorage(c) || a;
                this.setCookie(c, a, 365);
                this.setLocalStorage(c, a);
                return a
            },
            getRandom: function () {
                return d.Math.random()
            },
            bindElem: function (c, a, b, e, l) {
                if (d.$ && "string" == typeof c && "string" == typeof a && "function" == typeof b) if ("function" === typeof $(k).on) $(k).on(a, c, b); else "function" === typeof $(k).delegate ? $(k).delegate(c, a, b) : "function" === typeof $(c).bind && $(c).bind(a, b)
            },
            loadScript: function (c, a) {
                try {
                    var b = k.createElement("script");
                    b.type = "text/javascript";
                    b.readyState ?
                        b.onreadystatechange = function () {
                            if ("loaded" == b.readyState || "complete" == b.readyState) b.onreadystatechange = null, a && a()
                        } : b.onload = function () {
                            a && a()
                        };
                    b.src = c;
                    k.body.appendChild(b)
                } catch (d) {
                }
            },
            xxzlLoadJs: function (c) {
                function a() {
                    var a = k.createElement("script");
                    a.src = c;
                    k.body.appendChild(a)
                }

                d.addEventListener ? d.addEventListener("load", a, !1) : d.attachEvent ? d.attachEvent("onload", a) : d.onload = a
            }
        }, f = {
            config: {
                trackLog: {
                    server: "tracklog.58.com/pc/empty.js.gif",
                    allParams: "site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
                    uniqParams: ["tag", "rand_id"]
                },
                listShowLog: {
                    server: "tracklog.58.com/PCv1/listshow/empty.js.gif",
                    allParams: "tag bangbangid referrer site_name info_data trackURL rand_id".split(" "),
                    uniqParams: ["tag", "info_data", "rand_id"]
                },
                listClickLog: {
                    server: "tracklog.58.com/PCv1/listclick/empty.js.gif",
                    allParams: "tag bangbangid referrer site_name info_data trackURL ClickID rand_id".split(" "),
                    uniqParams: ["tag", "info_data", "rand_id"]
                },
                clickLog: {
                    server: "tracklog.58.com/pc/click/empty.js.gif",
                    allParams: "site_name tag from trackURL ClickID bangbangid referrer rand".split(" "),
                    uniqParams: ["tag", "from", "rand"]
                },
                diaTrackLog: {
                    server: "dialog.58.com/transfer",
                    allParams: "DIATag tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
                    uniqParams: ["DIATag", "tag", "rand_id"]
                },
                diaClickLog: {
                    server: "dialog.58.com/transfer",
                    allParams: "DIATag from trackURL ClickID bangbangid referrer rand".split(" "),
                    uniqParams: ["DIATag", "from", "rand"]
                },
                diaShowLog: {
                    server: "dialog.58.com/transfer",
                    allParams: "DIATag trackURL ClickID bangbangid referrer rand".split(" "),
                    uniqParams: ["DIATag", "rand"]
                },
                gdtTrackLog: {
                    server: "gdt.cm.58.com/gdtcm",
                    allParams: ["city", "cate", "key", "plat"],
                    uniqParams: ["city", "key", "plat"]
                },
                gdtTrackLog2: {
                    server: "gdtcm.58.com/gdtcm",
                    allParams: ["city", "cate", "key", "plat"],
                    uniqParams: ["city", "key", "plat"]
                },
                actionLog: {
                    server: "tracklog.58.com/PCv1/action/empty.js.gif",
                    allParams: "site_name tag window_size action_data trackURL referrer rand_id".split(" "),
                    uniqParams: ["tag", "action_data", "rand_id"]
                }
            }, filterList: function (c) {
                var a = ".58.com.cn portal.58.com faw-vw-dasweltauto.58.com 5858.com lieche.58.com dict.58.com/xiaoqu about.58.com m.58.com/city.html lieche.m.58.com".split(" "),
                    b;
                for (b in a) if (-1 !== c.indexOf(a[b])) return "YES";
                return "NO"
            }, getBaseInfo: function () {
                var c = d.site_name || "58", a = d.encodeURIComponent(e.referrer), b = e.curURL,
                    h = e.getUUID("58tj_uuid");
                600 < a.length && (a = a.substr(0, 600));
                var l = e.getCookie("bangbangid"), s = e.window_size, g = e.navigation_type, t = e.screen_size,
                    q = d.____json4fe ? d.____json4fe : {}, f = q._trackPagetype || "", k = q._trackURL || "",
                    n = q._trackParams || [], m = q.GA_pageview || "", p = q.infoid || "", D = q.userid || "",
                    O = q.smsc || "", q = q.sid || "", x = d._trackURL || k || "NA", v = {};
                try {
                    "NA" !==
                    x && (v = "string" == typeof x ? JSON.parse(x.replace(/'/g, '"')) : x)
                } catch (T) {
                    v = {}
                }
                var f = v.pagetype || f || d.page_type || "NA", k = v.post_count || d.post_count || -1,
                    m = v.Ga_pageview || m || "", z = v.cate || "", P = "" === z ? "" : z.split(",")[0],
                    Q = "" === z && -1 === z.indexOf(",") ? "" : z.split(",")[1], H = v.area || "",
                    M = "" === H ? "" : H.split(",")[0], N = e.getGTID(f, z, H), R = v.ROI || "", v = v.teemo || "",
                    u = d._trackParams || n || [], A = [], n = "";
                if (u instanceof Array) {
                    for (var n = 0, K = u.length; n < K; n++) u[n] && u[n].I && u[n].V && "string" === typeof u[n].V && A.push(u[n].I + ":" + u[n].V.replace(/\|/g,
                        "*"));
                    n = encodeURIComponent(A.join("@@"))
                }
                var A = (u = e.curURL.match(/[\?&]iuType=[a-z]*_[0-9]*/)) ? u[0].split("=")[1].split("_") : ["", ""],
                    u = A[0], A = A[1], K = e.getCookie("als"), E = e.getCookie("utm_source"),
                    S = e.getCookie("utm_campaign"), F = e.getCookie("spm"), r, C, I;
                "" != e.getCookie("new_session") ? (r = e.getCookie("init_refer"), C = "0") : (r = d.encodeURIComponent(e.referrer), 600 <= r.length && (r = r.substr(0, 600)), C = "1");
                I = "" != e.getCookie("new_uv") ? parseInt(e.getCookie("new_uv")) + ("0" == C ? 0 : 1) : 1;
                e.setCookie("new_session", C);
                e.setCookie("new_uv", I, 365);
                var B = e.referrer.split("/")[2] || "", w = this.getValByUrl(e.curURL, "utm_source"),
                    y = this.getValByUrl(e.curURL, "spm");
                if (!e.referrer && ("NA" != w || "NA" != y)) r = "", E = "NA" === w ? "" : w, F = "NA" === y ? "" : y; else if (!e.referrer && "NA" == w && "NA" == y && "1" === C) F = E = r = ""; else if (B) {
                    var L = !1;
                    "cast.58.com" == B ? L = !0 : -1 === B.indexOf(".58.com") && -1 === B.indexOf(".5858.com") && -1 === B.indexOf(".58cdn.com.cn") && (L = !0);
                    L && (r = G.encodeURIComponent(e.referrer), 600 <= r.length && (r = r.substr(0, 600)), E = "NA" === w ? "" : w, F = "NA" ===
                    y ? "" : y)
                }
                e.setCookie("utm_source", E);
                e.setCookie("spm", F);
                e.setCookie("init_refer", r);
                var B = "1.1.1.1.1." + I, w = [], y = x.indexOf("{"), g = {
                    GTID: N,
                    infoid: p,
                    infotype: u,
                    usertype: A,
                    als: K,
                    utm_source: E,
                    utm_campaign: S,
                    spm: F,
                    new_session: C,
                    init_refer: r,
                    new_uv: I,
                    UUID: h,
                    bangbangid: l,
                    navtype: g,
                    sc: t,
                    sid: q
                }, J;
                for (J in g) g.hasOwnProperty(J) && w.push("'" + J + "':'" + g[J] + "'");
                w.join(",");
                x = "NA" !== x && -1 !== y ? x.substring(0, y + 1) + w + "," + x.substring(y + 1) : "{" + w + "}";
                return {
                    site_name: c,
                    referrer: a,
                    UUID: h,
                    bangbangid: l,
                    pagetype: f,
                    post_count: k,
                    cate: z,
                    cate1: P,
                    cate2: Q,
                    area: H,
                    area1: M,
                    city: M,
                    GTID: N,
                    ClickID: 1,
                    ROI: R,
                    curURL: b,
                    _trackParams: n,
                    userid: D,
                    smsc: O,
                    window_size: s,
                    trackURL: x,
                    Ga_pageview: m,
                    _ga_utma: B,
                    ClickIDPlus: function () {
                        this.ClickID += 1
                    },
                    teemo: v
                }
            }, getValByUrl: function (c, a) {
                var b;
                b = c.match(RegExp("[&?]" + a + "=([^&|^#]*)"));
                return b instanceof Array ? b[1] : "NA"
            }, sendLog: function (c, a) {
                var b = this.baseInfo, h = this.config[c];
                if (c && h && a && "object" === typeof a) {
                    for (var l = [], s = h.allParams, g = 0, t = s.length; g < t; g++) l.push(s[g] + "=" + (a[s[g]] || b[s[g]] || ""));
                    b = G.location.href;
                    600 < b.length && (b = b.substr(0, 600));
                    b = d.encodeURIComponent(b);
                    l.push("pageurl=" + b);
                    e.ajaxsend(e.protocol + "//" + h.server + "?" + l.join("&"))
                }
            }, trackLog: function () {
                var c = this.baseInfo;
                this.sendLog("trackLog", {tag: "pvstatall", rand_id: e.getRandom()});
                if ("list" === c.pagetype || "detail" === c.pagetype) {
                    var a = c.Ga_pageview.indexOf("?key="), a = -1 !== a ? c.Ga_pageview.substring(a + 5) : "";
                    "https:" == e.protocol ? this.sendLog("gdtTrackLog2", {
                        city: c.area,
                        key: a,
                        plat: "PC"
                    }) : this.sendLog("gdtTrackLog", {
                        city: c.area,
                        key: a, plat: "PC"
                    })
                }
            }, clickLog: function (c) {
                var a = "", a = null != c && "from=" === c.substring(0, 5) ? c.replace("from=", "") : "default&" + c;
                this.sendLog("clickLog", {tag: "pvsiters", from: a, rand: e.getRandom()});
                setTimeout("GCIDPlus()", 300)
            }, listClickLog: function () {
                var c = this, a = this.baseInfo;
                if (d.$ && "NA" !== a.pagetype && "NA" !== a.trackURL) {
                    var b = {list: 1, jianli_list: 1, xiaoqu: 1, qijiandian: 1, item: 1, xinchong: 1}, h = function () {
                        if ("function" == typeof $(this).parents) {
                            var b = "", b = $(this).parents("[logr]"), g = [], d = "", h = b.attr("logr").split("_"),
                                l = b.attr("_pos"), f = b.attr("sortid"), k = b.attr("infoproperty"),
                                m = h[h.length - 1];
                            g.push(h[0], h[1], h[2], h[3]);
                            m && (m = m.replace("ses^", "ses:"), d += m);
                            m = "";
                            m = "function" == typeof $("[logr]").index ? $("[logr]").index(b) + 1 : b.attr("pos");
                            d = d + (f ? "@sortid:" + f : "") + (m ? "@pos:" + m : "");
                            d += l ? "@npos:" + l : "";
                            d += k ? "@infoproperty:" + k : "";
                            "" != d && (0 === d.indexOf("@") && (d = d.substring(1)), g.push(d));
                            b = g.join("_");
                            "NO" == c.filterList(a.curURL) && -1 != a.curURL.indexOf(".58.com") && (g = $(this).attr("href") || "#", -1 != g.indexOf("javascript:") ||
                            "#" == g.substring(0, 1) || "NO" != c.filterList(g) || "/" != g.substring(0, 1) && -1 == g.indexOf(".58.com") || g.match(/[\?&]iuType=/) || $(this).attr("href", g.trim() + (-1 == g.indexOf("?") ? "?" : "&") + "iuType=" + h[0] + "_" + h[1]));
                            c.sendLog("listClickLog", {tag: "pclistclick", info_data: b, rand_id: e.getRandom()});
                            setTimeout("GCIDPlus()", 300)
                        }
                    }, l = $("[tongji_label=listclick]");
                    l && 0 < l.length ? $("[logr] [tongji_label=listclick]").bind("click", h) : 1 === b[a.pagetype] ? ($("[logr] a.t").bind("click", h), "12" === a.cate2 ? ($("[logr] a.jjh_img").bind("click",
                        h), $("[logr] .img a").bind("click", h)) : "187" === a.cate1 || "42270" === a.cate1 ? $("[logr]").find("a:first").bind("click", h) : "9225" === a.cate1 || "13952" === a.cate1 ? $("[logr] a.fl").bind("click", h) : $("[logr] .img a").bind("click", h)) : "chexing" === a.pagetype && ($("[logr] a.at").bind("click", h), $("[logr] .tdimg a").bind("click", h))
                }
            }, listShowLog: function () {
                var c = this.baseInfo;
                if (d.$ && "list" === c.pagetype) {
                    for (var a = [], b = $("[logr]"), c = c.trackURL.length + c.referrer.length, h = 0, l = b.length; h < l; h++) if ($(b[h]).attr("logr") &&
                        "function" == typeof $(b[h]).attr) {
                        var f = [], g = "", t = $(b[h]).attr("logr").split("_"), q = $(b[h]).attr("_pos"), k = h + 1,
                            p = $(b[h]).attr("sortid"), n = $(b[h]).attr("infoproperty"), m = t[t.length - 1];
                        f.push(t[0], t[1], t[2], t[3]);
                        m && (m = m.replace("ses^", "ses:"), g += m);
                        g += p ? "@sortid:" + p : "";
                        g += k ? "@pos:" + k : "";
                        g += q ? "@npos:" + q : "";
                        g += n ? "@infoproperty:" + n : "";
                        "" != g && (0 === g.indexOf("@") && (g = g.substring(1)), f.push(g));
                        f = f.join("_");
                        curLogrLen = f.length;
                        g = a.join(",");
                        4096 < c + curLogrLen + g.length && (this.sendLog("listShowLog", {
                            tag: "pclistshow",
                            info_data: g, rand_id: e.getRandom()
                        }), a = []);
                        a.push(f)
                    }
                    0 != a.length && this.sendLog("listShowLog", {
                        tag: "pclistshow",
                        info_data: a.join(","),
                        rand_id: e.getRandom()
                    })
                }
            }, bindTongji_tag: function () {
                if (d.$) {
                    var c = this;
                    e.bindElem("[tongji_tag]", "click", function () {
                        var a = $(this).attr("tongji_tag"), b = $(this).text().trim();
                        c.clickLog("from=" + a + "&text=" + encodeURIComponent(b) + "&tongji_type=tongji_tag")
                    }, c)
                }
            }, bindTongji_id: function () {
                if (d.$) {
                    var c = this;
                    e.bindElem("[tongji_id]", "click", function (a) {
                        var b = a.srcElement ? a.srcElement :
                            a.target;
                        "A" == b.tagName.toUpperCase() && (a = $(b).attr("href") || "#", b = $(b).text(), -1 == a.indexOf("javascript:") && "#" != a.substring(0, 1) && c.clickLog("from=" + $(this).attr("tongji_id") + "&text=" + encodeURIComponent(b) + "&to=" + encodeURIComponent(a) + "&tongji_type=tongji_id"))
                    }, c)
                }
            }, diaShowLog: function (c) {
            }, bindAlsTag: function () {
                if (!e.getCookie("als") && d.$ && "function" === typeof $("body").one) $("body").one("mouseover", function () {
                    e.setCookie("als", "0", 365)
                });
                e.getCookie("isSpider") && e.setCookie("isSpider", "", 0)
            },
            bindHomeHeatMap: function () {
                var c = this, a = this.baseInfo;
                d.$ && "home" === a.pagetype && e.bindElem("[href]", "click", function (a) {
                    var d = $(this).attr("href"), e = $(this).text().trim(), f = $(this).attr("tongji_tag") || "NA",
                        g = $(this).offset().top, t = $(this).offset().left, k = a.pageX;
                    a = a.pageY;
                    c.clickLog("from=heatmap:" + encodeURIComponent(d) + "&tagX=" + t + "&tagY=" + g + "&mouseX=" + k + "&mouseY=" + a + "&text=" + encodeURIComponent(e) + "&tongji_tag=" + f)
                }, c)
            }, insertMiGuan: function () {
                try {
                    var c = "default";
                    switch (this.baseInfo.cate1) {
                        case "9224":
                        case "9225":
                        case "13941":
                        case "13952":
                            c =
                                "yewu";
                            break;
                        case "1":
                            c = "ershoufang";
                            break;
                        case "5":
                            c = "shouji";
                            break;
                        case "832":
                            c = "dog";
                            break;
                        case "4":
                            c = "ershouche";
                            break;
                        default:
                            c = "shenghuo"
                    }
                    var a = Math.ceil(1E14 * Math.random()), b = document.getElementsByTagName("body")[0],
                        d = document.createElement("div");
                    d.id = "addInfo";
                    d.style.display = "none";
                    var f = document.createElement("a");
                    f.href = e.protocol + "//tracklog.58.com/detail/pc/" + c + "/" + a + "x.shtml";
                    f.text = "\u63a8\u8350\u4fe1\u606f";
                    d.appendChild(f);
                    b.appendChild(d)
                } catch (k) {
                }
            }, bindAddGTIDtoURL: function () {
                var c =
                    this, a = this.baseInfo;
                d.$ && e.bindElem("a", "click", function (b) {
                    if ("NO" == c.filterList(a.curURL) && -1 != a.curURL.indexOf(".58.com") && (b = $(this).attr("href") || "#", -1 == b.indexOf("javascript:") && "#" != b.substring(0, 1) && "NO" == c.filterList(b) && ("/" == b.substring(0, 1) || -1 != b.indexOf(".58.com")))) if (b.match(/[\?&]ClickID=\d*/)) $(this).attr("href", b.replace(/ClickID=\d*/, "ClickID=" + a.ClickID)); else {
                        var d = b.indexOf("?");
                        -1 != d && -1 != b.substring(d).indexOf("statmark=t") && -1 != b.substring(d).indexOf("#") ? (d = b.indexOf("statmark=t"),
                            $(this).attr("href", b.substring(0, d + 10) + "&PGTID=" + a.GTID + "&ClickID=" + a.ClickID + b.substring(d + 10))) : $(this).attr("href", b.trim() + (-1 == d ? "?" : "&") + "PGTID=" + a.GTID + "&ClickID=" + a.ClickID)
                    }
                }, c, a)
            }, ActionObj: {data: []}, actionFilter: function () {
                pagetypeArr = "home index list special jianli_index jianli_list reg PC_regist_sj".split(" ");
                var c = this.baseInfo, a = !1, b;
                for (b in pagetypeArr) if (c.pagetype == pagetypeArr[b]) {
                    a = !0;
                    break
                }
                return a ? !0 : !1
            }, actionLog: function () {
                var c = this;
                c.actionFilter() && (e.bindElem("body",
                    "click", function (a) {
                        var b = c.ActionObj.data, h = k.body.scrollWidth || "", l = k.body.scrollHeight || "";
                        a = a || d.event;
                        var s = k.documentElement.scrollLeft || k.body.scrollLeft,
                            g = k.documentElement.scrollTop || k.body.scrollTop, s = a.pageX || a.clientX + s || "-1";
                        a = a.pageY || a.clientY + g || "-1";
                        s = Math.floor(s);
                        a = Math.floor(a);
                        b.push("CLICK_" + h + "_" + l + "_" + s + "_" + a);
                        b instanceof Array && 5 <= b.length && (b = b.join(","), f.ActionObj.data = [], c.sendLog("actionLog", {
                            tag: "pcaction",
                            action_data: b,
                            rand_id: e.getRandom()
                        }))
                    }), d.$ && $(d).unload(function () {
                    var a =
                        c.ActionObj;
                    (a = a ? a.data : "") && a instanceof Array && 0 < a.length && (a = a.join(","), f.ActionObj.data = [], c.sendLog("actionLog", {
                        tag: "pcaction",
                        action_data: a,
                        rand_id: e.getRandom()
                    }))
                }))
            }, performanceLog: function () {
                var c = this.baseInfo, a = !1, b = "home index list special post detail".split(" "), e;
                for (e in b) if (c.pagetype == b[e]) {
                    a = !0;
                    break
                }
                a && d.$ && d.performance && d.performance.timing && $(function () {
                    function a(c, b, d) {
                        return "number" === typeof c && "number" === typeof b ? (c -= b, c = Math.floor(0 > c ? -1 : c), -1 == c && d ? d : c) : -1
                    }

                    function c(b) {
                        var e =
                            d.performance.timing, e = {
                            loadPage: 0 == e.navigationStart ? a(e.loadEventEnd, e.fetchStart, b) : a(e.loadEventEnd, e.navigationStart, b),
                            domReady: a(e.domComplete, e.responseEnd, b),
                            redirect: a(e.redirectEnd, e.redirectStart, b),
                            lookupDomain: a(e.domainLookupEnd, e.domainLookupStart, b),
                            ttfb: 0 == e.navigationStart ? a(e.responseStart, e.fetchStart, b) : a(e.responseStart, e.navigationStart, b),
                            request: a(e.responseEnd, e.requestStart, b),
                            loadEvent: a(e.loadEventEnd, e.loadEventStart, b),
                            appcache: a(e.domainLookupStart, e.fetchStart, b),
                            unloadEvent: a(e.unloadEventEnd, e.unloadEventStart, b),
                            connect: a(e.connectEnd, e.connectStart, b),
                            DOMContentLoaded: a(e.domContentLoadedEventEnd, e.fetchStart, b)
                        };
                        b = [];
                        for (var f in e) e.hasOwnProperty(f) && b.push("'" + f + "':'" + e[f] + "'");
                        b.join(",");
                        f = getTrackURL();
                        e = f.indexOf("{");
                        f = "NA" !== f && -1 !== e ? f.substring(0, e + 1) + b + "," + f.substring(e + 1) : "{" + b + "}";
                        b = [];
                        b.push("site_name=58");
                        b.push("tag=performance");
                        b.push("referrer=" + G.encodeURIComponent(document.referrer));
                        b.push("trackURL=" + f);
                        b.push("rand_id=" + d.Math.random());
                        b = p.protocol + "//tracklog.58.com/PCv1/performance/empty.js.gif?" + b.join("&");
                        (new Image).src = b;
                        d.TJ58Obj.send = !0;
                        clearInterval(d.TJ58Obj.PFORMINTERVAL)
                    }

                    d.TJ58Obj.PFORMCOUNT = -1;
                    d.TJ58Obj.send = !1;
                    $(d).unload(function () {
                        d.TJ58Obj.send || c("close_" + Math.floor(d.performance.now()))
                    });
                    d.TJ58Obj.PFORMINTERVAL = setInterval(function () {
                            d.TJ58Obj.PFORMCOUNT++;
                            6 < d.TJ58Obj.PFORMCOUNT && clearInterval(d.TJ58Obj.PFORMINTERVAL);
                            try {
                                0 < d.performance.timing.loadEventEnd ? c() : 6 <= d.TJ58Obj.PFORMCOUNT && c("TIMEOUT_" + Math.floor(d.performance.now()))
                            } catch (a) {
                                clearInterval(d.TJ58Obj.PFORMINTERVAL)
                            }
                        },
                        500)
                })
            }, DMloadByTag: function () {
                try {
                    var c = this.getValByUrl(e.curURL, "dm-statistic-detect"), a = e.getCookie("dm-statistic-detect");
                    if (c = ("NA" == c ? "" : c) || a || "") if (d.TJ58ecdata = {}, d.TJ58ecdata.platform = "58PC", "https:" != p.protocol) switch (c) {
                        case "2":
                            e.loadScript(p.protocol + "//stat.58corp.com/static/js/referrer_alert.js");
                            break;
                        case "3":
                            e.loadScript(p.protocol + "//stat.58corp.com/static/js/referrer_visual.js")
                    }
                } catch (b) {
                }
            }, xxzlLoadFn: function () {
                try {
                    if ("t" == this.baseInfo.teemo) {
                        var c = (new Date).getTime();
                        e.xxzlLoadJs(p.protocol +
                            "//j1.58cdn.com.cn/git/xxzl/teemo/teemo_init.js?dt=" + c + "&appkey=16c5ada45e84f37e6pc")
                    }
                } catch (a) {
                }
            }
        };
        f.baseInfo = f.getBaseInfo();
        f.trackLog();
        f.listShowLog();
        f.listClickLog();
        f.bindAlsTag();
        f.bindTongji_tag();
        f.bindTongji_id();
        f.bindHomeHeatMap();
        f.bindAddGTIDtoURL();
        f.insertMiGuan();
        f.actionLog();
        d.clickLog = function (c) {
            f.clickLog(c)
        };
        d.showLog = function (c) {
            f.diaShowLog(c)
        };
        d.GCIDPlus = function () {
            f.baseInfo.ClickIDPlus()
        };
        d.ajaxlogr = function (c) {
        };
        d.getGTID = function () {
            return f.baseInfo.GTID
        };
        d.getTrackURL =
            function () {
                return f.baseInfo.trackURL
            };
        d._gaq = d._gaq || [];
        f.performanceLog();
        f.xxzlLoadFn();
        f.DMloadByTag()
    }
})(window);
