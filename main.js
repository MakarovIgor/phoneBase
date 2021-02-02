function init() {
    // читаем файл
    $.getJSON("phone.json", phoneOut);
}

function phoneOut(data) {
    // выводим на страницу
    console.log(data);
    let out = ""
    out += '<tr class="phone1">' +
        '            <td id="pn">Phone Number</td>\n' +
        '            <td id="name">Name</td>\n' +
        '            <td id="fn">Female Name</td>\n' +
        '            <td id="st">Street</td>\n' +
        '            <td id="hn">House Number</td>\n' +
        '            <td id="fl">Flat</td>\n' +
        '      </tr>';
    for (let key in data) {
        out += ' <tr class="phone1" data-id="'+ key +'">' +
            '<td class="pn">' + data[key].number + '</td>\n' +
            '<td class="name">' + data[key].name + '</td>\n' +
            '<td class="fn">' + data[key].femaleName + '</td>\n ' +
            '<td class="st">' + data[key].street + '</td>\n ' +
            '<td class="hn">' + data[key].houseNumber + '</td>\n' +
            ' <td class="fl">' + data[key].flat + '</td>\n' +
            '</tr>';

    }
    $('.out').html(out);
    $('#pn').on('click', sortByNumber);
    $('#name').on('click', sortByName);
    $('#fn').on('click', sortByFemaleName);
    $('#st').on('click', sortByStreet);
    $('#hn').on('click', sortHouseNumber);
    $('#fl').on('click', sortByFlat);
}

function sortByNumber(){

    console.log("1");
}
function sortByName(){
    console.log("data");
}

function sortByFemaleName(data){
    console.log(2);
}

function sortByStreet(data){
    console.log(12);
}

function sortHouseNumber(data){
    console.log(12);
}

function sortByFlat(){
    let wew = $.getJSON( "phone.json", function() {
        console.log( "success" );
    })
    if(wew !==null)
    {console.log(wew)}
    else{console.log("dog")}

    /*data.sort(byField("flat"));
    console.log(data);
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}*/

}




$(document).ready(function () {
    init();
});
