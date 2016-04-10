var ScreenLockApp = (function() {
  var _lockPattern = [];
  var _inputPattern = [];
  var _setLockPattern = false;

  var setLockPattern = function(inputs) {
    // set array of objects to the lock pattern variable
    // Sample input
    _lockPattern = [p1, p2, p3];

  }

  var _resetLockPattern = function() {
    _inputPattern = [];
  };

  var _pushLockPattern = function(point) {
    _lockPattern.push(point);
  };

  var _pushInputPattern = function(point) {
    _inputPattern.push(point);
  }

  var getLockPattern = function() {
    // return array of objects
    return _lockPattern;
  }

  var validatePattern = function(input) {
    return Util.equalPointArrays(_lockPattern, _inputPattern);
  };

  var _setUpCellEventHandlers = function() {
    var table = document.getElementById('pattern-table');
      var rows = table.getElementsByTagName('tr');

      for(var i = 0; i < rows.length; i++) {
        var currentRow = rows[i];
        var cells = currentRow.getElementsByTagName('td');
        for(var j = 0; j < cells.length; j++) {
          var createClickHandler = function(i, j) {
            return function() {
              var p = new Point(i, j);
              if(_setLockPattern) {
                _pushLockPattern(p);
              } else {
                _pushInputPattern(p);
              }
            }
          }
          cells[j].onclick = createClickHandler(i, j);
        }
      }
  };

  var _setUpEventHandlers = function() {
    _setUpCellEventHandlers();

    // Button
    var validateButton = document.getElementById('validate-pattern');
    var setLockPatternButton = document.getElementById('set-pattern');
    var resetLockPatternButton = document.getElementById('reset-pattern');

    validateButton.addEventListener('click', function() {
      _setLockPattern = false;
      if(validatePattern()) {
        console.log('Pass');
      } else {
        console.log('You shall not pass!');
      }
    });

    setLockPatternButton.addEventListener('click', function() {
      _setLockPattern = true;
    });

    resetLockPatternButton.addEventListener('click', function() {
      _setLockPattern = false;
      _resetLockPattern();
    });
  };

  var init = (function() {
    _setUpEventHandlers();
  })();

  return {
    init: init
  }
})();