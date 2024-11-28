import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  const handleSubmit = () => {
    // اینجا می‌توانید محتوای ویرایشگر را به سرور ارسال کنید یا پردازش کنید
    console.log(editorContent);
  };

  return (
    <div>
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY" // آدرس کلید API خود را اینجا قرار دهید (قابل اختیاری)
        initialValue="<p>این یک متن اولیه است.</p>" // محتوی اولیه
        onEditorChange={handleEditorChange} // مدیریت تغییرات در محتوا
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | link image | code",
        }}
      />
      {/* <button onClick={handleSubmit}>ارسال</button> */}
      <div>
        <h2>محتوا:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default TinyMCEEditor;
