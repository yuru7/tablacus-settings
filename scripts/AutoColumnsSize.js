FV.CurrentViewMode(4,16);
setTimeout(function()
{
  // カラム幅の自動調整
  var cols = FV.GetColumns(1);
  cols = cols.replace(/"System.ItemNameDisplay" [0-9]+/, '"System.ItemNameDisplay" -2'); // ファイル名
  
  FV.Columns = cols;
}, 99);
