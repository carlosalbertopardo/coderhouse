$("#recuadroYo").hover(function(){
  
   $("int").hide();
   $("imagen").show( function() {

   $("#imagen").css("left", 50);
   $("#imagen").css("top", 50);

   });
   
});


$("#recuradoInteres").mouseenter(function(evento){
   $("#int").css("left",0);
   $("#int").css("top", 0);
   $("#int").css("display", "block");
   $("#int").css("position", "absolute");


});

$("#recuradoserv").mouseenter(function(evento){
   $("#serv").css("left",0);
   $("#serv").css("top", 0);
   $("#serv").css("display", "block");
 	
});