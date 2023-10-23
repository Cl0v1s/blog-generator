export interface IConfig {
    // remote webdav server url
    server: string,
}

export interface IArticle {
    uri: string,
    name: string,
    editedAt: Date,
    etag: string | null,
}

export interface IArticleWithContent extends IArticle {
    content: string, 
}