// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let initiativeName = [];
//   let initiativeData = [];

//   var allInitiativeConfig = {
//     appName : applicationName,
//     reportName : "Initiatives_Initiatives_Report",
//   };

//   ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
//     console.log(response);

//     if (response && response.data) {
//       let allInitiatives = response.data;
//       console.log("All Initiative Data: ", allInitiatives);
//       count = allInitiatives.length;

//       allInitiatives.forEach(element => {
//         data.push(element.Division_Name);
//         initiativeName.push(element.Initative_Name);
//         initiativeData.push(element);
//       });

//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Charts Implementation ************************************************/
//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       const chart = new Chart("initiative-chart", {
//         type: "doughnut",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                "rgba(54,162,235,0.6)",
//                                "rgba(255,206,86,0.6)",
//                                "rgba(75,192,192,0.6)",
//                                "rgba(153,102,255,0.6)",
//                                "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {
//           onClick: function(event, elements) {
//             if (elements.length > 0) {
//               const elementIndex = elements[0].index;
//               const selectedLabel = xValues[elementIndex];
//               const selectedValue = yValues[elementIndex];

//               console.log("Selected Label", selectedLabel);
//               console.log("Selected Value", selectedValue);

//               const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

//               const table = createTable(associatedData);
//               const popup = createPopup(table);
//               document.body.appendChild(popup);
//             }
//           }
//         }
        
//       });

//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

//     /********************************************* Adding Table Popup *****************************************/

//     function createTable(data) {
//       const table = document.createElement("table");
//       table.setAttribute("border", "1");
//       table.style.width = "100%";
//       table.style.borderCollapse = "collapse";

//       // Table header style adjustments
//       const headerRow = document.createElement("tr");
//       const serialHeaderCell = document.createElement("th");
//       serialHeaderCell.innerText = "S.No";
//       headerRow.appendChild(serialHeaderCell);

//       if (data.length > 0) {
//         Object.keys(data[0]).forEach(key => {
//           const headerCell = document.createElement("th");
//           headerCell.innerText = key;
//           headerRow.appendChild(headerCell);
//         });
//       }
//       table.appendChild(headerRow);

//       data.forEach((item, index) => {
//         const row = document.createElement("tr");

//         const serialCell = document.createElement("td");
//         serialCell.innerText = index + 1; // Serial number
//         row.appendChild(serialCell);

//         Object.values(item).forEach(value => {
//           const cell = document.createElement("td");
//           cell.innerText = value;
//           row.appendChild(cell);
//         });

//         table.appendChild(row);

//         // Adding event listener for opening a row in the popup
//         row.addEventListener("click", function() {
//           openRowPopup(index); 
//         });
//       });

//       return table;
//     }

//     function createPopup(content) {
//       const popup = document.createElement("div");
//       popup.style.position = "fixed";
//       popup.style.top = "50%";
//       popup.style.left = "50%";
//       popup.style.transform = "translate(-50%, -50%)";
//       popup.style.width = "50%";
//       popup.style.background = "white";
//       popup.style.border = "1px solid #ccc";
//       popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//       popup.style.padding = "20px";
//       popup.style.zIndex = "1000";
//       popup.style.overflowY = "auto";
//       popup.style.maxHeight = "80%";

//       const closeButton = document.createElement("button");
//       closeButton.innerText = "Close";
//       closeButton.style.marginBottom = "10px";
//       closeButton.onclick = () => {
//         document.body.removeChild(popup);
//       };

//       popup.appendChild(closeButton);
//       popup.appendChild(content);

//       return popup;
//     }

//     function openRowPopup(index) {
//       const item = initiativeData[index]; 

//       const content = document.createElement("div");

//       const details = `
//         <h3>Initiative Details</h3>
//         <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
//         <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
//         <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
//       `;
      
//       content.innerHTML = details;
//       const popup = createPopup(content);
//       document.body.appendChild(popup);
//     }

//     document.getElementById("initiative").addEventListener("click", () => {
//       const table = createTable(initiativeName); 
//       const popup = createPopup(table);
//       document.body.appendChild(popup);
//     });

//     /********************************************* Achievement count display  ************************************************/  
//     let initiativeCount = document.getElementById('initiative-count');
//     initiativeCount.innerHTML = `${count}`;

//   });
// });


// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let initiativeName = [];
//   let initiativeData = [];

