import ReactQuill from "react-quill";

function RoomFormLanguage({ handleChange: handleLanguage, language, ...data }) {
  const modules = {
    toolbar: [
      [{ direction: "rtl" }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div
      id={"language-" + language.toLowerCase().toLowerCase().replace(/ /g, "-")}
    >
      <p>{language}</p>
      <ReactQuill
        className="rich-text-field"
        modules={modules}
        onChange={(e) =>
          handleLanguage(language.toLowerCase().replace(/ /g, "-"), e)
        }
        required
      />
    </div>
  );
}

export default RoomFormLanguage;
