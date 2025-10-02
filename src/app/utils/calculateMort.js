/**
 * Calculate mortgage payments (repayment or interest-only)
 * @param {number} principal - mortgage amount
 * @param {number} annualRatePercent - annual interest rate (in %)
 * @param {number} years - term length in years
 * @param {"repayment"|"interest-only"} type - mortgage type
 * @returns {{monthlyPayment:number, totalPayment:number, totalInterest:number}}
 */
function calculateMortgage(principal, annualRatePercent, years, type = "repayment") {
  if (principal <= 0 || years <= 0) {
    throw new Error("Principal and years must be > 0");
  }

  const monthlyRate = (annualRatePercent / 100) / 12;
  const n = years * 12;

  let monthlyPayment, totalPayment, totalInterest;

  if (type === "interest-only") {

    monthlyPayment = principal * monthlyRate;
    totalPayment = (monthlyPayment * n) + principal;
    totalInterest = (monthlyPayment * n);
  } else {
   
    if (monthlyRate === 0) {
      monthlyPayment = principal / n;
    } else {
      const factor = Math.pow(1 + monthlyRate, n);
      monthlyPayment = principal * (monthlyRate * factor) / (factor - 1);
    }
    totalPayment = monthlyPayment * n;
    totalInterest = totalPayment - principal;
  }

  const round2 = (v) => Number(v.toFixed(2));
  return {
    monthlyPayment: round2(monthlyPayment),
    totalPayment: round2(totalPayment),
    totalInterest: round2(totalInterest),
  };
}

export default calculateMortgage