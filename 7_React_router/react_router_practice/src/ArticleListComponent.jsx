import { Link } from "react-router-dom"

export default function ArticleListComponent(props){
    return (
        <>
        {props.articles.map(a => (
            <>
            <Link key={a.name} to={'/articles/'+a.name}>
                <h3>{a.title}</h3>
            </Link>
            <p>{a.content.substring(0, 100)}</p>
            </>
        ))}
        </>
    )
}

