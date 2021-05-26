function fill_space(str, places) {
  str = str.toString();
  var spaces = places - str.length + 1;
  return str + new Array(+(spaces > 0 && spaces)).join("&nbsp;");
}