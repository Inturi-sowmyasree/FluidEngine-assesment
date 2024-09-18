import { useDrag, useDrop } from "react-dnd";
import { useState } from "react";
import "./DragContainer.css";

const ItemType = "BOX";

function DraggableBox({ id, content, moveBox }) {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id },
  });

  return (
    <div ref={ref} className="box">
      {content}
    </div>
  );
}

function DropContainer({ boxes, setBoxes }) {
  const [, ref] = useDrop({
    accept: ItemType,
    drop: (item) => moveBox(item.id),
  });

  const getContent = (id) => {
    switch (id) {
      case 1:
        return "Submit";
      case 2:
        return "Log In";
      case 3:
        return "Log Out";
      default:
        return "Log Out";
    }
  };

  const moveBox = (id) => {
    const newBoxes = boxes.filter((box) => box.id !== id);
    setBoxes([...newBoxes, { id, content: getContent(id) }]);
  };

  return (
    <div ref={ref} className="drop-container">
      {boxes.length === 0 && <div>Drop here</div>}
      {boxes.map((box) => (
        <DraggableBox key={box.id} {...box} />
      ))}
    </div>
  );
}

export default function DragContainer() {
  const [boxes, setBoxes] = useState([
    { id: 1, content: "Submit" },
    { id: 2, content: "Log In" },
    { id: 3, content: "Log Out" },
  ]);

  const [boxes2, setBoxes2] = useState([]);

  return (
    <div className="drag-container">
      <DropContainer boxes={boxes} setBoxes={setBoxes} />
      <DropContainer boxes={boxes2} setBoxes={setBoxes2} />
    </div>
  );
}
