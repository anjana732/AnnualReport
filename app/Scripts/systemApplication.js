ZOHO.CREATOR.init()
  .then(function () {
    console.log("Testing");
    var applicationName = "ngrid-annual-report";

    let data = [];
    let systemApplicationName = [];
    let count = 0;
    let allSystemApplication = [];

    var allSystemApplicationConfig = {
      appName: applicationName,
      reportName: "System_38_Application_System_38_Applicat_Report",
    };

    ZOHO.CREATOR.API.getAllRecords(allSystemApplicationConfig).then(function (response) {
      console.log(response);

      if (response && response.data) {
        allSystemApplication = response.data;
        console.log("All System Application Data: ", allSystemApplication);

        count = allSystemApplication.length;
        allSystemApplication.forEach(element => {
          if (element.Division_Name) data.push(element.Division_Name);
          if (element.System_38_Applications_Name) systemApplicationName.push(element.System_38_Applications_Name);
        });

        if (data.length === 0) {
          console.error("No division names found in the data.");
        }

        console.log("System Application Names: ", systemApplicationName);
        console.log("Division Names: ", data);

        let systemApplicationCount = document.getElementById('system-application-count');
        if (systemApplicationCount) {
          systemApplicationCount.innerHTML = `${count}`;
        }

        /********************************************* Charts Implementation ************************************************/

        const X_AxisData = [...new Set(data)];
        const Y_AxisData = X_AxisData.map(uniqueEntry =>
          data.filter(item => item === uniqueEntry).length
        );

        const ctx = document.getElementById("system-application-chart").getContext("2d");
        const chart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: X_AxisData,
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
              data: Y_AxisData
            }]
          },
          options: {
            responsive: true,
            onClick: function (event, elements) {
              if (elements.length > 0) {
                const clickedSegmentIndex = elements[0].index;
                const clickedCategory = X_AxisData;
                openCategoryModal(clickedCategory);
              }
            }
          }
        });

      } else {
        console.error("Error: No data fetched from the report.");
      }

    });

    // Function to create and open the modal for the clicked category
    function openCategoryModal(category) {
      console.log("Clicked");
      console.log("Here is the category data we get",category);
      const relatedData = allSystemApplication.filter(item => item.Division_Name === category);

      const content = document.createElement("div");
      const table = createTable(relatedData);
      content.appendChild(table);

      const modal = createPopup(content);
      document.body.appendChild(modal);
    }

    // Function to create a table for the modal content
    function createTable(data) {
      const table = document.createElement("table");
      table.setAttribute("border", "1");
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";

      const headerRow = document.createElement("tr");

      const serialHeaderCell = document.createElement("th");
      serialHeaderCell.innerText = "S.No";
      headerRow.appendChild(serialHeaderCell);

      const headerCell = document.createElement("th");
      headerCell.innerText = "System Application Name";
      headerRow.appendChild(headerCell);

      table.appendChild(headerRow);

      data.forEach((item, index) => {
        const row = document.createElement("tr");

        const serialCell = document.createElement("td");
        serialCell.innerText = index + 1;
        row.appendChild(serialCell);

        const cell = document.createElement("td");
        cell.innerText = item.System_38_Applications_Name || 'N/A';
        row.appendChild(cell);

        table.appendChild(row);

        row.addEventListener("click", function () {
          openRowPopup(index);
        });
      });

      return table;
    }

    // Function to create a popup/modal for the table
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

    // Function to handle row click inside the modal table (additional data display in popup)
    function openRowPopup(index) {
      const item = allSystemApplication[index];
      const content = document.createElement("div");

      const details = `
        <h3>System Application Details</h3>
        <p><strong>Division Name:</strong> ${item.Division_Name || 'N/A'}</p>
        <p><strong>System Application Name:</strong> ${item.System_38_Applications_Name || 'N/A'}</p>
        <p><strong>Users:</strong> ${item.Users || 'N/A'}</p>
        <p><strong>Reports:</strong> ${item.Reports || 'N/A'}</p>
        <p><strong>Description:</strong> ${item.Description || 'N/A'}</p>
      `;

      content.innerHTML = details;
      const popup = createPopup(content);
      document.body.appendChild(popup);
    }

  });
