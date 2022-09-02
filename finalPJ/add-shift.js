
const dateShift = document.getElementById("date-shift");
const startShift = document.getElementById("start-time-shift");
const endShift = document.getElementById("end-time-shift");
const hourlyProfitShift = document.getElementById("hourly-profit-shift");
const workPlaceShift = document.getElementById("workplace-shift");
const uniqueNameShift = document.getElementById("unique-name-shift");
const commentShift = document.getElementById("comment-shift");
const saveButtonShift = document.getElementById("save-button");

saveButtonShift.addEventListener('click', (e) => {
  e.preventDefault();
  const dateAddShift = dateShift.value;
  const startAddShift = startShift.value;
  const endAddShift = endShift.value;
  const hourlyAddProfitShift = hourlyProfitShift.value;
  const workPlaceAddShift = workPlaceShift.value;
  const uniqueNameAddShift = uniqueNameShift.value;
  const commentAddShift = commentShift.value;

  console.log(commentAddShift);

 const newAddShift = {
  newDateAddShift : dateShift.value,
  newStartAddShift : startShift.value,
  newEndAddShift : endShift.value,
  newhHourlyAddProfitShift : hourlyProfitShift.value,
  newWorkPlaceAddShift : workPlaceShift.value,
  newUniqueNameAddShift : uniqueNameShift.value,
  newCommentShift : commentShift.value
}

 localStorage.setItem(newAddShift.newUniqueNameAddShift, JSON.stringify(newAddShift));

 let uniqueShiftSlug = JSON.parse(localStorage.getItem(newAddShift.newUniqueNameAddShift));
 console.log(uniqueShiftSlug);


function checkShiftSlugName(){
 for ( let newUniqueNameAddShift in newAddShift){
  if (newUniqueNameAddShift in localStorage) {
    console.log('yes');
} else {
    console.log('no');
}
}
}

});

// Each shift has a unique name. The user will be notified if the name already exists, and the user will have to choose a new name.
//save button: After pressing the save button there will be a rotating progress bar. the data is saved to local storage.




