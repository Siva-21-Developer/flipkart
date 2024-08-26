import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../nav/Nav";
import Producttileview from "./product_tile_view";
import "./product_different_view.css";
import Filter from "../filter";

const MobileDetails = () => {
  const mobiles_Detils = [
    {
      id: 1,
      model: "Realme p1 5g",
      storage: [
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "15,999",
        },
        {
          ram: "16 GB",
          gb: "256 GB",
          price: "18,999",
        },
      ],
      colorDiff: [
        {
          color: "Phoenix Red",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
        },
        {
          color: "Peacock Green",
          img: " https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/b/n/-original-imahyuhfzvybhaat.jpeg?q=70",
        },
        {
          color: "Parrot Blue",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
        },
      ],
      processor: "Dimensity 7050 Processor",
      battery: "5000 mAh",
      camera: "50MP + 2MP",
      display: "16.94 cm (6.67inc) Full HD + Display",
    },
    {
      id: 2,
      model: "Google Pixel 7a",
      storage: [
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "37,999",
        },
      ],
      colorDiff: [
        {
          color: "Charcoal",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
        },
        {
          color: "Snow",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/f/d/-original-imagpgx4g2m63gfh.jpeg?q=70",
        },
        {
          color: "Sea",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/b/o/pixel-7a-ghl1x-google-original-imah3j74pte7amu9.jpeg?q=70",
        },
        {
          color: "Coral",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/a/r/-original-imagtrf9qm3dufq9.jpeg?q=70",
        },
      ],
      processor: "Tensor G2 Processor",
      battery: "4300",
      camera: "64MP (OIS) + 13MP | 13MP Front",
      display: "15.49 cm(6.1 inch) Full HD + Display",
    },
    {
      id: 3,
      model: "vivo T3x 5G",
      storage: [
        {
          ram: "4 GB",
          gb: "128 GB",
          price: "13,499",
        },
        {
          ram: "6 GB",
          gb: "128 GB",
          price: "14,999",
        },
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "16,499",
        },
      ],

      colorDiff: [
        {
          color: "Celestial Green",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70",
        },
        {
          color: "Crimson Bliss",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70",
        },
      ],
      processor: "6 Gen 1 Processor",
      battery: "6000",
      camera: "50MP + 2MP | 8MP Front Camera",
      display: "17.07 cm(6.72 inch) Full HD + Display",
    },
    {
      id: 4,
      model: "Infinix GT 20 Pro",
      storage: [
        {
          ram: "8 GB",
          gb: "256 GB",
          price: "23,999",
        },
        {
          ram: "12 GB",
          gb: "256 GB",
          price: "25,999",
        },
      ],
      colorDiff: [
        {
          color: "Mecha Silver",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/0/gt-20-pro-x6871-infinix-original-imahf2dfvbtavfur.jpeg?q=70",
        },
        {
          color: "Mecha Orange",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/n/a/-original-imahf38d9qynp6ef.jpeg?q=70",
        },
        {
          color: "Mecha Blue",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/p/x/-original-imahf38d4cwmuqep.jpeg?q=70",
        },
      ],
      processor: "Dimensity 8200 Ultimate Processor",
      battery: "5000",
      camera: "108MP(OIS) + 2MP + 2MP | 32MP Front Camera",
      display: "17.22 cm (6.78 inch) Full HD + Display",
    },
    {
      id: 5,
      model: "Nothing Phone 2a",
      storage: [
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "23,999",
        },
        {
          ram: "8 GB",
          gb: "256 GB",
          price: "25,999",
        },
      ],
      colorDiff: [
        {
          color: "Black",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/x/-original-imagyr3vfpqrpkbv.jpeg?q=70",
        },
        {
          color: "White",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/y/m/-original-imagz7f9hzrahd2z.jpeg?q=70",
        },
        {
          color: "Blue",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/g/z/-original-imahfptqbnyebxjg.jpeg?q=70",
        },
      ],
      processor: "Dimensity 7200 Pro Processor",
      battery: "5000",
      camera: "50MP (OIS) + 50MP | 32MP Fornt Camera",
      display: "17.02cm (6.7 inch) Full HD + Display",
    },
    {
      id: 6,
      model: "realme P1 Pro 5G",
      storage: [
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "19,999",
        },
        {
          ram: "8 GB",
          gb: "256 GB",
          price: "20,999",
        },
      ],
      colorDiff: [
        {
          color: "Parrot Blue",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
        },
        {
          color: "Phoenix Red",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/r/p/-original-imahyzygqydqtyvj.jpeg?q=70",
        },
      ],
      processor: "6 Gen 1 Processor",
      battery: "5000",
      camera: "50MP + 8MP | 16MP Front Camera",
      display: "17.02 cm (6.7 inch) Full HD + Display",
    },
    {
      id: 7,
      model: "POCO M6 Pro 5G",
      storage: [
        {
          ram: "6 GB",
          gb: "128 GB",
          price: "12,999",
        },
        {
          ram: "4 GB",
          gb: "128 GB",
          price: "11,999",
        },
      ],
      colorDiff: [
        {
          color: "Forest Green",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70",
        },
        {
          color: "Power Black",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70",
        },
      ],
      processor: "Snapdragon 4 Gen 2 Processor",
      battery: "5000",
      camera: "50MP + 2MP | 8MP Front Camera",
      display: "17.25 cm (6.79 inch) Full HD+ Display",
    },
    {
      id: 8,
      model: "vivo T2 Pro 5G",
      storage: [
        {
          ram: "8 GB",
          gb: "128 GB",
          price: "22,999",
        },
        {
          ram: "8 GB",
          gb: "256 GB",
          price: "23,999",
        },
      ],

      colorDiff: [
        {
          color: "Dune Gold",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
        },
        {
          color: "New Moon Black",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70",
        },
      ],
      processor: "Dimensity 7200 Processor",
      battery: "4600",
      camera: "64MP + 2MP | 16MP Front Camera",
      display: "17.22 cm (6.78 inch) Full HD+ Display",
    },
  ];

  const { model } = useParams();
  let product = [];

  if (model === "all") {
    product = mobiles_Detils;
  } else {
    // Find the product that matches the model from the URL params
    product = mobiles_Detils.find(
      (p) => p.model.trim().toLowerCase() === model.trim().toLowerCase()
    );
  }

  if (!product || (Array.isArray(product) && product.length === 0)) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <NavBar />
      <div className="display-product">
        <Filter />
        <div>
          {model === "all" ? (
            <>
              {product.map((product) => (
                <div key={product.id}>
                  {product.storage.map((storage) => (
                    <>
                      {product.colorDiff.map((colors) => (
                        <Producttileview
                          color={colors}
                          storage={storage}
                          details={product}
                        />
                      ))}
                    </>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <div key={product.id}>
              {product.storage.map((storage) => (
                <>
                  {product.colorDiff.map((colors) => (
                    <Producttileview
                      color={colors}
                      storage={storage}
                      details={product}
                    />
                  ))}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileDetails;
