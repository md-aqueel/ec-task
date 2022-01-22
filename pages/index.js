import { useState } from "react";
import Show from "./Show";

export const getStaticProps = async () => {
  const res = await fetch("https://assessment-edvora.herokuapp.com");
  const data = await res.json();

  return {
    props: {
      data
    }
  };
};

export default function IndexPage({ data }) {
  const [pr, setPr] = useState("All");
  const [ct, setCt] = useState("All");
  const [st, setSt] = useState("All");

  const product = data
    .map((item) => item.product_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  const city = data
    .map((item) => item.address.city)
    .filter((value, index, self) => self.indexOf(value) === index);

  const state = data
    .map((item) => item.address.state)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div class="Container">
      <form>
        <h2>Filter:</h2>
        <hr />
        <select onChange={(e) => setPr(e.target.value)}>
          <option value="All">Product</option>
          {product.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
        <select onChange={(e) => setCt(e.target.value)}>
          <option value="All">City</option>
          {city.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
        <select onChange={(e) => setSt(e.target.value)}>
          <option value="All">State</option>
          {state.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </select>
      </form>
      <div className="myDiv">
        <h1>Edvora</h1>
        <h2>Products</h2>
        <hr />
        <div className="Products">
          {data.map((val) => {
            if (pr === "All" && ct === "All" && st === "All") {
              return <Show curElem={val} />;
            } else {
              if (
                (val.product_name === pr || pr === "All") &&
                (val.address.city === ct || ct === "All") &&
                (val.address.state === st || st === "All")
              ) {
                return <Show curElem={val} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
