/// TODO CRUD FUNCTIONS


var arrayOfQuotes = [];


//create

function addQuotes (quote) {
    arrayOfQuotes.push(quote);
}


//read

// console.log(arrayOfQuotes);


//delete

function deleteQuote (index) {
    let newArr = [];

    for (let i = 0; i < arrayOfQuotes.length; i++) {
        if (i == index) {
            console.log("this is delete");
        }else{
            newArr.push(arrayOfQuotes[i]);
        }
        
    }

    arrayOfQuotes = newArr;
}

// deleteQuote(1)

// console.log(arrayOfQuotes);


function findIndex(quote){
    let result;

    for (let i = 0; i < arrayOfQuotes.length; i++) {
        if (arrayOfQuotes[i] == quote) {
            result = i;
        }
        
    }
    return result;
}




function updateQuote(index,value){
    arrayOfQuotes[index] = value;
}






//////////////todo ui////////////////


var inputBar = document.getElementById('inputBar');
var quotesCont = document.getElementById('quotesCont');
var addBtn = document.getElementById('addBtn');
var updateBar = document.getElementById('updateBar');
var updateBtn = document.getElementById('updateBtn');
var backDrop = document.getElementById('backDrop');
var close = document.getElementById('close');
var newValue;
var index = 0;

close.addEventListener('click', (e) => {
    backDrop.style.display = 'none';
})

updateBtn.addEventListener('click', (e) =>{
    backDrop.style.display = 'none';
    newValue = updateBar.value;
    updateQuote(index,newValue);
    updateBar.value="";
    mapQuotes()
    console.log(newValue);
})


addBtn.addEventListener('click',  (e)=>{
    let quote = inputBar.value;
    if (inputBar.value != "") {
        addQuotes(quote);
    } else {
        alert("Enter a Task")
    }
    mapQuotes();
    inputBar.value = "";
})

quotesCont.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        let index = e.target.getAttribute("index");
        deleteQuote(+index);
        mapQuotes();
    }
    // if (e.target.classList.contains('upt-btn')) {
    //     let index = e.target.getAttribute("index");
    //     deleteQuote(+index);
    //     mapQuotes();
    // }
    if (e.target.classList.contains('upd-btn')) {
        backDrop.style.display = 'flex';
        let index = e.target.getAttribute("index");
        // arrayOfQuotes[+index] = updateBar.style.display;
        updateBar.value = arrayOfQuotes[+index];
        // updateQuote(+index,newValue)
        mapQuotes();
    }
})

mapQuotes();    





//// Map quotes{manully add karaga js me divs}

function mapQuotes(){

    quotesCont.innerHTML = "";
  for (let i = 0; i < arrayOfQuotes.length; i++) {
    quotesCont.innerHTML += `<div class="quote-style">` + arrayOfQuotes[i] + ` <button index="` + i + `" class="del-btn btn-style">X</button> <button index="` + i + `" class = "upd-btn">update</button></div>`;
}

}