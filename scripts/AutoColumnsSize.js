FV.CurrentViewMode(4,16);
// ファイル名、更新日、ファイルサイズ、ファイル種別の列の自動幅合わせを行う
setTimeout(function()
{
  FV.Columns ='"System.ItemNameDisplay" -2 "System.DateModified" -2 "System.Size" -2 "System.ItemTypeText" -2';
}, 99);
