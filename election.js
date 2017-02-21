$(document).ready(function() {
  var httpRequest;
  makeRequest('https://bb-election-api.herokuapp.com/');

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = displayContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function displayContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText);
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

  // function alertContents() {
  //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     if (httpRequest.status === 200) {
  //       alert(httpRequest.responseText);
  //     } else {
  //       alert('There was a problem with the request.');
  //     }
  //   }
  // }
})();
