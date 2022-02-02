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
  }
}
