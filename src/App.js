
import './App.scss';
import SidebarList from './Component/Sidebar';
import { sidebarItem, analyticDatas, topMenus } from './data';
import Search from './Svg/search.svg';
import Bell from './Svg/bell.svg';
import ArrowDown from './Svg/arrowDown.svg';
import AnalyticsView from './Page/AnalyticsView';
import VolumeView from './Page/VolumeView';
import CustomerSatisfaction from './Page/CustomerSatisfaction';
import Backlog from './Page/Backlog';
import { useState } from 'react';

const App = () => {
  const [defaultScreen, setDefaultScreen] = useState('Efficiency');
  const [selected, setSelected] = useState('Analytics');
  const [subMenu, setSubMenu] = useState('Teams');

  const screenList = { 
    Efficiency:  <AnalyticsView analyticDatas={analyticDatas} />,
    Volume: <VolumeView />,
    'Customer Satisfaction': <CustomerSatisfaction />,
    Backlog: <Backlog />
  };

  return (
    <div className="container">
      <div className="sidebar">
        <aside className="sidebar--user">
          <h4 className="sidebar--title">Metacare</h4>
          <p className="sidebar--name">yinka@metacare.app</p>
        </aside>
        <aside className="sidebar--wrapper">
          {
            sidebarItem.map((item) => 
              <SidebarList 
                item={item}
                selected={selected}
                setSelected={setSelected}
                subMenu={subMenu}
                setSubMenu={setSubMenu}
              />
            )
          }
        </aside>
      </div>
      <div className="main-body">
        <section className="section_one">
          <div className="section_one--search">
            <input 
              name="search"
              value=""
              placeholder="Ask us any question"
            />
            <img src={Search} alt="search"/>
          </div>
          <div className="section_one--notify">
            <div className="section_one--bell">
              <img src={Bell} alt="Bell" />
              <div className="section_one--number">
                <p>3</p>
              </div>
            </div>
            <div className="section_one--line"/>
            <div className="section_one--circlewrapper">
              <span className="section_one--circle"/>
              <img src={ArrowDown} alt="arrow down"/>
            </div>
          </div>
        </section>
        <section className="section_two">
          <ul>
            {
              topMenus.map((topMenu) =>  
                <li 
                  onClick={() => setDefaultScreen(topMenu)} 
                  className={`${defaultScreen === topMenu && 'section_two--active'}`}
                >
                  {topMenu}
                </li>)
            }
          </ul>
        </section>
        {screenList[defaultScreen]}
      </div>
    </div>
  );
}

export default App;
