import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [result, setResult] = useState({
    name: "",
    sys: {
      country: "",
    },
    main: {
      temp: 0,
    },
    weather: [
      {
        id: "",
        main: "",
      },
    ],
  });
  const [cityName, setCityName] = useState("Antalya");
  const [countryName, setCountryName] = useState("TR");
  const [degree, setDegree] = useState(17);
  const [weatherId, setWeatherId] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26fdee20ffefea940d4e9f60f784eac6`
      );

      setResult(response.data);
      setRefresh(!refresh);
    } catch (error) {
      console.log(`RESPONSE ERROR ${error}`);
    }
  };

  useEffect(() => {
    setCityName(result.name);
    setCountryName(result.sys.country);
    setDegree(result.main.temp);
    setWeatherId(result.weather[0].id);
  }, [refresh]);
  const sharedValuesAndMethods = {
    cityName,
    countryName,
    degree,
    weatherId,
    fetchWeather,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
