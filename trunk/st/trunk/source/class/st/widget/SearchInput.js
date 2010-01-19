/* ************************************************************************

   Copyright:

   License:

   Authors: Shen zhijie

************************************************************************ */

/* ************************************************************************

#asset(shen/*)
#asset(crystal/*)
************************************************************************ */
qx.Class.define("st.widget.SearchInput", {
  extend     : qx.ui.core.Widget,
  construct  : function(value) {
    this.base(arguments, value);
    this._setLayout(new qx.ui.layout.HBox());
    this._add(this._createChildControl('textField'), {
      flex : 1
    });
    this._add(this._createChildControl('icon'), {
      flex : 0
    });

  },
  properties : {
    appearance : {
      refine : true,
      init   : "sSearchInput"
    },
    value      : {
      nullable : true,
      apply    : "_applyValue",
      init     : "",
      event    : "changeValue"
    }
  },
  members    : {
    _applyValue             : function(value) {

    },
    _createChildControlImpl : function(id) {
      var control;
      switch (id) {
        case "textField" :
          control = new qx.ui.form.TextField().set({
            decorator : null,
            margin    : 0,
            padding   : 0
          });
          break;
        case "icon" :
          control = new qx.ui.basic.Image("st/icon/crystal/16x16/apps/search.png").set(
          {
            decorator : null,
            margin    : 0,
            padding   : 0
          });
          break;
      }
      return control || this.base(arguments, id);
    }
  },
  destruct   : function() {
    // this._disposeObjects("view");
  }
});