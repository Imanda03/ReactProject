import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Todos from "./Components/Todos"
import List from "./Components/list"

function App() {
  return (
    <>
    <Header title="My Todo List" > </Header>
    <Footer/>
    <Todos/>
    <List/>
    </>
  );
}

export default App;
