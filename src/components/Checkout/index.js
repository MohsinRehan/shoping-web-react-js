import React from 'react'
import { AiOutlineLock } from "react-icons/ai";

const CheckoutPage = () => {
  return (
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
  )
}

export default CheckoutPage