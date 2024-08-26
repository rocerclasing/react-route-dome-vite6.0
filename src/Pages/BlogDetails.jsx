import { useParams,Link ,useSearchParams} from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const BlogDetails = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      // http://localhost:3000/blog?nombre=juan
      console.log(searchParams.get("nombre"));
      // setSearchParams({ nombre: "juan" });
    }, [searchParams]);
    

    const params = useParams()
    console.log(params)

    const {data,error,loading} =useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) {
        return <h1>Loading...</h1>;
      }
    
      if (error) {
        return <h1>{error}</h1>;
      }

    return(
        <div>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog">Volver</Link>

        </div>
    )
}

export default BlogDetails