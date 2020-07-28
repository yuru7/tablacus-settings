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
	
	var clipText = "";
	var beforeParentFolder = "";
	
	for (var i = items.Count; i-- > 0;) {
		var result = items[i].Path.match(pattern);
		
		var parentPath = fso.GetParentFolderName(items[i].Path);
		if (beforeParentFolder != parentPath) {
		if (i < items.Count - 1) {
			// 最初のアイテムではない場合は、1行空ける
			clipText = clipText + "\n";
		}
			clipText = clipText + parentPath + "\n";
		}
		beforeParentFolder = parentPath;
	
		clipText = clipText + "└ " + result[3] + "\n";
	}
	
	return clipText;
}
