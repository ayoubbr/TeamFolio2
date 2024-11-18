document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".team-members");

    fetch("./../data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error has occured");
            }
            return response.json();
        })
        .then(data => {
            const team = data.team;
            teamContainer.innerHTML = "";

            team.forEach(member => {

                const memberDiv = document.createElement("div");
                memberDiv.classList.add("team-member");

                memberDiv.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <div class="team-member-data">
                        <p>${member.name}</p>
                        <p>${member.role}</p>
                        <div class="team-member-buttons">
                            <a href="./team-member.html?id=${member.id}" class="main-button">More infos</a>
                            <a href="#" class="secondary-button">Leave a note</a>
                        </div>
                    </div>
                `;

                teamContainer.appendChild(memberDiv);
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            teamContainer.innerHTML =
                `<p class="team-failed-data">Failed to load team data. <br>check your code.</p>`;
            teamContainer.style.gridTemplateColumns = "1fr";
        });
});


// async function showMemberInfo(memberId) {
//     const members = await loadMemberData();
//     const member = members[memberId];

//     // Update the page content with member data
//     document.querySelector('.name-span').innerText = member.name;
//     document.querySelector('.developer').innerText = member.role;
//     document.querySelector('.first-p').innerText = member.description;
//     document.querySelector('.team-member-box-content p:nth-child(1)').innerText = member.email;
//     document.querySelector('.team-member-box-content p:nth-child(2)').innerText = member.location;
//     document.querySelector('.team-member-box-content p:nth-child(3)').innerText = member.website;

//     // Update skills dynamically
//     const skillsContainer = document.querySelector('.team-member-box-skills');
//     skillsContainer.innerHTML = '';
//     member.skills.forEach(skill => {
//         const skillSpan = document.createElement('span');
//         skillSpan.innerText = skill;
//         skillsContainer.appendChild(skillSpan);
//     });
// }