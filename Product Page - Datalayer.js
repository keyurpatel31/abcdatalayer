var lifeCoverAmount, investmentAmount, investmentType;

//Get a Call back OR Buy Online Product page
try {
    var getACallBack = document.querySelectorAll('.lead-crm-form-container .call-me-button button');
    if (getACallBack.length > 0) {
        for (var foo = 0; foo < getACallBack.length; foo++) {
            getACallBack[foo].addEventListener('click', function () {
                if (this.innerText.match(/Get a Callback/ig)) {
                    dataLayer.push({
                        'event': 'get_a_callback_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'get a callback click',
                        'eventLabel': this.innerText.toLowerCase(),
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                } else if (this.innerText.match(/Get a Callback/ig)) {
                    dataLayer.push({
                        'event': 'buy_online_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'buy online click',
                        'eventLabel': this.innerText.toLowerCase(),
                        'pageType': pageType          //Page type i.e. home page, blog page, etc. n 
                    });
                }
            });
        }
    }
} catch (e) {
    // console.log(e);
}

//Header nav

// Key Features button clicks i.e. Brochure, Leaflet, Policy Contract, etc

//Enquire now click on old pages

//Benefit click on new

//Benefit popup view on new

//Benefit popup close on new

//Plan option click on new

//Plan option popup view on new

//plan option popup close on new

//link click on new

// riders click on new

//riders popup view on new

//riders popup close on new

//riders download brochure click

//use case tab under how does this plan works

// view illustration under how does this plan works on new

// Buy online body cta on new

//More about claims

//faqs

//know more under other insurance plans