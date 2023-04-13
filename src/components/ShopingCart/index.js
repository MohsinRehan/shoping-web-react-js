import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export const CheckoutCart = ({ item, i }) => {
  const [productQuantity, setProductQuantity] = useState(item.quantity);
  const [totalPayment, setTotalPayment] = useState(+item.Price * item.quantity);
  const [isslected, setisslected] = useState(true);

  const handleIncrementProduct = (item) => {
    const cartData = JSON.parse(localStorage.getItem("sendData"));
    const matchedItem = cartData.find((product) => product.id === item.id);

    if (matchedItem) {
      matchedItem.quantity += 1;
      const newTotalPayment = +totalPayment + +item.Price;
      setProductQuantity(productQuantity + 1);
      setTotalPayment(newTotalPayment);
      setisslected(false);
      localStorage.setItem("sendData", JSON.stringify(cartData));
    }
  };

  const removeItem = (id) => {
    const removeProduct = JSON.parse(localStorage.getItem("sendData"));
    const index = removeProduct.findIndex((item) => item.id === id);
    console.log("index id", index);
    if (index !== -1) {
      removeProduct.splice(index, 1);
      localStorage.setItem("sendData", JSON.stringify(removeProduct));
    }
  };

  const handleDecrementProduct = (item) => {
    if (productQuantity > 0) {
      const cartData = JSON.parse(localStorage.getItem("sendData"));
      const matchedItem = cartData.find((product) => product.id === item.id);

      if (matchedItem) {
        matchedItem.quantity -= 1; // update the quantity property of the item
        setProductQuantity(productQuantity - 1);
        setTotalPayment(+totalPayment - +item.Price);
        localStorage.setItem("sendData", JSON.stringify(cartData));
      }
    }
  };

  return (
    <div>
      <div key={item.id + i} className="w-[100%]">
        <div className="flex justify-between mx-2">
          <div className="flex my-2 mx-4">
            <div className="mr-2 w-[120px] h-[100px]">
              <img
                src={item.img}
                className="w-[100%] h-[100px] border-8 border-solid border-[#DED5D0]"
              />
            </div>
            <div className="ml-2">
              <h2>{item.name}</h2>
              <div className="my-2">
                <button
                  className="border-2 border-solid border-gray-600 px-2"
                  onClick={() => handleIncrementProduct(item)}
                >
                  +
                </button>
                <button
                  className="border-2 border-solid border-gray-600 px-2"
                  onClick={() => handleDecrementProduct(item)}
                >
                  -
                </button>
              </div>
              <p>Quantity: {productQuantity}</p>
            </div>
          </div>
          <div className="my-4">
            <span className="flex justify-end my-2">
              <button onClick={() => removeItem(item.id)}>
                <RxCross1 />
              </button>
            </span>{" "}
            {!isslected ? (
              <p>Rs: {totalPayment}</p>
            ) : (
              <p>Rs:{item.Price * item.quantity}</p>
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
