function myFunction() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .setTitle('ตรวจสอบงานค้าง')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}

var id='1xmBMJXXXnxoQQWfiGH3MVI3QQH4zzFX8pO2AtcNZ0CA'
var sheetName = 'แผ่น1'

function getData() {
  let ss = SpreadsheetApp.openById(id)
  let sh = ss.getSheetByName(sheetName)
  let data = sh.getRange(3,3,1,14).getValues()
  Logger.log(data)
}
