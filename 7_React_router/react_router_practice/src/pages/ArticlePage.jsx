import { useParams } from "react-router-dom"
import articles from "../article-content"

export default function ArticlePage() {
    const params = useParams()
    const name = params.name // it is getting the name from the URL path
    const article = articles.find(a => a.name === name)

    // {article.content.map(content => <p key={name}>{content}</p>)}

    return (
        <>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        </>
    )
}