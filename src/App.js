import { useSelector } from "react-redux";
import Input from "./components/Input";
import ShowTodo from "./components/ShowTodo";
import { motion } from "framer-motion"






function App() {

  const todos = useSelector( (state)=>state.todo)

  console.log("redux", todos)
  
 
  return (
    <div className="bg-[#fcf3e1] flex  flex-col items-center min-h-screen pt-16 ">
      <motion.p 
      initial={{y:-200}}
      animate={{y:0}}
      whileHover={{ scale: 1.1 }}
      transition={{ type:"spring", duration: 0.5 }}

      className=" mb-7 text-7xl text-gray-700 font-shadow"> Todo List App</motion.p>
      <Input ></Input>
    <div className=" container mx auto bg-[#FF6969]  grid  grid-cols-1  md:grid-cols-4  p-12 min-h-screen rounded-xl ">
    {todos.map((todo)=><ShowTodo key={todo.id}  todo={todo} ></ShowTodo>)} 
    </div>
    </div>
  );
}

export default App;
