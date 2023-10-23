import { FileStat, WebDAVClient } from 'webdav';
import { IArticle } from '../types';

export async function fetchArticles(client: WebDAVClient): Promise<IArticle[]> {
    const stats = (await client.getDirectoryContents("/articles", { glob: "/articles/*.md" }) as FileStat[]);
    return Array.from(stats).map((stat) => ({
        editedAt: new Date(stat.lastmod),
        etag: stat.etag,
        name: stat.basename,
        uri: stat.filename,
    }))
}