//   var allInitiativeConfig = {
//     appName : applicationName,
//     reportName : "Initiatives_Initiatives_Report",
//   };

//   ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
//     console.log(response);

//     if (response && response.data) {
//       let allInitiatives = response.data;
//       console.log("All Initiative Data: ", allInitiatives);
//       count = allInitiatives.length;

//       allInitiatives.forEach(element => {
//         data.push(element.Division_Name);
//         initiativeName.push(element.Initative_Name);
//         initiativeData.push(element);
//       });

//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Charts Implementation ************************************************/
//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       const chart = new Chart("initiative-chart", {
//         type: "doughnut",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                "rgba(54,162,235,0.6)",
//                                "rgba(255,206,86,0.6)",
//                                "rgba(75,192,192,0.6)",
//                                "rgba(153,102,255,0.6)",
//                                "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {
//           onClick: function(event, elements) {
//             if (elements.length > 0) {
//               const elementIndex = elements[0].index;
//               const selectedLabel = xValues[elementIndex];
//               const selectedValue = yValues[elementIndex];

//               console.log("Selected Label", selectedLabel);
//               console.log("Selected Value", selectedValue);

//               // Filter the initiative data based on the selected label
//               const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

//               // Create and display the table for the selected division
//               const table = createTable(associatedData);
//               const popup = createPopup(table);
//               document.body.appendChild(popup);
//             }
//           }
//         }
        
//       });

//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

//     /********************************************* Adding Table Popup *****************************************/

//     function createTable(data) {
//       const table = document.createElement("table");
//       table.setAttribute("border", "1");
//       table.style.width = "100%";
//       table.style.borderCollapse = "collapse";

//       // Table header style adjustments
//       const headerRow = document.createElement("tr");
//       const serialHeaderCell = document.createElement("th");
//       serialHeaderCell.innerText = "S.No";
//       headerRow.appendChild(serialHeaderCell);

//       if (data.length > 0) {
//         Object.keys(data[0]).forEach(key => {
//           const headerCell = document.createElement("th");
//           headerCell.innerText = key;
//           headerRow.appendChild(headerCell);
//         });
//       }
//       table.appendChild(headerRow);

//       data.forEach((item, index) => {
//         const row = document.createElement("tr");

//         const serialCell = document.createElement("td");
//         serialCell.innerText = index + 1; // Serial number
//         row.appendChild(serialCell);

//         Object.values(item).forEach(value => {
//           const cell = document.createElement("td");
//           cell.innerText = value;
//           row.appendChild(cell);
//         });

//         table.appendChild(row);

//         // Adding event listener for opening a row in the popup
//         row.addEventListener("click", function() {
//           openRowPopup(index); 
//         });
//       });

//       return table;
//     }

//     function createPopup(content) {
//       const popup = document.createElement("div");
//       popup.style.position = "fixed";
//       popup.style.top = "50%";
//       popup.style.left = "50%";
//       popup.style.transform = "translate(-50%, -50%)";
//       popup.style.width = "50%";
//       popup.style.background = "white";
//       popup.style.border = "1px solid #ccc";
//       popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//       popup.style.padding = "20px";
//       popup.style.zIndex = "1000";
//       popup.style.overflowY = "auto";
//       popup.style.maxHeight = "80%";

//       const closeButton = document.createElement("button");
//       closeButton.innerText = "Close";
//       closeButton.style.marginBottom = "10px";
//       closeButton.onclick = () => {
//         document.body.removeChild(popup);
//       };

//       popup.appendChild(closeButton);
//       popup.appendChild(content);

//       return popup;
//     }

//     function openRowPopup(index) {
//       const item = initiativeData[index]; 

//       const content = document.createElement("div");

//       const details = `
//         <h3>Initiative Details</h3>
//         <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
//         <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
//         <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
//       `;
      
//       content.innerHTML = details;
//       const popup = createPopup(content);
//       document.body.appendChild(popup);
//     }

//     document.getElementById("initiative").addEventListener("click", () => {
//       const table = createTable(initiativeName); 
//       const popup = createPopup(table);
//       document.body.appendChild(popup);
//     });

//     /********************************************* Achievement count display  ************************************************/  
//     let initiativeCount = document.getElementById('initiative-count');
//     initiativeCount.innerHTML = `${count}`;

//   });
// });


// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let initiativeName = [];
//   let initiativeData = [];

