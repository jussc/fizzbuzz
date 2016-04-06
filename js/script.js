for (var i = 1; i < 101; i++) {

  if ((i % 5 == 0) && (i % 3 == 0)) {
    // console.log('fizz buzz');
    $('div ul').append('<li>' + 'fizz buzz' + '</li>');
  }

  else if (i % 3 == 0) {
    // console.log('fizz');
    $('div ul').append('<li>' + 'fizz' + '</li>');
  }  

  else if (i % 5 == 0) {
    // console.log('buzz');
    $('div ul').append('<li>' + 'buzz' + '</li>');
  }


  else {
    // console.log(i);
    $('div ul').append('<li>' + i + '</li>');
  }
}