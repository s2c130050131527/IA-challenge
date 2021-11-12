import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import TableView from "./TableView";
import styles from "./App.module.scss";
const API_URL =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/reciped9d7b8c.json";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setShowLoader(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      {showLoader ? (
        <div className={styles.loaderContainer}>
          <Loader type="Grid" color="#6f8392" height={100} width={100}></Loader>
        </div>
      ) : (
        <TableView data={data} error={error} />
      )}
    </div>
  );
}

export default App;
