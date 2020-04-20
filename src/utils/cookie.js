let Cookie = (function() {
  const _p =
    "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+-=`~";
  const _l = _p.length;
  const _KEY = process.env.VUE_APP_AUTH_COOKIE || "__gAffT0k3n";
  // const _TOKEN = process.env.VUE_APP_AUTH_TOKEN;
  /**
   * ID randomizer
   */
  function randomID() {
    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function(c) {
        let r = (Math.random() * _l) | 0;
        let v = c == "x" ? _p[r] : c;
        return v;
      }
    );
  }

  /**
   * Function to set a cookie
   * @param {String} cname Cookie name
   * @param {String} cvalue Cookie value
   * @param {Number<Integer>} exp Exist time by seconds
   */
  function _setCookie(cname, cvalue, exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /**
   * Function to get a cookie
   * @param {String} cname Cookie name
   */
  function _getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  function _removeCookie(cname) {
    // var d = new Date(0);
    // document.cookie = `${cname}=;${d};path=/`;
    _setCookie(cname, "", -99);
  }

  /**
   * Reset authenticate cookie time
   */
  function _resetAuth() {
    let c = _getCookie(_KEY);
    if (c) {
      _setCookie(_KEY, c, 1);
    }
  }

  return {
    get: _getCookie,
    set: _setCookie,
    id: randomID,
    key: _KEY,
    remove: _removeCookie,
    resetAuth: _resetAuth
  };
})();

export default Cookie;
