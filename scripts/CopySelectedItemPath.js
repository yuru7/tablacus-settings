// 何も選択していない場合には終了
if (FV.SelectedItems() == 0) {
  return;
}

var clipText = buildClipText(FV);
clipboardData.setData('text', clipText);

function buildClipText(FV) {
  var items = FV.SelectedItems();

  var pathArray = [];
  for (var i = items.Count; i-- > 0; ) {
    pathArray.push(items[i].Path);
  }
  pathArray.sort();
  
  var clipText = '';
  if (pathArray.length === 1) {
    return pathArray[0];
  }

  pathArray.forEach(function (value) {
    clipText += value + '\n';
  });
  return clipText;
}
