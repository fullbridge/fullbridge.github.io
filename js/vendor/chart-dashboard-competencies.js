$(document).ready(function() {

    var selfManagementData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Self Management",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [3, 4.5, 4]
            }
        ]
    };

    var communicationData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Communication",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [5, 4, 3.5]
            }
        ]
    };

    var creativeProblemSolvingData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Creative Problem Solving",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [4.5, 4, 5]
            }
        ]
    };

    var teamworkData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Teamwork",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [3, 3.5, 3.5]
            }
        ]
    };

    var quantitativeProblemSolvingData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Quantitative Problem Solving",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [2, 1, 3]
            }
        ]
    };

    var jobSeekerSkillsData = {
        labels: ["Section 1", "Section 2", "Section 3"],
        datasets: [
            {
                label: "Job-seeker Skills",
                fillColor: "#13a8e1",
                strokeColor: "#E1F5FE",
                highlightFill: "#13a8e1",
                highlightStroke: "#E1F5FE",
                data: [4, 1, 4]
            }
        ]
    };

    window.onload = function(){
        
        var ctx = document.getElementById("stats-self-management").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(selfManagementData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-communication").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(communicationData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-creative-problem-solving").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(creativeProblemSolvingData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-teamwork").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(teamworkData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-quantitative-problem-solving").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(quantitativeProblemSolvingData, {
            responsive : true
        });
        
        var ctx = document.getElementById("stats-job-seeker-skills").getContext("2d");
        window.myDoughnut = new Chart(ctx).Bar(jobSeekerSkillsData, {
            responsive : true
        });

    };
});