import React,{useEffect} from 'react'
import { Campaignlist } from '../Helpers/campaignlist';
import Campaignitem from '../components/Campaignitem';
import '../styles/Campaign.css'

function Campaign() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="menu">
    <h1 className="menuTitle">Our Campaign</h1>
    <div className="menuList">
      {Campaignlist.map((menuItem,key)=>{
        return(
            <Campaignitem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              path={menuItem.path}
            />
        );
      })
      }
    </div>
  </div>
  )
}

export default Campaign
