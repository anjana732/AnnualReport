// ZOHO.CREATOR.init()
// .then(function() {
//   console.log("Testing");
//   var applicationName = "ngrid-annual-report";

//   let data = [];
//   let X_AxisData = [];
//   let Y_AxisData = [];
//   let count = 0;
//   let contractName = [];

// var allContractsConfig = {
//     appName : applicationName,
//     reportName : "All_Contracts", 
// } 

// ZOHO.CREATOR.API.getAllRecords(allContractsConfig).then(function(response){
//     console.log(response);
//     let allContract = response.data;
//     console.log("All Contracts Data : ", allContract);

//     count = allContract.length;
//     // array.forEach(element => {
//     //   X_AxisData = element.Division_Name;
//     // });

//     if (response && response.data) {
//       let allContract = response.data;
//       console.log("All Achievement Data: ", allContract);

//       allContract.forEach(element => {
//         data.push(element.Division_Name);
//         contractName.push(element.Contract_Name);
//       });

      
//       X_AxisData = [...new Set(data)];
//       Y_AxisData = X_AxisData.map(uniqueEntry =>
//         data.filter(item => item === uniqueEntry).length
//       );

//       console.log("X-Axis Data:", X_AxisData);
//       console.log("Y-Axis Data:", Y_AxisData);

//       /********************************************* Adding Table Popup *****************************************/

// function createTable(data) {
//   const table = document.createElement("table");
//   table.setAttribute("border", "1");
//   table.style.width = "100%";
//   table.style.borderCollapse = "collapse";

//   const headerRow = document.createElement("tr");
//   const headerCell = document.createElement("th");
//   headerCell.innerText = "Division Name";
//   headerRow.appendChild(headerCell);
//   table.appendChild(headerRow);

//   data.forEach(item => {
//       const row = document.createElement("tr");
//       const cell = document.createElement("td");
//       cell.innerText = item;
//       row.appendChild(cell);
//       table.appendChild(row);
//   });

//   return table;
// }

// function createPopup(content) {
//   const popup = document.createElement("div");
//   popup.style.position = "fixed";
//   popup.style.top = "50%";
//   popup.style.left = "50%";
//   popup.style.transform = "translate(-50%, -50%)";
//   popup.style.width = "50%";
//   popup.style.background = "white";
//   popup.style.border = "1px solid #ccc";
//   popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//   popup.style.padding = "20px";
//   popup.style.zIndex = "1000";
//   popup.style.overflowY = "auto";
//   popup.style.maxHeight = "80%";

//   const closeButton = document.createElement("button");
//   closeButton.innerText = "Close";
//   closeButton.style.marginBottom = "10px";
//   closeButton.onclick = () => {
//       document.body.removeChild(popup);
//   };

//   popup.appendChild(closeButton);
//   popup.appendChild(content);

//   return popup;
// }
// document.getElementById("contract").addEventListener("click", () => {
//   const table = createTable(contractName);
//   const popup = createPopup(table);
//   document.body.appendChild(popup);
// });


//        /********************************************* Achievement count display  ************************************************/  

//  let contractCount = document.getElementById('contract-count');
//  contractCount.innerHTML = `${count}` ;

//       /********************************************* Charts Implementation ************************************************/  

//       const xValues = X_AxisData;
//       const yValues = Y_AxisData;

//       new Chart("contracts", {
//         type: "doughnut",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: ["rgba(255,99,132,0.6)",
//                                 "rgba(54,162,235,0.6)",
//                                 "rgba(255,206,86,0.6)",
//                                 "rgba(75,192,192,0.6)",
//                                 "rgba(153,102,255,0.6)",
//                                 "rgba(255,159,64,0.6)"], 
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValues
//           }]
//         },
//         options: {}
//       });
//     } else {
//       console.error("Error: No data fetched from the report.");
//     }

// });
// });


