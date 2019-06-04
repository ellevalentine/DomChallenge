//-------------------------------------------------------------------------------------------------------------------------------
// 1. As a user, I should see the timer increment every second once the page has loaded.

counter = document.getElementById('counter')

timer = parseInt(counter.innerText)  // since counter.innerText is a string of "0" we need to parse it as an interger so that we can add to it

function myTimer(){ // create the function that can be called in set interval so that we can re-define the inner text of the counter to add one when this function is called
    counter.innerText = timer += 1
}

// 1000 millisecounds is = 1 second 

myVar = setInterval(myTimer, 1000) // this set interval will call upon myTimer function and execute it every 1000 milliseconds  - we also set this setInterval = myVar so that this function is stored since we will need to call upon it again / stop / pause what it does. 



//-------------------------------------------------------------------------------------------------------------------------------
// 2. As a user, I can manually increment and decrement the counter as I like.

minus = document.getElementById('-') // grab the minus button from html
minus.addEventListener('click', pressMinusBtn) // add an event listener for minus button 

function pressMinusBtn(){  // create the function called upon in the event listener 
  counter.innerText = timer -= 1 // add one to the counter 
}

// repeat for plus button
plus = document.getElementById('+')
plus.addEventListener('click', pressPlusBtn)

function pressPlusBtn(){ 
    counter.innerText = timer += 1
  }




  //-------------------------------------------------------------------------------------------------------------------------------
// 3. As a user, I can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number.

liker = document.getElementById('<3')
viewLikes = document.querySelector('.likes') // this is an unordered list so will need to create list items

liker.addEventListener('click', addLikes)

num = "hello"

// function likeCounter(){
//     if (counter.innerHTML = 3 )
//     num = 3
//     else
//     num = "x"
// }


//commentList.appendChild
function addLikes(){
    viewLikes.innerHTML += `<li> ${counter.innerText} has been liked ${num} time </li>`
}


//-------------------------------------------------------------------------------------------------------------------------------
// 4. As a user, I can pause the game, which should disable all buttons except the pause button. The pause button should then show the text "resume."

pauseBtn = document.getElementById('pause') // dont add the event listener stight on so that you can call upon these varible again
pauseBtn.addEventListener('click', pressPauseBtn) // add the event listener and get it to run pressPauseBtn functoin defined below 

function pressPauseBtn(){ // a function that deals with pause and resume use conditional statments for this
    if (myVar) { // when setInterval is running it will be defined with a number associated to which interval it is - hench since its defined as a number/ will return/ its seen as truthy
    myVar = clearInterval(myVar) // clearInterval(myVar) will clear what we previously set myVar to equal - then defining this again sets myVar to undefinded essentially
    pauseBtn.innerText = "resume" // to change the button to say resume
    } else { // when we press pause and above has been run the function myVar becomes undefinded since its not running and then this will run the else statement
    myVar = setInterval(myTimer, 1000) // since above we clear that myVar was deinfed as we now need to reassign this function 
    pauseBtn.innerText = "pause" // to change the button to say pause again 
    }
}




//-------------------------------------------------------------------------------------------------------------------------------
// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

commentList = document.getElementById('list') // create a list inside this div
LeaveACommentForm = document.getElementById('comment-form')
submitBtn = document.getElementById('submit')
commentInput = document.querySelector('#comment-input') // here we grab the comment box 

submitBtn.addEventListener('click', addCommentsToList) // add event listener to the submit button 
 
function addCommentsToList(e){
e.preventDefault() // stop the page from refrshing - espcially since atm we dont have a back end so once the page is refreshed nothing will be saved
    comments = commentList.innerHTML += `<br> ${commentInput.value}` // grab the value inputed into the comment box and present it
    
}
