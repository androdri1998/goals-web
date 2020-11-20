interface IFormatCurrencyDTO {
  value: number;
}

export const formatCurrency = ({ value }: IFormatCurrencyDTO): string => {
  const valueInDecimal = value / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valueInDecimal);
};
