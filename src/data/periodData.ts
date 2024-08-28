export interface PeriodData {
  [key: string]: {
    clickSulLink: number;
    personeRegistrate: number;
    conversioni: number;
  };
}

export const periodData: PeriodData = {
  "7 giorni": { clickSulLink: 7500, personeRegistrate: 2200, conversioni: 80 },
  "1 mese": { clickSulLink: 15000, personeRegistrate: 4500, conversioni: 150 },
  "3 mesi": { clickSulLink: 35000, personeRegistrate: 12000, conversioni: 450 },
  "6 mesi": { clickSulLink: 41391, personeRegistrate: 12568, conversioni: 346 },
  Sempre: { clickSulLink: 84150, personeRegistrate: 22500, conversioni: 1235 },
};
