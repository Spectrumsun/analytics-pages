import Arrow from '../../Svg/arrow.svg';
import { sidebarLogo, sidebarSubMenu } from '../../data';
import './index.scss';

const SidebarList = ({ item, selected, setSelected, setSubMenu, subMenu }) => (
  <div className="sidebar--item" onClick={() => setSelected(item)}>
    <div className="sidebar--content">
      <div className="sidebar--main">
        <img src={sidebarLogo[item]} alt="admin" />
        <p 
          className={`${item === selected && 'sidebar--active'} sidebar--text`}
        >
            {item}
        </p>
      </div>
      {
        item === selected && (
          <ul>
            {
              sidebarSubMenu[item].map((item) => console.log(item) || 
                <li 
                  onClick={() => setSubMenu(item)}
                  className={`${item === subMenu && 'sidebar--actives'}`}
                >
                  {item}
                </li>)
            }
          </ul>
        )
      }
    </div>
    <img 
      src={Arrow} 
      alt="arrow" 
      className="sidebar--arrow"
    />
  </div>
); 


export default SidebarList;
