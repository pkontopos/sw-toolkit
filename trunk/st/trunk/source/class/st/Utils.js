

/**
 #ignore(apiviewer.dao)
 */

/**
 * A util class for handling the documentation tree.
 */
qx.Class.define("st.Utils", {
  extend    : qx.core.Object,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function() {
    this.base(arguments);
  },

  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics   : {
    createMenu               : function() {
      var menu = new qx.ui.menu.Menu();
      var site0 = new qx.ui.menu.Button("New",
      "crystal/22x22/actions/edit_add.png");
      menu.add(site0);
      var site1 = new qx.ui.menu.Button("Cut",
      "crystal/22x22/actions/editcut.png");
      menu.add(site1);
      var site2 = new qx.ui.menu.Button("Copy",
      "crystal/22x22/actions/editcopy.png");
      menu.add(site2);
      var site4 = new qx.ui.menu.Button("Paste",
      "crystal/22x22/actions/editpaste.png");
      menu.add(site4);
      var site5 = new qx.ui.menu.Button("Delete",
      "crystal/22x22/actions/trash.png");
      menu.add(site5);
      return menu;
    },
    createDummyTree          : function() {
      var tree = new qx.ui.tree.Tree().set({
        width : 200
      });
      tree.setDecorator(null);
      var root = new qx.ui.tree.TreeFolder("/");
      root.setOpen(true);
      tree.setRoot(root);
      var te1 = new qx.ui.tree.TreeFolder("Desktop");
      te1.setOpen(true)
      root.add(te1);
      var te1_1 = new qx.ui.tree.TreeFolder("Files");
      var te1_2 = new qx.ui.tree.TreeFolder("Workspace");
      var te1_3 = new qx.ui.tree.TreeFolder("Network");
      var te1_4 = new qx.ui.tree.TreeFolder("Trash");
      te1.add(te1_1, te1_2, te1_3, te1_4);
      var te1_2_1 = new qx.ui.tree.TreeFile("Windows (C:)");
      var te1_2_2 = new qx.ui.tree.TreeFile("Documents (D:)");
      te1_2.add(te1_2_1, te1_2_2);
      var te2 = new qx.ui.tree.TreeFolder("Inbox");
      var te2_1 = new qx.ui.tree.TreeFolder("Presets");
      var te2_2 = new qx.ui.tree.TreeFolder("Sent");
      var te2_3 = new qx.ui.tree.TreeFolder("Trash");
      for (var i = 0; i < 100; i++) {
        te2_3.add(new qx.ui.tree.TreeFile("Junk #" + i));
      }
      var te2_4 = new qx.ui.tree.TreeFolder("Data");
      var te2_5 = new qx.ui.tree.TreeFolder("Edit");
      te2.add(te2_1, te2_2, te2_3, te2_4, te2_5);
      root.add(te2);
      return tree;
    },
    createDummyTable         : function() {
      // Create the initial data
      var rowData = [];
      var now = new Date().getTime();
      var dateRange = 400 * 24 * 60 * 60 * 1000; // 400 days
      for (var row = 0; row < 30; row++) {
        var date = new Date(now + Math.random() * dateRange - dateRange / 2);
        rowData.push(['', row, date, Math.random() * 10000,
        (Math.random() > 0.5)]);
      }

      // table model
      var tableModel = this._tableModel = new qx.ui.table.model.Simple();
      tableModel.setColumns(["", "Name", "Modified", "Type", "Size"]);
      tableModel.setData(rowData);
      tableModel.setColumnEditable(1, true);
      tableModel.setColumnEditable(2, true);
      tableModel.setColumnSortable(3, false);

      // table
      var table = new qx.ui.table.Table(tableModel);

      table.set({
        // width : 600,
        // height : 400,
        decorator : null
      });

      table
      .getSelectionModel()
      .setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

      var tcm = table.getTableColumnModel();

      // Display a checkbox in column 3
      tcm.setDataCellRenderer(4, new qx.ui.table.cellrenderer.Boolean());

      // use a different header renderer
      tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon(
      "icon/16/apps/office-calendar.png", "A date"));

      return table;
    },
    createForm               : function() {
      var form = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      /** **************************************
       * TEXT INPUT
       * **************************************/

      var textGroupBox = new qx.ui.groupbox.GroupBox("Text");
      textGroupBox.setLayout(new qx.ui.layout.Grid(8, 8));
      textGroupBox.setWidth(290);
      form.add(textGroupBox, {
        left : 20,
        top  : 10
      });

      // text field
      var textField = new qx.ui.form.TextField();
      textField.setRequired(true);
      textField.setPlaceholder("placeholder");
      var label = new qx.ui.basic.Label("TextField:");
      label.setBuddy(textField);
      textGroupBox.add(label, {
        row    : 0,
        column : 0
      });
      textGroupBox.add(textField, {
        row    : 0,
        column : 1
      });

      // password field
      var passwordField = new qx.ui.form.PasswordField();
      passwordField.setPlaceholder("password");
      label = new qx.ui.basic.Label("PasswordField:");
      label.setBuddy(passwordField);
      textGroupBox.add(label, {
        row    : 1,
        column : 0
      });
      textGroupBox.add(passwordField, {
        row    : 1,
        column : 1
      });

      // text area
      var textArea = new qx.ui.form.TextArea();
      textArea.setPlaceholder("placeholder");
      label = new qx.ui.basic.Label("TextArea:");
      label.setBuddy(textArea);
      textGroupBox.add(label, {
        row    : 2,
        column : 0
      });
      textGroupBox.add(textArea, {
        row    : 2,
        column : 1
      });

      // combo box
      var comboBox = new qx.ui.form.ComboBox();
      comboBox.setPlaceholder("placeholder");
      label = new qx.ui.basic.Label("ComboBox:");
      label.setBuddy(comboBox);
      textGroupBox.add(label, {
        row    : 3,
        column : 0
      });
      textGroupBox.add(comboBox, {
        row    : 3,
        column : 1
      });
      st.Utils.createItems(comboBox);

      // date field
      var dateField = new qx.ui.form.DateField();
      dateField.setPlaceholder("dd.mm.YYYY");
      label = new qx.ui.basic.Label("DateField:");
      label.setBuddy(dateField);
      textGroupBox.add(label, {
        row    : 4,
        column : 0
      });
      textGroupBox.add(dateField, {
        row    : 4,
        column : 1
      });

      /** **************************************
       * SELECTION
       * **************************************/

      var selectionGroupBox = new qx.ui.groupbox.GroupBox("Selection");
      selectionGroupBox.setLayout(new qx.ui.layout.Grid(8, 8));
      selectionGroupBox.setWidth(290);
      form.add(selectionGroupBox, {
        left : 20,
        top  : 260
      });

      // select box
      var selectBox = new qx.ui.form.SelectBox();
      label = new qx.ui.basic.Label("SelectBox:");
      label.setBuddy(selectBox);
      selectionGroupBox.add(label, {
        row    : 0,
        column : 0
      });
      selectionGroupBox.add(selectBox, {
        row    : 0,
        column : 1
      });
      this.createItems(selectBox);

      // list
      var list = new qx.ui.form.List();
      list.setHeight(60);
      list.setWidth(155)
      label = new qx.ui.basic.Label("List:");
      label.setBuddy(list);
      selectionGroupBox.add(label, {
        row    : 1,
        column : 0
      });
      selectionGroupBox.add(list, {
        row    : 1,
        column : 1
      });
      st.Utils.createItems(list);

      // radio button group
      var radioButtonGroup = new qx.ui.form.RadioButtonGroup();
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 1"));
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 2"));
      radioButtonGroup.add(new qx.ui.form.RadioButton("RadioButton 3"));
      label = new qx.ui.basic.Label("RadioButtonGroup:");
      label.setBuddy(radioButtonGroup);
      selectionGroupBox.add(label, {
        row    : 2,
        column : 0
      });
      selectionGroupBox.add(radioButtonGroup, {
        row    : 2,
        column : 1
      });

      /** **************************************
       * BUTTOS
       * **************************************/

      var buttonGroupBox = new qx.ui.groupbox.GroupBox("Buttons");
      buttonGroupBox.setLayout(new qx.ui.layout.Grid(8, 8));
      buttonGroupBox.setWidth(210);
      form.add(buttonGroupBox, {
        left : 330,
        top  : 10
      });

      // button
      var button = new qx.ui.form.Button("Button");
      label = new qx.ui.basic.Label("Button:");
      label.setBuddy(button);
      buttonGroupBox.add(label, {
        row    : 0,
        column : 0
      });
      buttonGroupBox.add(button, {
        row    : 0,
        column : 1
      });

      // toggle button
      var toggleButton = new qx.ui.form.ToggleButton("ToggleButton");
      label = new qx.ui.basic.Label("ToggleButton:");
      label.setBuddy(toggleButton);
      buttonGroupBox.add(label, {
        row    : 1,
        column : 0
      });
      buttonGroupBox.add(toggleButton, {
        row    : 1,
        column : 1
      });

      // toggle button
      var repeatButton = new qx.ui.form.RepeatButton("0");
      label = new qx.ui.basic.Label("RepeatButton:");
      label.setBuddy(repeatButton);
      buttonGroupBox.add(label, {
        row    : 2,
        column : 0
      });
      buttonGroupBox.add(repeatButton, {
        row    : 2,
        column : 1
      });

      // menu button
      var menueButton = new qx.ui.form.MenuButton("MenuButton", null, st.Utils
      .createMenuForMenuButton());
      label = new qx.ui.basic.Label("MenuButton:");
      label.setBuddy(menueButton);
      buttonGroupBox.add(label, {
        row    : 3,
        column : 0
      });
      buttonGroupBox.add(menueButton, {
        row    : 3,
        column : 1
      });

      // split button
      var splitButton = new qx.ui.form.SplitButton("SplitButton", null,
      st.Utils.createMenuForSplitButton());
      label = new qx.ui.basic.Label("SplitButton:");
      label.setBuddy(splitButton);
      buttonGroupBox.add(label, {
        row    : 4,
        column : 0
      });
      buttonGroupBox.add(splitButton, {
        row    : 4,
        column : 1
      });

      // Listener
      repeatButton.addListener("execute", function() {
        var tempValue = parseInt(repeatButton.getLabel()) + 1;
        repeatButton.setLabel(tempValue.toString());
      });

      /** **************************************
       * BOOLEAN INPUT
       * **************************************/

      var booleanGroupBox = new qx.ui.groupbox.GroupBox("Boolean");
      booleanGroupBox.setLayout(new qx.ui.layout.Grid(8, 8));
      booleanGroupBox.setWidth(210);
      form.add(booleanGroupBox, {
        left : 330,
        top  : 210
      });

      // check box
      var checkBox = new qx.ui.form.CheckBox("CheckBox");
      label = new qx.ui.basic.Label("CheckBox:");
      label.setBuddy(checkBox);
      booleanGroupBox.add(label, {
        row    : 0,
        column : 0
      });
      booleanGroupBox.add(checkBox, {
        row    : 0,
        column : 1
      });

      // radio button
      var radioButton = new qx.ui.form.RadioButton("RadioButton");
      booleanGroupBox.add(new qx.ui.basic.Label("RadioButtons:"), {
        row    : 1,
        column : 0
      });
      booleanGroupBox.add(radioButton, {
        row    : 1,
        column : 1
      });

      /** **************************************
       * NUMBER INPUT
       * **************************************/

      var numberGroupBox = new qx.ui.groupbox.GroupBox("Number");
      numberGroupBox.setLayout(new qx.ui.layout.Grid(8, 8));
      numberGroupBox.setWidth(210);
      form.add(numberGroupBox, {
        left : 330,
        top  : 310
      });

      // spinner
      var spinner = new qx.ui.form.Spinner(0, 50, 100);
      label = new qx.ui.basic.Label("Spinner:");
      label.setBuddy(spinner);
      numberGroupBox.add(label, {
        row    : 0,
        column : 0
      });
      numberGroupBox.add(spinner, {
        row    : 0,
        column : 1
      });

      // slider
      var slider = new qx.ui.form.Slider();
      slider.setWidth(130);
      label = new qx.ui.basic.Label("Slider:");
      label.setBuddy(slider);
      numberGroupBox.add(label, {
        row    : 1,
        column : 0
      });
      numberGroupBox.add(slider, {
        row    : 1,
        column : 1
      });
      return form;
    },

    createItems              : function(widget) {
      for (var i = 0; i < 5; i++) {
        var tempItem = new qx.ui.form.ListItem("Item " + i);
        widget.add(tempItem);
      }
    },

    createMenuForMenuButton  : function() {
      // Creates the option menu
      var optionMenu = new qx.ui.menu.Menu;

      for (var i = 0; i < 3; i++) {
        optionMenu.add(new qx.ui.menu.RadioButton("Option" + i));
      }

      var groupOptions = new qx.ui.form.RadioGroup;
      groupOptions.add.apply(groupOptions, optionMenu.getChildren());

      // create main menu and buttons
      var menu = new qx.ui.menu.Menu();

      for (var i = 0; i < 3; i++) {
        var tempButton = new qx.ui.menu.Button("Button" + i);
        menu.add(tempButton);
      }

      var optionButton = new qx.ui.menu.Button("Options", "", null, optionMenu);
      menu.addSeparator();
      menu.add(optionButton);

      return menu;
    },

    createMenuForSplitButton : function() {
      var menu = new qx.ui.menu.Menu;

      var site1 = new qx.ui.menu.Button("Website 1");
      var site2 = new qx.ui.menu.Button("Website 2");
      var site3 = new qx.ui.menu.Button("Website 3");

      menu.add(site1);
      menu.add(site2);
      menu.add(site3);

      return menu;
    },

    /**
     * Gets the child of a doc node having a certain attribute value.
     *
     * @param docNode {Map} the doc node to get the child of.
     * @param attributeName {String} the name of the attribute the wanted child must have.
     * @param attributeValue {String} the value of the attribute the wanted child must have.
     * @return {Map} the wanted child or <code>code</code> if there is no such child.
     */
    getChildByAttribute      : function(docNode, attributeName, attributeValue)
    {
      if (docNode.children != null) {
        for (var i = 0; i < docNode.children.length; i++) {
          var node = docNode.children[i];

          if (node.attributes
          && node.attributes[attributeName] == attributeValue) {
            return node;
          }
        }
      }

      return null;
    }
  }

});
