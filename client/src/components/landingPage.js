import React, {Component} from 'react';
import {Route} from 'react-router-dom';

export default class LandingPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			favTypes:[],
			favPrices:[],
			favEase:[],
			favFriends:[],
			suggActivities:[],
		};
	}

	//first ask about fav types of activity
        //then ask about fav prices, fav accessibilies(favEase), fav participants (favFriends),
        //use these things to build a "profile" and suggest activites for the user to do
        //when they're bored
	
	render(){
		return(
			<div> 
				Landing Page 
			</div>
		);	
	}
}
