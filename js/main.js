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
    ajax: {
      url: '/exonerations.json',
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
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching": false,
    ajax: {
      url: '/top10.json',
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
            'Total Prison Population': '#003AFA',
            'Probation': '#009FFF',
            'Parole': '#8CC7FA'
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
  bindto: '#exo-demo-pie',
  data: {
      columns: [
          ['White', 33],
          ['Black', 62],
          ['Hispanic', 9],
          ['Other/Unknown', 3],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'White': '#003AFA',
        'Black': '#0179FF',
        'Hispanic': '#009FFF',
        'Other/Unknown': '#8CC7FA'
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
          ['White', 29],
          ['Black', 34],
          ['Hispanic', 24],
          ['Other/Unknown', 13],
      ],
      type : 'pie',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        'White': '#003AFA',
        'Black': '#0179FF',
        'Hispanic': '#009FFF',
        'Other/Unknown': '#8CC7FA'
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
          ['Crime', 57, 16, 7, 5, 4, 10],

      ],
      type: 'bar',
      colors: {
        'Crime': '#009FFF',
    },
  },
  size: {
    height: 250,
    width: 435
},
  axis: {
    x: {
        type: 'category',
        categories: ['Murder', 'Drug Possession/Sale', 'Fraud', 'Robbery', 'Sexual Assault', 'Other']
    }
},
legend: {
  show: false
},
  bar: {
      width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  }
});

var chart = c3.generate({
  bindto: '#sentence-bars',
  data: {
      columns: [
          ['Sentence', 5, 7, 20, 5, 14, 14, 16, 24, 3]
      ],
      type: 'bar',
      colors: {
        'Sentence': '#8CC7FA',
    },
  },
  size: {
    height: 250,
    width: 435
},
  axis: {
    x: {
        type: 'category',
        categories: ['Not Sentenced', 'Probation', '0-10 years', '11-20 years', '21-30 years', '> 30 years', 'Life', 'Life without Parole', 'Death']
    }
},
legend: {
  show: false
},
  bar: {
      width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  }
});
  
// var chart = c3.generate({
//   bindto: '#offender-sex',
//   data: {
//       columns: [
//           ['Male', 473159],
//           ['Female', 108190],
//           ['Unknown', 36708],
//       ],
//       type : 'pie',
//       onclick: function (d, i) { console.log("onclick", d, i); },
//       onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//       onmouseout: function (d, i) { console.log("onmouseout", d, i); },
//       colors: {
//         'Male': '#FAB4D6',
//         'Female': '#FF8EC6',
//         'Unknown': '#BF5583'
//     },
//     color: function (color, d) {
//         // d will be 'id' when called for legends
//         return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
//     }
// }
// });

// var chart = c3.generate({
//   bindto: '#victim-sex',
//   data: {
//       columns: [
//           ['Male', 335813],
//           ['Female', 316885],
//           ['Unknown', 3145],
//       ],
//       type : 'pie',
//       onclick: function (d, i) { console.log("onclick", d, i); },
//       onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//       onmouseout: function (d, i) { console.log("onmouseout", d, i); },
//       colors: {
//         'Male': '#FAB4D6',
//         'Female': '#FF8EC6',
//         'Unknown': '#BF5583'
//     },
//     color: function (color, d) {
//         // d will be 'id' when called for legends
//         return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
//     }
// }
// });