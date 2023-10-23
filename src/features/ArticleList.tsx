import { useAppContext } from '../AppContext';

function ArticleList() {
    const { articles } = useAppContext();
    return (
        <>
            <ul>
                {
                    articles?.map((a) => (
                        <li key={a.uri}>
                            { a.name }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ArticleList;