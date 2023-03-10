/** BEGIN globals.ts */

const SS = SpreadsheetApp.getActiveSpreadsheet();

const DATA_ROW_HEADER = 1;
const DATA_ROW_START = 2;
const DATA_COL_START = 1;

const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
const italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
const smaller = SpreadsheetApp.newTextStyle().setBold(false).setFontSize(9).build();
const normal = SpreadsheetApp.newTextStyle()
  .setBold(false)
  .setItalic(false)
  .setFontSize(10)
  .build();

/** END globals.ts */