//   var allInitiativeConfig = {
//     appName : applicationName,
//     reportName : "Initiatives_Initiatives_Report",
//   };

//   ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
//     console.log(response);

//     if (response && response.data) {
//       let allInitiatives = response.data;
//       console.log("All Initiative Data: ", allInitiatives);
//       count = allInitiatives.length;

//       allInitiatives.forEach(element => {
//         data.push(element.Division_Name);
//         initiativeName.push(element.Initative_Name);
//         initiativeData.push(element);
//       });

//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Charts Implementation ************************************************/
//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       const chart = new Chart("initiative-chart", {
//         type: "doughnut",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                "rgba(54,162,235,0.6)",
//                                "rgba(255,206,86,0.6)",
//                                "rgba(75,192,192,0.6)",
//                                "rgba(153,102,255,0.6)",
//                                "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {
//           onClick: function(event, elements) {
//             if (elements.length > 0) {
//               const elementIndex = elements[0].index;
//               const selectedLabel = xValues[elementIndex];
//               const selectedValue = yValues[elementIndex];

//               console.log("Selected Label", selectedLabel);
//               console.log("Selected Value", selectedValue);

//               // Filter the initiative data based on the selected label (Division Name)
//               const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

//               // Create and display the table for the selected division
//               const table = createTable(associatedData);
//               const popup = createPopup(table);
//               document.body.appendChild(popup);
//             }
//           }
//         }
        
//       });

//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

//     /********************************************* Adding Table Popup *****************************************/

//     function createTable(data) {
//       const table = document.createElement("table");
//       table.setAttribute("border", "1");
//       table.style.width = "100%";
//       table.style.borderCollapse = "collapse";

//       // Table header style adjustments
//       const headerRow = document.createElement("tr");
//       const serialHeaderCell = document.createElement("th");
//       serialHeaderCell.innerText = "S.No";
//       headerRow.appendChild(serialHeaderCell);

//       if (data.length > 0) {
//         Object.keys(data[0]).forEach(key => {
//           const headerCell = document.createElement("th");
//           headerCell.innerText = key;
//           headerRow.appendChild(headerCell);
//         });
//       }
//       table.appendChild(headerRow);

//       data.forEach((item, index) => {
//         const row = document.createElement("tr");

//         const serialCell = document.createElement("td");
//         serialCell.innerText = index + 1; // Serial number
//         row.appendChild(serialCell);

//         Object.values(item).forEach(value => {
//           const cell = document.createElement("td");
//           cell.innerText = value;
//           row.appendChild(cell);
//         });

//         table.appendChild(row);

//         // Adding event listener for opening a row in the popup
//         row.addEventListener("click", function() {
//           openRowPopup(item); 
//         });
//       });

//       return table;
//     }

//     function createPopup(content) {
//       const popup = document.createElement("div");
//       popup.style.position = "fixed";
//       popup.style.top = "50%";
//       popup.style.left = "50%";
//       popup.style.transform = "translate(-50%, -50%)";
//       popup.style.width = "60%";
//       popup.style.background = "white";
//       popup.style.border = "1px solid #ccc";
//       popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//       popup.style.padding = "20px";
//       popup.style.zIndex = "1000";
//       popup.style.overflowY = "auto";
//       popup.style.maxHeight = "80%";

//       const closeButton = document.createElement("button");
//       closeButton.innerText = "Close";
//       closeButton.style.marginBottom = "10px";
//       closeButton.onclick = () => {
//         document.body.removeChild(popup);
//       };

//       popup.appendChild(closeButton);
//       popup.appendChild(content);

//       return popup;
//     }

//     function openRowPopup(item) {
//       const content = document.createElement("div");

//       const details = `
//         <h3>Initiative Details</h3>
//         <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
//         <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
//         <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
//         <p><strong>Other Info:</strong> ${item.Other_Info || 'N/A'}</p> 
//       `;
      
//       content.innerHTML = details;
//       const popup = createPopup(content);
//       document.body.appendChild(popup);
//     }

//     document.getElementById("initiative").addEventListener("click", () => {
//       const table = createTable(initiativeName); 
//       const popup = createPopup(table);
//       document.body.appendChild(popup);
//     });

//     /********************************************* Achievement count display  ************************************************/  
//     let initiativeCount = document.getElementById('initiative-count');
//     initiativeCount.innerHTML = `${count}`;

//   });
// });


// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let initiativeData = [];

