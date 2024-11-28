// ZOHO.CREATOR.init()
//     .then(function () {
//         console.log("Testing");
//         var applicationName = "ngrid-annual-report";

//         let data = [];
//         let X_AxisDataDivisionName = [];
//         let Y_AxisDataKeyAccountabilities = [];

//         var allSystemApplicationConfig = {
//             appName: applicationName,
//             reportName: "Roles_and_Responsibilities_Key_Accountab_Report",
//         };

//         ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
//             console.log(response);
//             let allRolesAndResponsibilities = response.data;
//             console.log("All Roles And Responsibilities Data: ", allRolesAndResponsibilities);

//             if (allRolesAndResponsibilities && allRolesAndResponsibilities.length > 0) {
//                 console.log("Processing Roles and Responsibilities Data...");

//                 // Extract data for the chart
//                 data = allRolesAndResponsibilities.map(element => element.Division_Name || "Unknown");
//                 X_AxisDataDivisionName = [...new Set(data)];
//                 Y_AxisDataKeyAccountabilities = X_AxisDataDivisionName.map(division =>
//                     allRolesAndResponsibilities.filter(item => item.Division_Name === division).length
//                 );

//                 console.log("X_AxisDataDivisionName (Unique Divisions):", X_AxisDataDivisionName);
//                 console.log("Y_AxisDataKeyAccountabilities (Counts):", Y_AxisDataKeyAccountabilities);

//                 /********************************************* Chart Implementation ************************************************/
//                 const xValues = X_AxisDataDivisionName;
//                 const yValues = Y_AxisDataKeyAccountabilities;
//                 new Chart("rolesAndResponsibilitiesChart", {
//                     type: "doughnut",
//                     data: {
//                         labels: xValues,
//                         datasets: [{
//                             backgroundColor: [
//                                 "rgba(255,99,132,0.6)",
//                                 "rgba(54,162,235,0.6)",
//                                 "rgba(255,206,86,0.6)",
//                                 "rgba(75,192,192,0.6)",
//                                 "rgba(153,102,255,0.6)",
//                                 "rgba(255,159,64,0.6)"
//                             ],
//                             borderColor: "rgba(0,0,0,0.1)",
//                             data: yValues,
//                         }]
//                     },
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 position: 'top',
//                             },
//                             title: {
//                                 display: true,
//                                 text: 'Key Accountabilities by Division' 
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 console.error("No roles and responsibilities data available.");
//             }
//         }).catch(function (error) {
//             console.error("Error fetching roles and responsibilities data:", error);
//         });
//     });








// ZOHO.CREATOR.init()
//     .then(function () {
//         console.log("Initializing...");
//         var applicationName = "ngrid-annual-report";

//         let data = [];
//         let X_AxisDataDivisionName = [];
//         let Y_AxisDataKeyAccountabilities = [];

//         var allSystemApplicationConfig = {
//             appName: applicationName,
//             reportName: "Roles_and_Responsibilities_Key_Accountab_Report",
//         };

//         ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
//             let allRolesAndResponsibilities = response.data;
//             console.log("All Roles And Responsibilities Data:", allRolesAndResponsibilities);

//             if (allRolesAndResponsibilities && allRolesAndResponsibilities.length > 0) {
//                 // Normalize and prepare data
//                 data = allRolesAndResponsibilities.map(element =>
//                     element.Division_Name ? element.Division_Name.trim() : "Unknown"
//                 );

//                 X_AxisDataDivisionName = [...new Set(data)]; // Unique divisions
//                 Y_AxisDataKeyAccountabilities = X_AxisDataDivisionName.map(division =>
//                     allRolesAndResponsibilities.filter(item =>
//                         item.Division_Name && item.Division_Name.trim() === division
//                     ).length
//                 );

//                 console.log("Unique Divisions:", X_AxisDataDivisionName);
//                 console.log("Key Accountabilities Counts:", Y_AxisDataKeyAccountabilities);

