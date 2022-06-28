import React from "react";


const Profile = () => {
	return (
		<div className="card-container">
			<header>
				<img className="img-avatar" src='https://www.trendtic.cl/wp-content/uploads/2018/05/003-Rub%C3%A9n-Belluomo-INFOR-2018.jpg' alt="/" />
			</header>
			<h1 className="bold-text">
				ING-Walter <span className="normal-text">39</span>
			</h1>
			<h2 className="normal-text">Barranco ||||| Lima </h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">500</h1>
					<h2 className="smaller-text">Followers</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">200</h1>
					<h2 className="smaller-text">Likes</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">222</h1>
					<h2 className="smaller-text">Photos</h2>
				</div>
			</div>
		</div>
	);
}

export default Profile;