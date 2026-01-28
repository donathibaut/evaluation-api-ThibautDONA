/**
 * @file data-details.js
 * @module javascripts/module/data-details
 * @description details for db data
 */
import fetchData from "./fetch-data.js";
import listDetails from "./list-details.js";

/**
 * give details on data + form thanks to fetchData & listDetails
 * @function dataDetails
 * @async
 * @param {string} dataName - db object title
 * @param {string} dataId - db object ID
 * @returns {void}
 */
async function dataDetails(dataName, dataId) {
    const data = await fetchData(dataName, dataId);
    console.log("Data :", data);

    listDetails(data);

    // make appear details form
    const form = document.getElementById("form-container");
    form.style.display = "block";
};

window.dataDetails = dataDetails;