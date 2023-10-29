let value;

$('h2').click(function (e) { 
  value = $(e.target).text();
});

$('button').click(function (e) { 
  e.preventDefault();
  $('.rating').toggleClass('display-none');
  $('.thanks').toggleClass('display-none');
  $('#result').text(value);
});
