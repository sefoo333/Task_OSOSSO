import 'draft-js/dist/Draft.css'; 
import Controlled from './componants/controls/Controlled';
import UnControlled from './componants/controls/UnControlled';
function App() {



  return (
 <div className="parent">
  <h1 style={{textAlign:"center"}}>Task</h1>

 <div className="control">
  <h1 style={{textAlign:"center"}}>Controlled VS Uncotrolled</h1>
  <div className="container" style={{display:'flex', justifyContent:"space-around", width:"100%"}}>
    <Controlled />
    <UnControlled />
  </div>
 </div>
 </div>
  )
}

export default App
