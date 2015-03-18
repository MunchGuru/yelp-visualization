// var Sequelize = require('sequelize');
// var dbconfig = require('./pw');

// var orm = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password);

// var Test = orm.define('test', {
//   testfield1: {type: Sequelize.STRING, defaultValue: 'anonymous'},
//   testfield2: Sequelize.STRING,
//   testfiled3: {type: Sequelize.INTEGER, defaultValue: 0}
// });

// Test.sync();

// exports.Test = Test;

//----------------------------------------------------------------------------//
//                                                                            //
//  ____               __                      __                             //
// /\  _`\            /\ \__                  /\ \                            //
// \ \ \L\ \_ __    __\ \ ,_\    __    ___    \_\ \                           //
//  \ \ ,__/\`'__\/'__`\ \ \/  /'__`\/' _ `\  /'_` \                          //
//   \ \ \/\ \ \//\  __/\ \ \_/\  __//\ \/\ \/\ \L\ \                         //
//    \ \_\ \ \_\\ \____\\ \__\ \____\ \_\ \_\ \___,_\                        //
//     \/_/  \/_/ \/____/ \/__/\/____/\/_/\/_/\/__,_ /                        //
//                                                                            //
//  ____              __             __                                       //
// /\  _`\           /\ \__         /\ \                                      //
// \ \ \/\ \     __  \ \ ,_\    __  \ \ \____     __      ____     __         //
//  \ \ \ \ \  /'__`\ \ \ \/  /'__`\ \ \ '__`\  /'__`\   /',__\  /'__`\       //
//   \ \ \_\ \/\ \L\.\_\ \ \_/\ \L\.\_\ \ \L\ \/\ \L\.\_/\__, `\/\  __/       //
//    \ \____/\ \__/.\_\\ \__\ \__/.\_\\ \_,__/\ \__/.\_\/\____/\ \____\      //
//     \/___/  \/__/\/_/ \/__/\/__/\/_/ \/___/  \/__/\/_/\/___/  \/____/      //
//                                                                            //
//                                                                            //
//----------------------------------------------------------------------------//
var db = [];

db.push({'display': 'Restaurants',          'api':'restaurants',        'cat' : undefined});
db.push({'display': 'Nightlife',            'api':'nightlife',          'cat' : undefined});
db.push({'display': 'Adult Entertainment',  'api':'adultentertainment', 'cat':'nightlife'});
db.push({'display': 'Bars',                 'api':'bars',               'cat':'nightlife'});
db.push({'display': 'Absinthe Bars',        'api':'absinthebars',       'cat':'bars'});
db.push({'display': 'Airport Lounges',      'api':'airportlounges',     'cat':'bars'});
db.push({'display': 'Beach Bars',           'api':'beachbars',          'cat':'bars'});
db.push({'display': 'Beer Bar',             'api':'beerbar',            'cat':'bars'});
db.push({'display': 'Champagne Bars',       'api':'champagne_bars',     'cat':'bars'});
db.push({'display': 'Cocktail Bars',        'api':'cocktailbars',       'cat':'bars'});
db.push({'display': 'Dive Bars',            'api':'divebars',           'cat':'bars'});
db.push({'display': 'Gay Bars',             'api':'gaybars',            'cat':'bars'});
db.push({'display': 'Hookah Bars',          'api':'hookah_bars',        'cat':'bars'});
db.push({'display': 'Hotel bar',            'api':'hotel_bar',          'cat':'bars'});
db.push({'display': 'Irish Pub',            'api':'irish_pubs',         'cat':'bars'});
db.push({'display': 'Lounges',              'api':'lounges',            'cat':'bars'});
db.push({'display': 'Pubs',                 'api':'pubs',               'cat':'bars'});
db.push({'display': 'Sake Bars',            'api':'sakebars',           'cat':'bars'});
db.push({'display': 'Sports Bars',          'api':'sportsbars',         'cat':'bars'});
db.push({'display': 'Wine Bars',            'api':'wine_bars',          'cat':'bars'});
db.push({'display': 'Beer Gardens',         'api':'beergardens',        'cat':'nightlife'});
db.push({'display': 'Coffeeshops',          'api':'coffeeshops',        'cat':'nightlife'});
db.push({'display': 'Comedy Clubs',         'api':'comedyclubs',        'cat':'nightlife'});
db.push({'display': 'Country Dance Halls',  'api':'countrydancehalls',  'cat':'nightlife'});
db.push({'display': 'Dance Clubs',          'api':'danceclubs',         'cat':'nightlife'});
db.push({'display': 'Dance Restaurants',    'api':'dancerestaurants',   'cat':'nightlife'});
db.push({'display': 'Fasil Music',          'api':'fasil',              'cat':'nightlife'});
db.push({'display': 'Jazz & Blues',         'api':'jazzandblues',       'cat':'nightlife'});
db.push({'display': 'Karaoke',              'api':'karaoke',            'cat':'nightlife'});
db.push({'display': 'Music Venues',         'api':'musicvenues',        'cat':'nightlife'});
db.push({'display': 'Piano Bars',           'api':'pianobars',          'cat':'nightlife'});
db.push({'display': 'Pool Halls',           'api':'poolhalls',          'cat':'nightlife'});

module.exports = db;
