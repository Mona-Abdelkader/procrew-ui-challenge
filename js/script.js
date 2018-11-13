window.onload = function () {
    // Linear Chart
    var linearChart = new CanvasJS.Chart("linearChartContainer", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "Total Sales",
            horizontalAlign: "left",
            padding: 20
        },
        axisY: {
            includeZero: true,
        },
        toolTip: {
            shared: "true"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "spline",
                showInLegend: true,
                yValueFormatString: "##.00",
                name: "Online",
                dataPoints: [
                    {label: "01 Jul", y: 20},
                    {label: "02 Jul", y: 30},
                    {label: "03 Jul", y: 50},
                    {label: "04 Jul", y: 25},
                    {label: "05 Jul", y: 10},
                    {label: "06 Jul", y: 60},
                    {label: "07 Jul", y: 50}
                ]
            },
            {
                type: "spline",
                showInLegend: true,
                yValueFormatString: "##.00",
                name: "Offline",
                dataPoints: [
                    {label: "01 Jul", y: 70},
                    {label: "02 Jul", y: 30},
                    {label: "03 Jul", y: 15},
                    {label: "04 Jul", y: 25},
                    {label: "05 Jul", y: 45},
                    {label: "06 Jul", y: 60},
                    {label: "07 Jul", y: 40}
                ]
            }]
    });
    linearChart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        linearChart.render();
    }

    // Pie Chart
    var pieChart = new CanvasJS.Chart("pieChartContainer", {
        theme: "light2",        
        animationEnabled: true,
        title: {
            text: "Monthly Income",
            horizontalAlign: "left",
            padding: 30
        },
        data: [{
                type: "doughnut",
                startAngle: 60,
                //innerRadius: 60,
                indexLabelFontSize: 17,
                toolTipContent: "{y} (#percent%)",
                dataPoints: [
                    {y: 67},
                    {y: 28},
                    {y: 10},
                    {y: 7}
                ]
            }]
    });
    pieChart.render();
};

$(document).ready(function(){
    // Expand-Collapse Sidebar
    $(".fa-cogs").click(function(){
        $("#hidden-sidebar").toggle();
        $("#main-content").toggleClass("col-sm-10");
        $("#main-content").toggleClass("col-sm-12");
        $("#hidden-sidebar").toggleClass("left-fixed");
    });
    // Hide Badge When Inbox & Notifications icons clicked
    $("#inboxDropdown").click(function(){
        $("#inboxDropdown > .anchor-badge").hide();
    });
    $("#notifyDropdown").click(function(){
        $("#notifyDropdown > .anchor-badge").hide();
    }); 
    // Show Only Rent or Sale Items Based on Selected Option
    $('#select-prop').change(function(){
        $('.prop').hide();
        $('.' + $(this).val()).show();
    });
});