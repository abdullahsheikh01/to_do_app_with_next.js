'use client';
import { useEffect, useState } from "react";
export default function ToDoApp() {
  const [title, setTitle] = useState<string>("");
  const [descrip, setDescrip] = useState<string>("");
  const [todos, setTodos] = useState<{ title: string, description: string }[]>([]);
  const [theme, setTheme] = useState<"White Theme" | "Black Theme">("Black Theme");
  const [height,setHeight] = useState<number>(0);
  const [width,setWidth]=  useState<number>(0);
  const twWidth: string = `w-[${width}px]`;
  const twheight: string = `h-[${height}px]`;
  const [color1, setColor1] = useState("black")// For Background Color 
  const [color2, setColor2] = useState("white");// For foreground Color
  useEffect(()=>{
    if(typeof window!=="undefined"){
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  },[]);
  const themeChanger = () => {
    if (theme === "White Theme") {
      setTheme("Black Theme");
      setColor1("black");
      setColor2("white");
      console.log("Theme White Present")
    }
    else {
      setTheme("White Theme");
      setColor1("white");
      setColor2("black");
      console.log("theme Black Present");
    }
  }
  function deleteButtonHandler(index: number): void {
    const copyTodos: { title: string, description: string }[] = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  }
  let showTodos = null;
  let showTodosDiv = null;
  if (todos.length > 0) {
    showTodos = todos.map((obj: { title: string, description: string }, index: number) => {
      return (
        <div className={`h-96 w-[487px] border border-${color2} ml-20 rounded-2xl mt-7
         overflow-auto`} key={index}>
          <div className="mt-4">
            <h1 className={`text-center text-3xl mt-3 inline text-${color2}`}>{obj.title}</h1>
            <button className="ml-40 bg-red-600 w-16 rounded-md" onClick={() => {
              deleteButtonHandler(index);
            }}
            >Delete</button>
          </div>
          <p className={`mt-3 ml-5 text-xl text-${color2}`}>{obj.description}</p>
        </div>
      )
    })
  }
  else {
    showTodos =
      <h1 className={`text-3xl text-${color2}`}>There is not any todo Available</h1>;
  }
  if (todos.length > 0) {
    showTodosDiv = <div className="grid grid-cols-2 mt-8">
      {showTodos}
    </div>
  }
  else {
    showTodosDiv = <div className="flex flex-row mt-52 w-full  justify-center">
      {showTodos}
    </div>;
  }
  function FormsubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    todos.push({ title: title, description: descrip });
    setTitle("");
    setDescrip("");
  };
  return (
    <div className={`${twWidth} ${todos.length <= 2 ? twheight : "h-auto"}
     bg-${color1} `}>
      <div className="flex flex-row justify-center pt-12">
        <h1 className={`text-5xl text-${color2}`}>To Do App By <a href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/" target="_blank" className="text-blue-600">Abdullah Shaikh</a></h1>
        <button className={`w-72 h-14 rounded-2xl border border-${color2} ml-20 text-${color2}
hover:bg-${color2} hover:text-${color1} tracking-[1.5px]`}
          style={{ borderWidth: "3px" }} onClick={() => themeChanger()}>
          {theme === "White Theme" ? "Dark Theme" : "Light Theme"}
        </button>
        <button className={`text-center h-14 w-40 bg-${color1} text-${color2} border border-${color2} rounded-3xl mb-9 ml-16 hover:bg-red-600 hover:text-${color2}`}
        style={{ borderWidth: "3px" }} onClick={()=>{setTodos([])}}>
          Clear All
        </button>
      </div>
      <form className="flex flex-row ml-20 mr-5 mt-12 gap-11"
        onSubmit={FormsubmitHandler}>
        <input type="text" className="init-input" placeholder="Enter Title Here"
          required value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="init-input "
          placeholder="Enter Description Here" value={descrip} onChange={(e) => setDescrip(e.target.value)} />
        <button className={`h-20 border border-${color2} w-28 rounded-[21px] text-${color2}
hover:text-${color1} hover:bg-${color2}`}
          style={{ borderWidth: "3px" }}>Add
        </button>
      </form>
      {showTodosDiv}
    </div>
  )
};