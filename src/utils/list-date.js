/**
 * modify date appearance to DD/MM/YYYY
 * @function listDate
 * @param {Date} date 
 * @returns {string} - new date format
 */
function listDate(date) {
    const former = new Date(date);

    return former.toLocaleDateString('fr-FR');
};

module.exports = listDate;