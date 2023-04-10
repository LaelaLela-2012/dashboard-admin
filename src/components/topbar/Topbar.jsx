import { NotificationsNone, Settings } from '@mui/icons-material'
import './Topbar.css'

export default function Topbar() {
  return (
      <div className="topbar">
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">Dashboard Admin</span>
              </div>
              <div className="topRight">
                  <div className="topbarIconContainer">
                      <NotificationsNone />
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Settings />
                  </div>
                  <img src="https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="topAvatar" />
              </div>
             </div>
      </div>
  )
}
