/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Alexander Back (aback)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * Modern color theme
 */
qx.Theme.define("st.theme.blue.Color",
{
  colors :
  {
    /*
    ---------------------------------------------------------------------------
      BACKGROUND COLORS
    ---------------------------------------------------------------------------
    */

    // application, desktop, ...
    "background-application" : "#C8DCEA",

    // pane color for windows, splitpanes, ...
    "background-pane" : "#F1F6F8",

    // textfields, ...
    "background-light" : "#FFFFFF",

    // headers, ...
    "background-medium" : "#8BBADF",

    // splitpane
    "background-splitpane" : "#AFAFAF",

    // tooltip, ...
    "background-tip" : "#ffffdd",

    // error tooltip
    "background-tip-error": "#C72B2B",

    // tables, ...
    "background-odd" : "#E4E4E4",






    /*
    ---------------------------------------------------------------------------
      TEXT COLORS
    ---------------------------------------------------------------------------
    */

    // other types
    "text-light" : "#FF0000",
    "text-gray" : "#4a4a4a",

    // labels
    "text-label" : "#2222FF",

    // group boxes
    "text-title" : "#314a6e",

    // text fields
    "text-input" : "#000000",

    // states
    "text-hovered"  : "#001533",
    "text-disabled" : "#7B7A7E",
    "text-selected" : "#fffefe",
    "text-active"   : "#26364D",
    "text-inactive" : "#404955",
    "text-placeholder" : "#CBC8CD",






    /*
    ---------------------------------------------------------------------------
      BORDER COLORS
    ---------------------------------------------------------------------------
    */

    // menus, tables, scrollbars, list, etc.
    "border-main" : "#487A9F",

    // between toolbars
    "border-separator" : "#808080",

    // text fields
    "border-input" : "#487A9F",

    // disabled text fields
    "border-disabled" : "#B6B6B6",

    // tab view, window
    "border-pane" : "#487A9F",

    // buttons
    "border-button" : "#487A9F",

    // tables (vertical line)
    "border-column" : "#487A9F",

    // focus state of text fields
    "border-focused" : "#99C3FE",

    // invalid form widgets
    "invalid" : "#990000",
    "border-focused-invalid" : "#FF9999",


    /*
    ---------------------------------------------------------------------------
      TABLE COLORS
    ---------------------------------------------------------------------------
    */

    // equal to "background-pane"
    "table-pane" : "#CFDEEF",

    // own table colors
    // "table-row-background-selected" and "table-row-background-focused-selected"
    // are inspired by the colors of the selection decorator
    "table-focus-indicator" : "#B4D3E8",
    "table-row-background-focused-selected" : "#B4D3E8",
    "table-row-background-focused" : "#B4D3E8",
    "table-row-background-selected" : "#B4D3E8",

    // equal to "background-pane" and "background-odd"
    "table-row-background-even" : "#F3F3F3",
    "table-row-background-odd" : "#E4E4E4",

    // equal to "text-selected" and "text-label"
    "table-row-selected" : "#fffefe",
    "table-row" : "#1a1a1a",

    // equal to "border-collumn"
    "table-row-line" : "#CCCCCC",
    "table-column-line" : "#CCCCCC",



    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE TABLE COLORS
    ---------------------------------------------------------------------------
    */

    "progressive-table-header"              : "#AAAAAA",

    "progressive-table-row-background-even" : "#F4F4F4",
    "progressive-table-row-background-odd"  : "#E4E4E4",

    "progressive-progressbar-background"         : "gray",
    "progressive-progressbar-indicator-done"     : "#CCCCCC",
    "progressive-progressbar-indicator-undone"   : "white",
    "progressive-progressbar-percent-background" : "gray",
    "progressive-progressbar-percent-text"       : "white"
  }
});
