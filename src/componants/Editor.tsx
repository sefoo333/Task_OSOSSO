import { convertToRaw, Editor, EditorState } from "draft-js"
import { useCallback, useState } from "react";
import Tools from "./Tools";
import type { MyEditorType } from "../types/types";




function MyEditor({value,onChange,}:MyEditorType) {


   const CheckIsControlled:boolean = value !== undefined;
   
   const [editor , setEditor] = useState(() => {
    return EditorState.createEmpty();
   });

     const editorState: EditorState = CheckIsControlled ? value ?? editor : editor;

      const handleChange = useCallback((NewEditorState: EditorState) => {
    if (CheckIsControlled) {
      onChange?.(NewEditorState);
    } else {
      setEditor(NewEditorState);
    }
  } , [CheckIsControlled, onChange])



  const Toolbar: { type: string; Title: string }[] = [
    { Title: "Bold", type: "BOLD" },
    { Title: "Italic", type: "ITALIC" },
    { Title: "Underline", type: "UNDERLINE" }
  ]
  


  // using json-server for fake api - ./src/api/db.json

  const sendData:(editorState:EditorState) => void = async () => {
    const contentState = editorState.getCurrentContent();
    const content = convertToRaw(contentState);
    try{
      await fetch("http://localhost:3001/projects" , {
  method:"POST",
   headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    Title:`Project-${Date.now()}`,
    data:content,
  })
})
alert("Data Send 🟢")
    } catch(err) {
      console.log(err)
      alert("Data Not Send 🔴")
    }

  }

  return (
   <div className="parent" style={{color:"black"}}>
     <div style={{ border: '1px solid #ccc' , color:"black", padding: "20px", height:"200px" }}>
      <Editor
      aria-input={"editor input"}
        editorState={editorState}
        onChange={handleChange}
        placeholder={"Write Here"}
      />





    
    </div>
    <div className="tools">
        <h1>Tools</h1>
        {/* you can remove renderToolbar */}
        <Tools editorState={editorState} onChange={handleChange} renderToolbar={Toolbar} />
    </div>

    <button onClick={() => {sendData(editorState);}} style={{marginTop:"15px"}}>Send Data</button>
   </div>
  )
}

export default MyEditor
