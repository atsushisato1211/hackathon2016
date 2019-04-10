// 要素の値を取得する
function getValue() {
    const val = $('#text1').val();
    return val;
}

// フォームに値が設定されている場合にポップアップを表示する
function popupValue() {
    const val = getValue();
    // ここに条件分岐を記入する
  if(val !== ''){
        alert(val);
  }
}

// 要素に値をセットする
function setValue() {
    const val = getValue();
    $('#text2').text(val);

}
