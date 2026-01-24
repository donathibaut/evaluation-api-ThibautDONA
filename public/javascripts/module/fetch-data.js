// fetch data from the database
export default async function fetchData(dataName, dataId) {
    const response = await fetch(`/${dataName}/api/${dataId}`);
    const json = await response.json();
    return json;
}