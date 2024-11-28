import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ReactDropZonePractice = ({ onFilesAdded }) => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        order: 0,
      })
    );
    setFiles((prev) => {
      const updatedFiles = [...prev, ...newFiles];
      onFilesAdded(updatedFiles);
      return updatedFiles;
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedFiles = Array.from(files);
    const [removed] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, removed);

    setFiles(reorderedFiles);
    onFilesAdded(reorderedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div style={{ margin: "50px" }}>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #007BFF",
          borderRadius: "4px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isDragActive ? "#E3F2FD" : "#FFFFFF",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>فایل‌ها را اینجا رها کنید...</p>
        ) : (
          <p>فایل‌ها را بکشید و رها کنید یا کلیک کنید تا انتخاب کنید</p>
        )}
      </div>
      {files.length > 0 && <h3>فایل‌های بارگذاری شده:</h3>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {files.map((item, index) => (
                <Draggable key={index} draggableId={item.path} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        margin: "30px",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        border: "1px solid lightgrey",
                        borderRadius: "4px",
                        background: "white",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <img
                        style={{ width: "100px" }}
                        src={item.preview}
                        alt=""
                      />
                      <p>{item.path}</p>
                      <input type="number" placeholder="Order" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ReactDropZonePractice;
