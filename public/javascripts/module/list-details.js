// give data from the database to about-info.ejs
export default function listDetails(data) {
    const ul = document.getElementById('form__list');

    // delete old <li>
    ul.innerHTML = "";

    const array = Object.keys(data);
    let htmlContent = "";

    if(data._id) {
        htmlContent += `<input type="hidden" name="_id" value="${data._id}">`;
    }

    for(let i = 0; i < array.length; i++) {
        // get the data value from an intermediate array
        let key = array[i];
        let value = data[key];

        // avoid modifying a sensitive data
        if(["_id", "__v", "createdAt", "updatedAt", "password"].includes(key)) continue;

        // define the type of value
        let type = "text";

        if(typeof value === "number") {
            type = "number";
        } else if(key.toLowerCase().includes("date")) {
            type = "datetime-local";

            // adapt the date to the good format
            if(value) {
                const newDate = new Date(value);
                value = newDate.toISOString().slice(0, 16);
            };
        };

        htmlContent += `<li><label>${key}</label><input type="${type}" name="${key}" value="${value}"></li>`;
    };

    ul.innerHTML = htmlContent;
};