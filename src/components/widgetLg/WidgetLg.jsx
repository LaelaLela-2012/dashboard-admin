import './WidgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Costumer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span></td>
                        <td className="widgetLgDate">1 Jun 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span></td>
                        <td className="widgetLgDate">1 Jun 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span></td>
                        <td className="widgetLgDate">1 Jun 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span></td>
                        <td className="widgetLgDate">1 Jun 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span></td>
                        <td className="widgetLgDate">1 Jun 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                    </td>
                </tr>
            </table>
      </div>
  )
}
