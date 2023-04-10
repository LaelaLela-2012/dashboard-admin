import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './FeaturedInfo.css'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">
                        -11,4<ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,400</span>
                    <span className="featuredMoneyRate">
                        -5,4<ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +9,4<ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>
      </div>
  )
}
