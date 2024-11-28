ZOHO.CREATOR.init()
    .then(function () {
        console.log("Testing");

        // Injecting custom styles for hover animation and close button
  // Injecting custom styles for hover animation and close button
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
            border-radius: 8px;
        }

        /* Table Styling */
        .table-bordered {
            width: 100%;
            border-collapse: collapse;
        }
        
        .table-bordered th, .table-bordered td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }

        .table-striped tr:nth-child(odd) {
            background-color: #f9f9f9;
        }

        /* Hover effect on table rows with animation */
        .table-hover tbody tr {
            transition: all 0.3s ease !important;  /* Smooth transition */
        }

        .table-hover tbody tr:hover {
            background-color: #b3e0ff !important;  /* Light blue */
            cursor: pointer !important;  /* Pointer cursor on hover */
            transform: scale(1.05) !important;  /* Slight scaling effect on hover */
        }

        /* Close button style */
        .popup-container button {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .popup-container button:hover {
            background-color: #d32f2f;
        }
    `;
    document.head.appendChild(style);
}

// Inject the hover styles
injectStyles();


        var applicationName = "ngrid-annual-report";

        let data = [];
        let X_AxisDataProjectStatus = [];
        let Y_AxisDataProjectStatus = [];
        let count = 0;
        let projectName = [];

        var allProjectsConfig = {
            appName: applicationName,
            reportName: "All_Projects",
        };

        ZOHO.CREATOR.API.getAllRecords(allProjectsConfig).then(function (response) {
            console.log(response);
            let allProject = response.data;
            console.log("All Projects Stat: ", allProject);
            count = allProject.length;

            allProject.forEach(element => {
                projectName.push(element.Project_Name);
            });

            if (allProject && allProject.length > 0) {
                console.log("All Projects Data: ", allProject);

                data = allProject.map(element => element.Status || "Unknown");
                X_AxisDataProjectStatus = [...new Set(data)];
                Y_AxisDataProjectStatus = X_AxisDataProjectStatus.map(status =>
                    data.filter(item => item === status).length
                );

                console.log("X_AxisDataProjectStatus (Unique Statuses):", X_AxisDataProjectStatus);
                console.log("Y_AxisDataProjectStatus (Counts):", Y_AxisDataProjectStatus);

                /********************************************* Adding Table *****************************************/
                function createTable(data, details) {
                    const table = document.createElement("table");
                    table.setAttribute("class", "table table-bordered table-hover table-striped");  // Added Bootstrap classes for styling
                
                    const headerRow = document.createElement("tr");
                
                    const headerSerialCell = document.createElement("th");
                    headerSerialCell.innerText = "S.No";
                    headerRow.appendChild(headerSerialCell);
                
                    const headerNameCell = document.createElement("th");
                    headerNameCell.innerText = "Project Name";
                    headerRow.appendChild(headerNameCell);
                
                    table.appendChild(headerRow);
                
                    data.forEach((item, index) => {
                        const row = document.createElement("tr");
                
                        const serialCell = document.createElement("td");
                        serialCell.innerText = index + 1;
                        row.appendChild(serialCell);
                
                        const nameCell = document.createElement("td");
                        nameCell.innerText = item.Project_Name || "Unnamed Project";
                        row.appendChild(nameCell);
                
                        row.addEventListener("click", () => {
                            const detailContent = document.createElement("div");
                
                            // Add Bootstrap modal-like styling and structure to the detailContent
                            detailContent.innerHTML = `
                                <div class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Details for ${item.Project_Name}</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p><strong>Due Date:</strong> ${item.Due_Date || "N/A"}</p>
                                                <p><strong>Start Date:</strong> ${item.Start_Date || "N/A"}</p>
                                                <p><strong>Status:</strong> ${item.Status || "Unknown"}</p>
                                                <p><strong>Division Name:</strong> ${item.Division_Name || "N/A"}</p>
                                                <p><strong>Project Manager:</strong> ${item.Project_Manager || "N/A"}</p>
                                                <p><strong>Project Owner:</strong> ${item.Project_Owner || "N/A"}</p>
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
                
                            // Add event listener to close modal when clicking close button or background
                            const closeButton = detailContent.querySelector(".btn-close");
                            closeButton.addEventListener("click", () => {
                                detailContent.remove();  // Remove the modal when the close button is clicked
                            });
                
                            // Also, remove the modal if clicking outside the modal dialog
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
                    popup.setAttribute("class", "popup-container"); // Ensure class is applied for styles

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

                document.getElementById("project").addEventListener("click", () => {
                    const table = createTable(response.data, response.data); 
                    const popup = createPopup(table);
                    document.body.appendChild(popup);
                });


                /********************************************* Achievement count display  ************************************************/

                let ProjectCount = document.getElementById('project-count');
                ProjectCount.innerHTML = `${count}`;

                /********************************************* Charts Implementation Project By Status ************************************************/
                const xValues = X_AxisDataProjectStatus;
                const yValues = Y_AxisDataProjectStatus;
                new Chart("projects", {
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
                                text: 'Projects by Status'
                            }
                        }
                    }
                });

                /********************************************* Charts Implementation Project By Manager ************************************************/
                const projectsByManager = allProject.reduce((acc, project) => {
                    const manager = project.Project_Manager || "Unknown";
                    if (!acc[manager]) acc[manager] = [];
                    acc[manager].push(project.Project_Name || "Unnamed Project");
                    return acc;
                }, {});

                console.log("Projects Grouped by Manager:", projectsByManager);

                // Prepare data for the bar chart
                const managers = Object.keys(projectsByManager); // X-axis: Project_Manager
                const datasets = managers.map((manager, index) => ({
                    label: manager,
                    data: managers.map((_, i) => (i === index ? projectsByManager[manager].length : 0)),
                    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
                    borderColor: `rgba(0,0,0,0.1)`,
                }));

                console.log("Datasets for Chart:", datasets);

                const ctx = document.getElementById("projectsBarGraph").getContext("2d");
                new Chart(ctx, {
                    type: "bar", // Horizontal bar chart
                    data: {
                        labels: managers, // X-axis labels (managers displayed vertically)
                        datasets: datasets,
                    },
                    options: {
                        indexAxis: "y", // Makes the chart horizontal
                        responsive: true,
                        maintainAspectRatio: false, // Allows the chart to stretch and fit the container
                        plugins: {
                            legend: {
                                display: false, // Hide legend
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        // Display project names as tooltip
                                        const manager = managers[context.dataIndex];
                                        const projects = projectsByManager[manager];
                                        return `Projects: ${projects.join(", ")}`;
                                    },
                                },
                            },
                            title: {
                                display: true,
                                text: "Projects by Manager",
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Number of Projects", // X-axis title (horizontal axis now)
                                },
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Project Manager", // Y-axis title (vertical axis now)
                                },
                            },
                        },
                        elements: {
                            bar: {
                                borderRadius: 5, // Rounded corners for bars
                                barThickness: 30, // Adjust the bar thickness
                            },
                        },
                        layout: {
                            padding: {
                                top: 20, 
                                bottom: 20, 
                            },
                        },
                    },
                });
            } else {
                console.error("No project data available.");
            }
        }).catch(function (error) {
            console.error("Error fetching projects:", error);
        });
    });
