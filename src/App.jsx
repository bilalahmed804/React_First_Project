
import './App.css'

function App() {
 
 
 let logIn = true

  let product = [
    {name:"Potato", key:1},
    {name:"Carbage", key :2},
    {name:"Mango",key:3}
  ]

  return (
   <div>
    <h1>Hello wOrld</h1>
    <ul>
      {product.map((data)=> <li>{data.key}: {data.name}</li>)}
    </ul>
    <button>{logIn ? "LogOut" :"logIn"}</button>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button>Go To Home Page</button>
    <button>About Us</button>
    <button>Contact Us</button>
   </div>
  )
}

export default App
