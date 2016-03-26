System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User, Track;
    function getServiceUri() {
        var url = "http://api.soundcloud.com/users/67393202/tracks.json?client_id=0be8085a39603d77fbf672a62a7929ea";
        return url;
    }
    exports_1("getServiceUri", getServiceUri);
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_1("User", User);
            Track = (function () {
                function Track() {
                }
                return Track;
            }());
            exports_1("Track", Track);
        }
    }
});
