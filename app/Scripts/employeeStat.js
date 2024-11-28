// ZOHO.CREATOR.init().then(function () {
//   console.log("Zoho Creator Widget Initialized");
  
//   var applicationName = "ngrid-annual-report";
//   var employeeStatsConfig = {
//     appName: applicationName,
//     reportName: "All_Employee_Stats",
//   };

//   ZOHO.CREATOR.API.getAllRecords(employeeStatsConfig).then(function (response) {
//     let employeeStats = response.data;
//     console.log("Employee Stats:", employeeStats);

//     // Render KPI cards
//     renderKPICards(employeeStats);
//   });
// });

// function renderKPICards(stats) {
//   const container = document.getElementById("kpi-cards-container");

//   // Style the container for full-width and responsive layout
//   container.style.display = "flex";
//   container.style.justifyContent = "space-between"; // Distribute cards evenly
//   container.style.gap = "20px"; // Add space between cards
//   container.style.width = "100%"; // Ensure container uses full width
//   container.style.flexWrap = "wrap"; // Allow wrapping for smaller screens
//   container.style.padding = "10px"; // Add padding to the container

//   // Clear any previous cards in the container
//   container.innerHTML = '';

//   // Loop through stats and create cards
//   stats.forEach((stat) => {
//     container.appendChild(createKPICard("Professional Certificates", stat.Professional_Certificates));
//     container.appendChild(createKPICard("Workshops Attended", stat.Workshops_Attended));
//     container.appendChild(createKPICard("Training Attended", stat.Training_Attended));
//   });
// }

// function createKPICard(title, value) {
//   const card = document.createElement("div");

//   // Style the card
//   card.style.border = "1px solid #ddd";
//   card.style.borderRadius = "8px";
//   card.style.padding = "20px";
//   card.style.textAlign = "center";
//   card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
//   card.style.flex = "1"; // Allow cards to grow equally
//   card.style.minWidth = "200px"; // Set minimum width for each card
//   card.style.maxWidth = "300px"; // Limit the maximum width of each card
//   card.style.marginBottom = "20px"; // Add space below cards

//   // Add content to the card
//   card.innerHTML = `
//     <h3 style="margin-bottom: 10px; color: #333;">${title}</h3>
//     <p style="font-size: 24px; font-weight: bold; color: #0073e6;">${value}</p>
//   `;

//   return card;
// }


ZOHO.CREATOR.init().then(function () {
  console.log("Zoho Creator Widget Initialized");
  
  var applicationName = "ngrid-annual-report";
  var employeeStatsConfig = {
    appName: applicationName,
    reportName: "All_Employee_Stats",
  };

  ZOHO.CREATOR.API.getAllRecords(employeeStatsConfig).then(function (response) {
    let employeeStats = response.data;
    console.log("Employee Stats:", employeeStats);

    // Render KPI cards
    renderKPICards(employeeStats);
  });
});

function renderKPICards(stats) {
  const container = document.getElementById("kpi-cards-container");

  // Style the container for full-width and responsive layout
  container.style.display = "flex";
  container.style.justifyContent = "space-between"; // Distribute cards evenly
  container.style.gap = "20px"; // Add space between cards
  container.style.width = "100%"; // Ensure container uses full width
  container.style.flexWrap = "wrap"; // Allow wrapping for smaller screens
  container.style.padding = "10px"; // Add padding to the container

  // Clear any previous cards in the container
  container.innerHTML = '';

  // Loop through stats and create cards
  stats.forEach((stat) => {
    container.appendChild(createKPICard("Professional Certificates", stat.Professional_Certificates));
    container.appendChild(createKPICard("Workshops Attended", stat.Workshops_Attended));
    container.appendChild(createKPICard("Training Attended", stat.Training_Attended));
  });
}

function createKPICard(title, value) {
  const card = document.createElement("div");

  // Styling the card
  card.style.backgroundColor = "#fff";
  card.style.borderRadius = "15px";
  card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  card.style.padding = "20px";
  card.style.textAlign = "center";
  card.style.flex = "1"; // Allow cards to grow equally
  card.style.minWidth = "280px"; // Set minimum width for each card
  card.style.maxWidth = "800px"; // Limit the maximum width of each card
  card.style.marginBottom = "20px"; // Add space below cards
  card.style.transition = "all 0.3s ease-in-out"; // Smooth transition for hover effect
  card.style.cursor = "pointer"; // Make the card clickable
  card.style.border = "1px solid #f0f0f0"; // Mild border around the card
  card.style.borderTop = "5px solid #007bff"; // Border on top with a color accent

  // Hover effect for card
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)"; // Scale up slightly on hover
    card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)"; // Darker shadow on hover
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)"; // Reset the scale
    card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"; // Reset shadow
  });

  // Add content to the card
  card.innerHTML = `
    <h3 style="margin-bottom: 10px; color: #333; font-size: 1.4rem; font-weight: bold; letter-spacing: 1px;">${title}</h3>
    <p style="font-size: 28px; font-weight: bold; color: #ff7f50; background: linear-gradient(45deg, #ff7f50, #ff6347); -webkit-background-clip: text; color: transparent; margin-bottom: 15px;">${value}</p>
  `;

  return card;
}

