function doGet(e) {
  return HtmlService.createTemplateFromFile('AutoComplete').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function AddRecord(tnill, uspsnumber, username) {

  var ss= SpreadsheetApp.getActiveSpreadsheet(); 
  var autoCompleteSheet = ss.getSheetByName("Sheet1");
  autoCompleteSheet.appendRow([new Date(), Session.getActiveUser().getEmail(), tnill, uspsnumber, username]); 
}

function getUsers()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var userSheet = ss.getSheetByName("Sheet1");
  var userRange = userSheet.getRange("E2:E1000");
  var userValues = userRange.getValues();  
  console.log(userValues);
  return userValues;

}
