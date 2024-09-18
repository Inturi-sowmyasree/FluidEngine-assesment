import { createContext, useState, useContext } from 'react';

const DragContext = createContext();

export function DragProvider({ children }) {
  const [boxes, setBoxes] = useState([]);

  return (
    <DragContext.Provider value={{ boxes, setBoxes }}>
      {children}
    </DragContext.Provider>
  );
}

export function useDragState() {
  return useContext(DragContext);
}
