import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} grid dataKey='active User' />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
      </div>
  )
}
