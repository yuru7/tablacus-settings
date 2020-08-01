// 何も選択していない場合には終了
if (FV.SelectedItems() == 0) {
  return;
}

var clipText = buildClipText(FV);
clipboardData.setData('text', clipText);

function buildClipText(FV) {
  var items = FV.SelectedItems();

  var clipText = '';
  var pathMap = new Map();
  for (var i = items.Count; i-- > 0; ) {
    clipText += items[i].Path + '\n';
  }

  return clipText;
}
