// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";
  
//   var allSafetyStatsConfig = {
//     appName : applicationName,
//     reportName : "All_Safety_Stats", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allSafetyStatsConfig).then(function(response){
//     console.log(response);
//     let allSafetyStats = response.data;
//     console.log("All Safety Stat : ", allSafetyStats);

// });
// });

ZOHO.CREATOR.init().then(function () {
  console.log("Zoho Creator Widget Initialized");

  // Configuration for fetching records from Zoho Creator
  var applicationName = "ngrid-annual-report";
  var reportName = "All_Safety_Stats";  // Report from which data is fetched
  
  var reportConfig = {
      appName: applicationName,
      reportName: reportName
  };

  // Fetch data from Zoho Creator report
  ZOHO.CREATOR.API.getAllRecords(reportConfig).then(function (response) {
      var data = response.data; // Response from Zoho Creator API
      console.log("Fetched Safety Stats:", data);

      // Parse and format the data for the stacked bar chart
      var categories = [];
      var scmpdData = [];
      var ssPadData = [];
      var csddData = [];
      var oidData = [];

      // Loop through the data to populate the arrays
      data.forEach(function (record) {

        console.log("Record = ", record.OID)
          categories.push(record.Particulars);  // Push Particulars for X-axis
          scmpdData.push(parseInt(record.SCMPD) || 0);  // SCMPD values for stacking
          ssPadData.push(parseInt(record.SSPAD) || 0);  // SSPAD values for stacking
          csddData.push(parseInt(record.CSDD) || 0);  // CSDD values for stacking
          oidData.push(parseInt(record.OID) || 0);  // CSDD values for stacking

      });

      // Prepare the chart data
      var chartData = {
          labels: categories,  // Categories (X-axis labels)
          datasets: [
              {
                  label: 'SCMPD',  // Dataset label for SCMPD
                  data: scmpdData,  // SCMPD data
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Color for SCMPD bars
              },
              {
                  label: 'SSPAD',  // Dataset label for SSPAD
                  data: ssPadData,  // SSPAD data
                  backgroundColor: 'rgba(153, 102, 255, 0.6)',  // Color for SSPAD bars
              },
              {
                  label: 'CSDD',  // Dataset label for CSDD
                  data: csddData,  // CSDD data
                  backgroundColor: 'rgba(255, 159, 64, 0.6)',  // Color for CSDD bars
              },
              {
                label: 'OID',  // Dataset label for OID
                data: oidData,  // OID data
                backgroundColor: 'rgba(255,99,132,0.6)',  // Color for OID bars
            }
          ]
      };

      // Render the chart
      var ctx = document.getElementById('stackedBarChart').getContext('2d');
      var stackedBarChart = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: {
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,  // Enable stacked bars on X-axis
                  }],
                  yAxes: [{
                      stacked: true,  // Enable stacked bars on Y-axis
                  }]
              }
          }
      });
  });
});