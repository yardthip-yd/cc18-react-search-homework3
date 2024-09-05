import { useState, useEffect } from "react";
import UserList from "./UserList";

export default function App() {
  const [dataProduct, setDataProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchProduct);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchProduct}`)
    // const response = await fetch(`https://dummyjson.com/products/`)
    const result = await response.json();
    setDataProduct(result.products);
    // console.log(result.products);
  };

  const hdlSearch = (e) => {
    setSearchProduct(e.target.value)
  }

  // useEffect(() => {
  //   fetchData();
  // }, [searchProduct]);


  useEffect(() => {
    const show = setTimeout(() => {
      setDebouncedSearch(searchProduct);
    }, 500);

    return () => {
      clearTimeout(show);
    };
  }, [searchProduct]); 

  useEffect(() => {
    fetchData();
  }, [debouncedSearch]);


  return (
    <div className="flex flex-col max-w-screen-lg p-4">
      <h1 className="font-bold text-3xl">Product Search</h1>
      <input className="border" type="text" value={searchProduct} onChange={hdlSearch}></input>
      <UserList dataProduct={dataProduct} />
    </div>
  );
}
