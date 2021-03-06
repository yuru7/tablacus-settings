// 何も選択していない場合には終了
if (FV.SelectedItems() == 0) {
  return;
}

var clipText = buildClipText(FV);
clipboardData.setData('text', clipText);

function buildClipText(FV) {
  var items = FV.SelectedItems();

  // ファイル・フォルダパスで match をかけると各インデックスに以下の値が格納される
  // 0: フルパス / 1: ドライブ / 2: 親フォルダ / 3: ファイル・フォルダ名
  var pattern = /(?:(\w+):|\\)(?:\\([^\\:\*?\"<>\|]+))*(?:\\(([^:\\\*?\"<>\|]+)$))/;

  var clipText = '';
  var beforeParentFolder = '';

  var pathMap = new Map();
  for (var i = items.Count; i-- > 0; ) {
    var result = items[i].Path.match(pattern);
    var parentPath = fso.GetParentFolderName(items[i].Path);

    // 親フォルダをキーにしたファイル一覧マップを生成
    if (pathMap.get(parentPath) == void 0) {
      pathMap.set(parentPath, [result[3]]);
    } else {
      pathMap.set(parentPath, pathMap.get(parentPath).concat(result[3]));
    }
  }

  // フォーマットした「親フォルダパス+選択しているファイルリスト」を配列に格納する
  var clipTextArray = [];
  pathMap.forEach(function (array, key) {
    array.sort(); // ファイルリストを文字列ソート
    var folderAndFilename = key + '\n';
    var prefix = '├ ';
    for (i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        prefix = '└ ';
      }
      folderAndFilename += prefix + array[i] + '\n';
    }
    clipTextArray.push(folderAndFilename);
  });
  clipTextArray.sort(); // 親フォルダ単位で文字列ソート

  // クリップボードに送るテキストを構築
  clipTextArray.forEach(function (value) {
    clipText += value + '\n';
  });

  return clipText;
}
