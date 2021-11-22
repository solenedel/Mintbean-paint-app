import React, {useState} from "react";
import { SliderPicker } from "react-color";
import { saveAs } from 'file-saver';

export const Dashboard = (props) => {

  const { className, canvasColor, setCanvasColor, brushColor, setBrushColor, brushSize, setBrushSize, contextRef, dimensions } = props;

  const [isOpenCanvas, setIsOpenCanvas] = useState(false);
  const [isOpenBrushColor, setIsOpenBrushColor] = useState(false);
  const [isOpenBrushSize, setIsOpenBrushSize] = useState(false);
  const [form, setFormValue] = useState({size: 'small'})

  const RadioButton = ({ label, id, handleChange, name, form }) => (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        onChange={handleChange}
        value={id}
        checked={form[name] === id}
      />
      <label htmlFor={id}>{label}</label>
      <br />
    </>
  );

  const changeBrushSize = (size) => {
    if (size === "small") setBrushSize(14);
    else if (size === "medium") setBrushSize(20);
    else setBrushSize(26);
    return;
  }

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    //console.log({...e.target});
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));

    console.log('selected size:', e.target.value);
    changeBrushSize(e.target.value);
    console.log('changed size to:', brushSize);
    // setBrushSize(e.target.value);
  };

  


  const clearCanvas = (contextRef, dimensions) => {
    contextRef.current.clearRect(0, 0, dimensions.width, dimensions.height);
  };

  // save a TRANSPARENT (no canvas) doc in PNG format
  const saveCanvas = () => {
    // Notes for feature: add canvas background
    // create canvas with same dimensions (id: save-canvas)
    // use fillRect with canvas color
    // draw image with first canvas( id: my-canvas) (transparent bkgrd)
    
    const canvas = document.getElementById("my-canvas");
    canvas.toBlob(function(blob) {
        saveAs(blob, "my-artwork.png");
    });
  }

    //ERASER FUNCTION- CHANGE COLOR TO CANVAS COLOR
    // contextRef.current.strokeStyle = 'red';

  return ( 
    <section id="dashboard" className={className}>

<div className="options">

<div className="collapsibles">
  <button className="toggle" id="canvas-optn" onClick={() => setIsOpenCanvas(!isOpenCanvas)}><span>Canvas color</span></button>
  {isOpenCanvas && <div className="content canvas">
    <SliderPicker 
      className={'canvas-color-picker'}
      color={canvasColor}
      onChangeComplete={setCanvasColor} />
  </div>} 
</div>

<div className="collapsibles">
  <button className="toggle" id="brush-color" onClick={() => setIsOpenBrushColor(!isOpenBrushColor)}><span>Brush color</span></button>
  {isOpenBrushColor && <div className="content brush">
  <SliderPicker 
      className={'brush-color-picker'}
      color={brushColor}
      onChangeComplete={setBrushColor} />
  </div>} 
</div>

<div className="collapsibles">
  <button className="toggle" id="brush-size" onClick={() => setIsOpenBrushSize(!isOpenBrushSize)}><span>Brush size</span></button>
  {isOpenBrushSize && <div className="content brush size">
    <form> 
      <RadioButton
        form={form}
        name="size"
        label="small"
        id="small"
        handleChange={handleChange}
        
        />
        <RadioButton
        form={form}
        name="size"
        label="medium"
        id="medium"
        handleChange={handleChange}
        
        />
        <RadioButton
        form={form}
        name="size"
        label="large"
        id="large"
        handleChange={handleChange}
        // onClick={changeBrushSize({})}
        />
      </form>
    {/* <div>
      <input type="radio" id="small" name="size" value="small" className="small" />
      <label for="small" className="small">Small</label>
    </div>

    <div>
      <input type="radio" id="medium" name="size" value="medium" className="medium" />
      <label for="medium" className="medium" >Medium</label>
    </div>
    
    <div>
      <input type="radio" id="large" name="size" value="large" className="large" />
      <label for="large" className="large">Large</label>
    </div> */}

  </div>} 
</div>

</div>

      <div className="normal-buttons">
        <button id="undo"><span>Undo</span></button>
        <button id="clear" onClick={() => clearCanvas(contextRef, dimensions)}><span>Clear canvas</span></button>
        <button id="save" onClick={saveCanvas}><span>Save</span></button>
      </div>
    
      
    </section>
   );
}
 
