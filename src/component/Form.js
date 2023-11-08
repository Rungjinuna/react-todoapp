import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          type="text"
          name="value"
          placeholder="해야할 일을 입력하세요."
          value={value} //value속성을 state로 변화시켜서 입력값이 들어가도록함.
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-2 border-gray-200 rounded hover:text-white hover:bg-blue-200 "
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
}
