let hgrades = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
let ogrades = ['o6', 'o5', 'o4', 'o3', 'o2', 'o1'];

async function loadOne(grade) {
    let foundIndex;
    let Hfound;
    let Ofound;

    if (hgrades.includes(grade)) {
        Hfound = hgrades.indexOf(grade);
        foundIndex = Hfound;
    }

    else {
        Ofound = ogrades.indexOf(grade);
        foundIndex = Ofound;
    }

    for (let i = 0; i < foundIndex + 1; i++) {
        if (Hfound != undefined) {
            console.log(hgrades[i]);
        }
        else if (ogrades != undefined) {
            console.log(ogrades[i]);
        }

        else {
            console.log("grade not found");
        }
        await new Promise(r => setTimeout(r, 500));
    }
}

loadOne('h4');