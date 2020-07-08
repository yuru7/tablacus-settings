var Items = api.OleGetClipboard();
if (Items.Count) {
  for (var i = 0; i < Items.Count; i++) {
    Navigate(Items.Item(i), SBSP_NEWBROWSER);
  }
  return;
}
Items = String(clipboardData.getData("text")).split(/[\r\n]+/);
for (var i in Items) {
  if (/^"?[A-Z]:\\|^"?\\\\[A-Z]|^"?::{/i.test(Items[i])) {
    Navigate(Items[i], SBSP_NEWBROWSER);
  }
}
