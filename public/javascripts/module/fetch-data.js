/**
 * @file fetch-data.js
 * @module javascripts/module/fetch-data
 * @description fetch data
 */
/**
 * fetch data from the database
 * @function fetchData
 * @async
 * @param {string} dataName - db object title
 * @param {string} dataId - db object ID
 * @returns {Object} - (*.json)
 */
export default async function fetchData(dataName, dataId) {
    const response = await fetch(`/${dataName}/api/${dataId}`);
    const json = await response.json();
    return json;
}