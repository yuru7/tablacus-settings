main();

function main() {
  if (!FV.FocusedItem) {
    return;
  }
  var focusedPath = FV.FocusedItem.Path;
  if (/\.lnk$/.test(focusedPath)) {
    var sc = wsh.CreateShortcut(focusedPath);
    var scPath = sc.TargetPath;
    var targetPath = null;
    if (fso.FileExists(scPath) || fso.FolderExists(scPath)) {
      targetPath = fso.GetParentFolderName(scPath);
    }
    if (targetPath) {
      Navigate(targetPath, SBSP_NEWBROWSER);
    }
  }
}
