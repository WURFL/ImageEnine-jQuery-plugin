/// <reference path="~/Content/Scripts/jquery-1.10.2.min.js" />


if (!jQuery)
    throw new Error("The ImageEngine plugin requires jQuery");

// =========================================================
// Implementation
(function ($) {
    
    $.fn.imageEngine = function (options) {

        var settings = $.extend({
            accountType: "lite",
            addBootstrapResponsive: true,
            debug: false,
            account: "",
            width: "",
            height: "",
            percentage: "",
            mode: "",
            transparencyColor: "",
            format:""
        }, options);

        this.filter("img").each(function () {
            var computedUrl = "//try.ite.imgeng.in/";
            var img = $(this);
            
            // =========================================================
            // Turn the IMG source into an absolute URL
            var absoluteUrl = img.attr("src");
            var r = new RegExp('^(?:[a-z]+:)?//', 'i');
            if (!r.test(absoluteUrl)) {
                absoluteUrl = window.location.origin + absoluteUrl;
            }

            // =========================================================
            // Manage WIT settings

            // Fix account reference
            if (settings.account) {
                if (accountType === "lite") {
                    computedUrl = "//" + settings.account + ".lite.imgeng.in/";
                }else{
                    computedUrl = "//" + settings.account + ".imgeng.in/";
                }
            }

            // width-height || percentage
            if (settings.width || settings.height) {
                if (settings.width) {
                    computedUrl += "w_" + settings.width + "/";
                }
                if (settings.height) {
                    computedUrl += "h_" + settings.height + "/";
                }
            } else {
                if (settings.percentage) {
                    computedUrl += "pc_" + settings.percentage + "/";
                }
            }

            // fit mode
            if (settings.mode) {
                computedUrl += "m_" + settings.mode;
                if (settings.mode === "letterbox" && settings.transparencyColor) {
                    computedUrl += "_" + settings.transparencyColor;
                }
                computedUrl += "/";
            }

            // image format
            if (settings.format) {
                computedUrl += "f_" + settings.format + "/";
            }

            // =========================================================
            // Core work
            computedUrl += absoluteUrl;
            img.attr("src", computedUrl);

            // =========================================================
            // Further configuration
            if (settings.addBootstrapResponsive) {
                img.addClass("img-responsive");
            }
            if (settings.debug) {
                img.attr("alt", computedUrl);
                img.attr("title", computedUrl);
            }
        });
        return this;
    };
}(jQuery));