import React, {useRef} from 'react';
import CanvasDraw from 'react-canvas-draw'


function App() {
  const firstCanvas = useRef(null)
  const secondCanvas = useRef(null)

  const handleSave = () => {
    const data = firstCanvas.current.getSaveData()
    secondCanvas.current.loadSaveData(data)
  }

  const handleClear = () => {
    firstCanvas.current.clear()
  }
  
  return (
    <div style={{display:'flex'}}>
      <div>
        <CanvasDraw
          brushRadius={1}
          brushColor= "red"
          catenaryColor= "cyan"
          style={{border:'1px solid black'}}
          ref={firstCanvas}
        />
        <button onClick={handleSave}>save</button>
        <button onClick={handleClear}>clear</button>
      </div>
      <CanvasDraw
        brushRadius={1}
        brushColor= "red"
        catenaryColor= "cyan"
        hideGrid={true}
        disabled={true}
        ref={secondCanvas}
        style={{border:'1px solid black'}}
      />
    </div>
  );
}

export default App;
