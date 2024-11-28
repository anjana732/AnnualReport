ZOHO.CREATOR.init()
.then(function() {
  console.log("Testing");
  var applicationName = "ngrid-annual-report";
  
  var allHRStatsConfig = {
    appName : applicationName,
    reportName : "HR_Stats_HRStats_Report", 
} 

ZOHO.CREATOR.API.getAllRecords(allHRStatsConfig).then(function(response){
    console.log(response);
    let allHRStats = response.data;
    console.log("All HR Stat : ", allHRStats);

});
});