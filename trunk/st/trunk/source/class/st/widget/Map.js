/* ************************************************************************

   Copyright:

   License:

   Authors: Shen zhijie

************************************************************************ */

/* ************************************************************************

#asset(shen/*)
************************************************************************ */
qx.Class.define("st.widget.Map", {
  extend     : qx.ui.core.Widget,
  properties : {
    appearance : {
      refine : true,
      init   : "sMap"
    }
  },
  construct  : function(id) {
    this.base(arguments);
    this._setLayout(new qx.ui.layout.Grow()); 
    if (id) {
      this.__id = id;
    } else {
      this.__id = this.__createId();
    }
    this.__map = null;
    this._createChildControl("map_view");
    this.addListener("appear", this._onAppear, this);
  },
  members    : {
    __map                   : null,
    __id                    : null,
    view                    : null,
    update                  : function() {
      if (this.__map) {
        this.__map.updateSize();
      }
    },
    _createChildControlImpl : function(id) {
      var control;
      switch (id) {
        case "map_view" :
          control = new qx.ui.core.Widget();
          this.view = control;
          this._add(control);
          break;
      }
      return control || this.base(arguments, id);
    },
    __createId              : function() {
      var index = 0;
      while (true) {
        var id = "openLayerMap" + index;
        var headers = qx.bom.Collection.query("#" + id);
        if (headers.length == 0) {
          return id;
        }
        index++;
      }
    },
    _onAppear               : function(e) {
      if (this.__map == null) {
        var el = this.view.getContentElement();
        qx.bom.element.Attribute.set(el, "id", this.__id);
        qx.html.Element.flush();
        this.__map = new OpenLayers.Map(this.__id, {
          'maxResolution' : 1.40625 / 2
        });
        var ol_wms = new OpenLayers.Layer.WMS("World Map",
        "http://labs.metacarta.com/wms-c/Basic.py?", {
          layers : 'basic',
          format : 'image/png'
        });
        this.__map.addLayers([ol_wms]);
        this.__map.addControl(new OpenLayers.Control.LayerSwitcher());
        this.__map.zoomToMaxExtent();
      }
    }
  }
});
