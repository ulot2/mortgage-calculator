import Image from "next/image";

export const Results = ({ results }) => {
  return (
    <>
      {!results ? (
        <div className="h-full w-full bg-[#122f3f] lg:rounded-r-[15px] lg:rounded-bl-[50px] flex flex-col items-center justify-center text-white">
          <Image
            src="/images/illustration-empty.svg"
            alt="illustration"
            width={150}
            height={150}
          />
          <h1>Results shown here</h1>
          <p className="text-center text-[10px] text-[#e3f4fc] w-[80%] mt-[5px]">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="p-[1.5rem] h-full w-full bg-[#122f3f] lg:rounded-r-[15px] lg:rounded-bl-[50px] text-white">
          <h1 className="text-[1.3rem] font-bold mb-[1rem]">Your results</h1>
          <p className="text-[#e3f4fc] text-[13px]">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="border-solid border-t-[3px] border-[#d7da2f] rounded-[10px] bg-[#0e2431] mt-[1rem] p-[15px]">
            <p className="text-[#e3f4fc] text-[12px] mb-[8px]">
              Your monthly repayments
            </p>
            <h5 className="text-[2rem] text-[#d7da2f] mb-[1rem]">€{results?.monthlyPayment || 0}</h5>
            <hr className="border-solid border-t-[1px] border-[#6b94a8]" />
            <p className="mt-[1.3rem] text-[#e3f4fc] text-[13px]">
              {"Total you'll repay over term"}
            </p>
            <h5 className="font-bold text-[1.2rem]">€{results?.totalPayment || 0}</h5>
          </div>
        </div>
      )}
    </>
  );
  I;
};
