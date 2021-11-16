
import './App.css';

function App() {

  const startDrawing = () => {

  };

  const finishDrawing = () => {

  };

  const draw = () => {

  };

  return (
    <canvas
      onMouseDown={startDrawing()}
      onMouseUp={finishDrawing()}
      onMouseMove={draw()}
    />
  );
}

export default App;
