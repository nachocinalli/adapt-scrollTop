define([
    "coreJS/adapt"
], function (Adapt) {
    var ScrollTop = Backbone.View.extend({
        events: {
            'click button.scrollTop': 'gotoTop'
        },
        initialize: function () {
            this.setLayout();
        },
        setLayout: function () {
            var template = Handlebars.templates['scrollTop'];

            this.$el.prepend(template());
            var self = this;
            $(window).bind('scroll', function (ev) {
                self.show();
            });
        },

        show: function () {
            if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
                this.$el.find('.scrollTop').show()
            } else {
                this.$el.find('.scrollTop').hide()
            }

        },
        gotoTop: function () {
                
            Adapt.scrollTo('#wrapper', { duration: 500 })
        }
    })
    function init(view) {

        var _scrollTop = view.model.get("_scrollTop");

        if (_scrollTop && _scrollTop._isEnabled) {
            new ScrollTop({ model: view.model, el: view.$el });

        }
    }

    Adapt
        .on('pageView:postRender', init)

});
