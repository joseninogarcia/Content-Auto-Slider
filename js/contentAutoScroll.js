/*
    Plugin Name: Content Auto Scroll
    Date Created: 1-31-2015
    Developer: Jose Nino N. Garcia
    Version: 1.5
    Description:
        This plugin is use for presenting the tables, contents, images and scrolling automatically. 
        You can use this for presentation layer, once you load all of the data into you your
        <div> you need to set it the div to scroll. By initiating the plugin, you were able 
        to load the content scrolling upward whatever content you placed inside your container.
*/

(function ($) {

    //Build plugin
    $.fn.contentAutoScroll = function (options) {
        
        //Define the options that need for the extension
        var settings = $.extend({
            interval: 10,
            insideClass: "leftBoxTable"
        }, options);

        //Define all variables
        var tbl_id = this;
        var tbl_inside = $(".leftBoxTable");
        var tbl_in_height = tbl_inside.height();
        var i = 0;
        var runScroller = null;

        StartScrolling();

        //Build StartScrolling() Function
        function StartScrolling() {
            runScroller = setInterval(function() {
                if ((i++) == tbl_in_height) {
                    i = 0;
                }
                tbl_id.scrollTop(i);
            }, settings.interval);
        }

        this.mouseenter(function () {
            clearInterval(runScroller);
        });

        this.mouseleave(function () {
            StartScrolling();
        });

        return this;
    };
}(jQuery));