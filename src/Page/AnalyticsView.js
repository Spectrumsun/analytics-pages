import { priorityType } from '../data';
import MyResponsiveLine from '../Component/LineChart';
import Month from '../Svg/month.svg';
import Search from '../Svg/search.svg';
import ArrowDown from '../Svg/arrowDown.svg';

const AnalyticsView = ({ analyticDatas }) => (
  <>
    <section className="section_three">
      <h3 className="section_three--title">Efficiency Analytics</h3>
      <div className="section_three--wrapper">
        <div className="section_three--search">
          <img src={Search} alt="search"/>
          <input 
            name="search"
            placeholder="Search"
            value=""
          />
        </div>
        <span className="section_three--options">
          <p>Filter Options</p>
          <img src={ArrowDown} alt="arrow down"/>
        </span>
        <div className="section_three--line"/>
        <button>Export</button>
      </div>
    </section>
    <main className="main-wrapper">
      {
        analyticDatas.map(({
          id, 
          averageResponse, 
          responseTime, 
          averageResponseTime,
          priority,
          data
        }) => (
          <section className="section_four" key={id}>
            <div className="section_four--wrapper">
              <div className="section_four--first">
                <div className="section_four--time">
                  <div className="section_four--response">
                    <p className="section_four--average">Average response Time</p>
                    <p className="section_four--percentage">{averageResponse}</p>
                  </div>
                  <div className="section_four--high">
                    <div 
                      className="section_four--doght" 
                      style={{ background: priorityType[priority]}}
                    />
                    <p className="section_four--pri">High Priority</p>
                    <div className="section_four--line"/>
                    <div className="section_four--month">
                      <p>This Month</p>
                      <img src={Month} alt="month" />
                    </div>
                  </div>
                </div>
                <div className="section_four--chart">
                  <MyResponsiveLine data={data} priority={priority} />
                </div>
              </div>
              <div className="section_four--side">
                <div className="section_four--min">
                  <p className="section_four--times">Average Response Time</p>
                  <p className="section_four--mins">{averageResponseTime}</p>
                </div>
                <div className="section_four--min">
                  <p className="section_four--times">Response Time</p>
                  <p className="section_four--mins">{responseTime}</p>
                </div>
              </div>
            </div>
          </section>
        ))
      }
    </main>
  </>
);

export default AnalyticsView;
