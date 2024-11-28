ZOHO.CREATOR.init()
  .then(function () {
    var applicationName = "ngrid-annual-report";

    /********************************************* All Achievements Data fetching ************************************************/  
    let data = [];
    let X_AxisData = [];
    let Y_AxisData = [];
    let count = 0;
    let achievementName = [];

    var allAchievementConfig = {
      appName: applicationName,
      reportName: "All_Achievements",
    };

    ZOHO.CREATOR.API.getAllRecords(allAchievementConfig).then(function (response) {
      if (response && response.data) {
        let allAchievement = response.data;
        count = allAchievement.length;

        allAchievement.forEach(element => {
          data.push(element.Division_Name);
          achievementName.push(element.Achievement);
        });

        X_AxisData = [...new Set(data)];
        Y_AxisData = X_AxisData.map(uniqueEntry =>
          data.filter(item => item === uniqueEntry).length
        );

        /********************************************* Adding Table with Serial Number and Row Click Event *****************************************/
        function createTable(data, details) {
          const table = document.createElement("table");
          table.classList.add("table", "table-bordered", "table-hover", "table-striped");
        
          const headerRow = document.createElement("tr");
        
          const headerSerialCell = document.createElement("th");
          headerSerialCell.innerText = "S.No";
          headerRow.appendChild(headerSerialCell);
        
          const headerCell = document.createElement("th");
          headerCell.innerText = "Achievements";
          headerRow.appendChild(headerCell);
        
          table.appendChild(headerRow);
        
          data.forEach((item, index) => {
            const row = document.createElement("tr");
        
            const serialCell = document.createElement("td");
            serialCell.innerText = index + 1;
            row.appendChild(serialCell);
        
            const cell = document.createElement("td");
            cell.innerText = item;
            row.appendChild(cell);
        
            // Row hover effect - Changing background color to light blue
            row.addEventListener("mouseover", function() {
              row.style.backgroundColor = "#b3e0ff"; // Light blue background
            });
            row.addEventListener("mouseout", function() {
              row.style.backgroundColor = ""; // Reset the background color
            });
        
            row.addEventListener("click", () => {
              const detailContent = document.createElement("div");
              detailContent.innerHTML = `
                <div class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Details for ${item}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <table class="table table-striped">
                          <tr><th>Achievement</th><td>${details[index]}</td></tr>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              
              // Append the popup content to the body
              document.body.appendChild(detailContent);
        
              // Close modal when the close button is clicked
              const closeButton = detailContent.querySelector(".btn-close");
              closeButton.addEventListener("click", () => {
                detailContent.remove();  // Remove the modal when the close button is clicked
              });
        
              // Close modal if clicking outside the modal dialog
              detailContent.addEventListener("click", (e) => {
                if (e.target === detailContent) {
                  detailContent.remove();  // Remove modal when clicking outside
                }
              });
            });
        
            table.appendChild(row);
          });
        
          return table;
        }
        

        /********************************************* Adding Popup *****************************************/
        function createPopup(content) {
          const popup = document.createElement("div");
          popup.classList.add("popup-container");

          const closeButton = document.createElement("button");
          closeButton.innerText = "Close";
          closeButton.onclick = () => {
            document.body.removeChild(popup);
          };

          popup.appendChild(closeButton);
          popup.appendChild(content);

          return popup;
        }

        // Add achievement count to a specified element
        let achievementCount = document.getElementById('achievement-count');
        if (achievementCount) {
          achievementCount.innerHTML = `${count}`;
        }

        /********************************************* Achievement Button Event *****************************************/
        document.getElementById("achievement").addEventListener("click", () => {
          const table = createTable(achievementName, allAchievement.map(item => item.Achievement));
          const popup = createPopup(table);
          document.body.appendChild(popup);
        });

        /********************************************* Charts Implementation ************************************************/  
        const xValues = X_AxisData;
        const yValues = Y_AxisData;

        new Chart("achievements", {
          type: "doughnut",
          data: {
            labels: xValues,
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
          options: {}
        });
      } else {
        console.error("Error: No data fetched from the report.");
      }
    }).catch(function (error) {
      console.error("Error fetching data:", error);
    });
  })
  .catch(function (error) {
    console.error("Error initializing ZOHO Creator:", error);
  });

/********************************************* Adding Styles (CSS) *****************************************/

// Inject custom styles for table, hover effect, popup, etc.
function injectStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    /* Popup container */
    .popup-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      background: white;
      border: 1px solid #ccc;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      z-index: 1000;
      max-height: 80%;
      overflow-y: auto;
    }

  /* Table Styling */
.table-hover tbody tr {
  transition: background-color 0.3s ease, transform 0.3s ease;  /* Smooth transition for background-color and transform */
}

/* Hover effect on table rows with animation */
.table-hover tbody tr:hover {
  background-color: #b3e0ff;  /* Light blue */
  cursor: pointer;  /* Pointer cursor on hover */
  transform: scale(1.05);  /* Slight scaling effect on hover */
}


    /* Close button style */
    .popup-container button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 4px;
    }

    .popup-container button:hover {
      background-color: #d32f2f;
    }

    /* Table look */
    .table-bordered {
      width: 100%;
      border-collapse: collapse;
    }

    .table-bordered th, .table-bordered td {
      padding: 10px;
      border: 1px solid #ddd;
    }

    .table-striped tr:nth-child(odd) {
      background-color: #f9f9f9;
    }
  `;
  document.head.appendChild(style);
}



// Call the injectStyles function to apply styles to the page
injectStyles();
