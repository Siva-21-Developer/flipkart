import ProCat from "./ProCat";
import "./Product_cart.css";

const Prodect_cart = () => {
  const Product_details = [
    {
      id: 1,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100",
      productName: "Top Offer",
    },
    {
      id: 2,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100",
      productName: "Mobiles & Tablets",
    },
    {
      id: 3,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100",
      productName: "Tvs & Appliances",
    },
    {
      id: 4,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100",
      productName: "Electronics",
    },
    {
      id: 5,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100",
      productName: "Fashion",
    },
    {
      id: 6,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100",
      productName: "Beauty",
    },
    {
      id: 7,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100",
      productName: "Home & Kitchen",
    },
    {
      id: 8,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100",
      productName: "Furniture",
    },
    {
      id: 9,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100",
      productName: "Travel",
    },
    {
      id: 10,
      Image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100",
      productName: "Gorcery",
    },
  ];

  return (
    <>
      <div className="Product-con-catr">
        {Product_details.map((product, index) => (
          <ProCat details={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Prodect_cart;
