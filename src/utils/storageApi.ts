interface IGetItemDTO {
  key: string;
}

export const getItem = ({ key }: IGetItemDTO): string | null => {
  return localStorage.getItem(key);
};

interface ISetItemDTO {
  key: string;
  data: string;
}

export const setItem = ({ key, data }: ISetItemDTO): void => {
  localStorage.setItem(key, data);
};

interface IRemoveItemDTO {
  key: string;
}

export const removeItem = ({ key }: IRemoveItemDTO): void => {
  localStorage.removeItem(key);
};
