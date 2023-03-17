import React, { useState } from "react";

const Addblog = ({
  toggleForm,
  setFormData,
  lable = "Price",
  inputType = "text",
}) => {
  const [name, setName] = useState("");
  const [descrpt, setDescpt] = useState("");
  const [lableName, setLableName] = useState({ [lable]: "" });
  const [image, setImage] = useState("");

  const openPopup = (e) => {
    const newAddproduct = {
      name: name,
      descrption: descrpt,
      [lable]: lableName[lable],
      img: image,
    };
    setFormData((prev) => [...prev, newAddproduct]);
    toggleForm();
  };

  return (
    <div className="w-[700px] flex  bg-[#F1F1F1] shadow-md text-black rounded p-5 absolute right-0 bottom-16">
      <div className="w-[50%] mx-2">
        <label>Name</label>
        <input
          className="my-3 w-[100%] bg-[#fff] text-black p-2 outline-none rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label>Description</label>
        <br />
        <input
          className="my-3 w-[100%] bg-[#fff] text-black p-2 outline-none rounded"
          type="text"
          value={descrpt}
          onChange={(e) => setDescpt(e.target.value)}
        />
        <br />
        <label>{lable}</label>
        <br />
        <input
          className="my-3 text-black bg-[#fff] w-[100%] p-2 outline-none rounded"
          type={inputType}
          value={lableName[lable]}
          name={lable}
          onChange={(e) =>
            setLableName((prev) => ({ ...prev, [lable]: e.target.value }))
          }
        />
        <br />
        <div className="flex">
          <button
            className="bg-blue-700 px-8 py-1 mr-4 text-white"
            type="submit"
            onClick={toggleForm}
          >
            Cancel
          </button>
          <button
            className="bg-blue-700 px-10 py-1 text-white"
            type="submit"
            onClick={openPopup}
          >
            Add
          </button>
        </div>
      </div>

      <div class="w-[50%]  items-center justify-center bg-grey-lighter">
        <label class="flex flex-col items-center px-4 py-6 text-blue  cursor-pointer">
          <input
            className="my-4 hidden "
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <img src={URL.createObjectURL(image)} className="w-500 h-52" />
          ) : (
            <img src="Assets/image/preview.png" className="w-52" />
          )}
          <span class="mt-2 text-base leading-normal bg-blue-600 text-white px-5 py-3">
            Upload Image
          </span>
        </label>
      </div>
    </div>
  );
};

export default Addblog;
