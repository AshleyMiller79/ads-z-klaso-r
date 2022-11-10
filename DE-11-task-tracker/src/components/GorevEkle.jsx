import { useState } from "react";
import moment from 'moment'
import { toast } from "react-toastify";

const GorevEkle = ({ gorevler, setGorevler }) => {
  const [text1, setText] = useState("");
  const [date, setDay] = useState(moment());
  console.log(gorevler);
  // const [buton, setButon] = useState({
  //   renk: "red",
  //   yazi: "CLOSE ADD TASK BAR",
  // });

  // const butonClick = () => {
  //   if (buton.renk === "red") {
  //     setButon({
  //       renk: "purple",
  //       yazi: "SHOW ADD TASK BAR",
  //     });
  //   } else {
  //     setButon({
  //       renk: "red",
  //       yazi: "CLOSE ADD TASK BAR",
  //     });
  //   }
  // };

  const yapSubmit = (e) => {
    e.preventDefault();
  if (text1 === "") {
      toast.error('görev inputu boş görevler e eklenemiyor!')
      
   }else{ 
      toast.success(text1);
    
    const id = gorevler.length + 1;
    setGorevler([
      {
        id: id,
        text: text1,
        // day: day.format("MMMM Do YYYY, h:mm:ss a"),
        day: date,
        bittiMi: false,
      },
      ...gorevler
    ]);
    setText("");
    setDay("");}
  };

  return (
    <div>
      {/* <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header> */}
      {/* {buton.renk === "red" && ( */}
        <form onSubmit={yapSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
               value={text1}
              placeholder="Add Task"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
               value={date}
              placeholder="Add Task"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      {/* )} */}
    </div>
  );
};

export default GorevEkle;