//   var allInitiativeConfig = {
//     appName : applicationName,
//     reportName : "Initiatives_Initiatives_Report",
//   };

//   ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
//     console.log(response);

//     if (response && response.data) {
//       let allInitiatives = response.data;
//       console.log("All Initiative Data: ", allInitiatives);
//       count = allInitiatives.length;

//       allInitiatives.forEach(element => {
//         data.push(element.Division_Name);
//         initiativeData.push(element);
//       });

//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Charts Implementation ************************************************/
//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       const chart = new Chart("initiative-chart", {
//         type: "doughnut",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                "rgba(54,162,235,0.6)",
//                                "rgba(255,206,86,0.6)",
//                                "rgba(75,192,192,0.6)",
//                                "rgba(153,102,255,0.6)",
//                                "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {
//           onClick: function(event, elements) {
//             if (elements.length > 0) {
//               const elementIndex = elements[0].index;
//               const selectedLabel = xValues[elementIndex];

//               console.log("Selected Label", selectedLabel);

//               // Filter the initiative data based on the selected label (Division Name)
//               const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

//               // Create and display the table for the selected division
//               const table = createTable(associatedData);
//               const popup = createPopup(table);
//               document.body.appendChild(popup);
//             }
//           }
//         }
        
//       });

//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

//     /********************************************* Adding Table Popup *****************************************/

//     function createTable(data) {
//       const table = document.createElement("table");
//       table.setAttribute("border", "1");
//       table.style.width = "100%";
//       table.style.borderCollapse = "collapse";

//       // Table header style adjustments
//       const headerRow = document.createElement("tr");
//       const serialHeaderCell = document.createElement("th");
//       serialHeaderCell.innerText = "S.No";
//       headerRow.appendChild(serialHeaderCell);

//       // Add columns dynamically based on the data keys
//       if (data.length > 0) {
//         Object.keys(data[0]).forEach(key => {
//           const headerCell = document.createElement("th");
//           headerCell.innerText = key;
//           headerRow.appendChild(headerCell);
//         });
//       }
//       table.appendChild(headerRow);

//       // Populate table rows
//       data.forEach((item, index) => {
//         const row = document.createElement("tr");

//         const serialCell = document.createElement("td");
//         serialCell.innerText = index + 1; // Serial number
//         row.appendChild(serialCell);

//         Object.values(item).forEach(value => {
//           const cell = document.createElement("td");
//           cell.innerText = value;
//           row.appendChild(cell);
//         });

//         table.appendChild(row);

//         // Adding event listener for opening a row in the popup
//         row.addEventListener("click", function() {
//           openRowPopup(item); 
//         });
//       });

//       return table;
//     }

//     function createPopup(content) {
//       const popup = document.createElement("div");
//       popup.style.position = "fixed";
//       popup.style.top = "50%";
//       popup.style.left = "50%";
//       popup.style.transform = "translate(-50%, -50%)";
//       popup.style.width = "60%";
//       popup.style.background = "white";
//       popup.style.border = "1px solid #ccc";
//       popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//       popup.style.padding = "20px";
//       popup.style.zIndex = "1000";
//       popup.style.overflowY = "auto";
//       popup.style.maxHeight = "80%";

//       const closeButton = document.createElement("button");
//       closeButton.innerText = "Close";
//       closeButton.style.marginBottom = "10px";
//       closeButton.onclick = () => {
//         document.body.removeChild(popup);
//       };

//       popup.appendChild(closeButton);
//       popup.appendChild(content);

//       return popup;
//     }

//     function openRowPopup(item) {
//       const content = document.createElement("div");

//       const details = `
//         <h3>Initiative Details</h3>
//         <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
//         <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
//         <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
//       `;
      
//       content.innerHTML = details;
//       const popup = createPopup(content);
//       document.body.appendChild(popup);
//     }

//     /********************************************* Achievement count display  ************************************************/  
//     let initiativeCount = document.getElementById('initiative-count');
//     initiativeCount.innerHTML = `${count}`;

//   });
// });


// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let initiativeData = [];

//   var allInitiativeConfig = {
//     appName : applicationName,
//     reportName : "Initiatives_Initiatives_Report",
//   };

//   ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
//     console.log(response);

//     if (response && response.data) {
//       let allInitiatives = response.data;
//       console.log("All Initiative Data: ", allInitiatives);
//       count = allInitiatives.length;

