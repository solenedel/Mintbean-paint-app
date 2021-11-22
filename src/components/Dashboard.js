import React, {useEffect, useState} from "react";
import { CompactPicker } from "react-color";
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
    if (size === "small") setBrushSize(8);
    else if (size === "medium") setBrushSize(16);
    else setBrushSize(32);
  }

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));

    console.log('selected size:', e.target.value);
    changeBrushSize(e.target.value);
  };




  const clearCanvas = (contextRef, dimensions) => {
    contextRef.current.clearRect(0, 0, dimensions.width, dimensions.height);
  };

  const generateBackground = (dimensions) => (
    <>
      <canvas
        id="canvas-bkgd"
        width={dimensions.width}
        height={dimensions.height}
        style={{backgroundColor: canvasColor}}
      />
    </>
  );
    

  console.log('TEST', generateBackground(dimensions));
  // console.log('canvasbkgd', canvasBkgd);


  // save a TRANSPARENT (no canvas) doc in PNG format
  const saveCanvas = () => {  
    // this only gives the very first initialised fill style (#ffc0d9)
    // console.log('contextRef current fillStyle', contextRef.current.fillStyle);


    const canvas = document.getElementById("my-canvas");
    console.log('CANVAS', canvas);

    // console.log('BKGN CANVAS', generateBackground(dimensions));
    // const canvasBkgd = document.getElementById("canvas-bkgd");
    // console.log('canvasbkgd', canvasBkgd);
    // const ctx = canvasBkgdTwo.getContext('2d');
    // const final = ctx.drawImage(canvas, 0, 0);
    canvas.toBlob(function(blob) {
        saveAs(blob, "my-artwork.png");
    });
  }

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = brushColor;
      contextRef.current.lineWidth = brushSize;
    }
  }, [brushColor, brushSize, contextRef]);


  return (
    <section id="dashboard" className={className}>

      <div className="options">

        <div className="collapsibles">
          <button className="toggle" id="canvas-optn" onClick={() => setIsOpenCanvas(!isOpenCanvas)}><span>Canvas color</span></button>
          {isOpenCanvas && <div className="content canvas">
            <CompactPicker
              className={'canvas-color-picker'}
              color={canvasColor}
              onChangeComplete={setCanvasColor} />
          </div>}
        </div>

        <div className="collapsibles">
          <button className="toggle" id="brush-color" onClick={() => setIsOpenBrushColor(!isOpenBrushColor)}><span>Brush color</span></button>
          {isOpenBrushColor && <div className="content brush">
          <CompactPicker
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
                />
              </form>
          </div>}
        </div>

    </div>

      <div className="normal-buttons">
        <button id="clear" onClick={() => clearCanvas(contextRef, dimensions)}><span>Clear canvas</span></button>
        <button id="save" onClick={saveCanvas}><span>Save</span></button>
      </div>


    </section>
   );
}

