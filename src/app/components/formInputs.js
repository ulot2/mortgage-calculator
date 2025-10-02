"use client";

import Image from "next/image";
import React, { useState } from "react";
import calculateMortgage from "../utils/calculateMort";

export const FormInputs = ({ setResults }) => {
  const [principal, setPrincipal] = useState(0);
  const [termYears, setTermYears] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [mortgageType, setMortgageType] = useState("repayment");
  const [error, setError] = useState({
    principal: "",
    termYears: "",
    interestRate: "",
  });

  const onSubmit = () => {
    const newErrors = {
      principal: !principal ? "Amount is required" : "",
      termYears: !termYears ? "Term is required" : "",
      interestRate: !interestRate ? "Interest rate is required" : "",
    };

    setError(newErrors);


    if (
      !newErrors.pricipal &&
      !newErrors.termYears &&
      !newErrors.interestRate
    ) {
      const results = calculateMortgage(
        principal,
        interestRate,
        termYears,
        mortgageType
      );
      setResults(results);
      setError("");
    }
  };

  const resetAll = () => {
    setResults(null);
    setPrincipal(0);
    setTermYears(0);
    setInterestRate(0);
    setMortgageType("repayment");
  };

  return (
    <div className="m-[1.5rem] lg:w-full">
      <div className="lg:flex justify-between mb-[1rem] lg:mb-[2rem]">
        <h1 className="text-[1.2rem] text-[#122f3f] font-bold">
          Mortgage Calculator
        </h1>
        <button
          type="button"
          className="underline text-[#6b94a8] hover:text-[#122f3f] cursor-pointer transition"
          onClick={() => resetAll()}
        >
          Clear All
        </button>
      </div>
      <form>
        <div>
          <label htmlFor="amount" className="text-[#4e6e7e] text-[0.9rem]">
            Mortgage Amount
          </label>
          <div className="group flex rounded-[5px] outline outline-[#6b94a8] focus-within:outline focus-within:outline-[#d7da2f] hover:outline-[#122f3f] h-[33px] mt-[5px] transition">
            <p className="bg-[#e3f4fc] text-[#122f3f] w-[35px] h-[33px] flex justify-center items-center group-focus-within:bg-[#d7da2f]">
              €
            </p>
            <input
              type="number"
              min="0"
              step="1"
              name="amount"
              id="amount"
              className="no-spinner outline-none w-full ml-[10px]"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          {error.principal && (
            <p className="text-[10px] text-[red] mt-[0.5rem]">
              {error.principal}
            </p>
          )}
        </div>
        <div className="lg:flex lg:justify-between gap-[10px] mt-[1rem]">
          <div className="mb-[0.5rem]">
            <label htmlFor="term" className="text-[#4e6e7e] text-[0.9rem]">
              Mortgage Term
            </label>
            <div className="group flex rounded-[5px] outline outline-[#6b94a8] focus-within:outline focus-within:outline-[#d7da2f] hover:outline-[#122f3f] h-[33px] mt-[5px] transition">
              <input
                type="number"
                name="term"
                id="term"
                className="no-spinner outline-none w-full ml-[10px]"
                value={termYears}
                onChange={(e) => setTermYears(Number(e.target.value))}
              />
              <p className="bg-[#e3f4fc] text-[#122f3f] w-[100px] h-[33px] flex justify-center items-center group-focus-within:bg-[#d7da2f]">
                years
              </p>
            </div>
            {error.termYears && (
              <p className="text-[10px] text-[red] mt-[0.5rem]">
                {error.termYears}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="rate" className="text-[#4e6e7e] text-[0.9rem]">
              Interest Rate
            </label>
            <div className="group flex rounded-[5px] outline outline-[#6b94a8] focus-within:outline focus-within:outline-[#d7da2f] hover:outline-[#122f3f] h-[33px] mt-[5px] transition">
              <input
                type="number"
                name="rate"
                id="rate"
                className="no-spinner outline-none w-full ml-[10px]"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <p className="bg-[#e3f4fc] text-[#122f3f] w-[50px] h-[33px] flex justify-center items-center group-focus-within:bg-[#d7da2f]">
                %
              </p>
            </div>
            {error.interestRate && (
              <p className="text-[10px] text-[red] mt-[0.5rem]">
                {error.interestRate}
              </p>
            )}
          </div>
        </div>
        <div className="mt-[15px]">
          <p className="text-[#4e6e7e] text-[0.9rem]">Mortgage Type</p>
          <label
            className="flex items-center gap-[8px] rounded-[5px] outline outline-[#6b94a8] hover:outline-[#d7da2f] h-[33px] mt-[5px] pl-[10px] cursor-pointer
               has-[:checked]:bg-[#fafae0] has-[:checked]:outline-[#d7da2f] transition"
          >
            <input
              type="radio"
              name="mortgageType"
              className="accent-[#d7da2f]"
              value={"repayment"}
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <span>Repayment</span>
          </label>

          <label
            className="flex items-center gap-[8px] rounded-[5px] outline outline-[#6b94a8] hover:outline-[#d7da2f] h-[33px] mt-[5px] pl-[10px] cursor-pointer
               has-[:checked]:bg-[#fafae0] has-[:checked]:outline-[#d7da2f] transition"
          >
            <input
              type="radio"
              name="mortgageType"
              className="accent-[#d7da2f]"
              value={"interest-only"}
              checked={mortgageType === "interest-only"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            <span>Interest Only</span>
          </label>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="mt-[1rem] bg-[#d9db2f] hover:bg-[#eded97] p-[0.5rem] flex items-center justify-center rounded-[20px] gap-[5px] text-[13px] text-[#122f3f] font-bold w-[100%] md:w-[200px] lg:w-[200px] transition"
        >
          <Image
            src="/images/icon-calculator.svg"
            width={15}
            height={15}
            alt="icon-calculator"
          />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};