//                 // Chart implementation
//                 const ctx = document.getElementById("rolesAndResponsibilitiesChart").getContext("2d");
//                 const rolesAndResponsibilitiesChart = new Chart(ctx, {
//                     type: "doughnut",
//                     data: {
//                         labels: X_AxisDataDivisionName,
//                         datasets: [{
//                             backgroundColor: [
//                                 "rgba(255,99,132,0.6)",
//                                 "rgba(54,162,235,0.6)",
//                                 "rgba(255,206,86,0.6)",
//                                 "rgba(75,192,192,0.6)",
//                                 "rgba(153,102,255,0.6)",
//                                 "rgba(255,159,64,0.6)"
//                             ],
//                             borderColor: "rgba(0,0,0,0.1)",
//                             data: Y_AxisDataKeyAccountabilities,
//                         }]
//                     },
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 position: 'top',
//                             },
//                             title: {
//                                 display: true,
//                                 text: 'Key Accountabilities by Division'
//                             }
//                         }
//                     },
//                     onClick:function(e){
//                             alert ("Hello",e);
//                         }
//                 });

//             //     scales: {
//             //         yAxes: [{
//             //             ticks: {
//             //                 beginAtZero:true
//             //             }
//             //         }]
//             //     },
//             // onClick:function(e){
//             //     var activePoints = myChart.getElementsAtEvent(e);
//             //     var selectedIndex = activePoints[0]._index;
//             //     alert(this.data.datasets[0].data[selectedIndex]);


//             // }
//             // }

//                 // Add click event listener to the chart
//                 document.getElementById('rolesAndResponsibilitiesChart').addEventListener('click', function (event) {
//                     const activePoints = rolesAndResponsibilitiesChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);

//                     if (activePoints.length > 0) {
//                         const firstPoint = activePoints[0];
//                         const clickedIndex = firstPoint.index;

//                         // Validate clickedIndex and get division name
//                         if (clickedIndex !== undefined && clickedIndex < X_AxisDataDivisionName.length) {
//                             const clickedDivision = X_AxisDataDivisionName[clickedIndex];
//                             console.log("Clicked Division Name:", clickedDivision);

//                             // Fetch related data
//                             const relatedData = allRolesAndResponsibilities.filter(item =>
//                                 item.Division_Name && item.Division_Name.trim() === clickedDivision
//                             );

//                             if (relatedData.length > 0) {
//                                 console.log(`Data for ${clickedDivision}:`, relatedData);
//                                 alert(`Data for ${clickedDivision}: ${JSON.stringify(relatedData)}`);
//                             } else {
//                                 console.log(`No data found for ${clickedDivision}`);
//                                 alert(`No data found for ${clickedDivision}`);
//                             }
//                         } else {
//                             console.error("Invalid slice index or division not found.");
//                         }
//                     } else {
//                         console.log("No slice was clicked.");
//                     }
//                 });
//             } else {
//                 console.error("No roles and responsibilities data available.");
//             }
//         }).catch(function (error) {
//             console.error("Error fetching roles and responsibilities data:", error);
//         });
//     });



// ZOHO.CREATOR.init()
//     .then(function () {
//         console.log("Testing");
//         var applicationName = "ngrid-annual-report";
//         let data = [];
//         let X_AxisDataDivisionName = [];
//         let Y_AxisDataKeyAccountabilities = [];
//         var allSystemApplicationConfig = {
//             appName: applicationName,
//             reportName: "Roles_and_Responsibilities_Key_Accountab_Report",
//         };
//         ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
//             console.log(response);
//             let allRolesAndResponsibilities = response.data;
//             console.log("All Roles And Responsibilities Data: ", allRolesAndResponsibilities);
//             if (allRolesAndResponsibilities && allRolesAndResponsibilities.length > 0) {
//                 console.log("Processing Roles and Responsibilities Data...");
//                 // Extract data for the chart
//                 data = allRolesAndResponsibilities.map(element => element.Division_Name || "Unknown");
//                 X_AxisDataDivisionName = [...new Set(data)];
//                 Y_AxisDataKeyAccountabilities = X_AxisDataDivisionName.map(division =>
//                     allRolesAndResponsibilities.filter(item => item.Division_Name === division).length
//                 );
//                 console.log("X_AxisDataDivisionName (Unique Divisions):", X_AxisDataDivisionName);
//                 console.log("Y_AxisDataKeyAccountabilities (Counts):", Y_AxisDataKeyAccountabilities);

