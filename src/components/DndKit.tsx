import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const Task = ({ title, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    cursor: "pointer",
    padding: "20px",
    backgroundColor: "red",
    margin: "10px",
    // برای موبایل باید ببینیم  عنصر قابل کشیدن شما لمس شده باشه
    touchAction: "none",
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div {...attributes} {...listeners} ref={setNodeRef} key={id} style={style}>
      <input type="checkbox" style={{ marginInline: "10px" }} />
      {title}
    </div>
  );
};

const Column = ({ tasks }) => {
  return (
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} />
      ))}
    </SortableContext>
  );
};

const DndKit = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);
  console.log(tasks);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id == over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  // For Mobile :
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <>
      <h1>My Tasks With DndKit ✅ : </h1>
      <input
        type="text"
        style={{ margin: "10px", paddingInline: "40px", fontSize: "2rem" }}
        onKeyDown={(e) =>
          e.code === "Enter" &&
          !!e.target.value &&
          setTasks((tasks) => {
            return [...tasks, { id: tasks.length + 1, title: e.target.value }];
          })
        }
      />
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column tasks={tasks} />
      </DndContext>
    </>
  );
};

export default DndKit;
