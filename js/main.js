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

$(document).ready( function () {
  console.log("ready!");
  $('#exonerations').DataTable( {
    responsive: true,
    ajax: {
      // url: '../data/exonerations.json',
      url: '/data/exonerations.json',
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

$(document).ready( function () {
  console.log("ready!");
  $('#top10').DataTable( {
    responsive: true,
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching": false,
    ajax: {
      // url: '../data/top10.json',
      url: '/data/top10.json',
      dataSrc: ''
    },
    columns: [
      {data: 'LAST'},
      {data: 'FIRST'},
      {data: 'STATE'},
      {data: 'COUNTY'},
      // {data: 'CONVICTED'},
      // {data: 'EXONERATED'},
      {data: 'YEARS IN PRISON'},
      {data: 'FACTORS'},
    ]
  });
} );

var chart = c3.generate({
  bindto: '#prison-line',
  data: {
      x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
          ['x', '1980-01-01', '1981-01-01', '1982-01-01', '1983-01-01', '1984-01-01', '1985-01-01', '1986-01-01', '1987-01-01', '1988-01-01', '1989-01-01', '1990-01-01', '1991-01-01', '1992-01-01', '1993-01-01', '1994-01-01', '1995-01-01', '1996-01-01', '1997-01-01', '1998-01-01', '1999-01-01', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ['Total Prison Population', 1842100, 2002600, 2191700, 2401400, 2662500, 2891800,3236100, 3462900, 3714800, 4056200, 4350300, 4540100, 4735600, 4884100, 5131000, 5382100, 5531200, 5701100, 5888100, 6349000, 6467800, 6584900, 6730900, 6886800, 6997000, 7055600, 7199700, 7339600, 7312600, 7239100, 7089000, 6994500, 6949800, 6899700, 6856900, 6740300, 6616200, 6549700, 6409200],
          ['Probation', 1118100, 1222000, 1335400, 1502200, 1711200, 1870100, 2094400, 2242100, 2356500, 2520500, 2670200, 2738200, 2806200, 2843400, 2964200, 3096300, 3180200, 3266700, 3417500, 3772600, 3839400, 3934500, 3995000, 4073800, 4140400, 4162300, 4236800, 4293000, 4271200, 4199800, 4055900, 3973800, 3944900, 3912900, 3868400, 3789800, 3673100, 3647200, 3540000],
          ['Parole', 220400, 223800, 243900, 251700, 268500, 277400, 326800, 362200, 408000, 456800, 531400, 582800, 634300, 671500, 690200, 700200, 704700, 690800, 705000, 712700, 725500, 731100, 753100, 773500, 775900, 784400, 798200, 826100, 826100, 824600, 840800, 855500, 858400, 849500, 857700, 870500, 874800, 875000, 878000]
      ],
      type: 'line',
        colors: {
            'Total Prison Population': '#40447d',
            'Probation': '#6266a5',
            'Parole': '#8b90cc'
        },
  },
  point: {
    show: false
  },
  axis: {
      x: {
          type: 'timeseries',
          tick: {
              format: '%Y'
          }
      }
  }
});

var chart = c3.generate({
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
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

var chart = c3.generate({
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
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

var chart = c3.generate({
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
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

var chart = c3.generate({
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
        // d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
    }
}
});

var chart = c3.generate({
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

var chart = c3.generate({
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
var chart = c3.generate({
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

var chart = c3.generate({
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

var chart = c3.generate({
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

var chart = c3.generate({
  bindto: '#inmate-line',
  data: {
      x: 'x',
      columns: [
          ['x', '1989-01-01', '1990-01-01', '1991-01-01', '1992-01-01', '1993-01-01', '1994-01-01', '1995-01-01', '1996-01-01', '1997-01-01', '1998-01-01', '1999-01-01', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01'],
          ['Inmate Population', 57762, 64936, 71508, 79678, 88565, 95162, 100958, 105443, 112289, 122316, 133689, 145125, 156572, 163436, 172499, 179895, 187394, 192584, 200020, 201668, 208759, 210227, 217768, 218687, 219298, 214149, 205723, 192170, 185617, 181698, 177214, 155562, 155826]
      ],
      types: {
          'Inmate Population': 'area-spline'
      },
      colors: {
        'Inmate Population': '#8b90cc',
      },
  },
  legend: {
    show: false
  },
  point: {
    show: false
  },
  axis: {
    x: {
        type: 'timeseries',
        tick: {
            // this also works for non timeseries data
            format: '%Y',
            count: 5
        }
    }
}
});

var chart = c3.generate({
  bindto: '#exo-line',
  data: {
      x: 'x',
      columns: [
          ['x', '1989-01-01', '1990-01-01', '1991-01-01', '1992-01-01', '1993-01-01', '1994-01-01', '1995-01-01', '1996-01-01', '1997-01-01', '1998-01-01', '1999-01-01', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01'],
          ['Exonerations', 24, 31, 41, 40, 41, 34, 41, 53, 53, 39, 55, 106, 97, 67, 83, 58, 66, 79, 77, 69, 98, 83, 75, 119, 103, 155, 172, 182, 172, 174, 153, 135, 108]
      ],
      types: {
          'Exonerations': 'area-spline'
      },
      colors: {
        'Exonerations': '#8b90cc',
      },
  },
  legend: {
    show: false
  },
  point: {
    show: false
  },
  axis: {
    x: {
        type: 'timeseries',
        tick: {
            // this also works for non timeseries data
            format: '%Y',
            count: 5
        }
    }
}
});

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


