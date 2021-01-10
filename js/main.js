var playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];

    function list() {
        let listNumber = document.createElement("OL");
        listNumber.setAttribute("id", "myOl");
        cleanFild()
         document.getElementById("list-song").appendChild(listNumber);
        for (let i in playList) {
            let li = document.createElement("LI");
            let text = document.createTextNode(`${playList[i].author} - ${playList[i].song}`);
            li.appendChild(text);
            document.getElementById("myOl").appendChild(li);
        }
    }
    function cleanFild() {
        let compareClean = document.getElementById("list-song");
        while (compareClean.firstChild) {
            compareClean.removeChild(compareClean.firstChild);
        }
    }
// светофор
 function red() {
    if(document.getElementById('red').classList.contains('circleBGColor1')){
        document.getElementById('red').classList.remove('circleBGColor1');
    } else {
        document.getElementById('red').classList.add('circleBGColor1');
        document.getElementById('yellow').classList.remove('circleBGColor2');
        document.getElementById('green').classList.remove('circleBGColor3');
    }
 }
 function yellow() {
    if(document.getElementById('yellow').classList.contains('circleBGColor2')){
        document.getElementById('yellow').classList.remove('circleBGColor2');
    } else {
        document.getElementById('yellow').classList.add('circleBGColor2');
        document.getElementById('red').classList.remove('circleBGColor1');
        document.getElementById('green').classList.remove('circleBGColor3');
    }
 }
 function green() {
    if(document.getElementById('green').classList.contains('circleBGColor3')){
        document.getElementById('green').classList.remove('circleBGColor3');
    } else {
        document.getElementById('green').classList.add('circleBGColor3');
        document.getElementById('yellow').classList.remove('circleBGColor2');
        document.getElementById('red').classList.remove('circleBGColor1');
    }
 }