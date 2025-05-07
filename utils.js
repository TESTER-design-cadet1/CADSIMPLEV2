function formatTimestamp(ts) {
    return new Date(ts).toLocaleString();
}
function getRandomId() {
    return Math.random().toString(36).substr(2, 9);
}
