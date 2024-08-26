import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomContent from "./bottomcontent/BottomContent.js";
import Carousel from "./carousel/Carousel.js";
import CardCon from "./contents/CardCon.js";
import DealsContainer from "./DealsContainer/DealsCon.js";
import NavBar from "./nav/Nav.js";
import ProdectCart from "./product-cart/Product_cart.js";
import SpecialCard from "./special card/SpecialCard.js";
// import ProductDetails from "./ProductDetailsView.js";
import MobileDetails from "./product_different_option_view/product_different_view.js";
// import { shoe_Details } from "./product_details.js";
import FashionDifferentView from "./product_different_option_view/fashion_different_view.js";
import FullViewOfPrduct from "./ProductFullview/FullViewOfPrduct.js";
import FullViewOfMobile from "./ProductFullview/FullviewOfMobile.js";
import Auth from "./auth/Auth.js";
import Cart from "./cartModel/Cart.js";
import Profile from "./profile/Profile.js";
import Order from "./order/Order.js";
import YourOrder from "./order/YourOrder.js";

function App() {
  const mobiles = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70",
      model: "RealMe P1 5G",
      price: "From ₹14,999",
      categories: "mobile",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70",
      model: "vivo T2 Pro 5G",
      price: "From ₹20,999",
      categories: "mobile",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70",
      model: "Poco M6 Pro 5G",
      price: "From ₹9,249",
      categories: "mobile",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70",
      model: "RealMe P1 Pro 5G",
      price: "From ₹20,999",
      categories: "mobile",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/y/m/-original-imagz7f9hzrahd2z.jpeg?q=70",
      model: "Nothing Phone 2a",
      price: "From ₹22,999",
      categories: "mobile",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/p/x/-original-imahf38d4cwmuqep.jpeg?q=70",
      model: "Infinix GT 20 Pro",
      price: "From ₹17,999",
      categories: "mobile",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70",
      model: "Vivo T3x 5G",
      price: "From ₹12,499",
      categories: "mobile",
    },
    {
      id: 8,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/b/o/pixel-7a-ghl1x-google-original-imah3j74pte7amu9.jpeg?q=70",
      model: "Google Pixel 7A",
      price: "From ₹29,999",
      categories: "mobile",
    },
  ];

  const FashionsDeals = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/i/s/8-rkt-19039-white-moon-42-atom-white-original-imah2knbuymyjeky.jpeg?q=70",
      product: "Reeboke, Hrx & more",
      offers: "Min. 60% Off",
      categories: "footwears",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/x/q/s-vnk3006655-vishudh-original-imagxwwwxmahg7zn.jpeg?q=70",
      product: "Kurtas @ Lowest Prices!",
      offers: "Under ₹399",
      categories: "wdr",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/v/v/12-iu6983-12-adidas-gresix-cblack-grey-ftwwht-original-imahfehxkwsfyms9.jpeg?q=70",
      product: "Woodland, Wildcraft...",
      offers: "Min. 40% Off",
      categories: "footwears",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/g/p/4-6716070-4-bata-black-original-imagg6d3h53gpeye-bb.jpeg?q=70",
      product: "Women's Flats & Heels",
      offers: "Min. 40% Off",
      categories: "women footwears",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/m/r/b/65-hard-sided-pc-8-wheel-spinners-with-telescopic-steel-trolley-original-imah3zxfyydkc9b7.jpeg?q=70",
      product: "Provogue, Killer, Ducati..",
      offers: "From ₹1,099",
      categories: "",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/k/r/xl-aa08-pinkred-saarshe-original-imagt3u4b6dnfert.jpeg?q=70",
      product: "Trendy Kurta!",
      offers: "50 to 80%",
      categories: "wdr",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/y/o/d/free-3670s2564-samah-unstitched-original-imahf3nysmggwxzy.jpeg?q=70",
      product: "Wedding Sarres",
      offers: "Under ₹999",
      categories: "wdr",
    },
    {
      id: 8,
      img: "https://rukminim2.flixcart.com/image/612/612/l1jmc280/top/5/f/p/xl-sftops40076-olive-sassafras-original-imagd36ejwnyvyzj.jpeg?q=70",
      product: "Dress Materials",
      offers: "Under ₹499",
      categories: "wdr",
    },
  ];

  const NewArrivalsDeals = [
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/g/j/-original-imagxuzkksdywegp.jpeg?q=70",
      product: "Crocs, Red Tape...",
      offers: "40-80% Off",
      categories: "footwears",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/n/k/l-33416o-libas-original-imah2cbhmaaeeyqg.jpeg?q=70",
      product: "Vero Moda, ONLY, AND..",
      offers: "Min 60% Off",
      categories: "wdr",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/n/s/xl-396tk7211-selvia-original-imaghg7wqfhzeyte.jpeg?q=70",
      product: "Harpa, Athena, Pluss..",
      offers: "50-80% Off",
      categories: "wdr",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/5/z/6-rkt-1205-6-atom-white-original-imah3cg4bukrarfu.jpeg?q=70",
      product: "Solethreads",
      offers: "Under ₹199",
      categories: "footwears",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kids-dress/o/k/g/1-2-years-flower-frock-red-s-n-fashion-original-imaggth6wzzgbdvz.jpeg?q=70",
      product: "Girls'Trendy Dress",
      offers: "Under ₹199",
      categories: "",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/earring/k/e/v/-original-imagsd7dhhxx6tjx.jpeg?q=70",
      product: "Jewellery Set, Bangles...",
      offers: "Under ₹499+Extra10%Off",
      categories: "",
    },
  ];

  const HomeEssentionsDeals = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/7/n/5/750-750-ml-sports-and-hiking-stainless-steel-water-bottle-chromo-original-imah29uv3t3yfhyz.jpeg?q=70",
      product: "Bottles",
      offers: "Upto 70% Off",
      categories: "",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lunch-box/4/h/h/650-lunch-box-set-3-sst-3-original-imahydfmhhzm35y7.jpeg?q=70",
      product: "Lunch Boxes",
      offers: "From ₹149",
      categories: "",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bulb/7/v/h/-original-imahyf2rnkqjpbye.jpeg?q=70",
      product: "Lighting Essentials",
      offers: "From ₹79",
      categories: "",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mosquito-net/b/m/y/king-size-bed-polyester-adults-royal-blue-mosquito-net-78-bl-original-imagqyzfesfkerhg.jpeg?q=70",
      product: "Mosquito Nets",
      offers: "Under ₹499",
      categories: "",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/gas-stove/5/k/b/-original-imagrzvgz7uyhffm.jpeg?q=70",
      product: "Gas Stoves",
      offers: "From ₹999",
      categories: "",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/f/9/n/redddarbaarrdecorumbb-1-1233654788-flat-decorum-original-imaghdvtpyrra7tt.jpeg?q=70",
      product: "Bedsheets",
      offers: "From ₹299",
      categories: "",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/image/612/612/kkbh8cw0/curtain/0/r/m/printed-polyester-set-of-2-door-curtain-for-living-bed-room-7ft-original-imafzpfzdggmkz4z.jpeg?q=70",
      product: "Curtains",
      offers: "From ₹299",
      categories: "",
    },
  ];

  const FavoriteDeals = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/m/j/-original-imagpy4nfsxmqdje.jpeg?q=70",
      product: "Nike, New Balance &more",
      offers: "Min 50% Off",
      categories: "footwears",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/l/k/xxl-tm-dream-420-dreambe-original-imahfwcntnvgrvfh.jpeg?q=70",
      product: "Only, Van Heusen, Chemistry...",
      offers: "Min 60% Off",
      categories: "wdr",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/a/g/-original-imagvqbzg5fzdvje.jpeg?q=70",
      product: "Grab or Gone",
      offers: "Under ₹399",
      categories: "footwears",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/2/g/7-long-butterfly-heel-ravis-white-original-imagn346jxvkujrh.jpeg?q=70",
      product: "Women's Heels",
      offers: "Under ₹399",
      categories: "women footwears",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/r/c/j/10-pc-504-n-blu-red-picaaso-navy-blue-red-original-imagzyk6npqzpphg.jpeg?q=70",
      product: "Bata",
      offers: "Under ₹999",
      categories: "men footwears",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/j/y/z/l-10617900-roadster-original-imafmqnfbuguewzk-bb.jpeg?q=70",
      product: "Fort Collins, Flying Machine...",
      offers: "50-80% Off",
      categories: "",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/image/612/612/l2tcfbk0/t-shirt/0/b/z/s-jb-tsh-babe-llc-juneberry-original-image2r52ggvrkd4.jpeg?q=70",
      product: "T-shirts, Dresses, Jeans...",
      offers: "60-80% Off",
      categories: "wdr",
    },
  ];

  const cardConTitle = [
    "Best Deals On SmartPhones",
    "Bestsellers On Fashion",
    "New Arrivals Collections",
    "Home Essentials",
    "Your Favorite Brands Deals",
  ];

  const DealsItemsDetails = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/775626c478544c34.jpg?q=20",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/daeed90eb62e77d3.png?q=20",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/fcc9b52b63f73932.jpg?q=20",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f9f788398c975058.jpg?q=20",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7f26f75102e5597b.jpg?q=20",
    },
    {
      id: 6,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c2c99f5afba3627e.jpg?q=20",
    },
    {
      id: 7,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/71e1b1833fc2d62a.jpg?q=20",
    },
    {
      id: 8,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ba04deb716e215a8.jpg?q=20",
    },
    {
      id: 9,
      img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f4d43eb24262f4a6.jpg?q=20",
    },
  ];

  const specialCards = [
    {
      id: 1,
      title: "Best Gadgets & Appliances",
      productList: [
        {
          id: 1,
          product: "True Wireless",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/t/q/-original-imagr4t8zuq2wzhe.jpeg?q=70",
          offers: "Special Offers",
          categories: "earbuds",
        },
        {
          id: 2,
          product: "Mobiles",
          img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/c/8/-original-imagztn77hdgmeka.jpeg?q=70",
          offers: "Min. 50% Off",
          categories: "mobile",
        },
        {
          id: 3,
          product: "Smart Watches",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70",
          offers: "Min. 40% Off",
          categories: "smartWatch",
        },
        {
          id: 4,
          product: "Trimmers",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/x/j/4/0-25-4-mm-hair-trimmer-hair-cutting-machine-men-beard-trimmer-original-imagygbqz5rgx65j.jpeg?q=70",
          offers: "Min. 50% Off",
          categories: "",
        },
      ],
    },
    {
      id: 2,
      title: "Monsoon-ready Styles",
      productList: [
        {
          id: 1,
          product: "Men's Sandals & Floaters",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/5/3/1/8-r250-42-aeonik-black-original-imah2rtztnaj6ftz.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "footwears",
        },
        {
          id: 2,
          product: "Men's Slippers & Flip Flops",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-slipper-flip-flop/a/u/j/9-shp-brd-731-birde-black-original-imahykhzvvzzwhzu.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "men footwears",
        },
        {
          id: 3,
          product: "Men's Sports Shoes",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/p/m/8-rso392-8-red-tape-blue-white-original-imahfhyhtt6f5gng.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "footwears",
        },
        {
          id: 4,
          product: "Men's Casual Shoes",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/y/8/9-rsl002-9-red-tape-black-red-original-imah3gx5zrkuygar.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "footwears",
        },
      ],
    },
    {
      id: 3,
      title: "Monsoon Essentials",
      productList: [
        {
          id: 1,
          product: "Backpacks",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/y/u/h/14-2-pulse-backpack-for-men-women-3-compartment-casual-college-original-imagrgyawqkbknzb.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "",
        },
        {
          id: 2,
          product: "Mosquito Nets",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mosquito-net/b/m/y/king-size-bed-polyester-adults-royal-blue-mosquito-net-78-bl-original-imagqyzfesfkerhg.jpeg?q=70",
          offers: "Min. 40% Off",
          categories: "",
        },
        {
          id: 3,
          product: "Smart Watches",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/k/m/9/49-78-d395-android-ios-cmf-by-nothing-yes-original-imagtngg4ggknf5f.jpeg?q=70",
          offers: "Min. 50% Off",
          categories: "smartWatch",
        },
        {
          id: 4,
          product: "Bedsheets",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/t/l/m/exf-fitteed-26-1-exf-fitteed-26-fitted-elastic-exfab-original-imagxz66mux6byze.jpeg?q=70",
          offers: "Special offer",
          categories: "",
        },
      ],
    },
    {
      id: 4,
      title: "Best Gifting Collection",
      productList: [
        {
          id: 1,
          product: "Men's T-shirts",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/z/l/xl-mens-lw-lycra-t-shirt-sti-original-imahf7w4jecy5r8f.jpeg?q=70",
          offers: "Min. 70% Off",
          categories: "",
        },
        {
          id: 2,
          product: "Silver Jewellery",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/e/6/g/free-2-5-na-1-cuban-link-bracelet-adonis-sterling-original-imah3bdspfuahsh4.jpeg?q=70",
          offers: "Min. 40% Off",
          categories: "",
        },
        {
          id: 3,
          product: "Women's Ethnic Sets",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/f/j/q/xxl-rx49-purple-royal-export-original-imah25cfzusfzfzd.jpeg?q=70",
          offers: "Min. 50% Off",
          categories: "",
        },
        {
          id: 4,
          product: "Sunglasses",
          img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/c/e/z/m-149045-vincent-chase-original-imah3acpqay3erhn.jpeg?q=70",
          offers: "Special offer",
          categories: "",
        },
      ],
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <section className="bodyContent">
              <NavBar />
              <ProdectCart />
              <Carousel />
              <CardCon
                ProductDetails={mobiles}
                OffersTitles={cardConTitle[0]}
              />
              <DealsContainer Dealsitems={DealsItemsDetails.slice(0, 3)} />
              <CardCon
                ProductDetails={FashionsDeals}
                OffersTitles={cardConTitle[1]}
              />
              <SpecialCard specialCards={specialCards} />
              <DealsContainer Dealsitems={DealsItemsDetails.slice(3, 6)} />
              <CardCon
                ProductDetails={NewArrivalsDeals}
                OffersTitles={cardConTitle[2]}
              />
              <DealsContainer Dealsitems={DealsItemsDetails.slice(6, 9)} />
              <CardCon
                ProductDetails={HomeEssentionsDeals}
                OffersTitles={cardConTitle[3]}
              />
              <CardCon
                ProductDetails={FavoriteDeals}
                OffersTitles={cardConTitle[4]}
              />
              <BottomContent />
            </section>
          }
        />
        <Route path="/:id/:model" element={<MobileDetails />} />
        <Route path="/:id/:all" element={<MobileDetails />} />
        <Route
          path="/:id/:categories/:model"
          element={<FashionDifferentView />}
        />
        <Route
          path="/:model/:brand/:price/:originalprice/:offer/:imgurl"
          element={<FullViewOfPrduct />}
        />
        <Route
          path="/:model/:color/:ram/:gb/:display/:camera/:battery/:processor/:price/:imgurl"
          element={<FullViewOfMobile />}
        />
        <Route path="/authentication" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/order/:model/:color/:ram/:gb/:price/:imgurl"
          element={<Order />}
        />
        <Route path="/yourorder" element={<YourOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
