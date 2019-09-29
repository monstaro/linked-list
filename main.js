var submitButton = document.querySelector("#submitButton");
var siteTitle = document.querySelector("#siteTitle").value;
var siteUrl = document.querySelector("#siteUrl").value;
var deleteCard = document.querySelector(".deleteCard");
var bookmarks = document.querySelector(".bookmarks")
submitButton.addEventListener("click", newCard);
submitButton.addEventListener("click", instantiateBookmarks())
bookmarks.addEventListener("click", closeCard)



function closeCard(event) {
    console.log("testt")
    if (event.target.classList.contains('deleteCard')) {
        event.target.closest('section').remove();
    }
}

function newCard() {
    var siteTitle = document.querySelector("#siteTitle").value;
    var siteUrl = document.querySelector("#siteUrl").value;
    document.querySelector(".bookmarks").insertAdjacentHTML('afterbegin',
        `<section class="newCard">
            <h3>${siteTitle}</h3><hr><p>${siteUrl}</p><hr>
            <input type="button" value="delete" class="deleteCard">
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