// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";
  
//   var allGeneralStatsConfig = {
//     appName : applicationName,
//     reportName : "All_General_Stats", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allGeneralStatsConfig).then(function(response){
//     console.log(response);
//     let allGeneralStats = response.data;
//     console.log("All General Stat : ", allGeneralStats);

// });
// });

ZOHO.CREATOR.init()
  .then(function() {
    console.log("Testing");
    var applicationName = "ngrid-annual-report";
    
    var allGeneralStatsConfig = {
      appName: applicationName,
      reportName: "All_General_Stats"
    };
    
    ZOHO.CREATOR.API.getAllRecords(allGeneralStatsConfig).then(function(response) {
      console.log(response);
      let data = response.data;
      console.log("All General Stats:", data);
      
      // Prepare data for the chart
      var labels = [];
      var oidData = [];
      var scpmdData = [];
      var ssPadData = [];
      var csddData = [];
      
      // Iterate over the data to populate the chart values
      data.forEach(function(record) {
        labels.push(record.Particulars);
        // If OID is empty, use 0 to ensure the sum calculation works
        oidData.push(parseInt(record.OID) || 0);
        scpmdData.push(parseInt(record.SCPMD) || 0);
        ssPadData.push(parseInt(record.SSPAD) || 0);
        csddData.push(parseInt(record.CSDD) || 0);  // CSDD values for stacking
      });

      // Prepare the chart data
      var chartData = {
        labels: labels,  // X-axis labels: "Particulars"
        datasets: [{
          label: "OID",
          data: oidData, // Y-axis data for OID
          backgroundColor: "rgba(54, 162, 235, 0.6)", // Color for OID bars
        }, {
          label: "SCPMD",
          data: scpmdData, // Y-axis data for SCPMD
          backgroundColor: "rgba(255, 159, 64, 0.6)", // Color for SCPMD bars
        }, {
          label: "SSPAD",
          data: ssPadData, // Y-axis data for SSPAD
          backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for SSPAD bars
        },
        {
          label: 'CSDD',  // Dataset label for CSDD
          data: csddData,  // CSDD data
          backgroundColor: 'rgba(255,99,132,0.6)',  // Color for CSDD bars
        }]
      };

      // Calculate the sum of the values for each "Particulars" to get percentage
    //   var maxValue = Math.max(...oidData.map((val, index) => val + scpmdData[index] + ssPadData[index] + csddData[index]));
    //   chartData.datasets.forEach(dataset => {
    //     dataset.data = dataset.data.map((val, index) => (val / maxValue) * 100);  // Convert to percentage
    //   });

      // Create the 100% stacked bar chart using Chart.js
      var ctx = document.getElementById("stackedBar").getContext("2d");
      var stackedBarChart = new Chart(ctx, {
        type: "bar", // Bar chart type
        data: chartData,
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true, // Ensure the Y-axis starts from zero
                stacked: true,  // Enable stacking of the bars
                max: 100, // Set the max value of Y-axis to 100 for percentage
                callback: function(value) {
                  return value + '%';  // Format the ticks as percentages
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Percentage (%)'
              }
            }],
            xAxes: [{
              stacked: true // Enable stacking on the X-axis as well
            }]
          },
          title: {
            display: true,
            text: "100% Stacked Vertical Bar Chart for Education & Reporting Statistics"
          }
        }
      });
    });
  });
