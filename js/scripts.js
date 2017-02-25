$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var name = $("input#name").val();
    var breathing = $("select#breathing").val();
    var pressure = $("select#pressure").val();
    var marginalized = $("input[type=radio][name=marginalized]:checked").val();
    var children = $("input[type=radio][name=children]:checked").val();

    console.log("breathing method: " + breathing);  // for debugging
    console.log("pressure tolerance: " + pressure);  // for debugging
    console.log("marginalized class: " + marginalized);  // for debugging
    console.log("traveling with children: " + children);  // for debugging

    if (name){
   $("#results").show();
   $('#thesea, #timetravel, #mars, #plzstayhome').hide();
   $(".name").text(name);

   if (breathing === "gills"){ // If you don't have lungs, go to the sea
     $("#thesea").show();
   } else if (marginalized === "no" && children === "yes") { // If you have lungs, privilege, and children, time travel.
     $("#timetravel").show();
   } else if (marginalized === "no" && children === "no" && pressure != "low") { //If you have lungs, privilege, no children, but you're not good with low pressures, time travel.
     $('#timetravel').show();
   } else if (marginalized === "no" && children === "no") { //If you have lungs, privilege, no children, and you are ok with low pressures, go to Mars.
     $('#mars').show();
   } else if (breathing === "both" && pressure != "low" && children === "no") {
     $('#thesea').show();
   } else if (children === "no") {
     $('#mars').show();
   } else if (children === "yes" && breathing === "both"){
     $('#thesea').show();
   } else {
     $('#plzstayhome').show();
}
} else [
  alert("Don't forget to enter your name!")
]
  event.preventDefault();
  });
});
