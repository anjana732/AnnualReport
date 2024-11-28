ZOHO.CREATOR.init()
.then(function() {
  console.log("Testing");
  var applicationName = "ngrid-annual-report";

var allFinancialStatsConfig = {
    appName : applicationName,
    reportName : "All_Financial_Stats", 
} 

ZOHO.CREATOR.API.getAllRecords(allFinancialStatsConfig).then(function(response){
    console.log(response);
    let allFinancialStats = response.data;
    console.log("All Financial Stat : ", allFinancialStats);

});
});
