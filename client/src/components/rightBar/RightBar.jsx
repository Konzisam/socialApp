import "./rightBar.scss"


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <span>Sam Kons</span>
            </div>
           <div className="buttons">
            <button>Follow</button>
            <button>Dismis</button>

           </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <span>Sam Kons</span>
            </div>
           <div className="buttons">
            <button>Follow</button>
            <button>Dismis</button>
           </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <p>
              <span>Sam Kons</span>
              Changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <p>
              <span>Sam Kons</span>
              Changed their cover picture
              </p>
            </div>
           <span>1 min ago</span>
          </div>
        </div>
            {/* online */}
        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Sam Kons</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Sam Kons</span>
            </div>
          </div>


          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <div className="online"></div>
              <span>Sam Kons</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default RightBar