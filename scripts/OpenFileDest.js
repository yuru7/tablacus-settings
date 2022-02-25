main();

function main() {
  if (!FV.FocusedItem) {
    return;
  }
  var focusedPath = FV.FocusedItem.Path;
  var targetPath = null;
  if (/\.lnk$/.test(focusedPath)) {
    var sc = wsh.CreateShortcut(focusedPath);
    var scPath = sc.TargetPath;
    if (fso.FileExists(scPath) || fso.FolderExists(scPath)) {
      targetPath = fso.GetParentFolderName(scPath);
    }
  } else if (fso.FileExists(focusedPath) || fso.FolderExists(focusedPath)) {
    targetPath = fso.GetParentFolderName(focusedPath);
  }
  if (targetPath) {
    Navigate(targetPath, SBSP_NEWBROWSER);

    var newFV = GetFolderView();
    var items = newFV.Items();
    var checkCount = setInterval(function () {
      newFV = GetFolderView();
      items = newFV.Items();
      if (items.Count > 0) {
        var targetName = fso.GetFileName(scPath);
        for(var i = 0, item; i < items.Count; i++) {
          item = items.Item(i);
          if (item.Name == targetName) {
            newFV.SelectItem(item, SVSI_SELECT);
            break;
          }
        }
        clearInterval(checkCount);
      }
    }, 500);
  }
}
