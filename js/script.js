//When DOM is loaded
$(function () {
    //focus on first input field
    $('input')[0].focus();
    $('#other-role').hide();
    $('#color option').hide();
    $('#payment option:eq(1)').prop('selected',true);
    $('#design option:eq(0)').prop('selected',true);
    showCCInfo();

});
let checkForm = {"name":false,
    "mail":false,
    "act":false,
    "ccmsg":false,
    "zip":false,
    "cvv":false
};

$('#name').keydown(function (e) {
    let usrInput = (e.target.value);

    if (usrInput === "") {
        $(this).css("border", "5px solid #f11");
        $(this).after("<p class='namemsg'>Enter Name!</p>");
    }
    else{
        $(this).css("border", "none");
        checkForm.name = true;
        $('.namemsg').hide();
    }
    // console.log(checkForm.name_field);
});

$('#mail').keydown(function (e) {
    let emailInput = (e.target.value);

    if (emailInput === "") {
        $(this).css("border", "5px solid #f11");
        $(this).after("<p class='mailmsg'>Enter an email!</p>");
    }
    else if (emailInput.indexOf('@')=== -1 && emailInput.indexOf('.com')=== -1){
        $(this).css("border", "5px solid #f11");
        $(this).after("<p class='mailmsg'>Enter a valid email!</p>");
    }
    else {
        $(this).css("border", "none");
        $('.mailmsg').hide();
        checkForm.mail = true;

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


//when other option selected create textarea with toggle
$('#title').change(function () {
    $('#other-title').hide();
    const currOption = $( "select#title option:checked" ).val();
    let otherRole = document.createElement('textarea');
    if (currOption === 'other') {
        $('#other-role').show();
    }
    else {
        console.log("da");
        $('#other-role').hide();
    }
});

$('#design').change(function (e) {
    const designValue = ($('select#design option:checked')).val();
    const colorLength = $('#color').length;
    console.log(designValue);

    if (designValue === 'js puns'){
        // $('#color option').show();
        $('.puns').show();
        $('.heart').hide();
    }
    else if (designValue === 'heart js'){
        // $('#color option').show();
        $('.heart').show();
        $('.puns').hide();
    }
    else if (designValue === 'Select Theme'){
        $('#color option').hide();
        $('.puns').hide();
        $('.heart').hide();
    }
});

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
        $('.actmsg').hide();
        $('.activities').css("border","none");
        checkForm.act = true;

    }
    else {
        $('#totalDiv').hide();
        $('.activities').after("<p class='actmsg'>Must check at least one!</p>");
        $('.activities').css("border","5px solid #f11");

    }
    console.log(totalDiv.textContent);

});

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

$('#cc-num').keydown(function (e) {
    $('.ccmsg').remove();
    const ccNum = e.target.value;
    let regex2 = /^[\d]{12,15}$/;
    // if (regex.test(ccNum) && ccNum.length < 17){
    //     console.log("13-16");
    // }
    if(!regex2.test(ccNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='ccmsg'>Enter 13-16 digits only!</p>");
    }
    else {
        checkForm.ccmsg = true;
        $(this).css("border","none");
    }
});

$('#zip').keydown(function (e) {
    $('.zipmsg').remove();
    const zipNum = e.target.value;
    const zipNumLength = zipNum.length;
    const containsLetters = /[a-zA-z]/;
    if (zipNumLength < 5 && !containsLetters.test(zipNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='zipmsg'>Need 5 digits!</p>");
    }
    else if (zipNumLength > 5 && !containsLetters.test(zipNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='zipmsg'>Over 5 digits!</p>");
    }
    else if (containsLetters.test(zipNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='zipmsg'>Only numbers!</p>");
    }
    else {
        $(this).css("border","none");
        checkForm.zip = true;
    }
});
$('#cvv').keydown(function (e) {
    $('.cvvmsg').remove();
    $(this).css("border","none");
    const cvvNum = e.target.value;
    const cvvNumLength = cvvNum.length;
    const containsLetters = /[a-zA-z]/;
    if (cvvNumLength < 3 && !containsLetters.test(cvvNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='cvvmsg'>Need 3 digits!</p>");
    }
    else if (cvvNumLength > 3 && !containsLetters.test(cvvNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='cvvmsg'>Over 3 digits!</p>");
    }
    else if (containsLetters.test(cvvNum)){
        $(this).css("border","5px solid #f11");
        $(this).after("<p class='cvvmsg'>Only numbers!</p>");
    }
    else if (cvvNumLength === 3){
        console.log("good");
        $('.cvvmsg').remove();
        $(this).css("border","none");
        checkForm.cvv = true;
    }
});

$('#form').submit(function (e) {

    for (var key in checkForm){
        console.log(key,checkForm[key]);
        if (checkForm[key] === false){
            $('.submitmsg').remove();
            e.preventDefault();
            $('#'+key).css("border", "5px solid #f11");
            $('header').after("<p class='submitmsg'>Please fix errors below</p>");
            $('html,body').scrollTop(0);
        }
    }
});