//       allInitiatives.forEach(element => {
//         data.push(element.Division_Name);
//         initiativeData.push(element);
//       });

//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Charts Implementation ************************************************/
//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       const chart = new Chart("initiative-chart", {
//         type: "doughnut",
//         data: {
//           labels: xValues, // These labels will represent the divisions
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                "rgba(54,162,235,0.6)",
//                                "rgba(255,206,86,0.6)",
//                                "rgba(75,192,192,0.6)",
//                                "rgba(153,102,255,0.6)",
//                                "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {
//           onClick: function(event, elements) {
//             console.log("Event:", event); // Log the event to debug
//             console.log("Elements:", elements); // Log the clicked elements

//             if (elements.length > 0) {
//               const elementIndex = elements[0].index;
//               const selectedLabel = xValues[elementIndex]; // Map the label using the index of the clicked slice

//               console.log("Selected Label", selectedLabel); // Check if the label is correctly fetched

//               // Filter the initiative data based on the selected label (Division Name)
//               const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

//               // Create and display the table for the selected division
//               const table = createTable(associatedData);
//               const popup = createPopup(table);
//               document.body.appendChild(popup);
//             }
//           }
//         }
        
//       });

//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

//     /********************************************* Adding Table Popup *****************************************/

//     function createTable(data) {
//       const table = document.createElement("table");
//       table.setAttribute("border", "1");
//       table.style.width = "100%";
//       table.style.borderCollapse = "collapse";

//       // Table header style adjustments
//       const headerRow = document.createElement("tr");
//       const serialHeaderCell = document.createElement("th");
//       serialHeaderCell.innerText = "S.No";
//       headerRow.appendChild(serialHeaderCell);

//       // Add columns dynamically based on the data keys
//       if (data.length > 0) {
//         Object.keys(data[0]).forEach(key => {
//           const headerCell = document.createElement("th");
//           headerCell.innerText = key;
//           headerRow.appendChild(headerCell);
//         });
//       }
//       table.appendChild(headerRow);

//       // Populate table rows
//       data.forEach((item, index) => {
//         const row = document.createElement("tr");

//         const serialCell = document.createElement("td");
//         serialCell.innerText = index + 1; // Serial number
//         row.appendChild(serialCell);

//         Object.values(item).forEach(value => {
//           const cell = document.createElement("td");
//           cell.innerText = value;
//           row.appendChild(cell);
//         });

//         table.appendChild(row);

//         // Adding event listener for opening a row in the popup
//         row.addEventListener("click", function() {
//           openRowPopup(item); 
//         });
//       });

//       return table;
//     }

//     function createPopup(content) {
//       const popup = document.createElement("div");
//       popup.style.position = "fixed";
//       popup.style.top = "50%";
//       popup.style.left = "50%";
//       popup.style.transform = "translate(-50%, -50%)";
//       popup.style.width = "60%";
//       popup.style.background = "white";
//       popup.style.border = "1px solid #ccc";
//       popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//       popup.style.padding = "20px";
//       popup.style.zIndex = "1000";
//       popup.style.overflowY = "auto";
//       popup.style.maxHeight = "80%";

//       const closeButton = document.createElement("button");
//       closeButton.innerText = "Close";
//       closeButton.style.marginBottom = "10px";
//       closeButton.onclick = () => {
//         document.body.removeChild(popup);
//       };

//       popup.appendChild(closeButton);
//       popup.appendChild(content);

//       return popup;
//     }

//     function openRowPopup(item) {
//       const content = document.createElement("div");

//       const details = `
//         <h3>Initiative Details</h3>
//         <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
//         <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
//         <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
//       `;
      
//       content.innerHTML = details;
//       const popup = createPopup(content);
//       document.body.appendChild(popup);
//     }

//     /********************************************* Achievement count display  ************************************************/  
//     let initiativeCount = document.getElementById('initiative-count');
//     initiativeCount.innerHTML = `${count}`;

//   });
// });


