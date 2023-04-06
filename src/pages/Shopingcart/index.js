import React, { useEffect, useState } from "react";
import PageLayout from "../../layout";
import { AiOutlineLock } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ShopCart = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sendData"));
    setLocalData(data);
  }, []);

  const [productQuantity, setProductQuantity] = useState(1);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleIncrementProduct = (item) => {
    setProductQuantity(productQuantity + 1);
    setTotalPayment(+totalPayment + +item.Price);
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
      setProductQuantity(productQuantity - 1);
      setTotalPayment(+totalPayment - +item.Price);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center my-8">
        <span className="text-[18px] mr-2">
          <i className="fal fa-shopping-bag"></i>
        </span>
        <p>Shopping Bag</p>
      </div>
      <div className="flex my-8">
        <div className="w-[35%] h-[350px] overflow-y-auto ">
          <div>
            <h1 className="text-[28px] font-bold text-[#232323] m-3">
              Shopping cart
            </h1>
            <span>
              <a href="#" className="mx-4">
                Store
              </a>
              /
              <a href="#" className="mx-4">
                Shopping cart
              </a>
            </span>
          </div>
          {localData.map((item, i) => (
            <div>
              <div key={i} className="w-[100%]">
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
                      <button onClick={removeItem}>
                        <RxCross1 />
                      </button>
                    </span>{" "}
                    <p>Payment: {totalPayment}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
          ))}
          <div className="flex my-2 justify-between ml-4">
                <h1>Total Payment</h1>
                <p>RS: </p>
              </div>
          
        </div>
        <div className="w-[60%] p-8">
          <h1 className="text-[28px] font-bold text-[#232323]">Checkout</h1>
          <p className="pr-5 text-[17px] my-2  text-[#232323]">
            Enter your email address. This address will be used to send you
            order status updates.
          </p>
          <input
            type="text"
            placeholder="Your email address"
            className="w-[100%] outline-none p-2 border-2 border-solid border-[#4533]"
          ></input>
          <div className="my-3">
            <input type="checkbox"></input>
            <span className="ml-2 text-[17px] text-[#232323] ">
              Keep me up to date on news and exclusive offers
            </span>
          </div>
          <div className="flex items-center">
            <button className="w-96 py-3 my-4 px-8 bg-black text-white">
              Checkout
            </button>
            <span className="ml-1">
              <AiOutlineLock />
            </span>
            <span className="ml-2 text-[14px] text-[#757575]">
              All data is transmitted encrypted via a secure TLS connection
            </span>
          </div>
          <div>
            <h1 className="text-[20px] my-2">Next</h1>
            <hr />
            <div className="my-2">
              <p>Payment information</p>
              <p className="text-[#757575]">
                Choose a payment method and enter your payment details.
              </p>
            </div>
            <div className="my-2">
              <p>Order confirmation</p>
              <p className="text-[#757575]">
                Place your order and receive a confirmation email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ShopCart;
