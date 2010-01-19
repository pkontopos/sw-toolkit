/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(st.demo/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "st"
 */
qx.Class.define("st.demo.Application", {
  extend  : qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members : {
    main       : function() {
      qx.Theme.include(st.theme.blue.Appearance, st.theme.Appearance);
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Variant.isSet("qx.debug", "on")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle
        // visibility
        qx.log.appender.Console;
      }
      var form = st.Utils.createForm();
      this.getRoot().add(form);

      var gallery = new st.widget.HtmlGallery("Gallery (HTML -divs)");
      gallery.set({
        width  : 100,
        height : 100
      })
      this.getRoot().add(gallery, {
        left : 600,
        top  : 200
      });

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
      // 1
      {
        var map1 = new st.widget.Map();
        var win1 = this._createWin("st.widget.Map", map1);
        win1.addListener("move", function(e) {
          map1.update();
        });
        win1.moveTo(10, 510);
        win1.open();
      }
      // 2
      {
        var tree = new st.widget.Tree();

        var win = this._createWin("st.widget.Tree", tree, 250, 300);
        win.moveTo(230, 510);
        win.open();
      }
      // 3
      {
        var fileManager = new st.widget.FileManager();
        var win = this._createWin("st.widget.FileManager", fileManager, 400,
        300);
        win.moveTo(610, 10);
        win.open();
      }
    },
    _createWin : function(name, widget, w, h) {
      if (!w) {
        w = 200;
        h = 200;
      }
      var win1 = new qx.ui.window.Window(name).set({
        width          : w,
        height         : h,
        showClose      : false,
        showMinimize   : false,
        contentPadding : 0,
        layout         : new qx.ui.layout.Dock()
      });
      win1.add(widget, {
        edge : "center"
      });
      return win1;
    }

  }
});
