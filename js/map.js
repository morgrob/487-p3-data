am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
     // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_usaLow;
    
    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });
    
    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Set heatmap values for each state
    polygonSeries.data = [
      {
        id: "US-AL",
        value: 27
      },
      {
        id: "US-AK",
        value: 8
      },
      {
        id: "US-AZ",
        value: 22
      },
      {
        id: "US-AR",
        value: 12
      },
      {
        id: "US-CA",
        value: 247
      },
      {
        id: "US-CO",
        value: 11
      },
      {
        id: "US-CT",
        value: 29
      },
      {
        id: "US-DE",
        value: 3
      },
      {
        id: "US-FL",
        value: 77
      },
      {
        id: "US-GA",
        value: 46
      },
      {
        id: "US-HI",
        value: 5
      },
      {
        id: "US-ID",
        value: 6
      },
      {
        id: "US-IL",
        value: 357
      },
      {
        id: "US-IN",
        value: 39
      },
      {
        id: "US-IA",
        value: 16
      },
      {
        id: "US-KS",
        value: 14
      },
      {
        id: "US-KY",
        value: 22
      },
      {
        id: "US-LA",
        value: 66
      },
      {
        id: "US-ME",
        value: 4
      },
      {
        id: "US-MD",
        value: 41
      },
      {
        id: "US-MA",
        value: 77
      },
      {
        id: "US-MI",
        value: 139
      },
      {
        id: "US-MN",
        value: 17
      },
      {
        id: "US-MS",
        value: 17
      },
      {
        id: "US-MO",
        value: 50
      },
      {
        id: "US-MT",
        value: 15
      },
      {
        id: "US-NE",
        value: 9
      },
      {
        id: "US-NV",
        value: 21
      },
      {
        id: "US-NH",
        value: 2
      },
      {
        id: "US-NJ",
        value: 43
      },
      {
        id: "US-NM",
        value: 10
      },
      {
        id: "US-NY",
        value: 300
      },
      {
        id: "US-NC",
        value: 66
      },
      {
        id: "US-ND",
        value: 4
      },
      {
        id: "US-OH",
        value: 86
      },
      {
        id: "US-OK",
        value: 39
      },
      {
        id: "US-OR",
        value: 23
      },
      {
        id: "US-PA",
        value: 101
      },
      {
        id: "US-RI",
        value: 6
      },
      {
        id: "US-SC",
        value: 9
      },
      {
        id: "US-SD",
        value: 5
      },
      {
        id: "US-TN",
        value: 25
      },
      {
        id: "US-TX",
        value: 395
      },
      {
        id: "US-UT",
        value: 18
      },
      {
        id: "US-VT",
        value: 3
      },
      {
        id: "US-VA",
        value: 59
      },
      {
        id: "US-WA",
        value: 50
      },
      {
        id: "US-WV",
        value: 14
      },
      {
        id: "US-WI",
        value: 63
      },
      {
        id: "US-WY",
        value: 4
      }
    ];
    
    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 400;
    
    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "0";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "400";
    
    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
      return "";
    });
    
    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#F2BC1B");
    
    }); // end am4core.ready()