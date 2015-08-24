$(document).ready(function() {
    
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    var badgesData = {
        labels : ["Aug 21","Aug 25","Aug 29","Sep 1","Sep 5","Sep 9","Sep 12"],
        datasets : [
            {
                label: "Badges",
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

    var messagesData = {
        labels : ["Aug 21","Aug 25","Aug 29","Sep 1","Sep 5","Sep 9","Sep 12"],
        datasets : [
            {
                label: "Messages",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "#13a8e1",
                pointColor : "#13a8e1",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    };

    window.onload = function(){

        var ctx = document.getElementById("stats-badges").getContext("2d");
        window.myLine = new Chart(ctx).Line(badgesData, {
            responsive: true
        });

        var ctx = document.getElementById("stats-messages").getContext("2d");
        window.myLine = new Chart(ctx).Line(messagesData, {
            responsive: true
        });

    };
});