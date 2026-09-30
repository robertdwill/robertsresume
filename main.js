document.getElementById('cf').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = new FormData(e.target);
  var body = 'Name: ' + f.get('name') + '\nEmail: ' + f.get('email') + '\nCompany: ' + (f.get('company') || '') + '\n\n' + f.get('msg');
  location.href = 'mailto:wcgcollects@gmail.com?subject=' + encodeURIComponent('Website inquiry from ' + f.get('name')) + '&body=' + encodeURIComponent(body);
});
