import articles from "../article-content"
import ArticleListComponent from "../ArticleListComponent"

export default function ArticleListPage() {
    return (
        <>
        <h1>Articles</h1>
        <ArticleListComponent articles={articles}></ArticleListComponent>
        </>
    )
}