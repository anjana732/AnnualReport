ZOHO.CREATOR.init()
  .then(function () {
    console.log("Initializing and fetching data...");
    const applicationName = "ngrid-annual-report";

    let major_Duties = [];
    let minor_Duties = [];
    let interfaces = [];

    const config = {
      appName: applicationName,
      reportName: "Duties_and_Responsibilities_Report",
    };

    ZOHO.CREATOR.API.getAllRecords(config)
      .then(function (response) {
        console.log("API Duties and Responsibility: ", response);
        const records = response.data;

        if (records && records.length > 0) {
          records.forEach((record) => {
            const typeField = record.Type_field || "Unknown";
            const divisionName = record.Categories || "Unknown";

            if (typeField === "Major Duties & Responsibilities") {
              major_Duties.push(divisionName);
            } else if (typeField === "Minor Duties & Responsibilities") {
              minor_Duties.push(divisionName);
            } else if (typeField === "No of Interfaces with Others") {
              interfaces.push(divisionName);
            }
          });

          console.log("Major Duties Data:", major_Duties);
          console.log("Minor Duties Data:", minor_Duties);
          console.log("Interfaces Data:", interfaces);

/****************************************** Major Duties Chart Implementation **********************************************/

          const counts = {};
          major_Duties.forEach((item) => {
            counts[item] = (counts[item] || 0) + 1;
          });

          const X_AxisDataDivisionName = Object.keys(counts);
          const Y_AxisDataKeyAccountabilities = Object.values(counts);

          new Chart("major-duties-res", {
            type: "doughnut",
            data: {
              labels: X_AxisDataDivisionName,
              datasets: [{
                label: "Division Counts",
                data: Y_AxisDataKeyAccountabilities,
                backgroundColor: [
                  "rgba(255,99,132,0.6)",
                  "rgba(54,162,235,0.6)",
                  "rgba(255,206,86,0.6)",
                  "rgba(75,192,192,0.6)",
                  "rgba(153,102,255,0.6)",
                  "rgba(255,159,64,0.6)"
                ],
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Key Accountabilities by Division'
                }
              }
            }
          });

/****************************************** Major Duties Chart Implementation **********************************************/

          const minorDutiescounts = {};
          minor_Duties.forEach((item) => {
            minorDutiescounts[item] = (minorDutiescounts[item] || 0) + 1;
          });


          const X_AxisMinorDuty = Object.keys(minorDutiescounts);
          const Y_AxisMinorDuty = Object.values(minorDutiescounts);


          new Chart("monior-duties-res", {
            type: "doughnut",
            data: {
              labels: X_AxisMinorDuty,
              datasets: [{
                label: "Division Counts",
                data: Y_AxisMinorDuty,
                backgroundColor: [
                  "rgba(255,99,132,0.6)",
                  "rgba(54,162,235,0.6)",
                  "rgba(255,206,86,0.6)",
                  "rgba(75,192,192,0.6)",
                  "rgba(153,102,255,0.6)",
                  "rgba(255,159,64,0.6)"
                ],
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Key Accountabilities by Division'
                }
              }
            }
          });

/****************************************** Major Duties Chart Implementation **********************************************/

          const interfacescounts = {};
          interfaces.forEach((item) => {
            interfacescounts[item] = (interfacescounts[item] || 0) + 1;
          });


          const X_AxisInterfaces = Object.keys(interfacescounts);
          const Y_AxisInterfaces = Object.values(interfacescounts);


          new Chart("no-of-interface", {
            type: "doughnut",
            data: {
              labels: X_AxisInterfaces,
              datasets: [{
                label: "Division Counts",
                data: Y_AxisInterfaces,
                backgroundColor: [
                  "rgba(255,99,132,0.6)",
                  "rgba(54,162,235,0.6)",
                  "rgba(255,206,86,0.6)",
                  "rgba(75,192,192,0.6)",
                  "rgba(153,102,255,0.6)",
                  "rgba(255,159,64,0.6)"
                ],
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Key Accountabilities by Division'
                }
              }
            }
          });

        } else {
          console.log("No records found.");
        }
      })
      .catch(function (error) {
        console.error("Error fetching records: ", error);
        const message = document.createElement("p");
        message.innerText = "Failed to fetch data. Please try again later.";
        message.style.color = "red";
        document.body.appendChild(message);
      });
  });
