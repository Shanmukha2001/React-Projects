
function App(){


    const [time,curTime]= useState(new Date().toLocaleTimeString());
  
    useEffect( () => {
      let secTimer = setInterval( () => {
          curTime(new Date().toLocaleTimeString())
      },1000)
      return() => clearInterval(secTimer);
    });
  
    return(
      <>    
        <h1>{time}</h1>
      </>
    );
  }
  
  