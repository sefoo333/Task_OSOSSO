import { useCallback, useState } from 'react';
import { EditorState } from 'draft-js';
import MyEditor from '../Editor';
function Controlled() {
      const [editorState, setEditorState] = useState(useCallback(() => EditorState.createEmpty() , []));
  return (
     <div className="controlled">
    <h2>Controlled</h2>
    <MyEditor value={editorState} onChange={setEditorState}  />
  </div>
  )
}

export default Controlled
