https://lifeinsuranceuat.adityabirlacapital.com/buyonline/calculators/ask/term-insurance-premium-calculator-quote

//Landing
dataLayer.push({
  'event':'absli_custom_event',
  'eventCategory':'Anmol Suraksha page landing',
  'eventAction':'ABSLI Anmol Suraksha plan',
  'eventLabel':'Landed'
 });

var gc_age, gc_gen, gc_incRange, gc_lifeCoverAmt, gc_planName, gc_premAmount, gc_premiumPayingTermOption, gc_smoker, gc_term;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

 //Know more

var knowMore=document.querySelectorAll('div.accord-parent.btn-accordion h3 a.accord-link');
for(var foo=0;foo<knowMore.length;foo++){
    knowMore[foo].addEventListener('click',function(){
        dataLayer.push({
            'event':'absli_custom_event',
            'eventCategory':'Anmol Suraksha page landing',
            'eventAction':'ABSLI Anmol Suraksha plan',
            'eventLabel': this.innerText.trim()
           });
    });
}

// Download Brochure

var downloadBrochure = document.querySelectorAll('div.btn-accordion.download-block h3 a');
for(var foo=0;foo<downloadBrochure.length;foo++){
    downloadBrochure[foo].addEventListener('click',function(){
        dataLayer.push({
            'event':'absli_custom_event',
            'eventCategory':'Anmol Suraksha page landing',
            'eventAction':'ABSLI Anmol Suraksha plan',
            'eventLabel': this.innerText.trim()
           });
    });
}

// Disclaimer

var disclaimer = document.querySelectorAll('div.accord-parent.disclaimer-block h3 a');
for(var foo=0;foo<desclaimer.length;foo++){
    disclaimer[foo].addEventListener('click',function(){
        dataLayer.push({
            'event':'absli_custom_event',
            'eventCategory':'Anmol Suraksha page landing',
            'eventAction':'ABSLI Anmol Suraksha plan',
            'eventLabel': this.innerText.trim()
           });
    });
}

// get your quote back

var quoteBack = document.querySelector('#portlet_abslicommonlandingpage_WAR_abslicommonlandingpageportlet h2 a');
quoteBack.addEventListener('click',function(){
    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha page landing',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Get your quote back'
       });
});

//DOB

var genderSponsor;

var dob=document.querySelector('#dob-field');
dob.addEventListener('change',function(){
    var age=document.querySelector('#age').innerText.replace('years','').trim();
    setCookie('age',age);
    //Gender Selection

    var gender=document.getElementsByName('customerGender');
    for(var foo=0;foo<gender.length;foo++){
        if(gender[foo].type="radio") {
            if(gender[foo].checked)
                genderSponsor=gender[foo].value;
                setCookie('gen',genderSponsor);
        }
    }

    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha Quote',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Edit DOB',
        'gender': genderSponsor,
        'ageProposer': age
       });
});

// Get Quote

var getQuote=document.querySelector('#process-form');
getQuote.addEventListener('click',function(){
    var gc_age=getCookie('age');
    var gc_gen=getCookie('gen');
    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha Quote',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Get Free Quote',
        'gender': gc_gen,
        'ageProposer': gc_age
    });
});


// Filling Income

var incomeFilling=document.querySelector('#income');
incomeFilling.addEventListener('change',function(){
    var gc_age=getCookie('age');
    var gc_gen=getCookie('gen');
    var inc=parseInt(this.value.replace(/,/g,''));
    var incRange;
    if(inc>1500000){
        incRange = '> 15L';
    }else if(inc>1000000 && inc<1500000){
        incRange = '10L - 15L';
    }else if(inc>750000 && inc<1000000){
        incRange = '7.5L - 10L';
    }else if(inc<750000){
        incRange = '< 7.5L';
    }

    setCookie('incomeRange',incRange);

    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha Annual Income Popup',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Annual Income',
        'gender': gc_gen,
        'ageProposer': gc_age,
        'incomeRange': incRange
    });
});

// Proceed Annual Income 

var incomeBtn=document.querySelector('#incomeBtn');
incomeBtn.addEventListener('click',function(){
    var gc_age=getCookie('age');
    var gc_gen=getCookie('gen');
    var gc_incRange=getCookie('incomeRange');
    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha Annual Income Popup',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Annual Income Proceed',
        'gender': gc_gen,
        'ageProposer': gc_age,
        'incomeRange': gc_incRange
    });
});

var gc_age=getCookie('age');
var gc_gen=getCookie('gen');
var gc_incRange=getCookie('incomeRange');
var term = document.querySelector('#tenureYear').value;
var lifeCoverAmt = document.querySelector('#lifeCoverPrice').value;
var smoker=document.querySelector('.smoke').innerText;
var premAmount=document.querySelector('#premiumAmt').innerText;
var premiumPayingTermOption,planName,step;

