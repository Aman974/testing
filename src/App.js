
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
const api = [{
  _id: 1,
  name: "Adidas",
  price: "10",
  ratings: "3"

},
{
  _id: 2,
  name: "Puma",
  price: "20",
  ratings: "4"

},
]

const columns = [
    {field: "_id", headerName: "Id"},
    {field: "name", headerName: "Name"},
    {field: "price", headerName: "Price"},
    {field: "ratings", headerName: "Rating"}
]
function App() {

  return (
    <div className="App">
      <h1> Comparison Website</h1> 
      <div  style={{margin: "auto", height: 400, width: "30%"}}>
         <DataGrid 
         getRowId={(e) => e._id}
         rows={api}
         columns={columns}
         rowsPerPageOptions={[]}
         options={{
          paging: false
      }}
        
         />
         
         </div>

        
        
    </div>

   
  );
}

export default App;
