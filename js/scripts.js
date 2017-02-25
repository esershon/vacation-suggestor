$(document).ready(function() {
  $("form#vacation").submit(function(event) {
   $("#results").show();

   var breathing = $("select#breathing").val();
   var pressure = $("select#pressure").val();
   var margin = $("input[type=radio][name=marginalized]:checked").val();
   var children = $("input[type=radio][name=children]:checked").val();
   console.log("breathing method: " + breathing);  // for debugging
   console.log("pressure tolerance: " + pressure);  // for debugging
   console.log("marginalized class: " + margin);  // for debugging
   console.log("travelling with children: " + children);  // for debugging

if (breathing === "Gills"){
  $("#thesea").show();
} else if (margin === "no" && children === "yes") {
  $("#timetravel").show();
} else{
  $('#plzstayhome').show();
}

  event.preventDefault();
  });
});

//if (animal === "snakes"){
//  $('#snakes').show();
//} else if (animal === "turtles"){
//    $('#turtles').show();
//  } else if (animal === "insects"){
//    $('#insects').show();
//  }else {
//    alert("TRY AGAIN");
//    window.location.reload();
//  }
