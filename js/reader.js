function readData() {
    var resultElement = document.getElementById("result");
    var data = document.getElementById("data").value;
    var formattedData = formatData(data);
    var qrDataParsed = parseData(formattedData);
    resultElement.value = qrDataParsed;
    reSizingTextArea(resultElement);
}

function reSizingTextArea(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

function formatData(data){
    var index = 0;
    var formattedData = [];
    for(var i = 0; i < 10; i++) {
        var firstColumn = data.substring(index, index + 2);
        index += 2
        var secondColumn = data.substring(index, index + 2);
        index += 2
        var thirdColumn = data.substring(index, index + parseInt(secondColumn));
        index += thirdColumn.length;
        formattedData.push([firstColumn, secondColumn, thirdColumn]);
    }
    return formattedData;
}

function parseData(data) {
    var parsedData = "";
    data.forEach(row => {
        parsedData += row.join(" ");
        parsedData += "\n";
    });
    return parsedData;
}