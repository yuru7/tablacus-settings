var Items = api.OleGetClipboard();
if (Items.Count) {
  for (var i = 0; i < Items.Count; i++) {
    Navigate(Items.Item(i), SBSP_NEWBROWSER);
  }
  return;
}
var Items = String(clipboardData.getData("text")).split(/[\r\n]+/);
for (var i in Items) {
  var item = Items[i];
  if (/^"?[A-Z]:\\|^"?\\\\[A-Z1-9]|^"?::{|^"?%[-A-Z0-9_]+%/i.test(item)) {
    if (fso.FileExists(item)) {
      item = fso.GetParentFolderName(item);
    }
    if (fso.FolderExists(item)) {
      Navigate(item, SBSP_NEWBROWSER);
    } else {
      alert('開くフォルダーがありません');
    }
  }
}
