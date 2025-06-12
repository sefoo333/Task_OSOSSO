import { EditorState, RichUtils } from "draft-js";
import Button from "./Button";

type props = {
  editorState: EditorState;
  onChange: (state:EditorState) => void,
  renderToolbar?: { type: string; Title: string }[] 
};

function Tools({editorState , onChange , renderToolbar}:props) {

        const styleButton = (style:string) => {
            const newState = RichUtils.toggleInlineStyle(editorState, style);
            onChange(newState)
        }
  return (
  <div className="tools" style={{display:"flex",gap:"15px"}}>
{renderToolbar ? (
  <>
  {renderToolbar.map((e:{type:string , Title:string} , a:number) => (
    <Button typeStyle={e.type} styleButton={styleButton} key={a}>
      {e.Title}
      </Button>
))}
  </>
): (
  <>
      <Button typeStyle="BOLD" styleButton={styleButton}>
        Bold
      </Button>
      <Button typeStyle="ITALIC" styleButton={styleButton}>
        italic
      </Button>
      <Button typeStyle="UNDERLINE" styleButton={styleButton}>
        underline
      </Button>
  </>
)}
      
  </div>
  )
}

export default Tools
