var myModule = (function() {
    'use strict';
  
    return {
      events: function() {
        $('.my-btn').click(()=>{
            alert("test")
        })
      }
    };
  })();
  
  module.exports = myModule

