import "./rightbar.scss";

export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        {/* first Item */}
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Mr abd</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Mr abd</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>
        </div>

        {/* second Item */}

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Mr abd</span> changed profile picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Mr abd</span> changed profile picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Mr abd</span> changed profile picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
        </div>

        {/* third Item */}

        <div className="item">
          <span>Active Friends</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Mr abd</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Mr abd</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Mr abd</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Mr abd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
