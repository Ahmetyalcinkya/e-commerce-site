import React from "react";

const ProductSearch = () => {
  return (
    <div className="w-80 flex justify-around items-center gap-4">
      <label>Search:</label>
      <input className="login-input" placeholder="Ürün bilgisini giriniz..." />
    </div>
  );
};

export default ProductSearch;
