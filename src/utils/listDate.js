// modify date appearance to DD/MM/YYYY
function listDate(date) {
    const former = new Date(date);

    const newFormatDate = former.getUTCDate() + "/" + (former.getUTCMonth() + 1) + "/" + former.getUTCFullYear();

    return newFormatDate;
};

module.exports = listDate;