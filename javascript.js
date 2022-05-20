// JavaScript File
/*global $*/
$(document).ready(function() {
    
 $("#btn").click(function(){
  var input3 = $("#input1").val();
     
      $.getJSON( "https://ajar-target.gomix.me/status" , function (response) {
       console.log(response);
       var stat = (response);
       $("body").append(response[1].status);
      var trains = ["1","2","3","4","6","7","a","b","c","d","e","f","g","j","l","m","n","q","r","s","w","z"
      ];
      var arrayLength = trains.length;
     for (var i = 0;i < arrayLength; i++) {
      if(input3 === trains[key])
      alert(mystringArray[i])
      }
       
});
  
 /* 
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[1].images.original.url + ">");
          $("#gif").append("<img src=" + response.data[2].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[3].images.original.url + ">");
        $("#gif").append("<img src=" + response.data[4].images.original.url + ">");
        
      });
    $("#gif").show(); 
  });
 $("#btnc").click(function(){
     $("#input3").remove();
     $("#gif").hide();
 })
*/
 });
});
