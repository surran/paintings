import React, { Component } from "react"
import { Helmet } from "react-helmet"
import {pageViewEvent } from "./eventLogging"

class SiteHelmet extends Component {
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
		pageViewEvent();
	}
  
	render() {
		var {title = "Ranjan | Oil Paintings on Canvas", 
			desc = 'Surya Ranjan Shandil is an Indian painter based in Bengaluru.',
			image = 'http://www.suryaranjanshandil.com/img/utsavOverview1.png',
			page
			} = this.props
		if (page && page.pathname && page.pathname.split("/").length >= 2)
		{
			const section = page.pathname.split("/")[1] 
			switch (section) {
				case "about":
				break;
				case "comments":
					title = "Ranjan | Comment Book"
					desc = "Comment written by visitors to art exhibitions presented by Surya Ranjan Shandil."
				break;
				case "17paintings":
					title = "17 Paintings | Art Exhibition by Surya Ranjan Shandil"
					desc = "17 Paintings was an art exhbition by Surya Ranjan Shandil, held on 9th and 10th December 2017 at Gaiety Heritage Complex, Shimla."
				break;
				case "utsav":
					title = "UTSAV  | Art Exhibition by Surya Ranjan Shandil"
					desc = "UTSAV was an art exhbition by Surya Ranjan Shandil, held on 12,13 and 14th October 2019 at Rangoli Metro Art Center, Bengaluru."
					image = 'http://www.suryaranjanshandil.com/img/utsavOverview1.png'
				break;
				case "painterToMelodies":
					title = "Painter to Melodies | Art Exhibition by Surya Ranjan Shandil"
					desc = "Painter to Melodies was an art exhbition by Surya Ranjan Shandil, held on 27th and 28th November 2016 at Gaiety Heritage Complex, Shimla."
				break;
				case "posters":
				break;
				case "media":
				break;
				case "association":
				break;
			}
		}
		return(<Helmet>
				<title>{title}</title>
				<meta name="description" content={desc} />
				<meta property="og:image" content={image} />
			</Helmet>);
	}	
}

export default SiteHelmet;