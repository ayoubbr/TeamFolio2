
async function FetchAPI() {
    let url = "../data.json"
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    //console.log(json);
    select(json);

}
FetchAPI()

function showALL(json) {
    let Container = document.getElementById("theTeam");
    console.log(Container);

    Container.innerHTML = "";
    console.log(json);

    json.projects.forEach((projects) => {

        Container.innerHTML += `
        <div class="projectBlock"> 
      <img src=${projects.Image} alt="${projects.name}" class="project-img" />

      <div> 
      <h2>${projects.name}</h2>
            <p>${projects.description}</p>
            <p> ${projects.date}</p>
            <a href=`+ projects.link + `  class="SeeMore" >See More</a>
            </div>
            </div>
            `;

    });
}
function filterRecents(json) {
    let Container = document.getElementById("theProject");
    Container.innerHTML = "";

    json.projects.forEach((projects) => {
        if (projects.categorie == "récents") {

            Container.innerHTML += `
        <div class="projectBlock"> 
      <img src=${projects.Image} alt="${projects.name}" class="project-img" />

      <div> 
      <h2>${projects.name}</h2>
            <p>${projects.description}</p>
            <p> ${projects.date}</p>
            <a href="projectPage.html"  class="SeeMore">See More</a>
            </div>
            </div>
            `;
        }
    })

}

function filterpopular(json) {
    let Container = document.getElementById("theTeam");
    Container.innerHTML = "";

    json.projects.forEach((projects) => {
        if (projects.categorie == "les plus populaires") {

            Container.innerHTML += `
        <div class="projectBlock"> 
      <img src=${projects.Image} alt="${projects.name}" class="project-img" />

      <div> 
      <h2>${projects.name}</h2>
            <p>${projects.description}</p>
            <p> ${projects.date}</p>
            <a href="projectPage.html"  class="SeeMore" data-id="${member.id}">See More</a>
            </div>
            </div>
            `;
        }
    })

}



function showANDfilter(json, filterIndex) {
    if (filterIndex == 0) {
        showALL(json);
    } else if (filterIndex == 1) {
        filterRecents(json);
    } else if (filterIndex == 2) {
        filterpopular(json);
    }
}


function select(json) {
    const selectElement = document.getElementById("filterSelector");
    selectElement.addEventListener("change", (event) => {
        let filterIndex = parseInt(event.target.value, 10);
        showANDfilter(json, filterIndex)
    });

    showALL(json)
}


function details(json) {
    let DetailsContainer = document.getElementById("projectDetails");
    // console.log(DetailsContainer);

    DetailsContainer.innerHTML = "";
    // console.log(json);



    DetailsContainer.innerHTML += `
        <div> 
    <h1>${projects.name}</h1>

      <img src=${projects.Image} alt="${projects.name}" class="projectInDetails-img" />
   <h3>Responsable members</h3>
    <div id ="membersDetails"></div>
    <h3>Used technologies</h3>
    <div id ="UsedTechnologies"></div>
    <h3>description</h3>
    <p>${projects.description}</p>
    <h3>Avis</h3>
    <div id ="ProjectsAvis"></div>
    `;


            json.projects.programers.forEach((projects) => {
                let MembersContainer = document.getElementById("projectDetails");
                MembersContainer.innerHTML = "";

                MembersContainer.innerHTML += `
                  <p>${team.name}</p>
                `  })


                json.projects.forEach((projects) => {
                    let technologiesContainer = document.getElementById("UsedTechnologies");
                    technologiesContainer.innerHTML = "";
    
                    technologiesContainer.innerHTML += `
                      <p>${projects.technologies}</p>
                    `  })
                    

                    json.projects.forEach((projects) => {
                        let PAvisContainer = document.getElementById("ProjectsAvis");
                        PAvisContainer.innerHTML = "";
        
                        PAvisContainer.innerHTML += `
                          <p>${projects.Avis}</p>
                        `  })
                    }

                    details(json)