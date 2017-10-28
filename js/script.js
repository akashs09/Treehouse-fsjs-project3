//When DOM is loaded
$(function () {
    //focus on first input field
    $('input')[0].focus();
    $('#color option').hide();
    $('#payment option:eq(1)').prop('selected',true);
    showCCInfo();

});
let checkForm = {"name_field":false,
    "email_field":false,
    "activity_field":false,
    "credit_field:":false
};
// $('#name').change(function (e) {
//     let usrInput = (e.target.value);
//     console.log(usrInput.length);
//     if (usrInput.length === 0){
//         console.log("empty");
//         $(this).css("border","red");
//     }
// });
$('#name').keydown(function (e) {
    let usrInput = (e.target.value);

    if (usrInput === "") {
        $(this).css("border", "5px solid #f11");

    }
    else{
        $(this).css("border", "none");
        checkForm.name_field = true;
    }
    console.log(checkForm.name_field);
});

$('#mail').keydown(function (e) {
    let emailInput = (e.target.value);
    console.log(emailInput);
    let whitespace = new RegExp('\s');
    let em = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');
    if (whitespace.test(emailInput)){
        console.log("Please Enter an email address");
    }
    else if (em.test(emailInput)){
        console.log("Valid Email address");
    }
});
function showCCInfo(){
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();
}
function showpaypalInfo(){
    $('#credit-card').hide();
    $('#paypal').show();
    $('#bitcoin').hide();
}
function showbitcoinInfo(){
    $('#credit-card').hide();
    $('#paypal').hide();
    $('#bitcoin').show();
}
const jobRole = document.querySelector('#title');
const basicInfo = document.querySelectorAll('fieldset')[0];
// jobRole.addEventListener('change',function(){
//     $(this option:selected)
// });

//when other option selected create textarea with toggle
$('#title').change(function () {
    const currOption = $( "select#title option:checked" ).val();
    let otherRole = document.createElement('textarea');
    if (currOption === 'other') {
        otherRole.setAttribute("id","other-title");
        otherRole.setAttribute("placeholder", "Your Job Role");
        basicInfo.appendChild(otherRole);
    }
    else {
        $('#other-title').remove();
    }
});

// $('#design').change(function (e) {
//     const designValue = ($('select#design option:checked'));
//     const colorLength = $('#color').length;
//     console.log(designValue.val());
//     console.log(e.target[1]);
//     console.log((e.target));
//     if (designValue.val() === 'js puns') {
//
//         $('#color [value=js puns]').show();
//         console.log("fucjing show");
//         // $('#color option:eq(0)').show();
//         // showPunColors('Puns',colorLength);
//     }
//     else if (designValue.val() === 'Select Theme')
//     {
//         $('#color option').hide();
//     }
// });

// function showPunColors(key,l) {
//     console.log($('select#color option')[2].textContent);
//     console.log("Gold".indexOf($('select#color option')[2].textContent));
//     for(let i =0; i < l; i++) {
//         if (key.indexOf($('select#color option')[i].innerHTML) > -1) {
//             console.log($('select#color').innerHTML);
//         }
//     }
// }
const activities = document.querySelector('.activities');
const totalDiv = document.createElement('div');
totalDiv.setAttribute("id", "totalDiv");
activities.appendChild(totalDiv);

activities.addEventListener('change', (e) => {
    // const str = e.target.parentNode.textContent
    // totalDiv.setAttribute("class", "is-hidden");
    const inputs = $('.activities input');
    const labels = $('.activities label');
    let total=0;

    if (inputs[1].checked) {
        inputs[3].setAttribute("disabled","disabled");
    }
    else {
        inputs[3].removeAttribute("disabled");
    }
    if(inputs[3].checked) {
        inputs[1].setAttribute("disabled","disabled");
    }
    else {
        inputs[1].removeAttribute("disabled");
    }
    if (inputs[2].checked) {
        inputs[4].setAttribute("disabled","disabled");
    }
    else {
        inputs[4].removeAttribute("disabled");
    }
    if(inputs[4].checked) {
        inputs[2].setAttribute("disabled","disabled");
    }
    else {
        inputs[2].removeAttribute("disabled");
    }

    for (let i =0; i < inputs.length; i++) {
        if(inputs[i].checked){
            let str = labels[i].textContent;
            total +=parseInt(str.substring(str.indexOf("$")+1));
        }
    }

    if (total > 0) {
        totalDiv.textContent = "Total: $"+total;
        $('#totalDiv').show();

    }
    else {
        $('#totalDiv').hide();
    }
    console.log(totalDiv.textContent);

});

//do a case switch and add id to paypal and bitcoin divs
// $('fieldset').eq(3).change(function (e) {
//    console.log(e.target);
// });

$('#payment').change(function (e) {
    const paymentOption = $( "select#payment option:checked" ).val();
    console.log(paymentOption);
    if (paymentOption === 'credit card' || paymentOption ==='select_method'){
        showCCInfo();
    }
    else if (paymentOption === "paypal") {
       showpaypalInfo();
    }
    else{
        showbitcoinInfo();
    }
});