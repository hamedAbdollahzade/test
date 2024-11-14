import { useDropzone } from "react-dropzone";

const ReactDropZonePractice = () => {
  const onDrop = (acceptedFiles) => {
    // Handle dropped files
    console.log(acceptedFiles);
    // شما می‌توانید فایل‌ها را به سرور آپلود کنید یا عملیات دیگر را انجام دهید
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 1048576, // حداکثر سایز 1 مگابایت
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
    </div>
  );
};

export default ReactDropZonePractice;
