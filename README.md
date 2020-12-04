# Notes-downloader-from-lecturenotes.in
Download any notes from https://lecturenotes.in/ using simple JS and cURL(terminal)

* visit the website
* Select a pdf/ notes, Go to read option
* copy and paste these code on your chrome developer tools(ctrl+shift+j)

```
let mainPage = document.getElementsByTagName("main")[0];
let pages = mainPage.getElementsByClassName("page");
let list = []

for(let i=0; i<pages.length; i++){
    list.push(pages[i].getElementsByTagName("img").item(0).src)
}

copy(list.join().replaceAll(",", " "))
```

> All urls of the image will be copied.

* Go to any text editor (like notepad/word/text editor) and paste(ctrl+v) and save it as <b>file.txt</b>
* Open terminal, Install cURL(If you don't have. Linux, Mac will have this by default)
* paste below command in the terminal to download all the images of notes.

```
xargs -n 1 curl -O < file.txt
```

You can convert them into a single pdf file...Search on google.

<p>Only for educational purpose, You are solely responsible for copyrights and any such regulations of the product(lecturenotes.in).
(Just saying to avoid any problems in the future)</p>