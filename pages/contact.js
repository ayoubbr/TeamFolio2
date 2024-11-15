fetch('../contactJson.json').then(response => response.json()).then(ansoir => {
    
    document.querySelector('form').addEventListener("submit", (event) => {
        event.preventDefault();
    
        let i, exist = 0;
        const nameDeUser = document.getElementById("content-name").value;
        const emailDeUser = document.getElementById("content-email").value;
        const nameKeys = Object.keys (ansoir.userName); // all names of key
        console.log(nameKeys);
        
        
        
        for ( i = 0; i < nameKeys.length; i++){
            // console.log(ansoir.userName.nameKeys[i]);
            if ((nameKeys[i] === nameDeUser) && (ansoir.userName[nameKeys[i]] === emailDeUser)){
                exist++;
            }
        }
    
        if (exist !== 0){
            // hide hide l kard
            // location.assign("https://www.youtube.com/");
    
            document.querySelector(".waitSande").style.display = "block";
            document.querySelector('img').style.display = "none";
        }
        else{
            const arryFoo = document.querySelectorAll(".foo");
            const Perror = document.querySelector(".erroreMessage");
            Perror.innerHTML = "your name or email false";
            Perror.style.color = "red";
            for (i = 0; i < arryFoo.length; i++){
                arryFoo[i].style.color = "red";
            }
    
        }
    });
    
    
    
    
    });
    