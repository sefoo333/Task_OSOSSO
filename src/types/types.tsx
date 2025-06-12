import { EditorState } from "draft-js";

export interface ButtonType {
    typeStyle:string,
    styleButton:(type:string) => void,
    children:React.ReactNode,
}

export interface MyEditorType {
  value?: EditorState,
  onChange?: (NewEditorState:EditorState) => void
}

export interface ToolsType {
  editorState: EditorState,
  onChange: (state:EditorState) => void,
  renderToolbar?: { type: string; Title: string }[] 
};