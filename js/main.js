$(function(){
  let $address = $(".address"),
      form = document.querySelector("form")

  const Http = new XMLHttpRequest();
  const url='https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060';
  Http.open("GET", url);
  Http.send();

  let json = null
  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    json = Http.responseText
  }

  function click(){
    $("#button").on("click", function(){
      let val = $("#address_text").val();
      console.log(val);
    });
  };

  form.addEventListener("submit", function(event){
    event.preventDefault();
  })


  click();
})
