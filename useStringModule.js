


var S = require('string');
S('data_rate').camelize().s; //'dataRate'
S('background-color').camelize().s; //'backgroundColor'
S('-moz-something').camelize().s; //'MozSomething'
S('_car_speed_').camelize().s; //'CarSpeed'
S('yes_we_can').camelize().s; //'yesWeCan' /**

