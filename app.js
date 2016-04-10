var ScreenLockApp = (function() {
  var _lockPattern = [];

  var setLockPattern = function(inputs) {
    // set array of objects to the lock pattern variable
    // Sample input
    var p1 = new Point(0, 0);
    var p2 = new Point(0, 1);
    var p3 = new Point(0, 2);
    var p4 = new Point(1, 0);
    var p5 = new Point(1, 1);
    var p6 = new Point(1, 2);
    var p7 = new Point(2, 0);
    var p8 = new Point(2, 1);
    var p9 = new Point(2, 2);

    _lockPattern = [p1, p2, p3];

  }

  var _pushLockPattern = function(point) {
    _lockPattern.push(point);
  }

  var getLockPattern = function() {
    // return array of objects
    return _lockPattern;
  }

  var validatePattern = function(input) {
    // Sample input
    var p1 = new Point(0, 0);
    var p2 = new Point(0, 1);
    var p3 = new Point(0, 2);

    var input = [p1, p2, p3];

    return Util.equalPointArrays(_lockPattern, input);
  };

  var _setUpEventHandlers = function() {
    var table = document.getElementById('pattern-table');
    var rows = table.getElementsByTagName('tr');

    for(var i = 0; i < rows.length; i++) {
      var currentRow = rows[i];
      var cells = currentRow.getElementsByTagName('td');
      for(var j = 0; j < cells.length; j++) {
        var createClickHandler = function(i, j) {
          return function() {
            console.log(i + ' ' + j);
            var p = new Point(i, j);
            _pushLockPattern(p);
          }
        }
        cells[j].onclick = createClickHandler(i, j);
      }
    }

    // Button
    var button = document.getElementById('validatePattern');
    button.addEventListener('click', function() {
      if(validatePattern()) {
        console.log('Pass');
      } else {
        console.log('You shall not pass!');
      }
    })
  };

  var init = (function() {
    _setUpEventHandlers();
  })();

  return {
    init: init,
    setLockPattern: setLockPattern,
    getLockPattern: getLockPattern,
    validatePattern: validatePattern
  }
})();