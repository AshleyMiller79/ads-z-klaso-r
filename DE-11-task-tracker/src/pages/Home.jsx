import {useState,useEffect} from 'react'
import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'

import Data from "../helper/Data"

const Home = () => {

const [gorevler, setGorevler] = useState(Data)
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.cypress.io/todos?_limit=10"
  //     );
  //     setGorevler(data);
  //   };
  //   fetchTasks();
  // }, []);

//  useEffect(() =>{setGorevler(Data)},[])

console.log(gorevler);
 
  const [buton, setButon] = useState({
    renk: "orange",
    yazi: "CLOSE ADD TASK BAR",
   
  });

  const butonClick = () => {
    if (buton.renk === "orange") {
      setButon({
        renk: "green",
        yazi: "SHOW ADD TASK BAR",
      });
    } else {
    //  setTimeout(()=>{ 
       setButon({
       renk: "orange",
       yazi: "CLOSE ADD TASK BAR",
     })
    // },2000)

    

    
    }
  };
  return (
    <div>
      <header >
        <h1 style={{marginBottom:"10px"}}>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk}}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>
      {buton.renk === "orange" && (
        <GorevEkle gorevler={gorevler} setGorevler={setGorevler} />
      )}
      <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler} />
    </div>
  );
}

export default Home