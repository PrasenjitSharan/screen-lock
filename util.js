var Util = (function() {
  var equalArrays = function(a1, a2) {
    if(a1.length !== a2.length) {
      return false;
    }
    for(var i = 0; i < a1.length; i++) {
      if(a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  };

  var equalPointArrays = function(a1, a2) {
    if(a1.length !== a2.length) {
      return false;
    }
    for(var i = 0; i < a1.length; i++) {
      if(a1[i].x !== a2[i].x || a1[i].y !== a2[i].y) {
        return false;
      }
    }
    return true;
  };

  return {
    equalPointArrays: equalPointArrays
  }
})();