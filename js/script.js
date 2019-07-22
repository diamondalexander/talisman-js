// Toggle to hide Main Navigation and show Checkin Navigation

function hideMainNav() {
  var main = document.getElementById('mainNav');
  main.classList.toggle('hidden');
  var checkin = document.getElementById('checkinNav');
  checkin.classList.remove('hidden');
  var topNav = document.getElementById('topNavContainer');
  topNav.classList.remove('hidden');
};

// Toggle to hide Checkin Navigation and show Main Navigation

function showMainNav() {
  var main = document.getElementById('checkinNav');
  main.classList.add('hidden');
  var checkin = document.getElementById('mainNav');
  checkin.classList.remove('hidden');
  var topNav = document.getElementById('topNavContainer');
  topNav.classList.toggle('hidden');
  var shapeControls = document.getElementById('shapeNav');
  shapeControls.classList.add('hidden');
};

// Toggle to hide Checkin Navigation and show Shape Controls

function showShapeNav() {
  var hideCheckin = document.getElementById('checkinNav');
  hideCheckin.classList.toggle('hidden');
  var shapeControls = document.getElementById('shapeNav');
  shapeControls.classList.toggle('hidden');
};

// Toggle to hide Checkin Navigation and show Color Controls

function showColorNav() {
  var hideCheckin = document.getElementById('checkinNav');
  hideCheckin.classList.toggle('hidden');
  var shapeControls = document.getElementById('colorNav');
  shapeControls.classList.toggle('hidden');
};







