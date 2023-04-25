import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(()=> {
		actions.fetchStarWars("planets")
		actions.fetchStarWars("people")
		actions.fetchStarWars("vehicles")
	},[]);
	return(
		<div className="Container">
			
		</div>
	)
};