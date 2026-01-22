// modify date appearance to DD/MM/YYYY
function listDate(date) {
    const former = new Date(date);

    return former.toLocaleDateString('fr-FR');
};

module.exports = listDate;