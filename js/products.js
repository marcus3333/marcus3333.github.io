// This function (un)checks all Checkboxes deoending on the change of allCategoriesCheckbox
// is called by onchange-event of allCategoriesCheckbox
function selectAllCategories() {
  // storing of all other categorieCheckboxes
  var cbs = document.querySelectorAll('input[id^="catCheckbox"]');
  // storing allChecked-status of allCategoriesCheckbox
  var allChecked = document.getElementById('checkboxAllCategories').checked;
  // all other checkboxes are going to be (un)checked depending on allChecked-status
  // calling of hideProduct-function
  for (var cb of cbs) {
    if (allChecked === true) {
      cb.checked = true;
    }
    else {
      cb.checked = false;
    }
    hideProduct(cb.id);
  }
}

// This function hiddes/shows the products depending on the selected checkboxes
// is called by onchange-event of all other checkboxes and selectAllCategories-function
function hideProduct(id) {
  // storing checked-status of checkbox, checked = category visible
  var visibility = document.getElementById(id).checked;
  // storing categoryName of checkbox 
  var category = document.getElementById(id).value;
  // storing of all product <div>s whose data-gamecategory attribute value contains the category 
  var products = document.querySelectorAll('div[data-gamecategory*="' + category + '"]');
  // changing of product classes depending on visibility
  for (var product of products) {
    if (visibility === true) {
      product.className = "col-12 col-sm-6 col-lg-3 p-2 productVisible";
    }
    else {
      product.className = "productHidden";
    }
  }
  allCheckboxCheck();
}

// un(checks) the allCategoriesCheckbox depending on the other checkboxes
// is called by hideProduct-function
function allCheckboxCheck() {
  // storing of all other categorieCheckboxes
  var allChecked = true;
  var cbs = document.querySelectorAll('input[id^="catCheckbox"]');
  // checking if one of the checkboxes is not checked
  for (var cb of cbs) {
    if (cb.checked === false) {
      allChecked = false;
      break;
    }
  }
  // checks allCategoriesCheckbox if all other checkboxes are checked
  if (allChecked === true) {
    document.getElementById('checkboxAllCategories').checked = true;
  }
  // unchecks allCategoriesCheckbox if one other checkbox is unchecked
  else {
    document.getElementById('checkboxAllCategories').checked = false;
  }
}  