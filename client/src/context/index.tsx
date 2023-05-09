import { Dispatch, SetStateAction, createContext, useState } from "react";

interface PageState {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const initialState: PageState = {
  page: 1,
  setPage: () => {},
};

export const Context = createContext(initialState);

export const PageProvider = (props: any) => {
  const [page, setPage] = useState<number>(initialState.page);

  return (
    <Context.Provider value={{ page, setPage }}>
      {props.children}
    </Context.Provider>
  );
};
