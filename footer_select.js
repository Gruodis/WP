/*

Select 0 if Max adults selected

*/

const theSelect = document.getElementById('mphb_room_details-0-adults');

let condition = true;
if (theSelect != null) {



    if (theSelect.length > 11) {
        condition = true; // your condition
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
const theSelectChild = document.getElementById('mphb_room_details-0-children');
let condition2 = true;
if (theSelectChild != null) {

    condition = true; // your condition

}
else {
    condition = false;
    console.log(`Child False 2`)
}
if (condition2) {
    document.getElementById('mphb_room_details-0-adults').addEventListener("change", () => {
        setTimeout(() => {
            const optionsChild = theSelectChild.getElementsByTagName('OPTION');
            console.log(` Child length #1`, optionsChild.length);
            for (let i = 0; i < optionsChild.length; i++) {
                if (optionsChild.length < 3) {
                    //theSelect.removeChild(optionsChild[i]);
                    //i--; // options have now less element, then decrease i
                    console.log(` Child 2 value`, optionsChild[i].value);
                    document.getElementById('mphb_room_details-0-children').value = '0';
                }
            }
            console.log("Input Select", theSelect.value, ` Child 2`, optionsChild.length);
        }, 100);
    })
}