planName=document.querySelector('.planLabel').innerText;
step=document.querySelector('.step').innerText.replace(/\n/g,'');

//setting cookies

setCookie('term',term);
setCookie('lifeCoverAmt',lifeCoverAmt);
setCookie('smoker',smoker);
setCookie('premAmount',premAmount);
setCookie('planName',planName);
setCookie('step',step);

// Prem Paying Term
var premPayingTerm=document.querySelector('#premiumPayingTerm');
premPayingTerm.addEventListener('change',function(){
    gc_age=getCookie('age');
    gc_gen=getCookie('gen');
    gc_incRange=getCookie('incomeRange');
    term = document.querySelector('#tenureYear').value;
    lifeCoverAmt = document.querySelector('#lifeCoverPrice').value;
    smoker=document.querySelector('.smoke').innerText;
    premAmount=document.querySelector('#premiumAmt').innerText;
    planName=document.querySelector('.planLabel').innerText;

    //updating cookie with latest values
    setCookie('term',term);
    setCookie('lifeCoverAmt',lifeCoverAmt);
    setCookie('smoker',smoker);
    setCookie('premAmount',premAmount);
    setCookie('planName',planName);

    var premPayingTermOption=document.querySelectorAll('#premiumPayingTerm option');
    for(foo=0;foo<premPayingTermOption.length;foo++){
            if(premPayingTermOption[foo].selected){
                console.log(premPayingTermOption[foo].innerText);
                premiumPayingTermOption=premPayingTermOption[foo].innerText;
                gc_planName=getCookie('planName');
                setCookie('premiumPayingTermOption',premiumPayingTermOption);
                dataLayer.push({
                    'event':'absli_custom_event',
                    'eventCategory':'Anmol Suraksha Choose Plan',
                    'eventAction':'ABSLI Anmol Suraksha plan',
                    'eventLabel':'Edit Premium Payment Term - '+ premiumPayingTermOption,
                    'gender': gc_gen,
                    'ageProposer': gc_age,
                    'incomeRange': gc_incRange,
                    'investmentAmount':premAmount,
                    'lifeCoverAmount':lifeCoverAmt,
                    'planName':'{dynamic}',
                    'policyTerm':term,
                    'premiumPaymentTerm': premiumPayingTermOption,
                    'smoking':smoker
                });
            }
    }
});

// Edit on top of the page

document.querySelectorAll('.userInformation input,.userInformation #gender,.userInformation #smoking')

// Save button click

var saveBtn=document.querySelector('#updateCustomerForm .save');
saveBtn.addEventListener('click',function(){
    dataLayer.push({
        'event':'absli_custom_event',
        'eventCategory':'Anmol Suraksha Choose Plan',
        'eventAction':'ABSLI Anmol Suraksha plan',
        'eventLabel':'Save After Edit Click',
        'gender': gc_gen,
        'ageProposer': gc_age,
        'incomeRange': gc_incRange,
        'investmentAmount':premAmount,
        'lifeCoverAmount':lifeCoverAmt,
        'planName':gc_planName,
        'policyTerm':term,
        'premiumPaymentTerm': premiumPayingTermOption,
        'smoking':smoker
    });
});


//View payment summary - #24

var ctrLink=document.querySelectorAll('#personalDetailFm > div.personaldetails > div.payLink > a');
for(var foo=0;foo<ctrLink.length;foo++){
    ctrLink[foo].addEventListener('click',function(){
        gc_age=getCookie('age');
        gc_gen=getCookie('gen');
        gc_incRange=getCookie('incomeRange');
        gc_premAmount=getCookie('premAmount');
        gc_lifeCoverAmt=getCookie('lifeCoverAmt');
        gc_term=getCookie('term');
        gc_premiumPayingTermOption=getCookie('premiumPayingTermOption');
        gc_smoker=getCookie('smoker');

        dataLayer.push({
            'event':'absli_custom_event',
            'eventCategory':'Anmol Suraksha details page',
            'eventAction':'ABSLI Anmol Suraksha plan',
            'eventLabel':this.innerText,
            'gender': gc_gen,
            'ageProposer': gc_age,
            'incomeRange': gc_incRange,
            'investmentAmount':gc_premAmount,
            'lifeCoverAmount':gc_lifeCoverAmt,
            'planName':gc_planName,
            'policyTerm':gc_term,
            'investmentType':'{dynamic}',
            'premiumPaymentTerm': gc_premiumPayingTermOption,
            'smoking':gc_smoker
        });
    });
}

