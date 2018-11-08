module.exports = {
  exampleArray: [
    function (done) {
      console.log('1');
      done();
    },
    function (done) {
      console.log('2');
      done();
    },
    function (done) {
      console.log('3');
      done();
    },
    function (done) {
      setTimeout(function() {
        console.log('4');
        done();
      }, 3000);
    },
    function (done) {
      console.log('5');
      done();
    },
    function (done) {
      console.log('6');
      done();
    },
    function (done) {
      console.log('7');
      done();
    },
    function (done) {
      console.log('8');
      done();
    },
    function (done) {
      console.log('9');
      done();
    }
  ]
}
