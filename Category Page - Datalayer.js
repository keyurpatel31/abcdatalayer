var lifeCoverAmount, investmentAmount, investmentType;

//Get A Callback
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

//header__nav
try {
    var heaver_nav = document.querySelectorAll('.header__list a');
    if (heaver_nav.length > 0) {
        for (var foo = 0; foo < heaver_nav.length; foo++) {
            heaver_nav[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'heaver_nav_click',
                    'eventCategory': 'ABSLI-Core',
                    'eventAction': 'header nav click',
                    'eventLabel': this.innerText.toLowerCase(),
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    // console.log(e);
}
//Buy Online
try {
    var buyOnlineOurPlan = document.querySelectorAll('div.panel-group div.revamp-rt > div.revamp-exploreplan > div > a');
    if (buyOnlineOurPlan.length > 0) {
        for (var foo = 0; foo < buyOnlineOurPlan.length; foo++) {
            buyOnlineOurPlan[foo].addEventListener('click', function () {
                lifeCoverAmount = this.closest('.revamp-ourtermlan-inner').querySelector('.revamp-lt div:nth-child(2)').innerText;
                investmentAmount = this.closest('.revamp-ourtermlan-inner').querySelector('.revamp-rt .revamp-lt div:nth-child(2)').innerText.split('/')[0];
                investmentType = this.closest('.revamp-ourtermlan-inner').querySelector('.revamp-rt .revamp-lt div:nth-child(2)').innerText.split('/')[1];
                lbl = this.closest('.revamp-our-termplan').querySelector('.ourterm-title').innerText.toLowerCase();
                if (this.innerText.match(/buy online/ig)) {
                    dataLayer.push({
                        'event': 'buy_online_our_plan_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'buy online our plan click',
                        'eventLabel': lbl,
                        'pageType': pageType,          //Page type i.e. home page, blog page, etc.  
                        'lifeCoverAmount': lifeCoverAmount,
                        'investmentAmount': investmentAmount,
                        'investmentType': investmentType
                    });
                } else if (this.innerText.match(/know more/ig)) {
                    dataLayer.push({
                        'event': 'know_more_our_plan_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'know more our plan click',
                        'eventLabel': lbl,
                        'pageType': pageType,          //Page type i.e. home page, blog page, etc.  
                        'lifeCoverAmount': lifeCoverAmount,
                        'investmentAmount': investmentAmount,
                        'investmentType': investmentType
                    });
                }
            });
        }
    }
} catch (e) {
    // console.log(e);
}
//FAQ
try {
    var faq_cate = document.querySelectorAll(".revamp-faqpanel-group div > a");
    if (faq_cate.length > 0) {
        for (var foo = 0; foo < faq_cate.length; foo++) {
            faq_cate[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'faq_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'faq click',
                    'eventLabel': this.innerText.toLowerCase(),
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    // console.log(e);
}
//show all - Our Term Insurance Plans
try {
    var show_all = document.querySelectorAll('.calc-premium-outer .faq-btn1,.faq-innerdiv .faq-btn1');
    if (show_all.length > 0) {
        for (var foo = 0; foo < show_all.length; foo++) {
            show_all[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'show_all_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'show all click',
                    'eventLabel': this.innerText.toLowerCase(),
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    // console.log(e);
}
//Link Click
try {
    var linkClick = document.querySelectorAll('div.product1-outerdiv > div > div > div > div.lower1 > a');
    if (linkClick.length > 0) {
        for (var foo = 0; foo < linkClick.length; foo++) {
            linkClick[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'link_click_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'link click',
                    'eventLabel': this.innerText.toLowerCase(),
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    // console.log(e);
}
//Blog
try {
    var blog_click = document.querySelectorAll(".revamp-sectionsv2-container .revamp-upvote a");
    if (blog_click.length > 0) {
        for (var foo = 0; foo < blog_click.length; foo++) {
            blog_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'blog_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'blog click',
                    'eventLabel': this.innerText.toLowerCase(),
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    // console.log(e);
}

//View all blog

try {
    var view_all_blog_click = document.querySelector(".revamp-sectionsv2-container a.revamp-linkShowMore");
    if (view_all_blog_click) {
        view_all_blog_click.addEventListener('click', function () {
            dataLayer.push({
                'event': 'view_all_blog_click',
                'eventCategory': 'ABSLI-Engagement',
                'eventAction': 'view all blog click',
                'eventLabel': this.innerText.toLowerCase(),
                'pageType': pageType          //Page type i.e. home page, blog page, etc.  
            });
        });
    }
} catch (e) {
    // console.log(e);
}


//Rider

try{
    var rider_click= document.querySelectorAll(".revamp-riderscarousel div.riders2-brochure > a");
    if (rider_click.length > 0) {
        for (var foo = 0; foo < rider_click.length; foo++) {
            rider_click[foo].addEventListener('click', function () {
                lbl=this.closest('.carousel3-card__face').querySelector('.riders2-upperdiv .riders-title div').innerText.toLowerCase();
                dataLayer.push({
                    'event': 'rider_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'rider click',
                    'eventLabel': lbl,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
}catch(e){
    // console.log(e);
}