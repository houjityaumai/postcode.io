$(function(){
  let $address = $(".address"),
      form = document.querySelector("form"),
      val = null
      console.log(form)

  // ボタンをクリックしたときにテキストを取得
  $(document).ready(function(){
    $("#button").on("click", function(){
      val = $("#address_text").val();
      // apiリクエスト
      const Http = new XMLHttpRequest(); //httpやhttpsを通じてサーバーと通信するためのjavascriptのapi 
      const url='https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + `${val}`;
      console.log(val)
      console.log(url)
      Http.open("GET", url);
      Http.send();

      // Ajax httpリクエストの状態が変化したときに呼び出されるイベントハンドラ
      Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        let jsostrings = Http.responseText, //文字列として取得
            jsondata = JSON.parse(jsostrings), //オブジェクトとして取得
            jsons = jsondata.results[0],
            address = `${jsons.address1}` + `${jsons.address2}` + `${jsons.address3}` + `${jsons.prefcode}`

        console.log(address)

      }
    });
  })


  // submitでページを遷移させないようにする
  form.addEventListener("submit", function(event){
    event.preventDefault();
  })

})
