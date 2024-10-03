
import Header from "./components/header.js"
import AddTodo from "./components/AddTodo";


export default function Home() {
  return (
    <div className="App-container">
      <div className="inner-container">
        <Header />
        <AddTodo />
       
      </div>
    </div>
  );
}
