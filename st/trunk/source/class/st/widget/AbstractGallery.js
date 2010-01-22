

/* ************************************************************************

#asset(qx/icon/Oxygen/32/apps/*)
************************************************************************ */

qx.Class.define("st.widget.AbstractGallery", {
  extend    : qx.ui.core.Widget,
  type      : "abstract",

  construct : function(title) {
    this.base(arguments, title);
    this._setLayout(new qx.ui.layout.Grow());

    this.itemHeight = 60;
    this.itemWidth = 60;
    this.itemCount = 20;
    this.itemPerLine = 1;
    this.items = this._generateItems(this.itemCount);

    var scroller = this._createScroller();
    scroller.set({
      scrollbarX : "off",
      scrollbarY : "auto"
    });
    scroller.getPane().addListener("resize", this._onPaneResize, this);
    this._add(scroller);

    this.manager = new qx.ui.virtual.selection.CellRectangle(
    scroller.getPane(), this).set({
      mode : "multi",
      drag : true
    });
    this.manager.attachMouseEvents();
    this.manager.attachKeyEvents(scroller);
  },

  members   : {
    getItemData      : function(row, column) {
      return this.items[row * this.itemPerLine + column];
    },

    _createScroller  : function() {
      // abstract method
    },

    isItemSelectable : function(item) {
      return !!this.getItemData(item.row, item.column)
    },

    styleSelectable  : function(item, type, wasAdded) {
      // abstract method
    },

    _onPaneResize    : function(e) {
      var pane = e.getTarget();
      var width = e.getData().width;

      var colCount = Math.floor(width / this.itemWidth);
      if (colCount == this.itemsPerLine) {
        return;
      }
      this.itemPerLine = colCount;
      var rowCount = Math.ceil(this.itemCount / colCount);

      pane.getColumnConfig().setItemCount(colCount);
      pane.getRowConfig().setItemCount(rowCount);
    },

    _generateItems   : function(count) {
      var items = [];
      var iconImages = ["internet-feed-reader.png", "internet-mail.png",
      "office-web.png", "office-writer.png", "utilities-keyring.png"];

      var aliasManager = qx.util.AliasManager.getInstance();
      var resourceManager = qx.util.ResourceManager.getInstance();

      for (var i = 0; i < count; i++) {
        var icon = "qx/icon/Oxygen/32/apps/"
        + iconImages[Math.floor(Math.random() * iconImages.length)];
        var resolved = aliasManager.resolve(icon);
        var url = resourceManager.toUri(resolved);

        items[i] = {
          label        : "Icon #" + (i + 1),
          icon         : icon,
          resolvedIcon : url
        };
      }

      return items;
    }
  },

  destruct  : function() {
    this.items = null;
    this._disposeObjects("manager");
  }
});
