//Define PageType
var pageType;
if (window.location.pathname == '/') {
    pageType = 'Home Page';
} else if(window.location.pathname.match(/(\/)(endowment-plan|savings-plans|term-insurance|retirement-and-pension-plans|critical-illness-insurance|child-insurance-plan|ulip-plan|group-insurance-policy)(\/)(absli-akshaya-plan|vision-moneyback-plan|vision-lifesecure-plan|income-assured-plan|jeevan-bachat-plan|monthly-income-plan|vision-life-income-plus-plan|vision-endowment-plan|vision-life-income-plan|Nishchit-Laabh-Plan|nishchit-aayush-plan|absli-assured-savings-plan|absli-assured-income-plus-plan|fixed-maturity-plan|secure-plus-plan|guaranteed-milestone|savings-plan|absli-assured-flexi-savings-plan|absli-salaried-term-plan|digishield-plan|saral-jeevan-bima|anmol-suraksha-kawach|poorna-suraksha-kawach|absli-empower-pension-plan|absli-empower-pension-sp-plan|absli-saral-pension|absli-guaranteed-annuity-plus|absli-nishchit-pension-plan|cancer-insurance|critishield-plan|absli-vision-star-plan|child-future-assured-plan|absli-fortune-wealth-plan|absli-platinum-gain-plan|absli-smart-growth-plan|wealth-infinia|wealth-assure-plus-plan|wealth-max-plan|wealth-secure-plan|fortune-elite-plan|wealth-aspire-plan|protection-solutions\/employer-employee-scheme|protection-solutions\/voluntary|protection-solutions\/affinity|protection-solutions\/credit-life|retirement-solutions\/annuity_scheme|retirement-solutions\/gratuity|retirement-solutions\/leave-encashment|retirement-solutions\/post-retirement-medical-benefits-scheme)/g)){
    pageType = "Product Page - "+window.location.pathname.replace(/\/|-/g, " ").trim();
}
else if (window.location.pathname.match(/(\/)(endowment-plan|savings-plans|term-insurance|retirement-and-pension-plans|critical-illness-insurance|child-insurance-plan|ulip-plan|group-insurance-policy|life-insurance-for-defence-personnel|sme-business-solutions)/)) {
    pageType = "Category Page";
}else if(window.location.pathname.match(/(\/)articles$/g)){
    pageType="Article Page";
}else if(window.location.pathname.match(/(\/articles\/)(term-insurance|wealth-insurance|child-insurance|health-insurance|retirement-insurance|savings-insurance|life-insurance|income-tax|your-money|group-insurance)$/g)){
    pageType="Article Category Page";
}else if(window.location.pathname.match(/(\/articles\/)(term-insurance|wealth-insurance|child-insurance|health-insurance|retirement-insurance|savings-insurance|life-insurance|income-tax|your-money|group-insurance)(\/.*)/g)){
    pageType="Article Details Page";
}else if(window.location.pathname.match(/(\/)insurance-dictionary$/g)){
    pageType="Insurance Dictionary Page";
}else{
    pageType = "Others Page";
}

    //Header menu - L1
    var planType, lbl;

    try {
        var headerMenu = document.querySelectorAll("div.top_header > div.abc_home_button > a, div.abc_solutions_btn.dropdown_main.dropdown > a");
        if (headerMenu.length > 0) {
            for (var foo = 0; foo < headerMenu.length; foo++) {
                headerMenu[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    dataLayer.push({
                        'event': 'header_menu_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'header menu click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Top Menu - L1 & L2
    try {
        var topMenu = document.querySelectorAll("div.abc_solutions_btn.dropdown_main.dropdown div.all_solutions_url_grid_wrapper > div.all_solutions_url_col > ul > li > a");
        if (topMenu.length > 0) {
            for (var foo = 0; foo < topMenu.length; foo++) {
                topMenu[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl = this.closest('.all_solutions_url_col').querySelector('span').innerText + " > "+ this.innerText;
                    dataLayer.push({
                        'event': 'top_menu_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'top menu click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    try{
        var abc_sol_outlink=document.querySelectorAll("div.abc_solutions_btn.dropdown_main.dropdown div.all_solutions_outlink_scanner_wrapper > ul > li > a");
        if (abc_sol_outlink.length > 0) {
            for (var foo = 0; foo < abc_sol_outlink.length; foo++) {
                abc_sol_outlink[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl = this.innerText;
                    dataLayer.push({
                        'event': 'abc_solution_outlink_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'abc solution outlink click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }
    }catch(e){
        console.log(e);
    }

    try {
        //Primary Menu
        var primaryMenu = document.querySelectorAll("div.desktop_menu.d-none.d-lg-block > div.primary_header div.prime_drop_wrapper > ul > li > a");
        var primaryMenuL2 = document.querySelectorAll("div.primary_header > div > div.prime_drop_wrapper > ul > li > div > div > ul > li > a");
        var primaryMenuL3 = document.querySelectorAll("div.primary_header > div > div.prime_drop_wrapper > ul > li > div > div > ul > li > div > ul > li > a");

        //L1
        if (primaryMenu.length > 0) {
            for (var foo = 0; foo < primaryMenu.length; foo++) {
                primaryMenu[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl = this.innerText;
                    dataLayer.push({
                        'event': 'primary_menu_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'primary menu click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }

        //L2
        if (primaryMenuL2.length > 0) {
            for (var foo = 0; foo < primaryMenuL2.length; foo++) {
                primaryMenuL2[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl = this.closest('.dropdown_main').querySelector('a').innerText + " > " + this.innerHTML.split('<')[0];
                    dataLayer.push({
                        'event': 'primary_menu_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'primary menu click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }

        //L3
        if (primaryMenuL3.length > 0) {
            for (var foo = 0; foo < primaryMenuL3.length; foo++) {
                primaryMenuL3[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl1 = this.closest('.dropdown_main').querySelector('a').innerText;
                    lbl2 = this.closest('.dropdownMain-item').querySelector('a').innerHTML.split('<')[0];
                    lbl = lbl1 + " > " + lbl2 + " > " + this.innerHTML;
                    dataLayer.push({
                        'event': 'primary_menu_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'primary menu click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.  
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Plan Type Click
    try {
        var planTypeClick = document.querySelectorAll('.hFF__switchTab');
        if (planTypeClick.length > 0) {
            for (var foo = 0; foo < planTypeClick.length; foo++) {
                if (pageType == 'Home Page') {
                    planType = document.querySelector('.hFF__switchTab--active').innerText;
                }
                planTypeClick[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'plan_type_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'plan type click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //existing_customer_option_click
    try {
        var existing_customer_option_click = document.querySelectorAll('div.hFF__existingCustomer > div.hFF__categoryTabs div.hFF__category');
        if (existing_customer_option_click.length > 0) {
            for (var foo = 0; foo < existing_customer_option_click.length; foo++) {
                existing_customer_option_click[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'existing_customer_option_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'existing customer option click',
                        'eventLabel': this.innerText,
                        'planType': 'Existing Customer',
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Get a call
    /*try{
      var get_a_call = document.querySelector('div.call-me-button > button.submit-agree-leadformprod1');
      get_a_call.addEventListener('click',function(){
        dataLayer.push({
          'event':'get_a_call_click',
          'eventCategory':'ABSLI-Conversion',
          'eventAction':'get a call click',
          'eventLabel':this.innerText,     
          'planType':'Existing Customer',
          'pageType':pageType
        });
      });
    }catch(e){
      console.log(e);
    }*/

    //Login
    try {
        var login_existing_customer = document.querySelector('div.homepageFirstFold div.hFF__existingCustomer > div.hFF__ecSection.hFF__ecSection--active > div.hFF__ecSectionInfo > button.hFF__button');
        if (login_existing_customer) {
            login_existing_customer.addEventListener('click', function () {
                dataLayer.push({
                    'event': 'login_existing_customer_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'login existing customer click',
                    'eventLabel': 'Login',
                    'planType': 'Existing Customer',
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    //Sidebar link
    try {
        var sidebar_link = document.querySelectorAll('div.homepage-product__wrap > ul > li > a');
        if (sidebar_link.length > 0) {
            for (var foo = 0; foo < sidebar_link.length; foo++) {
                sidebar_link[foo].addEventListener('click', function () {
                    dataLayer.push({
                        'event': 'sidebar_link_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'login click',
                        'eventLabel': this.innerText,
                        'planType': 'Existing Customer',
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    // Buy online CTA
    try {
        var buy_online = document.querySelectorAll('form.hFF__loginForm.pageredirects .hFF__buttons .hFF__button');
        if (buy_online.length > 0) {
            for (var foo = 0; foo < buy_online.length; foo++) {
                buy_online[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    //prod=document.querySelector('div.item').innerText;
                    //   prem=document.querySelector('.amt-text').innerText;
                    if (this.innerText.match(/buy online/ig)) {
                        dataLayer.push({
                            'event': 'buy_online_click',
                            'eventCategory': 'ABSLI-Conversion',
                            'eventAction': 'buy online click',
                            'eventLabel': this.innerText,
                            'planType': planType,
                            'pageType': pageType          //Page type i.e. home page, blog page, etc.,         
                            //'product':prod,
                            //'premium':prem
                        });
                    } else {
                        dataLayer.push({
                            'event': 'know_more_click',
                            'eventCategory': 'ABSLI-Conversion',
                            'eventAction': 'know more click',
                            'eventLabel': this.innerText,
                            'planType': planType,
                            'pageType': pageType          //Page type i.e. home page, blog page, etc.,         
                            //   'product':prod,
                            //   'premium':prem
                        });
                    }
                });
            }
        }
    } catch (e) {

    }

    //Read more less

    try {
        setTimeout(function (w) {
            var read_more_less = document.querySelector('.morelink');
            if (read_more_less) {
                read_more_less.addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    sec = this.closest('.revamp-categorgyheadline-box').querySelector('h1').innerText;
                    dataLayer.push({
                        'event': 'read_more_less_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'read more less click',
                        'eventLabel': this.innerText,
                        'planType': planType,         //the type of plan selected on the page i.e. buy new plan or existing customer
                        'section': sec,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.         
                    });
                });
            }
        }, 1000);
    } catch (e) {
        console.log(e);
    }

    //Explore click

    try {
        var explore = document.querySelectorAll('#explore-plan div.otherprod-lowerdiv > a');
        if (explore.length > 0) {
            for (var foo = 0; foo < explore.length; foo++) {
                explore[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var planCat = this.closest('.otherprod').querySelector('.digi-title').innerText;
                    var sec = this.closest('.carousel5-list-wrap').querySelector('h2').innerText;

                    dataLayer.push({
                        'event': 'explore_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'explore click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'section': sec,
                        'planCategory': planCat,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.         
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //Navigation
    try {
        var nav_next = document.querySelector('.slick-nav__btn--next');
        var nav_prev = document.querySelector('.slick-nav__btn--prev');
        if (nav_next) {
            nav_next.addEventListener('click', function () {
                if (pageType == 'Home Page') {
                    planType = document.querySelector('.hFF__switchTab--active').innerText;
                }
                var sec = this.closest('.carousel5-list-wrap').querySelector('h2').innerText;
                dataLayer.push({
                    'event': 'navigation_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'navigation click',
                    'eventLabel': 'next',
                    'planType': planType,
                    'section': sec,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                });
            });
        }

        if (nav_prev) {
            nav_prev.addEventListener('click', function () {
                if (pageType == 'Home Page') {
                    planType = document.querySelector('.hFF__switchTab--active').innerText;
                }
                var sec = this.closest('.carousel5-list-wrap').querySelector('h2').innerText;
                dataLayer.push({
                    'event': 'navigation_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'navigation click',
                    'eventLabel': 'next',
                    'planType': planType,
                    'section': sec,
                    'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    // Buy online most popular plan
    try {
        var buy_online_most_popular = document.querySelectorAll('div.card-second-half > div.button-flex > button');
        if (buy_online_most_popular.length > 0) {
            for (var foo = 0; foo < buy_online_most_popular.length; foo++) {
                buy_online_most_popular[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var sec = this.closest('.tsp-component').querySelector('h2.tsp-header').innerText;
                    var pln = this.closest('.card').querySelector('p.card-title').innerText;
                    dataLayer.push({
                        'event': 'buy_online_most_popular_plan_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'buy online most popular plan click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'planName': pln,
                        'section': sec,
                        'pageType': pageType          //Page type i.e. home page, blog page, etc.          
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }
    //Calculating Premium
    try {
        var calc_prem = document.querySelector('#calculatePremiumCta');
        if (calc_prem) {
            calc_prem.addEventListener('click', function () {
                if (pageType == 'Home Page') {
                    planType = document.querySelector('.hFF__switchTab--active').innerText;
                }
                var planCat = this.closest('.calc-premium-lower').querySelector('.select span').innerText;
                var sec = this.closest('.cal-premium-lt').querySelector('.calc-premium-heading').innerText;
                dataLayer.push({
                    'event': 'calculate_premium_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'calculate premium click',
                    'eventLabel': this.innerText,
                    'planType': planType,
                    'planCategory': planCat,
                    'section': sec,          // section of the page i.e. body, most popular plans, etc.
                    'pageType': pageType
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    //Link Click
    try {
        var link_click = document.querySelectorAll('div.upper1 > a');
        if (link_click.length > 0) {
            for (var foo = 0; foo < link_click.length; foo++) {
                link_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var sec = this.closest('.product1-layout').querySelector('h2.product1-heading').innerText;
                    dataLayer.push({
                        'event': 'link_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'link click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'section': sec,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    // Ad banner
    try {
        var ad_banner = document.querySelectorAll('.ad-banner');
        if (ad_banner.length > 0) {
            for (var foo = 0; foo < ad_banner.length; foo++) {
                ad_banner[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    pln = this.querySelector('img').getAttribute('alt');
                    dataLayer.push({
                        'event': 'banner_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'banner click',
                        'eventLabel': 'buy now',     // click text i.e. fixed plan
                        'planType': planType,
                        'planName': pln,
                        'section': 'Body',
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //faq
    try {
        var faq = document.querySelectorAll('div.revamp-faqpanel-title > a');
        if (faq.length > 0) {
            for (var foo = 0; foo < faq.length; foo++) {
                faq[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    sec = document.querySelector('.faq-heading').innerText;
                    dataLayer.push({
                        'event': 'faq_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'faq click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'section': sec,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    try {
        var pop_search = document.querySelectorAll('.revamp-searches-inner a');
        if (pop_search.length > 0) {
            for (var foo = 0; foo < pop_search.length; foo++) {
                pop_search[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    if(!window.location.pathname.match(/\/articles|insurance-dictionary/g)){
                    dataLayer.push({
                        'event': 'popular_search_tag_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'popular search tag click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'section': 'Popular Search',
                        'pageType': pageType
                    });
                }
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    // Blog
    try {
        var blog = document.querySelectorAll('div.revamp-upvote > a');
        if (blog.length > 0) {
            for (var foo = 0; foo < blog.length; foo++) {
                blog[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    lbl = this.closest('.rtbox').querySelector('.lower').innerText;
                    sec = this.closest('.homepage-sections-lt').querySelector('h2.homepage-sections-title').innerText;
                    dataLayer.push({
                        'event': 'blog_click',
                        'eventCategory': 'ABSLI-Engagement',
                        'eventAction': 'blog click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'section': sec,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    try {
        var view_all_blog = document.querySelector('.revamp-linkShowMore');
        if (view_all_blog) {
            view_all_blog.addEventListener('click', function () {
                if (pageType == 'Home Page') {
                    planType = document.querySelector('.hFF__switchTab--active').innerText;
                }
                sec = blog[foo].closest('.homepage-sections-lt').querySelector('h2.homepage-sections-title').innerText;

                dataLayer.push({
                    'event': 'view_all_blog_click',
                    'eventCategory': 'ABSLI-Engagement',
                    'eventAction': 'view all blog click',
                    'eventLabel': 'View all',
                    'planType': planType,
                    'section': sec,
                    'pageType': pageType
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    // footer click
    try {
        var footer_click = document.querySelectorAll(".main_footer_wrapper .tab-pane > div > ul > li > a");
        if (footer_click.length > 0) {
            for (var foo = 0; foo < footer_click.length; foo++) {
                footer_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var lvl1 = document.querySelector('.nav-link.active').innerText;
                    var lvl2 = this.innerText;
                    lbl = lvl1 + " > " + lvl2;
                    dataLayer.push({
                        'event': 'footer_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'footer click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }


    // footer language option click
    try {
        var footer_lang_click = document.querySelectorAll("div.main_footer_wrapper > div.footer_left_wrapper > div.footer_language_options.d-none.d-lg-block > ul > li > a");
        if (footer_lang_click.length > 0) {
            for (var foo = 0; foo < footer_lang_click.length; foo++) {
                footer_lang_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    
                    dataLayer.push({
                        'event': 'footer_lang_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'footer lang click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

     // footer our subsidiary click
     try {
        var footer_our_subsidiary_click = document.querySelectorAll("div.footer_accordion.accordion.grey_footer_accordion.footer_content_wrap.our_subsidiaries_footer ul > li > a");
        if (footer_our_subsidiary_click.length > 0) {
            for (var foo = 0; foo < footer_our_subsidiary_click.length; foo++) {
                footer_our_subsidiary_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    
                    dataLayer.push({
                        'event': 'footer_our_subsidiary_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'footer our subsidiary click',
                        'eventLabel': this.innerText,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    try {
        var footer_grey_click = document.querySelectorAll(".grey_wrapper_tabs .footer_right_Wrapper .tab-pane div > ul > li > a");

        if (footer_grey_click.length > 0) {
            for (var foo = 0; foo < footer_grey_click.length; foo++) {
                footer_grey_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }

                    var lvl1 = this.closest('.grey_wrapper_tabs').querySelector('.nav-link.active').innerText;
                    var lvl2 = this.innerText;
                    lbl = lvl1 + " > " + lvl2;

                    dataLayer.push({
                        'event': 'footer_grey_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'footer grey click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    try {
        var social_click = document.querySelectorAll("div.footer_red_strip > div.footer_strip_socil > ul > li > a,.footer_socials > ul > li > a");
        if (social_click.length > 0) {
            for (var foo = 0; foo < social_click.length; foo++) {
                social_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var lbl = this.href;
                    dataLayer.push({
                        'event': 'social_media_link_click',
                        'eventCategory': 'ABSLI-Core',
                        'eventAction': 'social media link click',
                        'eventLabel': lbl,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }

    //BreadCrumb

    try {
        var breadcrumb_click = document.querySelectorAll("div.website-breadcrumb > nav > a");
        if (breadcrumb_click.length > 0) {
            for (var foo = 0; foo < breadcrumb_click.length; foo++) {
                breadcrumb_click[foo].addEventListener('click', function () {
                    if (pageType == 'Home Page') {
                        planType = document.querySelector('.hFF__switchTab--active').innerText;
                    }
                    var lbl = this.closest('.breadcrum-comp').innerText;
                    dataLayer.push({
                        'event': 'breadcrumb_click',
                        'eventCategory': 'ABSLI-Engagemnet',
                        'eventAction': 'breadcrumb click',
                        'eventLabel': lbl + " > " +this.innerText,
                        'planType': planType,
                        'pageType': pageType
                    });
                });
            }
        }
    } catch (e) {
        console.log(e);
    }