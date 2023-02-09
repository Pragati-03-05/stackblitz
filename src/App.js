import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      let val = await fetch(
        'https://api.punkapi.com/v2/beers?page=1&per_page=8'
      );
      let secVal = await val.json();
      console.log('222222222222222', secVal);
      setData(secVal);
    };
    callApi();
  }, []);
  const getSelect = (e, ind) => {
    Object.assign(data[ind], { select: !data[ind].select });
    setData([...data]);
  };
  return (
    <div>
      {data.map((x, ind) => {
        return (
          <div className={x.select ? 'parent xyz' : 'parent'}>
            <div className={x.select ? 'selectedOne' : 'text'}>
              {x.description}
            </div>
            <div>
              <input
                value={x.select}
                type="checkbox"
                className="radioBtn"
                onChange={(e) => getSelect(e, ind)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
