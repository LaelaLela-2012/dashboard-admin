import './NewUser.css'

export default function NewUser() {
  return (
      <div className="newUser">
          <h1 className="newUserTitle">Create New User</h1>
          <form className="newUserForm">
              <div className="newUserItem">
                  <label>Username</label>
                  <input type="text" placeholder='John' />
              </div>
              <div className="newUserItem">
                  <label>Full Name</label>
                  <input type="text" placeholder='John Smith' />
              </div>
              <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" placeholder='john99@gmail.com' />
              </div>
              <div className="newUserItem">
                  <label>Password</label>
                  <input type="password" placeholder='password' />
              </div>
              <div className="newUserItem">
                  <label>Phone</label>
                  <input type="text" placeholder='+86 991 4214 00' />
              </div>
              <div className="newUserItem">
                  <label>Address</label>
                  <input type="text" placeholder='Beijing | China' />
              </div>
              <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name='gender' value='male' id='male' />
                    <label for="male">Male</label>
                    <input type="radio" name='gender' value='female' id='female' />
                    <label for="female">Female</label>
                  </div>
              </div>
              <div className="newUserItem">
                <label>Active</label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              <button className="newUserButton">
                  Create
              </button>
          </form>
   </div>
  )
}
