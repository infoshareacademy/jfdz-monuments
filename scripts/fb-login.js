/**
 * Created by halina on 04.04.16.
 */

function statusChangeCallback(response) {
    if (response.status === 'connected') {

        testAPI();
    } else if (response.status === 'not_authorized') {

    } else {

    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '183202345374099',
        cookie: true,

        xfbml: true,
        version: 'v2.2'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};


(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = 183202345374099;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {

    FB.api('/me', function (response) {

        localStorage.setItem("name", response.name);

        (function () {
            if (!localStorage.justOnce) {
                localStorage.setItem("justOnce", "true");
                window.location.reload();
            }
        }());

    });
}
/**
 * Created by tomekn on 29.01.16.
 */
