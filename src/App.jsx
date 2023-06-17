import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Home from './pages/Home';
import PageNumber from './components/pageNumber';
import "./index.css"
import Nav from './Nav';
import Location from './pages/Location';
import Episodes from './pages/Episodes';
import CharacterInfo from './pages/CharacterInfo';



function App() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pagination, setPagination] = useState()
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}&gender=${gender}&species=${species}`

  async function fetchDatas() {
    const { data } = await axios.get(api); //contains the info of all the data from the api
    const { info, results } = data; //destructuring info and the results from the data
    setData(results);  // this contains all the info of the characters
    setPagination(info)  // this contains the total number of pages
  }

  useEffect(() => {
    fetchDatas();  //fetching data
  }, [api]
  );

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home
            data={data}
            setName={setName}
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender = {setGender}
            setSpecies = {setSpecies}
            pagination={pagination} />} />
          <Route exact path="/Card" element={<Card />} />
          <Route exact path = "/location" element= {<Location/>}/>
          <Route exact path = "/episodes" element= {< Episodes/>}/>
          <Route exact path = "/info/:id" element= {< CharacterInfo/>}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;


