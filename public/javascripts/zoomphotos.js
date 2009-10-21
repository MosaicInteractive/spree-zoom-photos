var zoom_options = { zoomWidth:350, zoomHeight:250,title:true };

function hasThumbnails() {
  return $('ul.thumbnails li').length > 0;
}
function getSelectedImagePath() {
  return $("#main-image img").attr('src');
}
function checkAndUpdateImageViews() {
  selectedImagePath = getSelectedImagePath();
  largeImagePath = selectedImagePath.replace('/product/', '/large/');
  enlargeControl = $("a.enlargeable");
  if (enlargeControl.attr('href') != largeImagePath) {
    enlargeControl.attr('href', largeImagePath);
  }
  xlImagePath = selectedImagePath.replace('/product/', '/xl/');
  zoomControl = $("#zoomer");
  if (zoomControl.attr('href') != xlImagePath) {
      zoomControl.attr('href', xlImagePath);
  }
}

function initImageViews() {
  $("a.enlargeable").fancybox();
  $(".jqzoom").jqzoom(zoom_options);
}

$(document).ready(function() {
  initImageViews();
  if (hasThumbnails()) {
    // Check if the image has changed every 0.5sec, this is more reliable
    // than checking the load image event which isn't reliable in some browsers.
    setInterval(checkAndUpdateImageViews, 500);
  }
});
