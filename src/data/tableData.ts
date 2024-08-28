type Transaction = {
  data: string;
  azione: string;
  abbonamento: string;
  prezzo: string;
  credito: string;
  statoCredito: string;
};

export const dataExample: Transaction[] = [
  {
    data: "10/06/2020",
    azione: "Registrazione",
    abbonamento: "-",
    prezzo: "-",
    credito: "-",
    statoCredito: "-",
  },
  {
    data: "10/06/2020",
    azione: "Acquisto",
    abbonamento: "PRO mensile",
    prezzo: "€49.00",
    credito: "€4.90",
    statoCredito: "Confermato",
  },
  {
    data: "10/06/2020",
    azione: "Cancellato",
    abbonamento: "Light mensile",
    prezzo: "€8.54",
    credito: "€0",
    statoCredito: "-",
  },
  {
    data: "10/06/2020",
    azione: "Acquisto",
    abbonamento: "Standard Annuale",
    prezzo: "€240.00",
    credito: "€24.00",
    statoCredito: "In attesa",
  },
  {
    data: "10/06/2020",
    azione: "Rimborso",
    abbonamento: "Standard mensile",
    prezzo: "€240.00",
    credito: "€0",
    statoCredito: "Annullato",
  },
];
