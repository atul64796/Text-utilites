
import { useState ,useEffect,useRef} from "react";
import "./App.css";

function App() {
  const [textutils, settextutils] = useState("");
  const [bold, setbold] = useState(false);
  const [counts, setcounts] = useState("");

  const [italic, setItalic] = useState(false);


  const handlechange = (e) => {
    settextutils(e.target.value);
  
  
  };

  const  countWord = () =>{
  const  wordcount = textutils.trim().split(" ").length
    setcounts(wordcount)
  }

  useEffect(() => {
   countWord()
  }, [textutils])
  

  const tooglebold = () => {
    setbold(!bold);
   
  };

  const toogleitalic = () => {
    setItalic(!italic);
  };

  return (
    <>
      <div className="  flex flex-col gap-20  p-7    ">
        <h1 className="text-5xl font-bold my-5 text-center">Text Utilities</h1>
        <div className="flex justify-center gap-4  border-none">
          <textarea
            type="text"
            className=" rounded-2xl  h-50  w-[100%] p-4 border-2 outline-0"
            value={textutils}
            onChange={handlechange}
            placeholder="Enter Your Task"
            style={{
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
            }}
          />
        </div>
        <div className="  gap-4 flex justify-center flex-wrap">
          <button
            className="p-2 rounded-md text-lg    bg-gradient-to-br from-blue-500 to-red-400 border-1 "
            onClick={(e) => settextutils(textutils.toUpperCase())}
          >
            To Uppercase
          </button>
          <button
            className="p-2 rounded-md text-lg    bg-gradient-to-br from-cyan-400 to-purple-500 border-1 "
            onClick={(e) => settextutils(textutils.toLowerCase())}
          >
            To Lowercase
          </button>
          <button
            className="p-2 rounded-md text-lg    bg-gradient-to-br from-green-400 to-cyan-400  border-1 "
            onClick={(e) => settextutils(textutils.trim())}
          >
           Remove Space
          </button>
          <button
            className="bg-gradient-to-bl  from-green-400 to-purple-600 p-2 rounded-md  text-lg border-1  "
            onClick={tooglebold}
          >
            Font Bold
          </button>
          <button
            className="p-2 rounded-md bg-gradient-to-br from-green-400 to-purple-400  text-lg border-1 "
            onClick={toogleitalic}
          >
            Font Italic
          </button>
          <button
            className="   bg-gradient-to-br from-green-400 to-purple-400   p-2 rounded-md text-lg  border-1 "
            onClick={(e) => settextutils("")}
          >
            Clear All
          </button>
          <button
            className="p-2 rounded-md text-lg    bg-gradient-to-br from-green-400 to-purple-400 border-1 "
           onClick={()=>navigator.clipboard.writeText(textutils)}
          >
            Copy Text
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-start text-xl font-bold ">{`Text Length ${textutils.trim().length}`}</h2>
          <h2 className="text-start text-xl font-bold ">{`Word Count ${counts}`}</h2>
          <h1 className="font-bold text-3xl text-start">Preview</h1>
          <p
            className="text-start text-xl  border-1 p-3 break-words" 
            
            style={{ fontWeight: bold ? "bold" : "normal", fontStyle: italic ? "italic" : "normal", }}
          >
            {textutils}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
