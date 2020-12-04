let mainPage = document.getElementsByTagName("main")[0];
let pages = mainPage.getElementsByClassName("page");
let list = []

for(let i=0; i<pages.length; i++){
    list.push(pages[i].getElementsByTagName("img").item(0).src)
}

copy(list.join().replaceAll(",", " "))