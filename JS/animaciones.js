$(document).ready(() => { 
    console.log("El DOM ya cargo");
 
    $(document).ready(function() {
     $("p").fadeOut(5000);
     $("p").fadeIn(5000);
 });
 
 $("#btnEnviar").click(() => {
 
     $("#oculto").show();
 });
 
 $("#ocultarInf").click(() => {
 
     $("#oculto").hide();
 
 });

 $("#anima").animate({  
left:'250px',
 opacity:'1.5',
 height:'100px',
  width:'550px'   }, 
  3000, 
  function () {
     $("#anima").fadeOut(2000);
    });
 });    