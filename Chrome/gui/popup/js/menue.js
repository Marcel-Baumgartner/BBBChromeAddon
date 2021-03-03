function switchTo(tab)
{
  window.location.href = "chrome-extension://" + getid() + "/gui/popup/" + tab + ".html";
  console.log("Switching to " + tab);
}
function getid()
{
  return chrome.runtime.id;
}
