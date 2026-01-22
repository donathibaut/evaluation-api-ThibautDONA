import fetchData from "./fetch-data.js";
import listDetails from "./list-details.js";

async function dataDetails(dataName, dataId) {
    const data = await fetchData(dataName, dataId);
    console.log("Data :" + data);

    listDetails(data);

    // make appear details form
    const form = document.getElementById("form-container");
    form.style.display = "block";
};

window.dataDetails = dataDetails;