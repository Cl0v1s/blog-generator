import React, { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { IArticle, IConfig } from './types';
import { fetchConfig } from './services/config';
import { fetchArticles } from './services/articles';
import { createClient } from './services/webdav';
import { WebDAVClient } from 'webdav';


interface IAppContext {
    config: IConfig | undefined,
    articles: IArticle[] | undefined,
    setArticles: undefined | Dispatch<SetStateAction<IArticle[] | undefined>>,
}

export const AppContext = createContext<IAppContext>({
    config: undefined,
    articles: undefined,
    setArticles: undefined,
});

export function AppContextProvider({ children} : { children: ReactNode }) {
    const [articles, setArticles] = useState<IArticle[] | undefined>(undefined);
    const [config, setConfig] = useState(undefined);
    const [client, setClient] = useState<WebDAVClient | undefined>(undefined);

    useEffect(() => {
        fetchConfig().then(setConfig);
    }, []);

    useEffect(() => {
        if(!config) return;
        setClient(createClient(config))
    }, [config])

    useEffect(() => {
        if(!client) return;
        fetchArticles(client).then(setArticles);
    }, [client])

    return (
        <AppContext.Provider value={{
            config,
            articles,
            setArticles,
        }}>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}