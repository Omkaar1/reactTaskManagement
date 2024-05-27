import React, { useState } from "react";

const Forms = () => {
  const initialFormState = {
    username: "",
    name: "",
    plantName: "",
    role: "",
    product: "",
    quantity: "",
    number: "",
    attachment: "",
    details: "",
    fromDate: "",
    toDate: "",
  };

  const [inputValues, setInputValues] = useState(initialFormState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
    setInputValues(initialFormState);
  };
  return (
    <div className="w-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={inputValues.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="Name"
              name="Name"
              type="text"
              value={inputValues.Name}
              placeholder="ABC"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="plantName"
            >
              plant name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="plantName"
              type="text"
              placeholder="Pune"
              name="plantName"
              value={inputValues.plantName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="role"
            >
              role
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="role"
              type="text"
              placeholder="Doe"
              name="role"
              value={inputValues.role}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/4 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="product"
            >
              Product
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="product"
              type="text"
              placeholder="Apple"
              name="product"
              value={inputValues.product}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-quantity"
            >
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-quantity"
              type="number"
              placeholder="1"
              name="quantity"
              value={inputValues.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-number"
            >
              Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-number"
              type="number"
              placeholder="Product code"
              name="number"
              value={inputValues.number}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-attachment"
            >
              Attachment
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-attachment"
              type="file"
              name="attachment"
              value={inputValues.attachment}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-details"
            >
              Details
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-details"
              type="text"
              name="details"
              value={inputValues.details}
              placeholder="Describe the need of product"
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out all field.
            </p>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-from-date"
            >
              FromDate
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-from-date"
              type="date"
              name="fromDate"
              value={inputValues.fromDate}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-to-date"
            >
              To Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none hover:bg-white hover:border-gray-500"
              id="grid-to-date"
              type="date"
              name="toDate"
              value={inputValues.toDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
