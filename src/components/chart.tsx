import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as d3 from "d3-shape";

const Chart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      rotation: 0,
      fontSize: 12,
      paddingRight: 5,
      paddingBottom: 10,
      paddingTop: 10,
      oversizedBehavior: "wrap",
    });

    xAxis.get("renderer").grid.template.setAll({
      visible: false,
    });
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.get("renderer").grid.template.setAll({
      stroke: am5.color(0xe0e0e0),
      strokeOpacity: 0.5,
      strokeWidth: 1,
    });

    let yAxis2 = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, { opposite: true }),
        min: 0,
        max: 100,
      })
    );

    let data = [
      { year: "1 Jan", click: 10, crediti: 10, persone: 1 },
      { year: "2 ", click: 7, crediti: 0, persone: 1 },
      { year: "3", click: 15, crediti: 10, persone: 1 },
      { year: "4", click: 5, crediti: 6, persone: 1 },
      { year: "5", click: 7, crediti: 0, persone: 1 },
      { year: "6", click: 12, crediti: 6, persone: 1 },
      { year: "7", click: 8, crediti: 0, persone: 1 },
      { year: "8", click: 10, crediti: 0, persone: 1 },
      { year: "9", click: 20, crediti: 22, persone: 1 },
      { year: "10", click: 13, crediti: 12, persone: 10 },
      { year: "11", click: 7, crediti: 22, persone: 1 },
      { year: "12", click: 14, crediti: 15, persone: 1 },
      { year: "13", click: 7, crediti: 0, persone: 1 },
      { year: "14", click: 12, crediti: 0, persone: 1 },
      { year: "15", click: 6, crediti: 0, persone: 1 },
      { year: "16", click: 6, crediti: 10, persone: 1 },
      { year: "17", click: 12, crediti: 0, persone: 1 },
      { year: "18", click: 18, crediti: 15, persone: 1 },
      { year: "19", click: 5, crediti: 0, persone: 1 },
      { year: "20", click: 10, crediti: 0, persone: 5 },
      { year: "21", click: 15, crediti: 15, persone: 1 },
      { year: "22", click: 7, crediti: 15, persone: 1 },
      { year: "23", click: 12, crediti: 25, persone: 15 },
      { year: "24", click: 21, crediti: 15, persone: 1 },
      { year: "25", click: 6, crediti: 10, persone: 1 },
      { year: "26", click: 12, crediti: 0, persone: 1 },
      { year: "27", click: 18, crediti: 0, persone: 1 },
      { year: "28", click: 8, crediti: 10, persone: 1 },
      { year: "29", click: 15, crediti: 0, persone: 1 },
      { year: "30", click: 20, crediti: 0, persone: 1 },
      { year: "31", click: 10, crediti: 8, persone: 1 },
    ];

    let creditSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Crediti",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "crediti",
        categoryXField: "year",
        stroke: am5.color(0x0000ff),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name} in {categoryX}: {valueY}",
        }),
        curveFactory: d3.curveCardinal,
      })
    );
    creditSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fill: am5.color(0x244aed),
        }),
      });
    });
    creditSeries.strokes.template.setAll({
      strokeWidth: 3,
    });

    creditSeries.data.setAll(data);

    let personeSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Persone registrate",
        xAxis: xAxis,
        yAxis: yAxis2,
        valueYField: "persone",
        categoryXField: "year",
        stroke: am5.color(0xd434ed),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );
    personeSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fill: am5.color(0xff00ff),
        }),
      });
    });

    personeSeries.strokes.template.setAll({
      strokeWidth: 3,
    });

    personeSeries.data.setAll(data);

    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Click sul link",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "click",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name} in {categoryX}: {valueY}",
        }),
      })
    );

    series1.columns.template.setAll({
      fill: am5.color(0xedf0ff),
      width: am5.percent(20),
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
      strokeWidth: 0,
      stroke: am5.color(0xedf0ff),
    });

    series1.data.setAll(data);

    xAxis.data.setAll(data);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    let legend = chart.children.push(
      am5.Legend.new(root, {
        x: am5.percent(80),
        centerX: am5.p50,
        useDefaultMarker: false,
      })
    );

    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });
    legend.data.setAll(chart.series.values);

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);
};

export default Chart;
