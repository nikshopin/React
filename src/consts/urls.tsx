const BaseUrlDymMyJson = "https://dummyjson.com";
const BaseUrlPlaceholder = "https://jsonplaceholder.typicode.com";

export const UrlsDumMyJson = {
    carts: BaseUrlDymMyJson + "/carts",
    cart:(id: number) => BaseUrlDymMyJson + '/carts/'+id,
    cartByUserId:(userId: number) => BaseUrlDymMyJson + '/carts/user/'+userId,
    users: BaseUrlDymMyJson + "/users?limit=100&skip=32",
    posts: BaseUrlDymMyJson + "/posts",
    comments: BaseUrlDymMyJson + "/comments",
}

export const UrlsPlaceholder = {
    users: BaseUrlPlaceholder + "/users",
    posts: BaseUrlPlaceholder + "/posts",
    comments: BaseUrlPlaceholder + "/comments",
}