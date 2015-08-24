$(document).ready(function() {

    var engagementData = {
        labels : ["Aug 21","Aug 25","Aug 29","Sep 1","Sep 5","Sep 9","Sep 12"],
        datasets : [
            // {
            //     label: "Benchmark",
            //     fillColor : "rgba(0,0,0,0)",
            //     strokeColor : "#dbdbdb",
            //     pointColor : "#dbdbdb",
            //     pointStrokeColor : "#fff",
            //     pointHighlightFill : "#fff",
            //     pointHighlightStroke : "rgba(151,187,205,1)",
            //     data : [50,50,50,50,50,50,50]
            // },
            {
                label: "Engagement",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "#13a8e1",
                pointColor : "#13a8e1",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [1,4,10,29,35,55,80]
            }
        ]
    };

    var traitsData = {
        labels: ["Leader", "Thoughtful", "Inventive", "Independent", "Considerate", "Responsible"],
        datasets: [
            {
                label: "Traits",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "#13a8e1",
                pointColor: "#13a8e1",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",

                data: [5, 4, 1, 4.5, 3, 5]
            }
        ]
    };

    var competenciesData = {
        labels: ["Self-management", "Communication", "Creative Problem Solving", "Quantitative Problem Solving", "Teamwork", "Job-seeker Skills"],
        datasets: [
            {
                label: "Pre-assessment",
                fillColor: "#f4f4f4",
                strokeColor: "#e7e7e7",
                highlightFill: "#f4f4f4",
                highlightStroke: "#e7e7e7",
                data: [3, 2.5, 5, 2.5, 4, 4]
            },
            {
                label: "Competencies",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [3, 3.5, 4, 3, 4.5, 5]
            }
        ]
    };

    var studentsData = [
        {
            value: 50,
            color:"#13a8e1",
            highlight: "#13a8e1",
            label: "Students"
        },
        {
            value: 10,
            color: "#dbdbdb",
            highlight: "#dbdbdb",
            label: "Open seats"
        }

    ];

    var attendanceData = [
        {
            value: 595,
            color:"#13a8e1",
            highlight: "#13a8e1",
            label: "Classes attended"
        },
        {
            value: 5,
            color: "#dbdbdb",
            highlight: "#dbdbdb",
            label: "Classes missed"
        }

    ];

    var majorsData = [
        {
            value: 5,
            color:"#13a8e1",
            highlight: "#13a8e1",
            label: "Graphic Design"
        },
        {
            value: 15,
            color: "#13a8e1",
            highlight: "#13a8e1",
            label: "Accounting"
        },
        {
            value: 20,
            color: "#13a8e1",
            highlight: "#13a8e1",
            label: "Business"
        }

    ];

    window.onload = function(){

        var ctx = document.getElementById("stats-engagement").getContext("2d");
        window.myLine = new Chart(ctx).Line(engagementData, {
            responsive: true
        });

        var ctx = document.getElementById("stats-traits").getContext("2d");
        window.myRadarChart = new Chart(ctx).Radar(traitsData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-students").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(studentsData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-attendance").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(attendanceData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-majors").getContext("2d");
        window.myPieChart = new Chart(ctx).Pie(majorsData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-competencies").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(competenciesData, {
            responsive : true
        });

    };
});