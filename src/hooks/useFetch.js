import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!url) {
      return;
    }

    // fetching data from api
    console.log("Fetching data...");

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setErrorMsg("Something went wrong");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, errorMsg };
};

export default useFetch;
