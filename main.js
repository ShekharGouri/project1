const menuIcon = document.getElementById("menu-icon");
const SlideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function ()
 {
    if(searchBox.style.top == '72px')
    {
     searchBox.style.top ='24px';
     searchBox.style.pointerEvents = 'none';
    } 
    else
    {
        searchBox.style.top ='72px';
        searchBox.style.pointerEvents = 'auto';
    }
});

menuIcon.addEventListener('click', function(){
 if(SlideoutMenu.style.opacity == '1'){
     SlideoutMenu.style.opacity = '0';
     SlideoutMenu.style.pointerEvents = 'none';
 } else{
   SlideoutMenu.style.opacity = '1';
   SlideoutMenu.style.pointerEvents = 'auto';
 }
})