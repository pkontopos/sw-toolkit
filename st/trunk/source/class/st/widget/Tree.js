/* ************************************************************************

   Copyright:

   License:

   Authors: Shen zhijie

************************************************************************ */




/* ************************************************************************ 
#asset(qx/icon/Oxygen/22/places/folder.png)
#asset(qx/icon/Oxygen/22/places/folder-open.png)
#asset(qx/icon/Oxygen/22/places/user-home.png)
#asset(qx/icon/Oxygen/22/actions/*)
************************************************************************ */
qx.Class.define("st.widget.Tree", {
  extend     : qx.ui.core.Widget,
  construct  : function(value) {
    this.base(arguments, value);
    this._setLayout(new qx.ui.layout.Grow());
    this._add(this._createChildControl('tree'));
    if (!value) {
      value = this.__getSampleData();
    }
    this.setValue(value);
  },
  properties : {
    appearance : {
      refine : true,
      init   : "sTree"
    },
    value      : {
      nullable : true,
      apply    : "_applyValue",
      event    : "changeValue"
    }
  },
  members    : {
    __tree                  : null,
    __root                  : null,
    __menu                  : null,
    _applyValue             : function(treeNodes) {
      for (i in treeNodes) {
        var node = treeNodes[i];
        // label,id,parent,toolTipText,icon
        var treeNode = new qx.ui.tree.TreeFolder(node.label);
        if (!node.label) {
          node.label = "";
        }
        if (!node.desc) {
          node.desc = node.label;
        }
        if (!node.icon) {
          if (!this.__root) {
            node.icon = "qx/icon/Oxygen/22/places/user-home.png";
          } else {
            node.icon = "qx/icon/Oxygen/22/places/folder.png";
            node.iconOpen = "qx/icon/Oxygen/22/places/folder-open.png";
          }
        }
        treeNode.set({
          icon        : node.icon,
          toolTipText : node.desc
        });
        treeNode.attributes = node;
        // draggable
        treeNode.set({
          draggable : true,
          droppable : true
        })
        treeNode.addListener("changeOpen", this.__changeOpen); 
        treeNode.addListener("dragstart", this.__dragStart);
        // treeNode.setDropDataTypes(["text/html", "text/plain"]);
        treeNode.supportsDrop = this.__supportsDrop;
        treeNode.addListener("drop", this.__drop, this);
        if (!this.__root) {
          this.__root = treeNode;
          this.__root.setOpen(true);
          this.__tree.setRoot(this.__root);
        } else { // find parent node and add to it
          var parentNode = this.find(node.parent);
          if (parentNode) {
            parentNode.add(treeNode);
          }
        }
      }
    },
    __changeOpen             : function(e) {
      var treeNode = e.getTarget(); 
      var theIcon = treeNode.attributes.icon ;
     
      if (treeNode.getOpen()){
        if (treeNode.attributes.iconOpen){
          theIcon= treeNode.attributes.iconOpen ;
        }
      } 
      treeNode.set({
          icon        : theIcon
      });
      
      
    },
    __dragStart             : function(e) {
      node = e.getTarget().attributes;
      e.addType("file/id");
      e.addData("file/id", node.id);
      e.addAction("move");
    },
    __drop                  : function(e) {
      var pId = e.getCurrentTarget().attributes.id;
      var id = e.getData("file/id");
      this.debug("move," + id + "->" + pId);
      var fold1 = this.find(id);
      var fold2 = this.find(pId);
      if (fold1 && fold2 && (fold1 != fold2)) {
        // should hit server
        fold1.attributes.parent = fold2.attributes.id;
        fold2.add(fold1);
        this.__tree.addToSelection(fold1);
      }
    },
    _createChildControlImpl : function(id) {
      var control;
      switch (id) {
        case "tree" :
          control = new qx.ui.tree.Tree().set({
            hideRoot : true
          });
          control.setDecorator(null);
          control.setContextMenu(this._createChildControl('menu'));
          this.__tree = control;
          break;
        case "menu" :
          control = new qx.ui.menu.Menu();
          var dir = "qx/icon/Oxygen/22/actions/";
          var site7 = new qx.ui.menu.Button("Search",
          dir+"edit-find.png");
          control.add(site7);
          var site0 = new qx.ui.menu.Button("New",
          dir+"folder-new.png");
          control.add(site0);
          var site6 = new qx.ui.menu.Button("Rename",
          dir+"document-properties.png");
          control.add(site6);

          var site1 = new qx.ui.menu.Button("Cut",
          dir+"edit-cut.png");
          control.add(site1);
          var site2 = new qx.ui.menu.Button("Copy",
          dir+"edit-copy.png");
          control.add(site2);
          var site4 = new qx.ui.menu.Button("Paste",
          dir+"edit-paste.png");
          control.add(site4);

          var site5 = new qx.ui.menu.Button("Delete",
          dir+"edit-delete.png");
          control.add(site5);

          __menu = control;
          break;
      }
      return control || this.base(arguments, id);
    },
    find                    : function(attributeValue, attributeName, docNode) {
      if (!attributeValue) {
        return null;
      }
      if (!attributeName) {
        attributeName = 'id';
      }
      if (!docNode) {
        docNode = this.__root;
      }
      // check self
      if (docNode.attributes
      && docNode.attributes[attributeName] == attributeValue) {
        return docNode;
      } else {// check kids
        var kids = docNode.getChildren();
        for (var i = 0; i < kids.length; i++) {
          var node = kids[i];
          var result = this.find(attributeValue, attributeName, node);
          if (result) {
            return result;
          }
        }
      }
      return null;
    },
    __getSampleData         : function() {
      var nodes = [{
        id    : 1,
        label : '/'
      }, {
        id     : 2,
        parent : 1,
        label  : 'private'
      }, {
        id     : 3,
        parent : 1,
        label  : 'public'
      }, {
        id     : 4,
        parent : 2,
        label  : 'document'
      }, {
        id     : 5,
        parent : 2,
        label  : 'pictures'
      }, {
        id     : 6,
        parent : 3,
        label  : 'shared files'
      }, {
        id     : 7,
        parent : 4,
        label  : 'Hello'
      }];
      return nodes;
    }
  },

  destruct   : function() {
    this._disposeObjects("tree");
  }
});