
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

    var ItemView = require('views/AppView');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);


    function initApp() {
        var items = new ItemView();
        mainContext.add(items);

        items.populateNodes(dummyData.businesses);
    }

    initApp();
});




var dummyData = {
  "region": {
    "span": {
      "latitude_delta": 0.10864952999999389,
      "longitude_delta": 0.06726599000000988
    },
    "center": {
      "latitude": 37.75617925,
      "longitude": -122.42819245
    }
  },
  "total": 40,
  "businesses": [
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/hot-bachata-nights-san-francisco",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 18,
      "name": "Hot Bachata Nights",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/2C5K7WcHEugQcnEjCuFoBA/ms.jpg",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/hot-bachata-nights-san-francisco",
      "phone": "4159672218",
      "snippet_text": "Sunday is now my favorite night of the week!\n\nI first went to Hot Bachata Nights at Impala at the suggestion of a friend, but I was scared to try this new...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/P2F1IIzwBhHEspza5lr7Kg/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ]
      ],
      "display_phone": "+1-415-967-2218",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "hot-bachata-nights-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Kearny St & Rowland St",
        "city": "San Francisco",
        "display_address": [
          "447 Broadway St",
          "North Beach/Telegraph Hill",
          "San Francisco, CA 94133"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "North Beach/Telegraph Hill",
          "Financial District"
        ],
        "postal_code": "94133",
        "country_code": "US",
        "address": [
          "447 Broadway St"
        ],
        "coordinate": {
          "latitude": 37.7982864,
          "longitude": -122.40448
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 5,
      "mobile_url": "http://m.yelp.com/biz/drift-san-francisco",
      "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      "review_count": 10,
      "name": "Drift",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/GSTRh8UN_i6gOWE-8IGDYw/ms.jpg",
      "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      "url": "http://www.yelp.com/biz/drift-san-francisco",
      "snippet_text": "The drinks were strong and bartenders were great! They made sure to serve us quickly or get help if they were slammed.\nMusic choice was great, mostly trance...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/cS80-ohnqG6AvYKWAmR4cQ/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ]
      ],
      "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
      "id": "drift-san-francisco",
      "is_closed": false,
      "location": {
        "city": "San Francisco",
        "display_address": [
          "Shine SF",
          "1337 Mission St",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "Shine SF",
          "1337 Mission St"
        ],
        "coordinate": {
          "latitude": 37.776227,
          "longitude": -122.415165
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/f8-1192-folsom-san-francisco",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 41,
      "name": "F8  1192 Folsom",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/BwT1yQFkgjmxQDGfPh3zLA/ms.jpg",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/f8-1192-folsom-san-francisco",
      "deals": [
        {
          "is_popular": true,
          "what_you_get": "You get a voucher redeemable for $30 at F8  1192 Folsom.\nPrint out your voucher, or redeem on your phone with the <a href=\"http://www.yelp.com/yelpmobile\">Yelp app</a>.",
          "time_start": 1420272000,
          "title": "$20 for $30",
          "url": "http://www.yelp.com/deals/f8-1192-folsom-san-francisco-4",
          "additional_restrictions": "Promotion lasts for 1 year from date of purchase. After that period, your voucher is redeemable for the amount you paid, less any value you may have received. Not valid with other vouchers, certificates, or offers. Only 1 voucher(s) can be purchased and redeemed per person. Up to 3 can be purchased as gifts for others. Subject to the <a target=\"_blank\" href=\"http://www.yelp.com/tos/general_b2c_us_20120911\">General Terms</a>.",
          "options": [
            {
              "original_price": 3000,
              "title": "$20 for $30",
              "price": 2000,
              "purchase_url": "https://www.yelp.com/checkout/deal/jIGcMWlJpNv2-CVURewgIQ",
              "remaining_count": 46,
              "formatted_original_price": "$30",
              "formatted_price": "$20",
              "is_quantity_limited": true
            }
          ],
          "image_url": "http://s3-media3.fl.yelpcdn.com/dphoto/bJaJzdatfmkZkIyIqo3how/m.jpg",
          "id": "bsMmfEB93zn9zrPZZR7O2Q",
          "currency_code": "USD"
        }
      ],
      "phone": "4158571192",
      "snippet_text": "This review is for STAMINA SUNDAYS\n\nCame in from out of town for a friend's birthday on a Sunday. Had no clue where to party on a Sunday night. We stopped...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/P0HWZCnO_U9S1i0hp930Mw/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Bars",
          "bars"
        ]
      ],
      "display_phone": "+1-415-857-1192",
      "gift_certificates": [
        {
          "url": "http://www.yelp.com/gift-certificates/f8-1192-folsom-san-francisco",
          "unused_balances": "CREDIT",
          "options": [
            {
              "price": 1000,
              "formatted_price": "$10"
            },
            {
              "price": 2500,
              "formatted_price": "$25"
            },
            {
              "price": 5000,
              "formatted_price": "$50"
            },
            {
              "price": 7500,
              "formatted_price": "$75"
            },
            {
              "price": 10000,
              "formatted_price": "$100"
            }
          ],
          "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/E1u3T1CFPO2g2qJ5EMG7Mg/m.jpg",
          "id": "nF68U6yFRejab-5O4v_1XQ",
          "currency_code": "USD"
        }
      ],
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "f8-1192-folsom-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Rausch St & Rodgers St",
        "city": "San Francisco",
        "display_address": [
          "1192 Folsom",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "1192 Folsom"
        ],
        "coordinate": {
          "latitude": 37.775296,
          "longitude": -122.410074
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4.5,
      "mobile_url": "http://m.yelp.com/biz/the-hideout-bar-and-lounge-daly-city",
      "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "review_count": 23,
      "name": "The Hideout Bar & Lounge",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/R3KsOXrYsiZryINw7opxxQ/ms.jpg",
      "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "url": "http://www.yelp.com/biz/the-hideout-bar-and-lounge-daly-city",
      "deals": [
        {
          "is_popular": true,
          "what_you_get": "You get a voucher redeemable for $40 at The Hideout Bar & Lounge.\nPrint out your voucher, or redeem on your phone with the <a href=\"http://www.yelp.com/yelpmobile\">Yelp app</a>.",
          "time_start": 1410858300,
          "title": "$30 for $40",
          "url": "http://www.yelp.com/deals/the-hideout-bar-and-lounge-daly-city-2",
          "additional_restrictions": "Promotion lasts for 1 year from date of purchase. After that period, your voucher is redeemable for the amount you paid, less any value you may have received. Not valid with other vouchers, certificates, or offers. Only 1 voucher(s) can be purchased and redeemed per person. Up to 10 can be purchased as gifts for others. Subject to the <a target=\"_blank\" href=\"http://www.yelp.com/tos/general_b2c_us_20120911\">General Terms</a>.",
          "options": [
            {
              "original_price": 4000,
              "title": "$30 for $40",
              "price": 3000,
              "purchase_url": "https://www.yelp.com/checkout/deal/QzT2YNlr-2YI2dcon4F3Ug",
              "remaining_count": 95,
              "formatted_original_price": "$40",
              "formatted_price": "$30",
              "is_quantity_limited": true
            }
          ],
          "image_url": "http://s3-media3.fl.yelpcdn.com/dphoto/QSQpqaxEKUCwR2y--Cj8FQ/m.jpg",
          "id": "fT0viH26DGZWOaFF_Fx1ww",
          "currency_code": "USD"
        }
      ],
      "phone": "6503011800",
      "snippet_text": "Hidden at the borderline between SF and Daly City comes this lovely venue. I was here during their last beer pong tourney last Thursday, it was packed with...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/qCX5mioLRLU0Qj2mqjf5Iw/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Lounges",
          "lounges"
        ],
        [
          "Cocktail Bars",
          "cocktailbars"
        ]
      ],
      "display_phone": "+1-650-301-1800",
      "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
      "id": "the-hideout-bar-and-lounge-daly-city",
      "is_closed": false,
      "location": {
        "city": "Daly City",
        "display_address": [
          "6192 Mission St",
          "Daly City, CA 94014"
        ],
        "geo_accuracy": 8,
        "postal_code": "94014",
        "country_code": "US",
        "address": [
          "6192 Mission St"
        ],
        "coordinate": {
          "latitude": 37.7067806571722,
          "longitude": -122.458729594946
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/bimbos-365-club-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 444,
      "name": "Bimbo's 365 Club",
      "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/1_ljnJ0XUZYhPJYtKV6wQQ/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/bimbos-365-club-san-francisco",
      "phone": "4154740365",
      "snippet_text": "Bimbo's 365 is a North Beach gem and SF landmark, and I love the history and the Art Deco style of the club. It was founded by an Italian immigrant who got...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/geUffBFqNkgFdXEoTTpZeA/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Venues & Event Spaces",
          "venues"
        ]
      ],
      "display_phone": "+1-415-474-0365",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "bimbos-365-club-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Taylor St & Chestnut St",
        "city": "San Francisco",
        "display_address": [
          "1025 Columbus Ave",
          "Russian Hill",
          "San Francisco, CA 94133"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "Russian Hill"
        ],
        "postal_code": "94133",
        "country_code": "US",
        "address": [
          "1025 Columbus Ave"
        ],
        "coordinate": {
          "latitude": 37.8039011522147,
          "longitude": -122.415504455566
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/bootie-sf-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 458,
      "name": "Bootie SF",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/N7lrY4kw9ksX-zwEDs5Jag/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/bootie-sf-san-francisco",
      "snippet_text": "This place has AWESOME music and a great layout.\n\nEverything is cash only and the coat check is a bit annoying.",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/QKyGRWD-ef0jKJqdQoHFbA/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ]
      ],
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "bootie-sf-san-francisco",
      "is_closed": false,
      "location": {
        "city": "San Francisco",
        "display_address": [
          "DNA Lounge",
          "375 11th St",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "DNA Lounge",
          "375 11th St"
        ],
        "coordinate": {
          "latitude": 37.7709861237108,
          "longitude": -122.412704229355
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/tope-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 120,
      "name": "Tope",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/Z1tZtll_nXrOANJqFUbfCA/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/tope-san-francisco",
      "phone": "4157932120",
      "snippet_text": "It's so hard to find places that do not play house music lately. Tope played 90's hip hop! ILOVEYOUGUYS. Went 'bar hopping' after a birthday dinner but we...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/D5XkHR8Kpsjt7DOcOGzGvQ/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Bars",
          "bars"
        ]
      ],
      "display_phone": "+1-415-793-2120",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "tope-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Vallejo St & Green St",
        "city": "San Francisco",
        "display_address": [
          "1326 Grant Ave",
          "North Beach/Telegraph Hill",
          "San Francisco, CA 94133"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "North Beach/Telegraph Hill"
        ],
        "postal_code": "94133",
        "country_code": "US",
        "address": [
          "1326 Grant Ave"
        ],
        "coordinate": {
          "latitude": 37.7991022914648,
          "longitude": -122.407201007009
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/knockout-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 300,
      "name": "Knockout",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/ZXGkruEnFwrJNumXwIQliQ/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/knockout-san-francisco",
      "phone": "4155506994",
      "snippet_text": "This is one of my bernal heights faves.  I\"ve had some great photobooth moments here.    I've had some drunken walks from other bars here. had some...",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/wiYWWqATDb6XbDlYWhsg2w/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Dive Bars",
          "divebars"
        ]
      ],
      "display_phone": "+1-415-550-6994",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "knockout-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Valencia St & 29th St",
        "city": "San Francisco",
        "display_address": [
          "3223 Mission St",
          "Bernal Heights",
          "San Francisco, CA 94110"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Bernal Heights",
          "Mission"
        ],
        "postal_code": "94110",
        "country_code": "US",
        "address": [
          "3223 Mission St"
        ],
        "coordinate": {
          "latitude": 37.7452120184898,
          "longitude": -122.420070245862
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/slate-bar-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 70,
      "name": "Slate Bar",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/0VwN1aY4OyfJSXDniOH4CA/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/slate-bar-san-francisco",
      "phone": "4155588521",
      "snippet_text": "If you want to throw a party, Slate is place to do it.\n\nThis space is part of SF history. From liquid, to pink, to som bar...but slate is by far my favorite...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/Nm6fAGwFssyEQX5zyQtcTw/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Pool Halls",
          "poolhalls"
        ],
        [
          "Cocktail Bars",
          "cocktailbars"
        ]
      ],
      "display_phone": "+1-415-558-8521",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "slate-bar-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Van Ness Ave & Capp St",
        "city": "San Francisco",
        "display_address": [
          "2925 16th St",
          "Mission",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "Mission"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "2925 16th St"
        ],
        "coordinate": {
          "latitude": 37.7650479,
          "longitude": -122.418117
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/the-cinch-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 191,
      "name": "The Cinch",
      "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/1zQFoG9D9kWzn2ZM9j72Eg/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/the-cinch-san-francisco",
      "phone": "4157764162",
      "snippet_text": "Great environment. Nice bar with pool tables in the back. People are friendly and drinks are cheap.",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/Fa-ixkSQeZl89gIOxuKk7g/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Gay Bars",
          "gaybars"
        ]
      ],
      "display_phone": "+1-415-776-4162",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "the-cinch-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Washington St & Clay St",
        "city": "San Francisco",
        "display_address": [
          "1723 Polk St",
          "Nob Hill",
          "San Francisco, CA 94109"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Nob Hill"
        ],
        "postal_code": "94109",
        "country_code": "US",
        "address": [
          "1723 Polk St"
        ],
        "coordinate": {
          "latitude": 37.792732,
          "longitude": -122.421463
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/asiasf-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 1400,
      "name": "AsiaSF",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/WneAUsjOn8Oo8kY71nQagQ/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/asiasf-san-francisco",
      "menu_date_updated": 1414499222,
      "phone": "4152552742",
      "snippet_text": "I popped my AsiaSF cherry last night and it was everything I had imagined! Drop dead gorgeous queens dancing in impossibly high heels (seriously, I would...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/_G6C1BJbFCYv-vy-5UCQog/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Asian Fusion",
          "asianfusion"
        ]
      ],
      "display_phone": "+1-415-255-2742",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "menu_provider": "single_platform",
      "id": "asiasf-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Tehama St & Howard St",
        "city": "San Francisco",
        "display_address": [
          "201 9th St",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "201 9th St"
        ],
        "coordinate": {
          "latitude": 37.775035,
          "longitude": -122.412817
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/raven-bar-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 360,
      "name": "Raven Bar",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/ZQ1z-DB6_KiTyNsWw7AVcA/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/raven-bar-san-francisco",
      "phone": "4154311151",
      "snippet_text": "90's music ftw!\n\nI LOVE this place. Usually great music, interesting crowd, and drinks made right.\n\nAlthough it's a bit crowded, I do wish there was more...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/GEsX59kAFbOg5w5o3Ql7IQ/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Lounges",
          "lounges"
        ]
      ],
      "display_phone": "+1-415-431-1151",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "raven-bar-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Rausch St & Hallam St",
        "city": "San Francisco",
        "display_address": [
          "1151 Folsom St",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "1151 Folsom St"
        ],
        "coordinate": {
          "latitude": 37.7758002,
          "longitude": -122.4088749
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/mighty-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 662,
      "name": "Mighty",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/GXY1CI38_HVMNRlhbqbg2g/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/mighty-san-francisco",
      "phone": "4156267001",
      "snippet_text": "Mighty has been my lifesaver. I am a soul house lover, and in a top 40 world, I need a place to dance and have a good time. The crowd is amazing, and I...",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/qvPNDYNAw5QEi2e74hdGNw/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ]
      ],
      "display_phone": "+1-415-626-7001",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "mighty-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Alameda St & 15th St",
        "city": "San Francisco",
        "display_address": [
          "119 Utah St",
          "Mission",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Mission"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "119 Utah St"
        ],
        "coordinate": {
          "latitude": 37.7681375294924,
          "longitude": -122.406730949879
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/4fourteen-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 12,
      "name": "4Fourteen",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/rbjul4Uopg5j3ijhoHx1Eg/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/4fourteen-san-francisco",
      "phone": "4156930777",
      "snippet_text": "THIS PLACE ROCKS.\n\nProbably because it plays music that caters to 14 year olds, aka Top 40. But hey, throw in some hip hop, and now you're out of the tween...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/rcXTxjc91bsqGlC90xrfvA/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Music Venues",
          "musicvenues"
        ]
      ],
      "display_phone": "+1-415-693-0777",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "4fourteen-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Derby St & Geary St",
        "city": "San Francisco",
        "display_address": [
          "414 Mason St",
          "Union Square",
          "San Francisco, CA 94102"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Union Square"
        ],
        "postal_code": "94102",
        "country_code": "US",
        "address": [
          "414 Mason St"
        ],
        "coordinate": {
          "latitude": 37.7875595,
          "longitude": -122.4095917
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/the-mix-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 224,
      "name": "The Mix",
      "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/lTJDaDpuEExlqpYF-fu74A/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/the-mix-san-francisco",
      "phone": "4154318616",
      "snippet_text": "I moved away from San Francisco about 15 years ago, but still visit several times a year. Back then, I think this place was called Charlie's? Uncle...",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/MxM21YY_potF4zeBpGSx_w/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Gay Bars",
          "gaybars"
        ]
      ],
      "display_phone": "+1-415-431-8616",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "the-mix-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Castro St & Hartford St",
        "city": "San Francisco",
        "display_address": [
          "4086 18th St",
          "Castro",
          "San Francisco, CA 94114"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Castro"
        ],
        "postal_code": "94114",
        "country_code": "US",
        "address": [
          "4086 18th St"
        ],
        "coordinate": {
          "latitude": 37.7611389,
          "longitude": -122.4344788
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/carbon-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 83,
      "name": "Carbon",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/carbon-san-francisco",
      "phone": "4152178882",
      "snippet_text": "I worked with Ken to host an event at Carbon during Halloween for 200+ people and it was fantastic. Ken and his team were wonderful to work with, allowed us...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/LxioQI18lHm7LjHKi1TxbA/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Lounges",
          "lounges"
        ],
        [
          "Venues & Event Spaces",
          "venues"
        ]
      ],
      "display_phone": "+1-415-217-8882",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "carbon-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Mason St & Powell St",
        "city": "San Francisco",
        "display_address": [
          "383 Bay St",
          "North Beach/Telegraph Hill",
          "San Francisco, CA 94133"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "North Beach/Telegraph Hill"
        ],
        "postal_code": "94133",
        "country_code": "US",
        "address": [
          "383 Bay St"
        ],
        "coordinate": {
          "latitude": 37.8055654,
          "longitude": -122.4133166
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/monarch-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 245,
      "name": "Monarch",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/KiF2k1XvGEZcd5XXf5IaJQ/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/monarch-san-francisco",
      "snippet_text": "I recently spent President's Day weekend in SF and Monarch made our weekend! The dancing was fun and there was a warehouse-like party downstairs. For those...",
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/c4U8a-ZephQF2_PatdBOcg/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Music Venues",
          "musicvenues"
        ],
        [
          "Lounges",
          "lounges"
        ]
      ],
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "monarch-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Minna St & Mission St",
        "city": "San Francisco",
        "display_address": [
          "101 6th St",
          "SoMa",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "101 6th St"
        ],
        "coordinate": {
          "latitude": 37.7809638977051,
          "longitude": -122.408309936523
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": false,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/epr-sf-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 19,
      "name": "EPR SF",
      "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/A0R0Vz8RgZWzjBeGUB9E6Q/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/epr-sf-san-francisco",
      "phone": "4152752122",
      "snippet_text": "How to calculate your own rating of this club!!\nIf you are in line with all of the below points, then this is a 5 star club.\nTake 1 point away for each...",
      "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/nHimofUQlOPC27uX7ltv5Q/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Music Venues",
          "musicvenues"
        ]
      ],
      "display_phone": "+1-415-275-2122",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "epr-sf-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Lapu St & 3rd St",
        "city": "San Francisco",
        "display_address": [
          "715 Harrison St",
          "SoMa",
          "San Francisco, CA 94107"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "SoMa"
        ],
        "postal_code": "94107",
        "country_code": "US",
        "address": [
          "715 Harrison St"
        ],
        "coordinate": {
          "latitude": 37.782047,
          "longitude": -122.397613
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/cockblock-san-francisco-3",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 40,
      "name": "COCKBLOCK",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/_JPizMKr1zz-XkvAsxI1Jg/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/cockblock-san-francisco-3",
      "phone": "4158612011",
      "snippet_text": "I can't believe we FINALLY went!! We've been trying to go for ages and it was well worth the wait. Tons of beautiful ladies to dance and make eyes with and...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/CjYSqdzBd2hoyvJFrDbK5A/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ]
      ],
      "display_phone": "+1-415-861-2011",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "cockblock-san-francisco-3",
      "is_closed": false,
      "location": {
        "city": "San Francisco",
        "display_address": [
          "The Rickshaw Stop",
          "155 Fell St",
          "Hayes Valley",
          "San Francisco, CA 94102"
        ],
        "geo_accuracy": 8,
        "neighborhoods": [
          "Hayes Valley",
          "Civic Center"
        ],
        "postal_code": "94102",
        "country_code": "US",
        "address": [
          "The Rickshaw Stop",
          "155 Fell St"
        ],
        "coordinate": {
          "latitude": 37.776212990284,
          "longitude": -122.420400828123
        },
        "state_code": "CA"
      }
    },
    {
      "is_claimed": true,
      "rating": 4,
      "mobile_url": "http://m.yelp.com/biz/omg-san-francisco",
      "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "review_count": 48,
      "name": "OMG",
      "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/cSIhgGI8NxO9KHmVnuAPeQ/ms.jpg",
      "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "url": "http://www.yelp.com/biz/omg-san-francisco",
      "deals": [
        {
          "is_popular": true,
          "what_you_get": "You get a voucher redeemable for $16 at OMG.\nPrint out your voucher, or redeem on your phone with the <a href=\"http://www.yelp.com/yelpmobile\">Yelp app</a>.",
          "time_start": 1366762444,
          "title": "$12 for $16",
          "url": "http://www.yelp.com/deals/omg-san-francisco",
          "additional_restrictions": "Promotion lasts for 1 year from date of purchase. After that period, your voucher is redeemable for the amount you paid, less any value you may have received. Not valid with other vouchers, certificates, or offers. Only 1 voucher(s) can be purchased and redeemed per person. Up to 3 can be purchased as gifts for others. Subject to the <a target=\"_blank\" href=\"http://www.yelp.com/tos/general_b2c_us_20120911\">General Terms</a>.",
          "options": [
            {
              "original_price": 1600,
              "title": "$12 for $16",
              "price": 1200,
              "purchase_url": "https://www.yelp.com/checkout/deal/dcWelBjgHYDBD3KqyqSZIg",
              "formatted_original_price": "$16",
              "formatted_price": "$12",
              "is_quantity_limited": false
            }
          ],
          "image_url": "http://s3-media1.fl.yelpcdn.com/dphoto/j3HWFkN7AQUatCmVJkJxIg/m.jpg",
          "id": "cZa5bxYY-3VXBIOAnx-ffA",
          "currency_code": "USD"
        }
      ],
      "phone": "4158966473",
      "snippet_text": "What you need to know if you go to OMG.\n\n-Lyft or Uber to and from club.\n-Go directly into club have lyft waiting before you leave club. \n\nTHE...",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/yiOOp0zq53CWnP6DiYcJlg/ms.jpg",
      "categories": [
        [
          "Dance Clubs",
          "danceclubs"
        ],
        [
          "Gay Bars",
          "gaybars"
        ]
      ],
      "display_phone": "+1-415-896-6473",
      "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
      "id": "omg-san-francisco",
      "is_closed": false,
      "location": {
        "cross_streets": "Stevenson St & Jessie St",
        "city": "San Francisco",
        "display_address": [
          "43 6th St",
          "Union Square",
          "San Francisco, CA 94103"
        ],
        "geo_accuracy": 9.5,
        "neighborhoods": [
          "Union Square",
          "SoMa"
        ],
        "postal_code": "94103",
        "country_code": "US",
        "address": [
          "43 6th St"
        ],
        "coordinate": {
          "latitude": 37.781797565161,
          "longitude": -122.40949548717
        },
        "state_code": "CA"
      }
    }
  ]
};
