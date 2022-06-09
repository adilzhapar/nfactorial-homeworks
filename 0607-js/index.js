let obj = document.querySelector(".object");

const add = () => {
    
    let cntry = document.querySelector("#cntry");
    let army = document.querySelector("#army");
    let cmdr = document.querySelector("#cmdr");

    if(cntry.value != "" && cmdr.value != "" && cmdr.value != ""){
        let v = document.createElement("div");
        v.className = "emp " + cntry.value;


        let p1 = document.createElement("p");
        p1.innerHTML = cntry.value;
        p1.className = "jsp";

        let p2 = document.createElement("p");
        p2.innerHTML = army.value;
        p2.className = "jsp";

        let p3 = document.createElement("p");
        p3.innerHTML = cmdr.value;
        p3.className = "jsp";

        let d = document.createElement("div");
        d.className = cntry.value + "w";

        v.appendChild(p1);
        v.appendChild(p2);
        v.appendChild(p3);
        v.appendChild(d);
        obj.appendChild(v);

        cntry.value = "";
        army.value = "";
        cmdr.value = "";
    }else{
        alert("Empty input");
    }

}

const add_wrw = () => {
    let wrw = document.querySelector("#wrw"); // name of Warrior
    let wcnt = document.querySelector("#wrw-cnt"); // country for warrior
    let country = document.querySelector("."+ wcnt.value); // is exists such country
    if(country){
        let v = document.querySelector(`.${wcnt.value}w`);
        let pw = document.createElement("p");
        pw.className = "jspw";
        pw.innerHTML = wrw.value;
        v.appendChild(pw);
        
        wrw.value = "";
        wcnt.value = "";
    }else{
        alert("Nu such country");
    }
}

function adding(){
    if(event.key == 'Enter'){
        add();
    }
}

function adding_wrw(){
    if(event.key == 'Enter'){
        add_wrw();
    }
}

