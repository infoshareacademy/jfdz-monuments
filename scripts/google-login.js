/**
 * Created by halina on 04.04.16.
 */

function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();

    localStorage.setItem("name", profile.getName());

    (function () {
        if (!localStorage.justOnce) {
            localStorage.setItem("justOnce", "true");
            window.location.reload();
        }
    }());
    var id_token = googleUser.getAuthResponse().id_token;

}