ZOHO.CREATOR.init()
    .then(function () {
        console.log("Testing");
        var applicationName = "ngrid-annual-report";

        let data = [];
        let X_AxisData = [];
        let Y_AxisData = [];
        let count = 0;
        let contracts = [];

        var allContractsConfig = {
            appName: applicationName,
            reportName: "All_Contracts",
        };

        ZOHO.CREATOR.API.getAllRecords(allContractsConfig).then(function (response) {
            console.log(response);
            let allContract = response.data;
            console.log("All Contracts Data : ", allContract);

            if (response && response.data) {
                allContract.forEach((element, index) => {
                    contracts.push({
                        serialNumber: index + 1,
                        divisionName: element.Division_Name || "N/A",
                        contractName: element.Contract_Name || "N/A",
                        details: element 
                    });

                    data.push(element.Division_Name || "N/A");
                });

                X_AxisData = [...new Set(data)];
                Y_AxisData = X_AxisData.map(uniqueEntry =>
                    data.filter(item => item === uniqueEntry).length
                );

                console.log("X-Axis Data:", X_AxisData);
                console.log("Y-Axis Data:", Y_AxisData);

             
                let contractCount = document.getElementById("contract-count");
                contractCount.innerHTML = `${contracts.length}`;

                const xValues = X_AxisData;
                const yValues = Y_AxisData;

                new Chart("contracts", {
                    type: "doughnut",
                    data: {
                        labels: xValues,
                        datasets: [{
                            backgroundColor: [
                                "rgba(255,99,132,0.6)",
                                "rgba(54,162,235,0.6)",
                                "rgba(255,206,86,0.6)",
                                "rgba(75,192,192,0.6)",
                                "rgba(153,102,255,0.6)",
                                "rgba(255,159,64,0.6)"
                            ],
                            borderColor: "rgba(0,0,255,0.1)",
                            data: yValues
                        }]
                    },
                    options: {}
                });

                /********************************************* Adding Table with Popup *****************************************/

                function createTable(data) {
                    const table = document.createElement("table");
                    table.setAttribute("border", "1");
                    table.style.width = "100%";
                    table.style.borderCollapse = "collapse";

                  
                    const headerRow = document.createElement("tr");
                    ["S.No", "Contract Name"].forEach(header => {
                        const headerCell = document.createElement("th");
                        headerCell.innerText = header;
                        headerRow.appendChild(headerCell);
                    });
                    table.appendChild(headerRow);

                   
                    data.forEach(item => {
                        const row = document.createElement("tr");
                        row.style.cursor = "pointer";

                        row.innerHTML = `
                            <td>${item.serialNumber}</td>
                            <td>${item.contractName}</td>
                        `;

                
                        row.addEventListener("click", () => {
                            showDetailsPopup(item.details);
                        });

                        table.appendChild(row);
                    });

                    return table;
                }

                function createPopup(content) {
                    const popup = document.createElement("div");
                    popup.style.position = "fixed";
                    popup.style.top = "50%";
                    popup.style.left = "50%";
                    popup.style.transform = "translate(-50%, -50%)";
                    popup.style.width = "50%";
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

                // function showDetailsPopup(details) {
                //     const detailsDiv = document.createElement("div");
                //     for (const [key, value] of Object.entries(details)) {
                //         const detailRow = document.createElement("p");
                //         detailRow.innerHTML = `<strong>${key}:</strong> ${value}`;
                //         detailsDiv.appendChild(detailRow);
                //     }

                //     const popup = createPopup(detailsDiv);
                //     document.body.appendChild(popup);
                // }


                function showDetailsPopup(details) {
                  const detailsDiv = document.createElement("div");
                  
                  for (const [key, value] of Object.entries(details)) {
                      // Skip displaying the ID field
                      if (key.toLowerCase() === "id") continue;
              
                      const detailRow = document.createElement("p");
                      detailRow.innerHTML = `<strong>${key}:</strong> ${value ? value : "Unknown"}`;
                      detailsDiv.appendChild(detailRow);
                  }
              
                  const popup = createPopup(detailsDiv);
                  document.body.appendChild(popup);
              }
              

                document.getElementById("contract").addEventListener("click", () => {
                    const table = createTable(contracts);
                    const popup = createPopup(table);
                    document.body.appendChild(popup);
                });
            } else {
                console.error("Error: No data fetched from the report.");
            }
        });
    });
