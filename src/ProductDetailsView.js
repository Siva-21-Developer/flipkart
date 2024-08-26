// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = (props) => {
//   const { id, model } = useParams();
//   // Make the comparison case-insensitive and remove any extra spaces
//   const product = props.details.find((p) => p.model.trim() === model.trim());
//   return (
//     <div>
//       {product ? (
//         <>
//           <h1>{product.model}</h1>
//           <img src={product.img} alt={product.model} />
//           <p>{product.price}</p>
//         </>
//       ) : (
//         <p>Product not found</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

const data = [
  {
    id: 1,
    brand: "Naturalizer",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Heels,Sandals",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=70",
  },
  {
    id: 2,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Casual Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=71",
  },
  {
    id: 3,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Casual Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=72",
  },
  {
    id: 4,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Women's Slippers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=73",
  },
  {
    id: 5,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Women's Slippers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=74",
  },
  {
    id: 6,
    brand: "Soft Ones",
    class_name: "women footware",
    name: "Womens Shoes,Clothing,Women's Shoes,Baby & Kids Shoes,Baby & Toddler Shoes,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=75",
  },
  {
    id: 7,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "MUK LUKS,Womens,Women's Casual Shoes,Clothing,Women's Shoes,Women's Slippers,Slippers,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=76",
  },
  {
    id: 8,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "MUK LUKS,Womens,Women's Casual Shoes,Clothing,Women's Shoes,Women's Slippers,Slippers,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=77",
  },
  {
    id: 9,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=78",
  },
  {
    id: 10,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=79",
  },
  {
    id: 11,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=80",
  },
  {
    id: 12,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=81",
  },
  {
    id: 13,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=82",
  },
  {
    id: 14,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=83",
  },
  {
    id: 15,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=84",
  },
  {
    id: 16,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=85",
  },
  {
    id: 17,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=86",
  },
  {
    id: 18,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=87",
  },
  {
    id: 19,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=88",
  },
  {
    id: 20,
    brand: "MUK LUKS",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Winter Boots,All Women's Shoes,Women's Boots",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=89",
  },
  {
    id: 21,
    brand: "muk luks",
    class_name: "women footware",
    name: "Womens,Shoes,Sandals,MUK LUKS,Clothing,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=90",
  },
  {
    id: 22,
    brand: "Sloggers",
    class_name: "women footware",
    name: "Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=91",
  },
  {
    id: 23,
    brand: "Dr. Scholl's",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Dress Shoes,All Women's Shoes,Home Improvement,Work Safety Clothing and Equipment",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=92",
  },
  {
    id: 24,
    brand: "Genuine Dickies",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Women's Casual Shoes,Women's Slippers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=93",
  },
  {
    id: 25,
    brand: "Mo Mo",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=94",
  },
  {
    id: 26,
    brand: "Mo Mo",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=95",
  },
  {
    id: 27,
    brand: "Mo Mo",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=96",
  },
  {
    id: 28,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=97",
  },
  {
    id: 29,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=98",
  },
  {
    id: 30,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Womens Shoes,Clothing,Work Safety Clothing and Equipment,Shoes,Skechers,All Women's Shoes,Womens,Women's Shoes,Home Improvement,All Womens Shoes,Athletic Shoes,Women's Work & Safety Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=99",
  },
  {
    id: 31,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,Sandals,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=100",
  },
  {
    id: 32,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,Sandals,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=101",
  },
  {
    id: 33,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,Sandals,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=102",
  },
  {
    id: 34,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=103",
  },
  {
    id: 35,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=104",
  },
  {
    id: 36,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=105",
  },
  {
    id: 37,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=106",
  },
  {
    id: 38,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=107",
  },
  {
    id: 39,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=108",
  },
  {
    id: 40,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=109",
  },
  {
    id: 41,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=110",
  },
  {
    id: 42,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=111",
  },
  {
    id: 43,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Clothing,Women's Shoes,Boots,Shoes,Skechers,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=112",
  },
  {
    id: 44,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=113",
  },
  {
    id: 45,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=114",
  },
  {
    id: 46,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=115",
  },
  {
    id: 47,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=116",
  },
  {
    id: 48,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=117",
  },
  {
    id: 49,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=118",
  },
  {
    id: 50,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=119",
  },
  {
    id: 51,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=120",
  },
  {
    id: 52,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=121",
  },
  {
    id: 53,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=122",
  },
  {
    id: 54,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=123",
  },
  {
    id: 55,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=124",
  },
  {
    id: 56,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=125",
  },
  {
    id: 57,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=126",
  },
  {
    id: 58,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=127",
  },
  {
    id: 59,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=128",
  },
  {
    id: 60,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=129",
  },
  {
    id: 61,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=130",
  },
  {
    id: 62,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=131",
  },
  {
    id: 63,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=132",
  },
  {
    id: 64,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=133",
  },
  {
    id: 65,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=134",
  },
  {
    id: 66,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=135",
  },
  {
    id: 67,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=136",
  },
  {
    id: 68,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=137",
  },
  {
    id: 69,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=138",
  },
  {
    id: 70,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=139",
  },
  {
    id: 71,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=140",
  },
  {
    id: 72,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=141",
  },
  {
    id: 73,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=142",
  },
  {
    id: 74,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=143",
  },
  {
    id: 75,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=144",
  },
  {
    id: 76,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=145",
  },
  {
    id: 77,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=146",
  },
  {
    id: 78,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=147",
  },
  {
    id: 79,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=148",
  },
  {
    id: 80,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=149",
  },
  {
    id: 81,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=150",
  },
  {
    id: 82,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=151",
  },
  {
    id: 83,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=152",
  },
  {
    id: 84,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=153",
  },
  {
    id: 85,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=154",
  },
  {
    id: 86,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=155",
  },
  {
    id: 87,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=156",
  },
  {
    id: 88,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=157",
  },
  {
    id: 89,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=158",
  },
  {
    id: 90,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=159",
  },
  {
    id: 91,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=160",
  },
  {
    id: 92,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=161",
  },
  {
    id: 93,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=162",
  },
  {
    id: 94,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=163",
  },
  {
    id: 95,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=164",
  },
  {
    id: 96,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=165",
  },
  {
    id: 97,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=166",
  },
  {
    id: 98,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=167",
  },
  {
    id: 99,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=168",
  },
  {
    id: 100,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=169",
  },
  {
    id: 101,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=170",
  },
  {
    id: 102,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=171",
  },
  {
    id: 103,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=172",
  },
  {
    id: 104,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=173",
  },
  {
    id: 105,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=174",
  },
  {
    id: 106,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=175",
  },
  {
    id: 107,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=176",
  },
  {
    id: 108,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=177",
  },
  {
    id: 109,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=178",
  },
  {
    id: 110,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=179",
  },
  {
    id: 111,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Sneakers,Women's Athletic Shoes,Womens Shoes,Clothing,Shoes,Skechers,All Women's Shoes,Womens,Women's Casual Shoes,Womens Casual Shoes,Women's Shoes,All Womens Shoes,Athletic Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=180",
  },
  {
    id: 112,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=181",
  },
  {
    id: 113,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=182",
  },
  {
    id: 114,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=183",
  },
  {
    id: 115,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=184",
  },
  {
    id: 116,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=185",
  },
  {
    id: 117,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=186",
  },
  {
    id: 118,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=187",
  },
  {
    id: 119,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=188",
  },
  {
    id: 120,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=189",
  },
  {
    id: 121,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=190",
  },
  {
    id: 122,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=191",
  },
  {
    id: 123,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=192",
  },
  {
    id: 124,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=193",
  },
  {
    id: 125,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=194",
  },
  {
    id: 126,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=195",
  },
  {
    id: 127,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=196",
  },
  {
    id: 128,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=197",
  },
  {
    id: 129,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=198",
  },
  {
    id: 130,
    brand: "SKECHERS",
    class_name: "women footware",
    name: "Womens,Women's Casual Shoes,Sneakers,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,Athletic Shoes,Skechers",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=199",
  },
  {
    id: 131,
    brand: "lc lauren conrad",
    class_name: "women footware",
    name: "Womens,Shoes,Boots,LC Lauren Conrad",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=200",
  },
  {
    id: 132,
    brand: "FOREVER YOUNG",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes,Home Improvement,Work Safety Clothing and Equipment",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=201",
  },
  {
    id: 133,
    brand: "Unbranded",
    class_name: "women footware",
    name: "Women's Casual Shoes,Womens Casual Shoes,Womens Shoes,Clothing,Women's Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=202",
  },
  {
    id: 134,
    brand: "Unbranded",
    class_name: "women footware",
    name: "Clothing,Shoes,Womens Shoes,Womens Casual Shoes,Women's Shoes,Women's Casual Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=203",
  },
  {
    id: 135,
    brand: "Faded Glory",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Casual Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=204",
  },
  {
    id: 136,
    brand: "Faded Glory",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Casual Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=205",
  },
  {
    id: 137,
    brand: "Unbranded",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=206",
  },
  {
    id: 138,
    brand: "Faded Glory",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=207",
  },
  {
    id: 139,
    brand: "qupid",
    class_name: "women footware",
    name: "Womens,Shoes,Sandals,Qupid",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=208",
  },
  {
    id: 140,
    brand: "qupid",
    class_name: "women footware",
    name: "Womens,Shoes,Boots,Qupid",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=209",
  },
  {
    id: 141,
    brand: "qupid",
    class_name: "women footware",
    name: "Womens,Shoes,Sandals,Qupid",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=210",
  },
  {
    id: 142,
    brand: "olivia miller",
    class_name: "women footware",
    name: "Womens,Shoes,Boots,Olivia Miller",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=211",
  },
  {
    id: 143,
    brand: "Victoria K.",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=212",
  },
  {
    id: 144,
    brand: "Keds",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,Women's Casual Shoes,Womens,Boat Shoes,Keds",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=213",
  },
  {
    id: 145,
    brand: "herstar",
    class_name: "women footware",
    name: "Womens,Shoes,Pumps,Heels,Herstar",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=214",
  },
  {
    id: 146,
    brand: "herstar",
    class_name: "women footware",
    name: "Womens,Shoes,Pumps,Heels,Herstar",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=215",
  },
  {
    id: 147,
    brand: "Earth Spirit",
    class_name: "women footware",
    name: "Clothing,Shoes,Women's Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=216",
  },
  {
    id: 148,
    brand: "Earth Spirit",
    class_name: "women footware",
    name: "Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=217",
  },
  {
    id: 149,
    brand: "Unique Bargains",
    class_name: "women footware",
    name: "Womens Shoes,Clothing,Women's Shoes,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=218",
  },
  {
    id: 150,
    brand: "lifestride",
    class_name: "women footware",
    name: "Womens,Shoes,Boots,LifeStride",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=219",
  },
  {
    id: 151,
    brand: "naturalsoul by naturalizer",
    class_name: "women footware",
    name: "Womens,Shoes,Sandals,NaturalSoul by naturalizer",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=220",
  },
  {
    id: 152,
    brand: "Lugz",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,Boys' Shoes,Boots,Lugz,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=221",
  },
  {
    id: 153,
    brand: "Lugz",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,Boys' Shoes,Boots,Lugz,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=222",
  },
  {
    id: 154,
    brand: "Lugz",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,Boys' Shoes,Boots,Lugz,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=223",
  },
  {
    id: 155,
    brand: "Lugz",
    class_name: "women footware",
    name: "Womens,Womens Shoes,Clothing,Women's Shoes,Boys' Shoes,Boots,Lugz,All Womens Shoes,Shoes,All Women's Shoes",
    imageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=224",
  },
];
