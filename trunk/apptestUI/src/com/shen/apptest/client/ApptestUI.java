package com.shen.apptest.client;

import java.util.Map;

import com.google.gwt.cell.client.TextCell;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DecoratedStackPanel;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.shen.apptest.client.common.Utils;

public class ApptestUI implements EntryPoint {
	CellTable cellTable;

	public void onModuleLoad() {
		DockLayoutPanel dockpanel = new DockLayoutPanel(Unit.PX);

		RootLayoutPanel.get().add(dockpanel);

		DecoratedStackPanel decoratedStackPanel = new DecoratedStackPanel();
		decoratedStackPanel.setWidth("100%");
		dockpanel.addWest(decoratedStackPanel, 100.0);

		FlowPanel flowPanel = new FlowPanel();
		decoratedStackPanel.add(flowPanel, "Home", false);
		flowPanel.setSize("100%", "100%");

		Image image = new Image("images/team.jpg");
		flowPanel.add(image);

		Image image_1 = new Image("images/developer.jpg");
		flowPanel.add(image_1);

		FlowPanel flowPanel_1 = new FlowPanel();
		decoratedStackPanel.add(flowPanel_1, "Work", false);
		flowPanel_1.setSize("100%", "100%");

		FlowPanel flowPanel_2 = new FlowPanel();
		decoratedStackPanel.add(flowPanel_2, "Life", false);
		flowPanel_2.setSize("100%", "100%");

		DecoratorPanel decoratorPanel_1 = new DecoratorPanel();
		decoratorPanel_1.setSize("100%", "100%");
		dockpanel.addSouth(decoratorPanel_1, 100.0);
		final FlexTable flexTable = new FlexTable();
		decoratorPanel_1.setWidget(flexTable);

		Label lblName = new Label("Name");
		flexTable.setWidget(0, 0, lblName);

		TextBox textBox = new TextBox();
		textBox.setName("name");
		flexTable.setWidget(0, 1, textBox);

		Label lblDesc = new Label("Desc");
		flexTable.setWidget(0, 2, lblDesc);

		TextBox textBox_1 = new TextBox();
		textBox_1.setName("desc");
		flexTable.setWidget(0, 3, textBox_1);

		Button btnAdd = new Button("Add");
		btnAdd.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				Map params = Utils.getValues(flexTable);
				Utils.post("createTeam.json", params, null);
			}
		});
		flexTable.setWidget(1, 0, btnAdd);
		flexTable.getCellFormatter().setHorizontalAlignment(1, 0,
				HasHorizontalAlignment.ALIGN_CENTER);
		flexTable.getFlexCellFormatter().setColSpan(1, 0, 4);

		cellTable = new CellTable();

		cellTable.setSize("100%", "100%");

		Column column = new Column<Object, String>(new TextCell()) {
			@Override
			public String getValue(Object object) {
				return object.toString();
			}
		};
		cellTable.addColumn(column, "Name");

		Column column_1 = new Column<Object, String>(new TextCell()) {
			@Override
			public String getValue(Object object) {
				return object.toString();
			}
		};
		cellTable.addColumn(column_1, "Desc");

		Column column_2 = new Column<Object, String>(new TextCell()) {
			@Override
			public String getValue(Object object) {
				return object.toString();
			}
		};
		cellTable.addColumn(column_2, "Developers");
		dockpanel.add(cellTable);
	}

	public void init() {

		// cellTable.setRowCount(teamList.size(), true);
		// cellTable.setRowData(0, teamList);
	}
}
