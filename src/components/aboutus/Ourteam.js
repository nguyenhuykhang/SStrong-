import React, { Component } from 'react'
import './aboutus.css'
export default class Ourteam extends Component {
  render() {
    return (
        <div className="wrapper" >
        <h1>Our Team</h1>
        <div className="team">
            <div className="team_member">
            <div className="team_img">
                <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279217396_3273445276267153_4143083073699297297_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jiEnhplLkD4AX9q8SwY&_nc_ht=scontent-ord5-1.xx&oh=00_AfAeDegQzcIWwpFFqusT8NU3CzPTrtk8nxVMoEpTvTL17g&oe=63F61C10" alt="Team_image"/>
            </div>
            <h3>Minh Pham</h3>
            <p className="role">Computer Science Freshman</p>
           
            </div>
            <div className="team_member">
            <div className="team_img">
                <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/284469932_3209974569291542_1846427365762435323_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=GLvINO42tyUAX_Zez-d&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZ-O9XmUYwHPD0GN-SW1y8G9cRRnLORc0WyBt3Erhd-w&oe=63F53335" alt="Team_image"/>
            </div>
            <h3>Khang Nguyen</h3>
            <p className="role">Computer Science Freshman</p>
           </div>

        </div>
        </div>	  
    );
  };
};
