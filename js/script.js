//When DOM is loaded
$(function () {
    //focus on first input field
    $('input')[0].focus();
    $('#color option').hide();

});

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
