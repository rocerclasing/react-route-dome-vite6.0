import { Link ,useSearchParams} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {

  //inicializasion de useSearchParams
  let [searchParams, setSearchParams] = useSearchParams(); 
  //desestructuracion de usefetch y peticion de datos
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //validaciones
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  //logica
  const handleChange = (e) => {

    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
 
  }

  return (
    <div>
      <h1>Blog</h1>
      <input type="text" 
      onChange={handleChange} 
      className="form-control my-3" 
      value={searchParams.get("filter") || ""}/>


      {data .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
      .map((item) => (
        <h4 key={item.id}>
          <Link to={`/blog/${item.id}`} className="list-group-item">
            {item.id} - {item.title}
          </Link>
        </h4>
      ))}
    </div>
  );
};

export default Blog;
