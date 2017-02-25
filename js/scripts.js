$(document).ready(function() {
 $("button#again").click(function(){
   $('#questions').show();
   $('#results').hide();
 });
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
   $('#questions').hide();
   $(".name").text(name);

   if (breathing === "gills"){ // If you don't have lungs, go to the sea.
     $("#thesea").show();
     $('.vacationSpot').text("The Ocean Depths");
   } else if (marginalized === "no" && children === "yes") { // If you have lungs, privilege, and children, time travel.
     $("#timetravel").show();
     $('.vacationSpot').text("Time Travel to the Past");
   } else if (marginalized === "no" && children === "no" && pressure != "low") { //If you have lungs, privilege, no children, but you're not good with low pressures, time travel.
     $('#timetravel').show();
     $('.vacationSpot').text("Time Travel to the Past");
   } else if (marginalized === "no" && children === "no") { //If you have lungs, privilege, no children, and you are ok with low pressures, go to Mars.
     $('#mars').show();
     $('.vacationSpot').text("Mars");
   } else if (breathing === "both" && pressure != "low" && children === "no") { //If you have gills, are marginalized, are ok with high pressure, have no children, go to the sea.
     $('#thesea').show();
     $('.vacationSpot').text("The Ocean Depths");
   } else if (children === "no") { // If you have lungs, are marginalized, have no children, and didn't just go to the sea, go to Mars.
     $('#mars').show();
     $('.vacationSpot').text("Mars");
   } else if (children === "yes" && breathing === "both"){ // If you have gills, are marginalized, and have children, go to the sea.
     $('#thesea').show();
     $('.vacationSpot').text("The Ocean Depths");
   } else { // Left over: If you have only lungs, are marginalized, and have children, stay home.
     $('#plzstayhome').show();
     $('.vacationSpot').text("Nah, Nevermind");

}
} else [
  alert("Don't forget to enter your name!")
]
  event.preventDefault();
  });
});
