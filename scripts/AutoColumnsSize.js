FV.CurrentViewMode(4,16);
setTimeout(function()
{
  // カラム幅の自動調整
  var cols = FV.Columns;
  cols = cols.replace(/"名前" [0-9]+/, '"System.ItemNameDisplay" -2'); // ファイル名
  
  FV.Columns = cols;
}, 99);
