/*
Comment out when using node tests/main.js
(function (window) {
  'use strict';
  GLOBAL.App = window.App;
  GLOBAL.Truck = App.Truck;
  GLOBAL.DataStore = App.DataStore;
  GLOBAL.myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);
*/

(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);
