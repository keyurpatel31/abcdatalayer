/*
//Topic Selection
try {
    var topic_selection = document.querySelectorAll("div.download-filter form > div > div > div:nth-child(1) div.selectize-dropdown.single.demo-default.select > div > div.option");
    if (topic_selection.length > 0) {
        for (var foo = 0; foo < topic_selection.length; foo++) {
            topic_selection[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'topic_selection_article_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'topic selection click',
                        'eventLabel': this.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}

//Filter Selection

try {
    var filter_selection = document.querySelectorAll("div.download-filter div.form-row div:nth-child(2) div.selectize-dropdown.single.demo-default.select div.option");
    if (filter_selection.length > 0) {
        for (var foo = 0; foo < filter_selection.length; foo++) {
            filter_selection[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'filter_selection_article_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'filter selection click',
                        'eventLabel': this.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}*/

// View All
try {
    var view_all_article_page_click = document.querySelector("div.article-list > div.article-list__title-wrap > button");
    view_all_article_page_click.addEventListener('click', function () {
        dataLayer.push({
            'event': 'view_all_article_click',
            'eventCategory': 'ABSLI-Engagement',
            'eventAction': 'view all article click',
            'eventLabel': this.innerText,
            'pageType': pageType          //Page type i.e. home page, blog page, etc.  
        });
    });
}catch(e){
    console.log(e);
}

//Article Card Click

try {
    var article_card_click = document.querySelectorAll("#allArticles div.media-tile__content.media-tile__content--blog > a");
    if (article_card_click.length > 0) {
        for (var foo = 0; foo < article_card_click.length; foo++) {
            article_card_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'article_card_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'article card click',
                        'eventLabel': this.title,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}

//Explore categories

try {
    var explore_categories_click = document.querySelectorAll("div.link-list > div.three-col-list.link-list__container > ul > li > a");
    if (explore_categories_click.length > 0) {
        for (var foo = 0; foo < explore_categories_click.length; foo++) {
            explore_categories_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'explore_categories_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'explore categories click',
                        'eventLabel': this.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}