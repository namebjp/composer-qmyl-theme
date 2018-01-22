/**
 * Created by bianjunping on 2018/1/12.
 */
;
(function ($, window, document, undefined) {

    var pluginName = "metisMenu",
        defaults = {
            toggle: true
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {

            var $this = $(this.element),
                $toggle = this.settings.toggle;
            $this
                .find('li')
                .has('ul')
                .children('a')
                .on('click', function (e) {
                    //e.preventDefault();
                    $(this)
                        .parent('li')
                        .toggleClass('active')
                        .has('ul')
                        .children('ul')
                        .collapse('toggle');
                    if ($toggle) {
                        $(this)
                            .parent('li')
                            .siblings()
                            .removeClass('active')
                            .has('ul.in')
                            .children('ul.in')
                            .collapse('hide');
                    }
                });
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {

            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);