//                 const xValues = X_AxisDataDivisionName;
//                 const yValues = Y_AxisDataKeyAccountabilities;
//                 new Chart("rolesAndResponsibilitiesChart", {
//                     type: "doughnut",
//                     data: {
//                         labels: xValues,
//                         datasets: [{
//                             backgroundColor: [
//                                 "rgba(255,99,132,0.6)",
//                                 "rgba(54,162,235,0.6)",
//                                 "rgba(255,206,86,0.6)",
//                                 "rgba(75,192,192,0.6)",
//                                 "rgba(153,102,255,0.6)",
//                                 "rgba(255,159,64,0.6)"
//                             ],
//                             borderColor: "rgba(0,0,0,0.1)",
//                             data: yValues,
//                         }]
//                     },
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 position: 'top',
//                             },
//                             title: {
//                                 display: true,
//                                 text: 'Key Accountabilities by Division'
//                             }
//                         },
//                         // Add click event handler
//                         onClick: function (event, elements) {

//                             // var activePoints = Chart.getElementsAtEvent(elements);
//                             // var selectedIndex = activePoints[0]._index;
//                             alert(event, elements);
// //this.data.datasets[0].data[selectedIndex]
//                             const activeElements = event.chart.getActiveElements();
//                             // if (activeElements.length > 0) {
//                             //     const index = activeElements[0].index;
//                             //     // Get index of the clicked element 
//                             //     const label = xValues[index];
//                             //     // Get the corresponding label 
//                             //     const value = yValues[index];
//                             //     // Get the corresponding value
//                             //     // Display the clicked slice information 
//                             //     alert(index);
//                             // }
//                         }
//                     }
//                 });
//             } else {
//                 console.error("No roles and responsibilities data available.");
//             }
//         }).catch(function (error) {
//             console.error("Error fetching roles and responsibilities data:", error);
//         });
//     });


// ZOHO.CREATOR.init()
//     .then(function () {
//         console.log("Testing");
//         var applicationName = "ngrid-annual-report";
//         let data = [];
//         let X_AxisDataDivisionName = [];
//         let Y_AxisDataKeyAccountabilities = [];
//         var allSystemApplicationConfig = {
//             appName: applicationName,
//             reportName: "Roles_and_Responsibilities_Key_Accountab_Report",
//         };
//         ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
//             console.log(response);
//             let allRolesAndResponsibilities = response.data;
//             console.log("All Roles And Responsibilities Data: ", allRolesAndResponsibilities);
//             if (allRolesAndResponsibilities && allRolesAndResponsibilities.length > 0) {
//                 console.log("Processing Roles and Responsibilities Data...");
//                 // Extract data for the chart
//                 data = allRolesAndResponsibilities.map(element => element.Division_Name || "Unknown");
//                 X_AxisDataDivisionName = [...new Set(data)];
//                 Y_AxisDataKeyAccountabilities = X_AxisDataDivisionName.map(division =>
//                     allRolesAndResponsibilities.filter(item => item.Division_Name === division).length
//                 );
//                 console.log("X_AxisDataDivisionName (Unique Divisions):", X_AxisDataDivisionName);
//                 console.log("Y_AxisDataKeyAccountabilities (Counts):", Y_AxisDataKeyAccountabilities);
//                 /********************************************* Chart Implementation ************************************************/
//                 const xValues = X_AxisDataDivisionName;
//                 const yValues = Y_AxisDataKeyAccountabilities;
//                 new Chart("rolesAndResponsibilitiesChart", {
//                     type: "doughnut",
//                     data: {
//                         labels: xValues,
//                         datasets: [{
//                             backgroundColor: [
//                                 "rgba(255,99,132,0.6)",
//                                 "rgba(54,162,235,0.6)",
//                                 "rgba(255,206,86,0.6)",
//                                 "rgba(75,192,192,0.6)",
//                                 "rgba(153,102,255,0.6)",
//                                 "rgba(255,159,64,0.6)"
//                             ],
//                             borderColor: "rgba(0,0,0,0.1)",
//                             data: yValues,
//                         }]
//                     },
//                     options: {
//                         responsive: true,
//                         plugins: {
//                             legend: {
//                                 position: 'top',
//                             },
//                             title: {
//                                 display: true,
//                                 text: 'Key Accountabilities by Division'
//                             }
//                         },
//                         onClick: function (event, elements) {
//                             if (elements.length > 0) {
//                                 const clickedElement = elements[0];
//                                 const datasetIndex = clickedElement.index;
//                                 const label = xValues[datasetIndex];
//                                 const value = yValues[datasetIndex];
//                                 // Show an alert with information about the clicked segment
//                                 alert(value);
//                             } else {
//                                 console.log("No element was clicked.");
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 console.error("No roles and responsibilities data available.");
//             }
//         }).catch(function (error) {
//             console.error("Error fetching roles and responsibilities data:", error);
//         });
//     });


