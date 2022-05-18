var selectItemIfFile = function (filePath, fv) {
  if (!fso.FileExists(filePath)) return;
  var checkCount = setInterval(function () {
    items = fv.Items();
    if (items.Count > 0) {
      var targetName = fso.GetFileName(filePath);
      for(var i = 0, item; i < items.Count; i++) {
        item = items.Item(i);
        if (item.Name == targetName) {
          fv.SelectItem(item, SVSI_SELECT | SVSI_DESELECTOTHERS | SVSI_ENSUREVISIBLE | SVSI_FOCUSED);
          break;
        }
      }
      clearInterval(checkCount);
    }
  }, 500);
};

var Items = api.OleGetClipboard();
if (Items.Count) {
  for (var i = 0; i < Items.Count; i++) {
    var item = Items.Item(i).Path;
    var filePath = '';
    if (fso.FileExists(item)) {
      filePath = item;
      item = fso.GetParentFolderName(item);
    }
    Navigate(item, SBSP_NEWBROWSER);
    var newFV = GetFolderView();
    selectItemIfFile(filePath, newFV);
  }
  return;
}
var Items = String(clipboardData.getData("text")).split(/[\r\n]+/);
for (var i in Items) {
  var item = Items[i];
  var filePath = '';
  if (/^"?[A-Z]:\\|^"?\\\\[A-Z1-9]|^"?::{|^"?%[-A-Z0-9_]+%/i.test(item)) {
    if (fso.FileExists(item)) {
      filePath = item;
      item = fso.GetParentFolderName(item);
    }
    if (fso.FolderExists(item)) {
      Navigate(item, SBSP_NEWBROWSER);
      var newFV = GetFolderView();
      selectItemIfFile(filePath, newFV);
    } else {
      alert('開くフォルダーがありません');
    }
  }
}
