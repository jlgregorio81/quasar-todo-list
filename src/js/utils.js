const formatDate = (timeStampDate) => {
    let date = new Date(parseInt(timeStampDate));
    return date.toDateString();
};


export { formatDate }