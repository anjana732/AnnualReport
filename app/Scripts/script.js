ZOHO.CREATOR.init()
.then(function() {
  console.log("Testing");
  var applicationName = "ngrid-annual-report";


/********************************************* All Safety Stat Data fetching ************************************************/  

//   var allSafetyStatsConfig = {
//     appName : applicationName,
//     reportName : "All_Safety_Stats", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allSafetyStatsConfig).then(function(response){
//     console.log(response);
//     let allSafetyStats = response.data;
//     console.log("All Safety Stat : ", allSafetyStats);

// });

/********************************************* All Financial Stat Data fetching ************************************************/  
var allFinancialStatsConfig = {
    appName : applicationName,
    reportName : "All_Financial_Stats", 
} 

ZOHO.CREATOR.API.getAllRecords(allFinancialStatsConfig).then(function(response){
    console.log(response);
    let allFinancialStats = response.data;
    console.log("All Financial Stat : ", allFinancialStats);

});

/********************************************* All Contracts Data fetching ************************************************/  

// var allContractsConfig = {
//     appName : applicationName,
//     reportName : "All_Contracts", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allContractsConfig).then(function(response){
//     console.log(response);
//     let allContract = response.data;
//     console.log("All Contracts Data : ", allContract);

// });

/********************************************* All Projects Data fetching ************************************************/  

// var allProjectsConfig = {
//     appName : applicationName,
//     reportName : "All_Projects", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allProjectsConfig).then(function(response){
//     console.log(response);
//     let allProject = response.data;
//     console.log("All Projects Stat : ", allProject);

// });


/********************************************* All Duties and Responsibilities Data fetching ************************************************/  

// var allDutiesAndResponsibilitiesConfig = {
//     appName : applicationName,
//     reportName : "Duties_and_Responsibilities_Report", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allDutiesAndResponsibilitiesConfig).then(function(response){
//     console.log(response);
//     let allDutiesAndResponsibilities = response.data;
//     console.log("All Duties and Reponsibility Data: ", allDutiesAndResponsibilities);

// });

/********************************************* All System Application Data fetching ************************************************/  

// var allSystemApplicationConfig = {
//     appName : applicationName,
//     reportName : "System_38_Application_System_38_Applicat_Report", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function(response){
//     console.log(response);
//     let allSystemApplication = response.data;
//     console.log("All System Application Data: ", allSystemApplication);

// });

/********************************************* Charts Implementation ************************************************/  

let xarry = [50,60,70,80,90,100,110,120,130,140,150];
let yarry = [7,8,8,9,9,9,10,11,14,14,15];
const xValues = xarry;
const yValues = yarry;

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
options:{}
});
});


