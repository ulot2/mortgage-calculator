"use client"

import { useState } from "react";

import { FormInputs } from "./components/formInputs";
import { Results } from "./components/results";

export default function Home() {
  const [results, setResults] = useState(null)

  return (
    <>
      <div className="flex lg:justify-center lg:items-center h-[100vh] lg:bg-[#e3f4fc]">
        <div className="bg-white w-[100%] lg:w-[50%] rounded-lg flex flex-col lg:flex-row lg:h-[65%]">
          <FormInputs setResults={setResults} />
          <Results results={results} />
        </div>
      </div>
    </>
  );
}
