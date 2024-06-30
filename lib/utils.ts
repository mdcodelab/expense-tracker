function formatNumberWithCommas(number:number):string {
    // Convert the number to a string
    const numStr = number.toString();
    
    // Use a regular expression to insert commas every 3 digits from the right
    const formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedStr;
}

export default formatNumberWithCommas;

