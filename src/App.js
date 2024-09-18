import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import DragContainer from "./components/DragContainer";
import { DragProvider } from "./components/DragContext";

function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <DragProvider>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <DragContainer />
      </DndProvider>
    </DragProvider>
  );
}
export default App;
