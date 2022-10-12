import './App.css';
import {
  BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import {Todos} from "./components/todos/Todos";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";
import {Posts} from "./components/posts/Posts";
function App() {
  return (
<div>
<ul>
  <li><Link to={'/'}></Link>Home</li>
  <li><Link to={'/todos'}>Todos</Link></li>
  <li><Link to={'/albums'}>Albums</Link></li>
  <li><Link to={'/comments'}>Comments</Link></li>
</ul>

  <Routes>
    <Route path={'/todos'} element={<Todos/>}/>
    <Route path={'/albums'} element={<Albums/>}/>
    <Route path={'/comments'} element={<Comments/>}/>
    <Route path={'/posts/:id'} element={<Posts/>}/>
  </Routes>
</div>)
}

export default App;
