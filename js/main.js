// Navigation Bar Disappear on Scroll Effect
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

// Image Grid Settings
$(function() {
			
  $( '#ri-grid' ).gridrotator( {
    rows		: 4,
    columns		: 25,
    animType	: 'fadeInOut',
    animSpeed	: 300,
    interval	: 200,
    step		: 3,
    w320		: {
      rows	: 3,
      columns	: 4
    },
    w240		: {
      rows	: 3,
      columns	: 4
    }
  } );

});

// Featured Data Table of 5 Longest Exonerations
$(document).ready( function () {
  console.log("ready!");
  $('#top10').DataTable( {
    responsive: true,
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching": false,
    ajax: {
      url: './data/top10.json',
      dataSrc: ''
    },
    columns: [
      {data: 'LAST'},
      {data: 'FIRST'},
      {data: 'STATE'},
      {data: 'COUNTY'},
      {data: 'YEARS IN PRISON'},
      {data: 'FACTORS'},
    ]
  });
} );

// Inmate Population Line Graph
$.getJSON("./data/prisonpop.json", function(json) {
  console.log(json);
  c3.generate({
    bindto: '#inmate-line',
    data: {
      json: json,
      keys: {
        x: "Year",
        value: ["Prison Population"]
      },
      types: {
          'Prison Population': 'area-spline'
      },
      colors: {
        'Prison Population': '#8b90cc',
      }
    },
    legend: {
      show: false
    },
    point: {
      show: false
    }
  });
});

// Exonerations Over Time Line Graph
$.getJSON("./data/exo-time.json", function(json) {
  console.log(json);
  c3.generate({
    bindto: '#exo-line',
    data: {
      json: json,
      keys: {
        x: "Year",
        value: ["Exonerations"]
      },
      types: {
          'Exonerations': 'area-spline'
      },
      colors: {
        'Exonerations': '#8b90cc',
      }
    },
    legend: {
      show: false
    },
    point: {
      show: false
    }
  });
});

// Offenses Bar Graph
c3.generate({
  bindto: '#crime-bars',
  data: {
      columns: [
          ['Exonerees', 43.1, 13.9, 1.7, 6.3, 23.4, 0.1, 2, 9.5],
          ['U.S. Inmates', 3.1, 46.1, 5.2, 3.1, 11.2, 4.5, 20.7, 6.1]
      ],
      type: 'bar',
      colors: {
        'Exonerees': '#282b58',
        'U.S. Inmates': '#6266a5'
    },
  },
  axis: {
    x: {
        type: 'category',
        categories: ['Murder', 'Drug Offense', 'Fraud', 'Robbery', 'Sex Offense', 'Immigration', 'Weapons', 'Other']
    }
},
  bar: {
      width: {
          ratio: 0.5 
      }
  }
});

// Sentences Bar Graph
c3.generate({
  bindto: '#sentence-bars',
  data: {
      columns: [
          ['Exonerees', 10.9, 18.5, 4.6, 26, 39.8],
          ['U.S. Inmates', 1.8, 45.4, 35.2, 14.9, 2.7]
      ],
      type: 'bar',
      colors: {
        'Exonerees': '#8b90cc',
        'U.S. Inmates': '#b9bef7'
    },
  },
  axis: {
    x: {
        type: 'category',
        categories: ['> 1 year', '1-10 years', '11-20 years', '> 20 years', 'Life or Death']
    }
},
  bar: {
      width: {
          ratio: 0.5 
      }

  }
});

// Sex of Inmates Pie Chart
c3.generate({
  bindto: '#all-sex-pie',
  data: {
      columns: [
          ['Male', 144785],
          ['Female', 10874]
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'Male': '#40447d',
        'Female': '#8b90cc'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Sex of Exonerations Pie Chart
c3.generate({
  bindto: '#exo-sex-pie',
  data: {
      columns: [
          ['Male', 2633],
          ['Female', 250]
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'Male': '#40447d',
        'Female': '#8b90cc'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Age of Inmates Pie Chart
c3.generate({
  bindto: '#all-age-pie',
  data: {
      columns: [
          ['< 18', 8],
          ['18-30', 27314],
          ['31-40', 53898],
          ['41-50', 43761],
          ['> 50', 30678],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        '< 18': '#282b58',
        '18-30': '#40447d',
        '31-40': '#6266a5',
        '41-50': '#8b90cc',
        '> 50': '#b9bef7'
    },
    color: function (color, d) {
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Age of Exonerations Pie Chart
c3.generate({
  bindto: '#exo-age-pie',
  data: {
      columns: [
          ['< 18', 250],
          ['18-30', 1610],
          ['31-40', 599],
          ['41-50', 292],
          ['> 50', 116],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        '< 18': '#282b58',
        '18-30': '#40447d',
        '31-40': '#6266a5',
        '41-50': '#8b90cc',
        '> 50': '#b9bef7'
    },
    color: function (color, d) {
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Race of Whole U.S. Population Pie Chart
c3.generate({
  bindto: '#pop-demo-pie',
  data: {
      columns: [
          ['White', 61],
          ['Black', 12.3],
          ['Hispanic', 18],
          ['Other/Unknown', 8.7],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'White': '#40447d',
        'Black': '#6266a5',
        'Hispanic': '#8b90cc',
        'Other/Unknown': '#b9bef7'
    },
    color: function (color, d) {
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Race of Inmates Pie Chart
c3.generate({
  bindto: '#all-demo-pie',
  data: {
      columns: [
          ['White', 33.5],
          ['Black', 38.1],
          ['Hispanic', 24.4],
          ['Other/Unknown', 4],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'White': '#40447d',
        'Black': '#6266a5',
        'Hispanic': '#8b90cc',
        'Other/Unknown': '#b9bef7'
    },
    color: function (color, d) {
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Race of Exonerations Pie Chart
c3.generate({
  bindto: '#exo-demo-pie',
  data: {
      columns: [
          ['White', 1029],
          ['Black', 1428],
          ['Hispanic', 350],
          ['Other/Unknown', 75],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'White': '#40447d',
        'Black': '#6266a5',
        'Hispanic': '#8b90cc',
        'Other/Unknown': '#b9bef7'
    },
    color: function (color, d) {
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

// Full Data Table of All Exonerations
$(document).ready( function () {
  console.log("ready!");
  $('#exonerations').DataTable( {
    responsive: true,
    ajax: {
      // url: '../data/exonerations.json',
      url: './data/exonerations.json',
      dataSrc: ''
    },
    columns: [
      {data: 'LAST'},
      {data: 'FIRST'},
      {data: 'STATE'},
      {data: 'COUNTY'},
      {data: 'CONVICTED'},
      {data: 'EXONERATED'},
      {data: 'FACTORS'},
    ]
  });
} );

// Resources Accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


