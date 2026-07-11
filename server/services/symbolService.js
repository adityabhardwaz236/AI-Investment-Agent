const companyMap = {
  apple: "AAPL",
  tesla: "TSLA",
  microsoft: "MSFT",
  nvidia: "NVDA",
  amazon: "AMZN",
  google: "GOOGL",
  alphabet: "GOOGL",
  meta: "META",
  netflix: "NFLX",
  intel: "INTC",
  amd: "AMD",
  oracle: "ORCL",
  adobe: "ADBE",
  salesforce: "CRM",
  uber: "UBER",
  spotify: "SPOT",
};

export const getSymbol = (company) => {
  if (!company) {
    throw new Error("Company name is required");
  }

  const symbol = companyMap[company.trim().toLowerCase()];

  if (!symbol) {
    throw new Error("Company is not supported yet.");
  }

  return symbol;
};