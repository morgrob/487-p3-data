var $lastPosition = 0;
window.onscroll = function() {
  var $position = window.pageYOffset;
  
  if ($position > $lastPosition) {
    document.getElementById("header").className = "hidden";
  } else if ($lastPosition - $position > 20) {
    document.getElementById("header").className = "active";
  }
  
  $lastPosition = $position;
};

// var chart = c3.generate({
//   bindto: '#missing-genders',
//   data: {
//       columns: [
//           ['Male', 178747, 95096],
//           ['Female', 209375, 59369]
//       ],
//       type: 'bar'
//   },
//   bar: {
//       width: {
//           ratio: 0.5 
//       }
//   }
// });

var chart = c3.generate({
  bindto: '#missing-demographics',
  data: {
      columns: [
          ['Asian', 5289],
          ['Black', 90333],
          ['Indian', 5295],
          ['White*', 159029],
          ['Other/Unknown', 8938],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'Asian': '#FAB4D6',
        'Black': '#FCA0CE',
        'Indian': '#FF8EC6',
        'White*': '#E676AA',
        'Other/Unknown': '#BF5583'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});
  