define(["marionette",
        "handlebars",
        "views/mapbox",
        "views/store-detail",
        "text!../../templates/map-page.html"],
    function (Marionette, Handlebars, MapboxView, StoreDetail, MapPageTemplate) {
        'use strict';
        var MapLayout = Marionette.LayoutView.extend({
            regions: {
                mapboxRegion: ".map",
                leftPanelRegion: "#detail-container"
            },
            initialize: function (opts) {
                _.extend(this, opts);
                this.opts = opts;
                Marionette.LayoutView.prototype.initialize.call(this);
                this.listenTo(this.app.vent, 'load-panel', this.loadStorePanel);
                this.listenTo(this.app.vent, 'zoom-to-extents', this.hideStorePanel);
            },
            template: function () {
                return Handlebars.compile(MapPageTemplate);
            },
            onShow: function () {
                this.mapboxView = new MapboxView(this.opts);
                this.mapboxRegion.show(this.mapboxView);
            },
            loadStorePanel: function (id, isFullScreen) {
                var model = this.opts.collection.get(id);
                this.storeView = new StoreDetail({
                    model: model,
                    isFullScreen: isFullScreen,
                    app: this.app
                });
                this.leftPanelRegion.show(this.storeView);
                if (this.app.isMobile()) {
                    $('#map').css({
                        "height": "calc(100vh - 188px)"
                    });
                } else {
                    $('#map').css({
                        "height": "100vh"
                    });
                }
                this.leftPanelRegion.$el.show();
                if (isFullScreen) {
                    this.mapboxRegion.$el.hide();
                } else {
                    this.mapboxRegion.$el.show();
                }
                if (model.get("extras")) {
                    this.$el.find("#city-name").html(model.get("extras").city);
                } else {
                    this.$el.find("#city-name").html("PLEASE POPULATE EXTRAS");
                }
            },
            hideStorePanel: function () {
                if (this.leftPanelRegion.$el) {
                    this.leftPanelRegion.$el.hide();
                }
                this.$el.find("#city-name").html("#5DOLLARCHALLENGE");
                this.mapboxRegion.$el.show();
            }
        });
        return MapLayout;
    });