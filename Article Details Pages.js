var articlePublishDate = document.querySelector("div.revamp-digicls.revamp-blog-articles.revamp-articles-title > div > div:nth-child(1) > span").innerText;
var articleLength = document.querySelector("div.revamp-digicls.revamp-blog-articles.revamp-articles-title > div > div:nth-child(2) > span").innerText;
var articleTitle = document.querySelector("div.revamp-digicls.revamp-blog-articles.revamp-articles-title > h1").innerText;
var articleAuthor = document.querySelector(".author__name").innerText;

//Table of content link clicks
try {
    var table_of_content_link_click = document.querySelectorAll("div.revamp-articles-leftBox > div.accordian.revamp-digicls.revamp-blog-articles.revamp-articles-accordian div.accordian__info.js-target > ul > li > a");
    if (table_of_content_link_click.length > 0) {
        for (var foo = 0; foo < table_of_content_link_click.length; foo++) {
            table_of_content_link_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'table_of_content_link_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'table of content link click',
                    'eventLabel': articleTitle,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Read Aloud

try {
    var read_aloud_click = document.querySelectorAll(".readAloudButton");
    if (read_aloud_click.length > 0) {
        for (var foo = 0; foo < read_aloud_click.length; foo++) {
            read_aloud_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'read_aloud_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'read aloud click',
                    'eventLabel': articleTitle,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Link click

try {
    var link_click_article_detail_page = document.querySelectorAll(".illustration-inner a");
    if (link_click_article_detail_page.length > 0) {
        for (var foo = 0; foo < link_click_article_detail_page.length; foo++) {
            link_click_article_detail_page[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'link_click_article_detail_page',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'link click article detail page',
                    'eventLabel': this.innerText,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Rating

try {
    var article_rating = document.querySelectorAll("div.review > div > form > button.star");
    if (article_rating.length > 0) {
        for (var foo = 0; foo < article_rating.length; foo++) {
            article_rating[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'article_rating',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'article rating',
                    'eventLabel': this.getAttribute('name'),
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Article Sharing Social media

try {
    var article_sharing_social_media_click = document.querySelectorAll("div.revamp-digicls.revamp-blog-articles.revamp-articles-RatenShare > div.lead-form-share.revamp-articles-share > div.lead-form-share-menu__menu > ul > li > a");
    if (article_sharing_social_media_click.length > 0) {
        for (var foo = 0; foo < article_sharing_social_media_click.length; foo++) {
            article_sharing_social_media_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'article_sharing_social_media_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'article sharing social media click',
                    'eventLabel': this.querySelector('.share-menu__text').innerText,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'section': 'top',
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }

    var article_sharing_social_media_click = document.querySelectorAll("div.rating-mobileBox > div.lead-form-share.revamp-articles-share > div.lead-form-share-menu__menu > ul > li > a");
    if (article_sharing_social_media_click.length > 0) {
        for (var foo = 0; foo < article_sharing_social_media_click.length; foo++) {
            article_sharing_social_media_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'article_sharing_social_media_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'article sharing social media click',
                    'eventLabel': this.querySelector('.share-menu__text').innerText,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'section': 'bottom',
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}

//Subscribe newsletter

try {
    var newsletter_subscribe_click = document.querySelector("div.articles-subscribeBox div.call-me-button.form-group > button");
    if (newsletter_subscribe_click) {
        newsletter_subscribe_click.addEventListener('click', function () {
            dataLayer.push({
                'event': 'newsletter_subscribe_click',
                'eventCategory': 'ABSLI-Engagement',
                'eventAction': 'newsletter subscribe click',
                'eventLabel': this.innerText,
                'articlePublishDate': articlePublishDate,
                'articleLength': articleLength,
                'articleTitle': articleTitle,
                'articleAuthor': articleAuthor,
                'pageType': pageType          //Page type i.e. home page, blog page, etc.  
            });
        });
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
                    lbl = this.closest('.lead-form-product__container').querySelector('.lead-form-product__title').innerText;
                    dataLayer.push({
                        'event': 'article_get_a_callback_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'article get a callback click',
                        'eventLabel': lbl,
                        'articlePublishDate': articlePublishDate,
                        'articleLength': articleLength,
                        'articleTitle': articleTitle,
                        'articleAuthor': articleAuthor,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
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
                        'event': 'buy_online_rt_article_click',
                        'eventCategory': 'ABSLI-Conversion',
                        'eventAction': 'buy online click',
                        'eventLabel': this.innerText,
                        'articlePublishDate': articlePublishDate,
                        'articleLength': articleLength,
                        'articleTitle': articleTitle,
                        'articleAuthor': articleAuthor,
                        'pageType': pageType,          //Page type i.e. home page, blog page, etc.,         
                        'product': prod,
                        'premium': prem
                    });
                } else {
                    dataLayer.push({
                        'event': 'know_more_rt_article_click',
                        'eventCategory': 'ABSLI-Conversion',
                        'eventAction': 'know more click',
                        'eventLabel': this.innerText,
                        'articlePublishDate': articlePublishDate,
                        'articleLength': articleLength,
                        'articleTitle': articleTitle,
                        'articleAuthor': articleAuthor,
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

// Right side article 
try {
    var recently_added_articles_click = document.querySelectorAll("div.revamp-artciles-Box > div.revamp-artciles-rightBox div.homepage-sectionsv2-box > div > a");
    if (recently_added_articles_click.length > 0) {
        for (var foo = 0; foo < recently_added_articles_click.length; foo++) {
            recently_added_articles_click[foo].addEventListener('click', function () {
                dataLayer.push({
                    'event': 'recently_added_articles_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'recently added articles click',
                    'eventLabel': this.querySelector('.rtbox .lower').innerText,
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
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
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
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
                    'articlePublishDate': articlePublishDate,
                    'articleLength': articleLength,
                    'articleTitle': articleTitle,
                    'articleAuthor': articleAuthor,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                });
            });
        }
    }
} catch (e) {
    console.log(e);
}