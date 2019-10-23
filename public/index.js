const currentUrl = $(location)[0].origin + "/";

var golum = new Golum()
var configCount = 2

for(i=0;i<configCount;i++){
  $(window).ready(()=>{
    golum.createNewConfig()
  })
}

 $(function () {
   $("#tabs").tabs();
 });

 $(window).ready(()=>{
  $(function () {
    $( "[type = checkbox]" ).checkboxradio();
   });
})



console.log("загрузил")
$(loader).hide()
