
/* ************************************************************************

#asset(st/*)
************************************************************************ */
qx.Class.define("st.widget.HtmlGallery", {
  extend    : st.widget.AbstractGallery,

  construct : function(title) {
    this.base(arguments, title);

    var fontStyles = qx.theme.manager.Font.getInstance().resolve("default")
    .getStyles();
    this._fontCss = qx.bom.element.Style.compile(fontStyles);
  },

  members   : {
    _createScroller   : function() {
      var scroller = new qx.ui.virtual.core.Scroller(1, this.itemPerLine,
      this.itemHeight, this.itemWidth);
      this.layer = new qx.ui.virtual.layer.HtmlCell(this);
      scroller.getPane().addLayer(this.layer);

      var lines = new qx.ui.virtual.layer.GridLines("horizontal", "#f3f3f3");
      scroller.getPane().addLayer(lines);

      var lines = new qx.ui.virtual.layer.GridLines("vertical", "#f3f3f3");
      scroller.getPane().addLayer(lines);

      return scroller;
    },

    _onPaneResize     : function(e) {
      this.base(arguments, e);
      this.manager.clearSelection();
    },

    styleSelectable   : function(item, type, wasAdded) {
      this.layer.updateLayerData();
    },

    getCellProperties : function(row, column) {
      var itemData = this.getItemData(row, column);

      if (!itemData) {
        return "";
      }

      var isSelected = this.manager.isItemSelected({
        row    : row,
        column : column
      });
      var color = isSelected ? "color: white; background-color: #00398D;" : "";

      return {
        style   : ["position: absolute;", "text-align: center;", this._fontCss,
        color].join(""),

        content : ["<img src='", itemData.resolvedIcon, "'></img>", "<br>",
        itemData.label].join("")
      };
    }
  },

  /*
   *****************************************************************************
      DESTRUCT
   *****************************************************************************
   */

  destruct  : function() {
    this._disposeObjects("layer");
  }
});
