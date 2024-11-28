ZOHO.CREATOR.init()
    .then(function () {
        console.log("Testing");
        var applicationName = "ngrid-annual-report";

        let data = [];
        let X_AxisDataEmployeeType = [];
        let Y_AxisDataEmployeeCount = [];

        var employeeSheetConfig = {
            appName: applicationName,
            reportName: "Type_of_Employee_Sheet1_Report",
        };

        ZOHO.CREATOR.API.getAllRecords(employeeSheetConfig).then(function (response) {
            console.log(response);
            let employeeSheet = response.data;
            console.log("All Employee Sheet Data: ", employeeSheet);

            if (employeeSheet && employeeSheet.length > 0) {
                console.log("Processing Employee Data...");

                // Extract data for the chart
                data = employeeSheet.map(element => element.Type_of_Employee || "Unknown");
                X_AxisDataEmployeeType = [...new Set(data)];
                Y_AxisDataEmployeeCount = X_AxisDataEmployeeType.map(type =>
                    data.filter(item => item === type).length
                );

                console.log("X_AxisDataEmployeeType (Unique Types):", X_AxisDataEmployeeType);
                console.log("Y_AxisDataEmployeeCount (Counts):", Y_AxisDataEmployeeCount);

                /********************************************* Chart Implementation ************************************************/
                const xValues = X_AxisDataEmployeeType;
                const yValues = Y_AxisDataEmployeeCount;
                new Chart("employeeChart", {
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
                            borderColor: "rgba(0,0,0,0.1)",
                            data: yValues,
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
                                text: 'Employees by Type'
                            }
                        }
                    }
                });
            } else {
                console.error("No employee data available.");
            }
        }).catch(function (error) {
            console.error("Error fetching employee data:", error);
        });
    });
