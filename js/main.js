$(function(){
  let $address = $(".address"),
      form = document.querySelector("form")

  // apiリクエスト
  const Http = new XMLHttpRequest();
  const url='https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060';
  Http.open("GET", url);
  Http.send();

  // Ajax
  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }

  // ボタンをクリックしたときにテキストを取得
  function click(){
    $("#button").on("click", function(){
      let val = $("#address_text").val();
      console.log(val);
    });
  };

  // submitでページを遷移させないようにする
  form.addEventListener("submit", function(event){
    event.preventDefault();
  })


  click();
})
