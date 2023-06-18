let clickBtn = document.querySelector('button'); //event for when button is clicked
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Event Listener");
    fetch("./degrees.json") //building the promise
        .then((response) => response.json()) //look into response class
        .then((data) => {
            console.log("Data", data);
            clickBtn.addEventListener('click', () => {
                const table = document.createElement("table");
                let tr = document.createElement("tr");
                let th1 = document.createElement("th");
                let th2 = document.createElement("th");
                let th3 = document.createElement("th");
                let th4 = document.createElement("th");
                let th5 = document.createElement("th");

                table.appendChild(tr);

                data.current_portfolios.forEach((el, data) => {
                    console.log("Row data", el, data);
                    tr = document.createElement("tr");
                    td1 = document.createElement("td");
                    td2 = document.createElement("td");
                    td3 = document.createElement("td");

                    content = document.createTextNode(el.Date);
                    td1.appendChild(content);
                    content = document.createTextNode(el.Details);
                    td2.appendChild(content);
                    content = document.createTextNode(el.Expedition);
                    td3.appendChild(content);
                    content = document.createTextNode(el.Ascent);
                    td4.appendChild(content);
                    content = document.createTextNode(el.Summit);
                    td5.appendChild(content);

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);

                    table.appendChild(tr);
                });
                document.body.appendChild(table);
            });
        });
});
