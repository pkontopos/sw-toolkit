/* ************************************************************************

   Copyright:

   License:

   Authors: Shen zhijie

************************************************************************ */

/* ************************************************************************

#asset(qx/icon/Oxygen/16/actions/folder-new.png) 
#asset(st/icon/catalog/*)
************************************************************************ */
qx.Class.define("st.widget.FileManager", {
  extend     : qx.ui.core.Widget,
  properties : {
    appearance : {
      refine : true,
      init   : "sFileManager"
    },
    value      : {
      // check : "this._checkValue(value)",
      nullable : true,
      apply    : "_applyValue",
      init     : "",
      event    : "changeValue"
    }
  },
  construct  : function(model) {
    this.base(arguments);
    this.model = model;
    this._setLayout(new qx.ui.layout.Grow());
    this._add(this._createChildControl('main'));

  },
  members    : { 
    model                   : null,
    _createChildControlImpl : function(id) {
      var control;
      switch (id) {
        case "main" :
          control = new qx.ui.container.Composite();
          control.setLayout(new qx.ui.layout.Dock());
          control.add(this._createChildControl("toolbar"), {
            edge : "north"
          });
          control.add(this._createChildControl("info"), {
            edge : "south"
          });
          var splitPane = new qx.ui.splitpane.Pane("horizontal");
          splitPane.add(this._createChildControl("tree"), 1);
          splitPane.add(this._createChildControl("list"), 2);
          control.add(splitPane, {
            edge : "center"
          });
          break;
        case "content" :

        case "tree" :
          control = new st.widget.Tree();
          control.setDecorator(null);
          break;
        case "list" :
          //container.previous
          control = new qx.ui.container.Stack();
          var table = st.Utils.createDummyTable();
          control.add(table);
          var gallery = new st.widget.HtmlGallery();
          control.add(gallery);
          this.__list = control;
          break;
        case "toolbar" :
          control = this.__getToolbar();
          break;
        case "info" :
          control = new qx.ui.basic.Label("information").set({
            rich : true
          });
          break;
      }
      return control || this.base(arguments, id);
    },

    __getToolbar            : function() {
      var toolbar = new qx.ui.toolbar.ToolBar();
      var newFolderBtn = new qx.ui.toolbar.Button("NewFolder", 
      "qx/icon/Oxygen/16/actions/folder-new.png").set({});

      var part1 = new qx.ui.toolbar.Part;
      part1.add(newFolderBtn);
      toolbar.add(part1);
      toolbar.addSpacer();
      toolbar.add(this.getSplitButton());
      var searchInput = new st.widget.SearchInput("search").set({
        margin : 6,
        width  : 200
      });
      toolbar.add(searchInput);

      return toolbar;
    },
    getSplitButton          : function() {
      var menu = new qx.ui.menu.Menu;
      var site0 = new qx.ui.menu.Button("Icons",
      "st/icon/catalog/icon.png");
      var site1 = new qx.ui.menu.Button("Tiles",
      "st/icon/catalog/tile.png");
      var site2 = new qx.ui.menu.Button("Details",
      "st/icon/catalog/list.png");
      menu.setMinWidth(120);
      var debugButton = function() { 
          this.__list.next();
      } 
      site1.addListener("execute", debugButton,this);
      site2.addListener("execute", debugButton,this); 
      menu.add(site0);
      menu.add(site1);
      menu.add(site2);

      // Create opener button
      var button = new qx.ui.toolbar.SplitButton("",
      "st/icon/catalog/icon.png", menu);
      button.addListener("execute", debugButton,this);
      var basicPart = new qx.ui.toolbar.Part;
      basicPart.add(button);
      basicPart.setShow("icon");
      return basicPart;
    }

  }
});
