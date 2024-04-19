//Search box click
try {
    var searchBox = document.querySelector("#revamp-glossary-search");
    if (searchBox) {
        searchBox.addEventListener('change', function () {
            dataLayer.push({
                'event': 'search_click',
                'eventCategory': 'ABSLI-Engagement',
                'eventAction': 'search click',
                'eventLabel': this.value,
                'searchTerm': this.value,
                'pageType': pageType
            });
        })
    }
} catch (e) {
    console.log(e);
}

//Alphabet click
try {
    var alphabet_click = document.querySelectorAll("div.fal__firstHalf > div.fal__firstHalfLetter");
    if (alphabet_click.length > 0) {
        for (var foo = 0; foo < alphabet_click.length; foo++) {
            alphabet_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'alphabet_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'alphabet click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//insurance term click

try {
    var insurance_term_click = document.querySelectorAll("div.fal__list > div > button > a.listText");
    if (insurance_term_click.length > 0) {
        for (var foo = 0; foo < insurance_term_click.length; foo++) {
            insurance_term_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'insurance_term_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'insurance term click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

// Show all of character click
try {
    var showall_of_character_click = document.querySelectorAll(".fal__showAll");
    if (showall_of_character_click.length > 0) {
        for (var foo = 0; foo < showall_of_character_click.length; foo++) {
            showall_of_character_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'showall_of_character_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'showall of character click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//newly added term click
try {
    if (window.location.pathname.match(/\/insurance-dictionary\/.*/g)) {
        var newly_added_terms_click = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-articles-leftBox > div:nth-child(3) a");
    } else {
        var newly_added_terms_click = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-articles-leftBox > div:nth-child(4) a");
    }
    if (newly_added_terms_click.length > 0) {
        for (var foo = 0; foo < newly_added_terms_click.length; foo++) {
            newly_added_terms_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'newly_added_terms_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'newly added terms click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Most Appreciated terms
try {
    if (window.location.pathname.match(/\/insurance-dictionary\/.*/g)) {
        var most_appreciated_terms_click = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-articles-leftBox > div:nth-child(4) a");
    } else {
        var most_appreciated_terms_click = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-articles-leftBox > div:nth-child(5) a");
    }
    if (most_appreciated_terms_click.length > 0) {
        for (var foo = 0; foo < most_appreciated_terms_click.length; foo++) {
            most_appreciated_terms_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'most_appreciated_terms_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'most appreciated terms click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//right side cta
try {
    var crm_lead_submit = document.querySelector("#crm-lead-submit");
    if (crm_lead_submit) {
        crm_lead_submit.addEventListener('click', function () {
            setTimeout(function (e) {
                var frm_err = document.querySelectorAll('#crm-lead-form .error');
                var flag;
                for (var foo = 0; foo < frm_err.length; foo++) {
                    if (frm_err[foo].offsetHeight > 0) {
                        flag = false;
                        break;
                    } else {
                        flag = true;
                    }
                }
                if (flag) {
                    lbl = crm_lead_submit.closest('.lead-form-product__container').querySelector('.lead-form-product__title').innerText;
                    dataLayer.push({
                        'event': 'get_a_callback_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'get a callback click',
                        'eventLabel': lbl,
                        'pageType': pageType
                    });
                }
            }, 500);
        });
    }
} catch (e) {
    console.log(e);
}

//Right side buy online and know more

try {
    var buy_online_know_more = document.querySelectorAll("div.panel-group div.revamp-ourtermlan-inner.fourth > div.revamp-rt > div.revamp-exploreplan > div > a");
    if (buy_online_know_more.length > 0) {
        for (var foo = 0; foo < buy_online_know_more.length; foo++) {
            buy_online_know_more[foo].addEventListener('click', function () {
                var prod = this.closest('.revamp-our-termplan').querySelector('.ourterm-title').innerText;
                var prem = this.closest('.revamp-rt').querySelector('.revamp-lt div:nth-child(2)').innerText;
                if (this.innerText.match(/buy online/ig)) {
                    dataLayer.push({
                        'event': 'buy_online_rt_click',
                        'eventCategory': 'ABSLI-Conversion',
                        'eventAction': 'buy online click',
                        'eventLabel': this.innerText,
                        'pageType': pageType,          //Page type i.e. home page, blog page, etc.,         
                        'product': prod,
                        'premium': prem
                    });
                } else {
                    dataLayer.push({
                        'event': 'know_more_rt_click',
                        'eventCategory': 'ABSLI-Conversion',
                        'eventAction': 'know more click',
                        'eventLabel': this.innerText,
                        'pageType': pageType,          //Page type i.e. home page, blog page, etc.,         
                        'product': prod,
                        'premium': prem
                    });
                }
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Most popular calculator
try {
    var most_popular_calculators_click = document.querySelectorAll("div.revamp-articles-ListOuterBox > div > a");
    if (most_popular_calculators_click.length > 0) {
        for (var foo = 0; foo < most_popular_calculators_click.length; foo++) {
            most_popular_calculators_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'most_popular_calculators_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'most popular calculators click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Popular searches
try {
    var popular_searches_click = document.querySelectorAll("div.revamp-searches-box3 > div > a");
    if (popular_searches_click.length > 0) {
        for (var foo = 0; foo < popular_searches_click.length; foo++) {
            popular_searches_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'popular_searches_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'popular searches click',
                    'eventLabel': this.innerText,
                    'pageType': pageType
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}
if (window.location.pathname.match(/\/insurance-dictionary\/.*/g)) {

    //Dictionary Term Sharing Social media

    try {
        var dictionary_term_sharing_social_click = document.querySelectorAll("div.revamp-digicls.revamp-blog-articles.revamp-articles-RatenShare > div.lead-form-share.revamp-articles-share > div.lead-form-share-menu__menu > ul > li > a");
        if (dictionary_term_sharing_social_click.length > 0) {
            for (var foo = 0; foo < dictionary_term_sharing_social_click.length; foo++) {
                dictionary_term_sharing_social_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'dictionary_term_sharing_social_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'dictionary term sharing social click',
                        'eventLabel': this.querySelector('.share-menu__text').innerText,
                        'section': 'top',
                        'pageType': pageType
                    });
                });
            }
        }

        var dictionary_term_sharing_social_click = document.querySelectorAll("div.rating-mobileBox > div.lead-form-share.revamp-articles-share > div.lead-form-share-menu__menu > ul > li > a");
        if (dictionary_term_sharing_social_click.length > 0) {
            for (var foo = 0; foo < dictionary_term_sharing_social_click.length; foo++) {
                dictionary_term_sharing_social_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'dictionary_term_sharing_social_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'dictionary term sharing social click',
                        'eventLabel': this.querySelector('.share-menu__text').innerText,
                        'section': 'bottom',
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Rating

    try {
        var dictionary_article_rating = document.querySelectorAll("div.review > div > form > button.star");
        if (dictionary_article_rating.length > 0) {
            for (var foo = 0; foo < dictionary_article_rating.length; foo++) {
                dictionary_article_rating[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'dictionary_article_rating',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'dictionary article rating',
                        'eventLabel': this.getAttribute('name'),
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Link click

    try {
        var link_click_dictionary_term_page = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-articles-leftBox div.revamp-fontStyle14 > ul > li > a,div.revamp-artciles-Box > div.revamp-articles-leftBox div > div.revamp-fontStyle14 > p > a");
        if (link_click_dictionary_term_page.length > 0) {
            for (var foo = 0; foo < link_click_dictionary_term_page.length; foo++) {
                link_click_dictionary_term_page[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'link_click_dictionary_term_page',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'link click dictionary term page',
                        'eventLabel': this.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Back to insurance dictionary

    try {
        var back_to_insurance_dictionary_click = document.querySelector("div.revamp-articles-leftBox > div.revamp-digicls.glossary-back-link > a");
        if (back_to_insurance_dictionary_click) {
            back_to_insurance_dictionary_click.addEventListener('click', function () {
                dataLayer.push({
                    'event': 'back_to_insurance_dictionary_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'back to insurance dictionary click',
                    'eventLabel': this.innerText,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    //Buy Online Body button
    try {
        var buy_online_body_click = document.querySelector("div > div > a.cta-btn");
        if (buy_online_body_click) {
            buy_online_body_click.addEventListener('click', function () {
                lbl=this.closest('.cta-outer-div__content').querySelector('.inner-txt').innerText;
                dataLayer.push({
                    'event': 'buy_online_body_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'buy online body click',
                    'eventLabel': lbl,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    } catch (e) {
        console.log(e);
    }
}