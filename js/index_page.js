// URL Copy To Clipboard
document.getElementById("share-button").addEventListener("click", getURL);

function getURL() {
  const c_url = window.location.href;
  copyToClipboard(c_url);
  alert("Meeting Link Has Been Copied Now You Can Paste This Link To Your Friends " + c_url);
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

// Invite Link Input
function getInputValue() {
  var url = document.getElementById("invite-link-input").value;
  var code = url.split("/");
  window.open(code[3]);SS
}
