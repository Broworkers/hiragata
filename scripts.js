// Conversion table

(function() {
  var e, t, n;

  e = {};
  e["あ"] = "ア";
  e["い"] = "イ";
  e["う"] = "ウ";
  e["え"] = "エ";
  e["お"] = "オ";
  e["ぁ"] = "ァ";
  e["ぃ"] = "ィ";
  e["ぅ"] = "ゥ";
  e["ぇ"] = "ェ";
  e["ぉ"] = "ォ";
  e["か"] = "カ";
  e["き"] = "キ";
  e["く"] = "ク";
  e["け"] = "ケ";
  e["こ"] = "コ";
  e["が"] = "ガ";
  e["ぎ"] = "ギ";
  e["ぐ"] = "グ";
  e["げ"] = "ゲ";
  e["ご"] = "ゴ";
  e["さ"] = "サ";
  e["し"] = "シ";
  e["す"] = "ス";
  e["せ"] = "セ";
  e["そ"] = "ソ";
  e["ざ"] = "ザ";
  e["じ"] = "ジ";
  e["ず"] = "ズ";
  e["ぜ"] = "ゼ";
  e["ぞ"] = "ゾ";
  e["た"] = "タ";
  e["ち"] = "チ";
  e["つ"] = "ツ";
  e["て"] = "テ";
  e["と"] = "ト";
  e["だ"] = "ダ";
  e["ぢ"] = "ヂ";
  e["づ"] = "ヅ";
  e["で"] = "デ";
  e["ど"] = "ド";
  e["な"] = "ナ";
  e["に"] = "ニ";
  e["ぬ"] = "ヌ";
  e["ね"] = "ネ";
  e["の"] = "ノ";
  e["ま"] = "マ";
  e["み"] = "ミ";
  e["む"] = "ム";
  e["め"] = "メ";
  e["も"] = "モ";
  e["は"] = "ハ";
  e["ひ"] = "ヒ";
  e["ふ"] = "フ";
  e["へ"] = "ヘ";
  e["ほ"] = "ホ";
  e["ば"] = "バ";
  e["び"] = "ビ";
  e["ぶ"] = "ブ";
  e["べ"] = "ベ";
  e["ぼ"] = "ボ";
  e["ぱ"] = "パ";
  e["ぴ"] = "ピ";
  e["ぷ"] = "プ";
  e["ぺ"] = "ペ";
  e["ぽ"] = "ポ";
  e["ら"] = "ラ";
  e["り"] = "リ";
  e["る"] = "ル";
  e["れ"] = "レ";
  e["ろ"] = "ロ";
  e["や"] = "ヤ";
  e["ゆ"] = "ユ";
  e["よ"] = "ヨ";
  e["ゃ"] = "ャ";
  e["ゅ"] = "ュ";
  e["ょ"] = "ョ";
  e["っ"] = "ッ";
  e["わ"] = "ワ";
  e["ゐ"] = "ヰ";
  e["ゑ"] = "ヱ";
  e["を"] = "ヲ";
  e["ん"] = "ン";
  e["ゔ"] = "ヴ";
  e["ゝ"] = "ヽ";
  e["ゞ"] = "ヾ";

  for (t in e) {
    n = e[t];
    e[n] = t
  }

  jQuery(function(t) {
    var n;
    n = function() {
      var n, r, i, s, o;
      r = "";
      o = t("#input").val();
      for (i = 0, s = o.length; i < s; i++) {
        n = o[i];
        r += e[n] || n
      }
      return t("#output").val(r)
    };
    return t("#input").on("keyup", n)
  })

}).call(this);


// Copy button

$("document").ready(function(){

  // Check if browser supports copy API
  if (ClipboardJS.isSupported()) {

    // Load library only with success event
    // (this prevents error event to trigger when copying empty textarea)
    var clipboard = new ClipboardJS("[data-clipboard-trigger]");

    clipboard.on("success", function(e) {
      $("[data-clipboard-trigger]").text("Copiado!").addClass("copy--success").removeClass("copy--error").prop("disabled", true);
      e.clearSelection();

      // Return to original state after 2s
      setTimeout(function() {
        $("[data-clipboard-trigger]").text("Copiar").removeClass("copy--success").prop("disabled", false);
        }
      , 2000);
    });

  } else {

    // Load library with error event
    // (only so unsupported browsers trigger error event)
    var clipboard = new ClipboardJS("[data-clipboard-trigger]");

    clipboard.on("error", function(e) {
      $("[data-clipboard-trigger]").text("Copie manualmente").addClass("copy--error").prop("disabled", true);
    });

  };

});
