import card from './images/cardcutout.png';
import './App.css';
import './styles.css'; 
import { useState, useEffect, useRef, useCallback } from 'react'
import { TwitterPicker  } from 'react-color'
import { toPng } from 'html-to-image';

function App() {
  const [color,setColor] = useState("blue");
  const [colorWord,setColorWord] = useState("white");
  const [inputText, setInputText] = useState("embed")
  //For text
  const [justifyContent, setJustifyContent] = useState("center")
  const [alignSelf, setAlignSelf] = useState("center")
  // For logo
  const [justifyContent1, setJustifyContent1] = useState("center")
  const [alignSelf1, setAlignSelf1] = useState("center")
  const [companyName, setCompanyName] = useState("Embed")
  const [file,setFile] = useState();
  function handleChangeComplete(color){
    setColor(color.hex)
  }

  function handleChangeCompleteWord(colorWord){
    setColorWord(colorWord.hex)
  }

  const ref = useRef(null)

  function uploadFile(event){
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    var date = new Date()
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${companyName} ${date}`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="App">
      <div className="d-flex container col-12 justify-content-center align-items-center container-height" >
        <div class="row d-flex col-12">
          <div ref={ref} className="col-5 position-relative d-flex align-items-center justify-content-center parent-width">
                
              
              {/* This is thecard */}
              <div class="square" style={{background:color}}>
                <div style={{justifyContent:justifyContent1, alignItems:alignSelf1}} class="logo">{file && <img class="d-flex" style={{justifyContent:justifyContent1, alignItems:alignSelf1}} height="100px" width="100px"src={file} alt="company"/>}</div>
                <div style={{color:colorWord, justifyContent:justifyContent, alignItems:alignSelf}} class="logo"><p style={{fontSize:"1.5em"}}>{inputText}</p></div>
              </div>
                 
              {/* <div className="product-box"></div> */}
          </div>
          <div className="col-3 d-flex">
              <div class="d-flex flex-column">
                
                {/* Icons */}
                <div class="d-flex justify-content-md-evenly flex-column">
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent("flex-start")
                        setAlignSelf("flex-start")
                      }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent("center")
                        setAlignSelf("flex-start")
                        }} class="bi bi-justify h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent("flex-end")
                        setAlignSelf("flex-start")
                        }} class="bi bi-justify-right h4"></i>
                    </div>
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent("flex-start")
                        setAlignSelf("center")
                        }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent("center")
                        setAlignSelf("center")
                        }} class="bi bi-justify h4"></i>
                        <i onClick={(e)=>{
                        setJustifyContent("flex-end")
                        setAlignSelf("center")
                        }} class="bi bi-justify-right h4"></i>
                    </div>
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent("flex-start")
                        setAlignSelf("end")
                        }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent("center")
                        setAlignSelf("end")
                        }} class="bi bi-justify h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent("flex-end")
                        setAlignSelf("end")
                        }} class="bi bi-justify-right h4"></i>
                      </div>
                  </div>

                <p>Text Color</p>
                <TwitterPicker color={colorWord} onChange={handleChangeCompleteWord}/>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Display Text</span>
                </div>
                <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                <br></br>
                <p>Background Color</p>
                <TwitterPicker color={color} onChange={handleChangeComplete}/>
                <br></br>
                <p>Company Name : {companyName}</p>
                <button onClick={onButtonClick}>Submit Design</button>
              </div>
          </div>

          <div className="col-2 d-flex flex-column">
          <div class="d-flex justify-content-md-evenly flex-column">
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent1("flex-start")
                        setAlignSelf1("flex-start")
                      }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent1("center")
                        setAlignSelf1("flex-start")
                        }} class="bi bi-justify h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent1("flex-end")
                        setAlignSelf1("flex-start")
                        }} class="bi bi-justify-right h4"></i>
                    </div>
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent1("flex-start")
                        setAlignSelf1("center")
                        }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent1("center")
                        setAlignSelf1("center")
                        }} class="bi bi-justify h4"></i>
                        <i onClick={(e)=>{
                        setJustifyContent1("flex-end")
                        setAlignSelf1("center")
                        }} class="bi bi-justify-right h4"></i>
                    </div>
                    <div class="d-flex flex-row">
                      <i onClick={(e)=>{
                        setJustifyContent1("flex-start")
                        setAlignSelf1("end")
                        }} class="bi bi-justify-left h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent1("center")
                        setAlignSelf1("end")
                        }} class="bi bi-justify h4"></i>
                      <i onClick={(e)=>{
                        setJustifyContent1("flex-end")
                        setAlignSelf1("end")
                        }} class="bi bi-justify-right h4"></i>
                      </div>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input onChange={uploadFile} class="form-control" type="file" id="formFile"/>
                  </div>
          </div>
        </div>
        
       




      </div>
    </div>
  );
}

export default App;
