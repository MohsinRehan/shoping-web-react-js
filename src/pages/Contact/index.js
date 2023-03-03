import React from "react";
import Button from "../../components/Button";
import PageLayout from "../../layout";

export default function index() {
  return (
    <PageLayout>
      <div>
        <h1 className="text-center text-[#232323]  text-[65px] font-bold mt-28">
          Get in touch
        </h1>
        <p className="text-center text-[#232323]  py-10">
          Have you got a suggestion or a blog post idea? Or maybe you represent
          <br />a company and would like to work on a partnership? I would love
          to hear from you!
        </p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-[#232323]">info@thos.com</span>
        <span className="text-[#232323]">123-456-7890</span>
      </div>
      <div className="container w-2/4 mx-auto">
        <label className="text-[18px] my-2 text-[#232323]">Name*</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder="Your Name"
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">Last name*</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder="Your last name"
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">Your email*</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder="Your email address"
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">Message*</label>
        <br />
        <textarea
          className="bg-[#F1F1F1] w-[100%] h-20 py-4 px-4 mb-6 outline-none"
          placeholder="Enter your message"
        ></textarea>
        <Button center>Submit</Button>
      </div>
    </PageLayout>
  );
}
