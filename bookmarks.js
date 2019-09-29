class Bookmark {
    constructor(id, title, url, read) {
        this.id = id || (Date.now() + Math.random());
        this.title = title;
        this.url = url;
        this.read = read || false;
    }
}