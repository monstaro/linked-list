var submitButton = document.querySelector("#submitButton");
var siteTitle = document.querySelector("#siteTitle").value;
var siteUrl = document.querySelector("#siteUrl").value;


submitButton.addEventListener("click", newCard);
submitButton.addEventListener("click", instantiateBookmarks)




function newCard() {
    var siteTitle = document.querySelector("#siteTitle").value;
    var siteUrl = document.querySelector("#siteUrl").value;
    document.querySelector(".bookmarks").insertAdjacentHTML('afterbegin',
        `<section class="newCard">
            <h3>${siteTitle}</h3><hr><p>${siteUrl}</p><hr>
        </section>`)
    siteTitle.value = "";
    siteUrl.value = "";
}

function instantiateBookmarks() {
    var bookmarksArray = document.querySelectorAll(".newCard");
    for (var i = 0; i < bookmarksArray.length; i++) {
        var bookmarksObject = new Bookmark(bookmarksArray[i].innerText);
        bookmarksArray.push(bookmarksObject);
    }
}