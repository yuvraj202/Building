var inputs = [];

function get_Paragraph_1() {

    for (var i = 1 ; i<= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" +i).value);
    }
    inputs.join(". ");
document.getElementById("show_1").innerHTML =  inputs.join(". ");

}

function get_Paragraph_2() {

    for (var i = 1 ; i<= 6; i++) {
        inputs.push(document.getElementById("para2_input_box_" +i).value);
    }
    inputs.join(". ");
document.getElementById("show_2").innerHTML =  inputs.join(". ");

}

