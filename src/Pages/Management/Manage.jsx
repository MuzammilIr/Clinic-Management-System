import React, {useEffect} from 'react'
import './Manage.css'
import Head from './Component/Head'
import Portal from './Component/Portal';
const Manage = () => {
  useEffect(() => {
    // Disable back navigation within the Manage component
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const handlePopstate = (event) => {
    window.history.pushState(null, document.title, window.location.href);
  }
  return (
    <div>
      <Head/>
      <br/>
      <br/>
      <br/>
      <Portal/>
    </div>
  )
}

export default Manage