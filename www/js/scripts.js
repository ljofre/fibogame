

$("document").ready(function(){
  alert("document is ready");
  var container = $(".container");
  container.on("click", function(){
    console.log("dividiendo ...");
    this.append($(".container"));
    this.append($(".container"));

  })
})