ZOHO.CREATOR.init().then(function () {
    console.log("Testing");
    var applicationName = "ngrid-annual-report";
    let data = [];
    let X_AxisDataDivisionName = [];
    let Y_AxisDataKeyAccountabilities = [];
    var allSystemApplicationConfig = {
        appName: applicationName,
        reportName: "Roles_and_Responsibilities_Key_Accountab_Report",
    };
    ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
        console.log(response);
        let allRolesAndResponsibilities = response.data;
        console.log("All Roles And Responsibilities Data: ", allRolesAndResponsibilities);
        if (allRolesAndResponsibilities && allRolesAndResponsibilities.length > 0) {
            console.log("Processing Roles and Responsibilities Data...");
            // Extract data for the chart
            data = allRolesAndResponsibilities.map(element => element.Division_Name || "Unknown");
            X_AxisDataDivisionName = [...new Set(data)];
            Y_AxisDataKeyAccountabilities = X_AxisDataDivisionName.map(division =>
                allRolesAndResponsibilities.filter(item => item.Division_Name === division).length
            );
            console.log("X_AxisDataDivisionName (Unique Divisions):", X_AxisDataDivisionName);
            console.log("Y_AxisDataKeyAccountabilities (Counts):", Y_AxisDataKeyAccountabilities);
            // Get the 2D rendering context of the canvas
            let ctx = document.getElementById('rolesAndResponsibilitiesChart').getContext('2d');
            let dataValue = {
                // Labels for each segment of the pie
                labels: X_AxisDataDivisionName,
                // Datasets for the chart
                datasets: [{
                    data: Y_AxisDataKeyAccountabilities,
                    // Data points for each segment
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 205, 86, 0.8)',
                        'rgba(153, 102, 255, 0.8)'
                    ],
                    borderWidth: 2 // Border width for each segment
                }]
            };
            // Create a new Pie Chart
            let pieChart = new Chart(ctx, {
                // Specify the chart type
                type: 'pie',
                // Provide data for the chart
                data: dataValue,
                // Additional options for the chart
                options: {
                    responsive: true, // It make the chart responsive
                    // This plugin will display Title of chart
                    plugins: {
                        title: {
                            display: true,
                            text: 'Roles and Responsibilities by Division'
                        }
                    },
                    // Event handler for a click on a chart element
                    onClick: function (event, elements) {
                        if (elements.length > 0) {
                            const clickedElement = elements[0];
                            const datasetIndex = clickedElement.index;
                            const label = X_AxisDataDivisionName[datasetIndex];
                            const labelValue = Y_AxisDataKeyAccountabilities[datasetIndex];
                            // Show an alert with information about the clicked segment
                            alert(labelValue);
                        }
                    }
                }
            });
        } else {
            console.error("No roles and responsibilities data available.");
        }
    }).catch(function (error) {
        console.error("Error fetching roles and responsibilities data:", error);
    });
});
