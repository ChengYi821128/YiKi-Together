$(function () {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this), str = $ele.html(), sum = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(sum, 1);
        if (current == '<') {
          sum = str.indexOf('>', sum) + 1;
        } else {
          sum++;
        }
        var curr = str.substr(0, sum);
        $ele.html(curr + (sum & 1 ? '_' : ''));
        if (sum >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
  $("#vicky").typewriter();
})
