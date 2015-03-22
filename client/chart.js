Template.charts.onRendered(function() {
    // Get the context of the canvas element we want to select
    var ctx  = document.getElementById("myChart").getContext("2d");
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var ctx4 = document.getElementById("myChart4").getContext("2d");
    var ctx5 = document.getElementById("myChart5").getContext("2d");

    // Set the options
    var options = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    var options2 = {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine: true,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut: true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels: false,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,

        //String - Colour of the angle line
        angleLineColor: "rgba(0,0,0,.1)",

        //Number - Pixel width of the angle line
        angleLineWidth: 1,

        //String - Point label font declaration
        pointLabelFontFamily: "'Arial'",

        //String - Point label font weight
        pointLabelFontStyle: "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize: 10,

        //String - Point label font colour
        pointLabelFontColor: "#666",

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    }

    // Set the data
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }]
    };
    var data2 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [random(), random(), random(), random(), random(), random(), random()]
        }]
    };

    var data3 = [{
            value: random(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        }, {
            value: random(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        }, {
            value: random(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }, {
            value: random(),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        }, {
            value: random(),
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];
    var data4 = [
    {
        value: random(),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: random(),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: random(),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
    ]

    // draw the charts
    var myLineChart = new Chart(ctx).Line(data, options);
    var myRadarChart = new Chart(ctx2).Radar(data2, options2);
    var myPolarArea = new Chart(ctx3).PolarArea(data3, {
        segmentStrokeColor: "#000000"
    });
    // For a pie chart
    var myPieChart = new Chart(ctx4).Pie(data4,{
        animateScale: true
    });

    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx5).Doughnut(data4,{
        animateScale: true
    });
});

Template.moreCharts.onRendered(function() {
    var ctx  = document.getElementById("myChart").getContext("2d");

    var rand1 = random();
    var rand2 = random();
    var rand3 = random();
    var data = [
    {
        value: rand1,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: rand2,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: rand3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
    ]
    var myPieChart = new Chart(ctx).Pie(data);
});

function random() {
    return Math.floor((Math.random() * 100) + 1);
}
