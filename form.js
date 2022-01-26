const countryList = ["select country","Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica",
    "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil","British Indian Ocean Territory (the)",
    "Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)",
    "Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia",
    "Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus",
    "Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
    "Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon",
    "Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana",
    "Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)",
    "Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
    "Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique",
    "Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)",
    "Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)",
    "New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island",    "Northern Mariana Islands (the)",    "Norway",    "Oman",    "Pakistan",    "Palau",    "Palestine, State of",
    "Panama",    "Papua New Guinea",    "Paraguay",    "Peru",    "Philippines (the)",    "Pitcairn",    "Poand",    "Portugal",    "Puerto Rico",    "Qatar",    "Republic of North Macedonia",    "Romania",    "Russian Federation (the)",    "Rwanda",    "Réunion",    "Saint Barthélemy",    "Saint Helena, Ascension and Tristan da Cunha",    "Saint Kitts and Nevis",    "Saint Lucia",
    "Saint Martin (French part)",    "Saint Pierre and Miquelon",    "Saint Vincent and the Grenadines",    "Samoa",    "San Marino",    "Sao Tome and Principe",
    "Saudi Arabia",    "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands",
    "South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic",
    "Taiwan (Province of China)","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)",
    "Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna",
    "Western Sahara","Yemen","Zambia","Zimbabwe"];

const states=["select state","Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"];


    for(let i=0;i<countryList.length;i++){
        let optionTag=document.createElement("option");
        optionTag.innerHTML=countryList[i];
        document.getElementById("country").appendChild(optionTag);
    }

    for(let i=0;i<states.length;i++){
        let optionTag=document.createElement("option");
        optionTag.innerHTML=states[i];
        document.getElementById("state").appendChild(optionTag);
    }
var tableElement=document.querySelector("table");

document.querySelector("button").setAttribute("id","submit");
let selectButton=document.querySelector("#submit");

selectButton.addEventListener("click",function(){
    var row=tableElement.insertRow();
    var td1=row.insertCell();
    td1.innerText=document.querySelector("#first").value;
    var td2=row.insertCell();
    td2.innerText=document.querySelector("#last").value;
    var td3=row.insertCell();
    td3.innerText=document.querySelector("#address").value;
    var td4=row.insertCell();
    td4.innerText=document.querySelector("#pin").value;
    
    var gender = document.getElementsByName('gender');
    var td5=row.insertCell();
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
            td5.innerText=gender[i].value;
    }
    var foodoptions=document.querySelector("#food");
    var td6=row.insertCell();
    for(i = 0; i < 2; i++) {
        if(foodoptions[i].selected)
            td6.innerHTML+=foodoptions[i].value+"<br>";
    }
    var td7=row.insertCell();
    td7.innerText=document.querySelector("#country").value;
    var td8=row.insertCell();
    td8.innerText=document.querySelector("#state").value;

    document.querySelector("#first").value="";
    document.querySelector("#last").value="";
    document.querySelector("#address").value="";
    document.querySelector("#pin").value="";
    document.querySelector("#male").checked=false;
    document.querySelector("#female").checked=false;
    document.querySelector("#food").value="";
    document.querySelector("#country").value="";
    document.querySelector("#state").value="";
})
