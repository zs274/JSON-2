const output = document.getElementById('output');

document.getElementById('searchInput').addEventListener("input", function (event) {
    const search = event.target.value;

    renderKings(search);

})


function renderKings(search) {
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
        .then(response => {

            output.innerHTML = "";


            for (let kings of response.data) {

                // const kings = response.data[0];
                console.log(kings);


                if(search && !kings.nm.toLowerCase().startsWith(search.toLowerCase())) continue;


                const kingDiv = document.createElement("div");

                const kingName = document.createElement("h2");
                kingName.innerText = kings.nm;
                kingDiv.appendChild(kingName);

                const kingHouse = document.createElement("p");
                kingHouse.innerText = kings.hse;
                kingDiv.appendChild(kingHouse);

                const kingCity = document.createElement("p");
                kingCity.innerText = kings.cty;
                kingDiv.appendChild(kingCity);

                const kingYears = document.createElement("p");
                kingYears.innerText = kings.yrs;
                kingDiv.appendChild(kingYears);

                output.appendChild(kingDiv);
            }



        }).catch(err => console.error(err))
}
