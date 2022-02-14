const theSelect = document.getElementById('mphb_room_details-0-adults');
const theSelectChild = document.getElementById('mphb_room_details-0-children');
let condition = true;
let condition2 = true;

if (theSelect != null) {
    if (theSelect.length > 11) {
        condition = true; 
        console.log(`value True`)
    }
    else {
        condition = false;
        console.log(`value False 1`)
    }
}
else {
    condition = false;
    console.log(`value False 2`)
}
if (condition) {

    console.log(`value`, theSelect.length, theSelect)

    let options = theSelect.getElementsByTagName('OPTION');
    console.log(`value`, options.length, options)

    for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML < 10) {
            theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i
        }
    }
}

if (theSelectChild != null) {
    condition2 = true; // your condition
}
else {
    condition2 = false;
    console.log(`Child False 2`)
}
if (condition2) {
    document.getElementById('mphb_room_details-0-adults').addEventListener("change", () => {
        setTimeout(() => {
            const optionsChild = theSelectChild.getElementsByTagName('OPTION');
            console.log(` Child length #1`, optionsChild.length);

            for (let i = 0; i < optionsChild.length; i++) {
                if (optionsChild.length < 3) {
                    console.log(` Child 2 value`, optionsChild[i].value);
                    document.getElementById('mphb_room_details-0-children').value = '0';
                }
            }
            console.log("Input Select", theSelect.value, ` Child 2`, optionsChild.length);
        }, 200);
    })
}