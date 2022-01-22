export default function Show({ curElem }) {
  return (
    <div className="Product">
      <img alt="" src={curElem.image} />
      <h4>{curElem.product_name}</h4>
      <p>{curElem.brand_name}</p>
      <p>${curElem.price}</p>
      <p>{curElem.address.city + ", " + curElem.address.state}</p>
      <p>{curElem.date}</p>
      <p>{curElem.discription}</p>
    </div>
  );
}
