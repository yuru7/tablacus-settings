// 何も選択していない場合にはフォルダパスをコピーして終了
if (FV.SelectedItems() == 0) {
	clipboardData.setData("text", FV.FolderItem.Path);
	return
}

var clipText = buildClipText(FV);
clipboardData.setData("text", clipText);

function buildClipText(FV) {
	var items = FV.SelectedItems();
	
	// ファイル・フォルダパスで match をかけると各インデックスに以下の値が格納される
	// 0: フルパス / 1: ドライブ / 2: 親フォルダ / 3: ファイル・フォルダ名
	var pattern = /(?:(\w+):|\\)(?:\\([^\\:\*?\"<>\|]+))*(?:\\(([^:\\\*?\"<>\|]+)$))/;
	
	var clipText = FV.FolderItem.Path + "\n";

	for (var i = items.Count; i-- > 0;) {
		var result = items[i].Path.match(pattern);
	
		var lineSymbol;
		if (i > 0) {
			lineSymbol = "├";
		} else {
			lineSymbol = "└";
		}
		
		clipText = clipText + lineSymbol + " " + result[3] + "\n";
	}
	
	return clipText;
}
