import React, { useEffect } from "react";
import Product from "../../components/products/Product";
import useStore from "../../context/store";
const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const wishes = useStore((s) => s?.heart);
  return (
    <>
      {wishes.length ? (
        <Product data={wishes} title={"Sevimlilar"} />
      ) : (
        <h2 className="empty__wishes">Sevimlilar hozircha yo'q</h2>
      )}
    </>
  );
};

export default Wishlist;
