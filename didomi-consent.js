/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/max-params */
(function () {
  function r(e) {
    if (!window.frames[e]) {
      if (document.body && document.body.firstChild) {
        var t = document.body;
        var n = document.createElement("iframe");
        n.style.display = "none";
        n.name = e;
        n.title = e;
        t.insertBefore(n, t.firstChild);
      } else {
        setTimeout(function () {
          r(e);
        }, 5);
      }
    }
  }
  function e(n, a, o, c, d) {
    function e(e, t, n, r) {
      if (typeof n !== "function") {
        return;
      }
      if (!window[a]) {
        window[a] = [];
      }
      var i = false;
      if (d) {
        i = d(e, r, n);
      }
      if (!i) {
        window[a].push({
          command: e,
          version: t,
          callback: n,
          parameter: r,
        });
      }
    }
    e.stub = true;
    e.stubVersion = 2;
    function t(r) {
      if (!window[n] || window[n].stub !== true) {
        return;
      }
      if (!r.data) {
        return;
      }
      var i = typeof r.data === "string";
      var e;
      try {
        e = i ? JSON.parse(r.data) : r.data;
      } catch (t) {
        return;
      }
      if (e[o]) {
        var a = e[o];
        window[n](
          a.command,
          a.version,
          function (e, t) {
            var n = {};
            n[c] = { returnValue: e, success: t, callId: a.callId };
            if (r.source) {
              r.source.postMessage(i ? JSON.stringify(n) : n, "*");
            }
          },
          a.parameter,
        );
      }
    }
    if (typeof window[n] !== "function") {
      window[n] = e;
      if (window.addEventListener) {
        window.addEventListener("message", t, false);
      } else {
        window.attachEvent("onmessage", t);
      }
    }
  }
  e("__tcfapi", "__tcfapiBuffer", "__tcfapiCall", "__tcfapiReturn");
  r("__tcfapiLocator");
  (function (e, t) {
    var n = document.createElement("link");
    n.rel = "preconnect";
    n.as = "script";
    var r = document.createElement("link");
    r.rel = "dns-prefetch";
    r.as = "script";
    var i = document.createElement("script");
    i.id = "spcloader";
    i.type = "text/javascript";
    i["async"] = true;
    i.charset = "utf-8";
    var a =
      "https://sdk.privacy-center.org/" +
      e +
      "/loader.js?platform=ctv&target_type=notice&target=" +
      t;
    if (window.didomiConfig && window.didomiConfig.user) {
      var o = window.didomiConfig.user;
      var c = o.country;
      var d = o.region;
      if (c) {
        a = a + "&country=" + c;
        if (d) {
          a = a + "&region=" + d;
        }
      }
    }
    n.href = "https://sdk.privacy-center.org/";
    r.href = "https://sdk.privacy-center.org/";
    i.src = a;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(n, s);
    s.parentNode.insertBefore(r, s);
    s.parentNode.insertBefore(i, s);
  })("0ad08901-fea3-47ac-9ee9-757368300b5d", "LH9HDHUL");
})();
