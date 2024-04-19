//Article Card Click

try {
    var article_card_click = document.querySelectorAll("div.article-detail div.media-tile.article-detail__item-list div.media-tile__content.media-tile__content--blog > a");
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

//Read aloud click

try {
    var read_aloud_article_card_click = document.querySelectorAll("div.article-detail > div.article-detail__info-wrap > div.media-tile.article-detail__item-list div.media-title__CTABox > div.readAloudButton");
    if (read_aloud_article_card_click.length > 0) {
        for (var foo = 0; foo < read_aloud_article_card_click.length; foo++) {
            read_aloud_article_card_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'read_aloud_article_card_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'read aloud article card click',
                        'eventLabel': this.closest('.media-title__CTABox').previousSibling.previousSibling.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}

// UpVote click

try {
    var upvote_article_card_click = document.querySelectorAll("div.article-detail > div.article-detail__info-wrap > div.media-tile.article-detail__item-list div.media-title__CTABox > div.media-tile__likes");
    if (upvote_article_card_click.length > 0) {
        for (var foo = 0; foo < upvote_article_card_click.length; foo++) {
            upvote_article_card_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'upvote_article_card_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'upvote article card click',
                        'eventLabel': this.closest('.media-title__CTABox').previousSibling.previousSibling.innerText,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}

//Page navigation click

try {
    var pagination_click = document.querySelectorAll("#divPages > li > a, .first, .prev, .next, .last");
    if (pagination_click.length > 0) {
        for (var foo = 0; foo < pagination_click.length; foo++) {
            pagination_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'pagination_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'pagination click',
                        'eventLabel': this.innerText.toLowerCase(),
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
        }
    }
} catch (e) {
    console.log(e);
}