import { render, fireEvent } from '@testing-library/react';
import MyEditor from '../componants/Editor';
import { EditorState } from 'draft-js';


describe(MyEditor , () => {
  // Bold Button Test
it('applies italic style when italic button is clicked', () => {
    const editorState = EditorState.createEmpty();
    const onChange = jest.fn();

    const { getByTestId } = render(
      <MyEditor value={editorState} onChange={onChange} />
    );

    const getBoldButton = getByTestId("BOLD")
    fireEvent.mouseDown(getBoldButton); 

  expect(onChange).toHaveBeenCalled();
  })

    // Italic Button Test
it('applies italic style when italic button is clicked', () => {
    const editorState = EditorState.createEmpty();
    const onChange = jest.fn();

    const { getByTestId } = render(
      <MyEditor value={editorState} onChange={onChange} />
    );

    const getItalicButton = getByTestId("ITALIC")
    fireEvent.mouseDown(getItalicButton); 

  expect(onChange).toHaveBeenCalled();
  })

    // UnderLine Button Test
it('applies underline style when underline button is clicked', () => {
    const editorState = EditorState.createEmpty();
    const onChange = jest.fn();

    const { getByTestId } = render(
      <MyEditor value={editorState} onChange={onChange} />
    );

    const getUnderlineButton = getByTestId("UNDERLINE")
    fireEvent.mouseDown(getUnderlineButton); 

  expect(onChange).toHaveBeenCalled();
  })

})