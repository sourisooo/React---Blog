import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Spinner from '../Spinner/Spinner';

import './App.scss';


import { useEffect, useState } from 'react';

function App() {

  const [posts, setposts] = useState([]);

  const [categories, setcategories] = useState([]);

  const [zen, setzen] = useState(500);

  useEffect(() => {const fetchData = async () => {

    const response = await fetch('https://oblog-react.vercel.app/api/posts');

    const data = await response.json();

    console.log(data);

    setposts(data);

    const response2 = await fetch('https://oblog-react.vercel.app/api/categories');

    const data2 = await response2.json();

    setcategories(data2);

    console.log(data2);

  };  fetchData();}, [])

  return (
    <div className="app">

      <Header zen={zen} setzen={setzen}/>
      <Posts posts={posts} categories={categories} zen={zen}/>
      <Footer />
 
    </div>
  );
}

export default App;
