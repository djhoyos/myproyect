// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require jquery3
//= require popper
//= require bootstrap

//= require select2
//= require select2-full

document.addEventListener("turbolinks:load", function() {

    return $('.select2Persona').select2({
       theme: 'bootstrap',
       minimumInputLength: 3,
       maximumInputLength: 20,
       ajax: {
         url: '/personas/search.json',
         dataType: 'json',
         delay: 250,
         data: function(params) {
           return {
             q: params.term,
             page: params.page
           };
         },
         processResults: function(data) {
           return {
             results: $.map(data, function(item) {
               return {
                 text: item.name,
                 id: item.id
               };
             })
           };
         }
       }
     });
   });
 
