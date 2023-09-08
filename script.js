// profile menu info. hidden and shown function
// declare variables and get the elements
let profileMenu = document.getElementById("profileMenu");

// when user clicks on profile image icon
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

// media screen functions
// declare variables
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

// when user clicks on show more link
function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    }
    else{
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}