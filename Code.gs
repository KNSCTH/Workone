function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.search='';
  return render('index');
}

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var url = 'https://docs.google.com/spreadsheets/d/1xmBMJXXXnxoQQWfiGH3MVI3QQH4zzFX8pO2AtcNZ0CA/edit';
  var ss= SpreadsheetApp.openByurl(url);
  var dataSheet = ss.getSheetByName('แผ่น1'); 
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
  return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}