ZOHO.CREATOR.init()
.then(function() {
  console.log("Testing");
  var applicationName = "ngrid-annual-report";

  let data = [];
  let X_AxisData = [];
  let Y_AxisData = [];
  let count = 0;
  let initiativeData = [];

  var allInitiativeConfig = {
    appName : applicationName,
    reportName : "Initiatives_Initiatives_Report",
  };

  ZOHO.CREATOR.API.getAllRecords(allInitiativeConfig).then(function(response) {
    console.log(response);

    if (response && response.data) {
      let allInitiatives = response.data;
      console.log("All Initiative Data: ", allInitiatives);
      count = allInitiatives.length;

      // Collect all the initiatives data and populate arrays
      allInitiatives.forEach(element => {
        data.push(element.Division_Name);
        initiativeData.push(element);
      });

      // Get unique divisions
      X_AxisData = [...new Set(data)];
      Y_AxisData = X_AxisData.map(uniqueEntry =>
        data.filter(item => item === uniqueEntry).length
      );

      console.log("X-Axis Data:", X_AxisData);
      console.log("Y-Axis Data:", Y_AxisData);

      /********************************************* Charts Implementation ************************************************/
      const xValues = X_AxisData;
      const yValues = Y_AxisData;

      const chart = new Chart("initiative-chart", {
        type: "doughnut",
        data: {
          labels: xValues, // These labels represent the divisions
          datasets: [{
            backgroundColor: ["rgba(255,99,132,0.6)",
                               "rgba(54,162,235,0.6)",
                               "rgba(255,206,86,0.6)",
                               "rgba(75,192,192,0.6)",
                               "rgba(153,102,255,0.6)",
                               "rgba(255,159,64,0.6)"], 
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options: {
          onClick: function(event, elements) {
            console.log("Event:", event); // Log the event to debug
            console.log("Elements:", elements); // Log the clicked elements

            if (elements.length > 0) {
              const elementIndex = elements[0].index;
              const selectedLabel = xValues[elementIndex]; // This is the selected division (label)

              console.log("Selected Label:", selectedLabel); // Check if the label is correctly fetched

              // Fetch all initiatives for the selected division
              const associatedData = initiativeData.filter(item => item.Division_Name === selectedLabel);

              // Create and display the table for the selected division
              const table = createTable(associatedData);
              const popup = createPopup(table);
              document.body.appendChild(popup);
            }
          }
        }
        
      });

    } else {
      console.error("Error: No data fetched from the report.");
    }

    /********************************************* Adding Table Popup *****************************************/

    function createTable(data) {
      const table = document.createElement("table");
      table.setAttribute("border", "1");
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";

      // Table header style adjustments
      const headerRow = document.createElement("tr");
      const serialHeaderCell = document.createElement("th");
      serialHeaderCell.innerText = "S.No";
      headerRow.appendChild(serialHeaderCell);

      // Add columns dynamically based on the data keys
      if (data.length > 0) {
        Object.keys(data[0]).forEach(key => {
          const headerCell = document.createElement("th");
          headerCell.innerText = key;
          headerRow.appendChild(headerCell);
        });
      }
      table.appendChild(headerRow);

      // Populate table rows
      data.forEach((item, index) => {
        const row = document.createElement("tr");

        const serialCell = document.createElement("td");
        serialCell.innerText = index + 1; // Serial number
        row.appendChild(serialCell);

        Object.values(item).forEach(value => {
          const cell = document.createElement("td");
          cell.innerText = value;
          row.appendChild(cell);
        });

        table.appendChild(row);

        // Adding event listener for opening a row in the popup
        row.addEventListener("click", function() {
          openRowPopup(item); 
        });
      });

      return table;
    }

    function createPopup(content) {
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.width = "60%";
      popup.style.background = "white";
      popup.style.border = "1px solid #ccc";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      popup.style.padding = "20px";
      popup.style.zIndex = "1000";
      popup.style.overflowY = "auto";
      popup.style.maxHeight = "80%";

      const closeButton = document.createElement("button");
      closeButton.innerText = "Close";
      closeButton.style.marginBottom = "10px";
      closeButton.onclick = () => {
        document.body.removeChild(popup);
      };

      popup.appendChild(closeButton);
      popup.appendChild(content);

      return popup;
    }

    function openRowPopup(item) {
      const content = document.createElement("div");

      const details = `
        <h3>Initiative Details</h3>
        <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
        <p><strong>Initiative Name:</strong> ${item.Initative_Name || 'N/A'}</p>
        <p><strong>Category:</strong> ${item.Category || 'N/A'}</p>
      `;
      
      content.innerHTML = details;
      const popup = createPopup(content);
      document.body.appendChild(popup);
    }

    /********************************************* Achievement count display  ************************************************/  
    let initiativeCount = document.getElementById('initiative-count');
    initiativeCount.innerHTML = `${count}`;

  });
});
