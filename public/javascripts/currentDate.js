const currentDate = () => {
    const area = document.getElementById('dateToday');

    // toLocaleString -> undefined / we need the user's local date
    const date = new Date().toLocaleString(undefined, {
        day : '2-digit',
        month : '2-digit',
        year : 'numeric'
    });

    area.textContent = date;
};

window.onload = currentDate;