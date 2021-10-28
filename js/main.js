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
  
var chart = c3.generate({
  bindto: '#offender-sex',
  data: {
      columns: [
          ['Male', 473159],
          ['Female', 108190],
          ['Unknown', 36708],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'Male': '#FAB4D6',
        'Female': '#FF8EC6',
        'Unknown': '#BF5583'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

var chart = c3.generate({
  bindto: '#victim-sex',
  data: {
      columns: [
          ['Male', 335813],
          ['Female', 316885],
          ['Unknown', 3145],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'Male': '#FAB4D6',
        'Female': '#FF8EC6',
        'Unknown': '#BF5583'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});