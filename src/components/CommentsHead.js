import React from "react"
import styled from "styled-components"

const Tab = (props) => {
	const {title, subTitle, uid, index , image, longText, setIndex, venue, date, isMobile} = props
	const selected = isSelected(index, uid)
	const startIndex = getStartIndex(uid)
	return (<TabContainer 
				onClick={() => setIndex(startIndex)}
		        style={{backgroundColor:selected && !isMobile ? "white" : "unset"}}>
		        {selected && <ImageContainer>
		        	<Image src={image}/>
				</ImageContainer>}
				<TextContainer style={{textAlign: selected ? "left" : "center", padding: selected ? "0px 10px" : "10px"}}>
					<Title>{title}</Title>
					{!selected && <SubTitle>{subTitle}</SubTitle>}
					{selected && <SubTitle>{venue}</SubTitle>}
					{selected && <SubTitle><span style={{fontSize: "14px", color: "#080eb3"}}>{date}</span></SubTitle>}
				</TextContainer>
			</TabContainer>)
}

const DropDownTab = (props) => {
	const {title, subTitle, uid, index , image, longText, setIndex, venue, date, setShowDropDown} = props
	const selected = isSelected(index, uid)
	const startIndex = getStartIndex(uid)
	return (<DropDownItem style={{backgroundColor: selected ? "#f5f5f5" : "unset"}}
				onClick={() => {setIndex(startIndex); setShowDropDown(false);}}>
				
					<Title>{title}</Title>
					<SubTitle>{subTitle}</SubTitle>
				

			</DropDownItem>)
}

const getStartIndex = (uid) => {
	if (uid == "17paintings") return 11
	if (uid == "utsav") return 29
	return 0
}

const isSelected = (i, uid) => {
 	if (i < 11 && uid == "pom") return true;
 	if (i < 29 && i >= 11 && uid == "17paintings") return true;
 	if (i >= 29 && uid =="utsav") return true;
 	return false
} 

export const CommentsHead = (props) => {
	const {index, setIndex, showDropDown, setShowDropDown} = props
	const DATA = [
		{title:"Painter To Melodies",
	     subTitle: "Shimla 2016",
	     uid: "pom",
	     image: "../../img/posters/web_pom1.jpg",
	     venue: "Gaiety Heritage Complex",
	     date: "Shimla. 26-27 Nov, 2016"},
		{title:"17 Paintings",
	     subTitle: "Shimla 2017",
	     uid: "17paintings",
	     image: "../../img/posters/web_17paintings.jpg",
	     venue: "Gaiety Heritage Complex",
	     date: "Shimla. 9-10 Dec, 2017"},
	    {title:"UTSAV",
	     subTitle: "Bengaluru 2019",
	     uid: "utsav",
	     image: "../../img/posters/web_utsav1.png",
	     venue: "Rangoli Metro Art Center",
	     date: "Bengaluru. 12-14 Oct, 2019"}
	]

	const desktopTabs = DATA.map(exb => <Tab title={exb.title} 
										     subTitle={exb.subTitle}
										     uid={exb.uid}
										     index={index}
										     setIndex={setIndex}
										     image={exb.image}
										     venue={exb.venue}
										     date={exb.date}
										     key={exb.uid}
										     />)
	const mobileTab = DATA.filter(exb => isSelected(index, exb.uid))[0]
	const mobileDropDown = DATA.map(exb => <DropDownTab  title={exb.title} 
													     subTitle={exb.subTitle}
													     uid={exb.uid}
													     index={index}
													     setIndex={setIndex}
													     image={exb.image}
													     venue={exb.venue}
													     date={exb.date}
													     key={exb.uid}
													     setShowDropDown={setShowDropDown}
													     />)
	return (
	<>
		<Desktop>
			<Text>Exhibition:</Text>
			{desktopTabs}
		</Desktop>
		<Mobile>
			<Tab title={mobileTab.title}
			     isMobile={true} 
			     subTitle={mobileTab.subTitle}
			     uid={mobileTab.uid}
			     index={index}
			     setIndex={setIndex}
			     image={mobileTab.image}
			     venue={mobileTab.venue}
			     date={mobileTab.date}
			     />
			{showDropDown && <DropDownContainer>{mobileDropDown}</DropDownContainer>}
			

		</Mobile>
		
	</>
	)
}


const Text = styled.div`
	display: inline-block;
	padding: 35px 30px;
	font-size: 20px;
` 

const Desktop = styled.div`
   height: 100px;
   width: 100%;
   vertical-align:middle;
   background-color : #eeeeee;
	@media (max-width: 1240px){
		display: none
	}
` 
const Mobile = styled.div`
    height: 100px;
    width: 100%;
    margin-top: -40px;
    background-color: white;
    position: fixed;
    z-index: 1;
    border-bottom: 2px solid gray;
    vertical-align:middle;
	@media (min-width: 1241px){
		display: none
	}
` 

const TabContainer = styled.div`
	display: inline-block;
	padding: 30px 30px;
	font-size: 14px;
	text-align: center;
	vertical-align: top;
	cursor: pointer;
	color: #333333
	@media (max-width: 1240px) {
		padding-left: 60px;
		padding-right: 0px
	}
` 

const DropDownItem = styled.div`
	display: block;
	padding: 10px 15px;
	font-size: 14px;
	text-align: center;
	vertical-align: top;
	cursor: pointer;
	text-align: left
` 

const Title = styled.div`
	font-size:16px;
	line-height: 1.4;
`
const Image = styled.img`
	width: 120px;
`
const ImageContainer = styled.div`
	width: 120px;
	display: inline-block;
	height: 64px;
	vertical-align: top;
	overflow: hidden;
	@media (max-width: 1240px){
		width: 50px;
	}
`

const TextContainer = styled.div`
	display: inline-block;
	padding: 0px 10px;
	text-align: middle;
	height: 60px;
	vertical-align: top;
	transition: all .05s;
`

const SubTitle = styled.div`
	font-size:12px;
`

const DropDownContainer = styled.div`
	background-color: white;
	width: 180px;
    padding: 10px 0px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 24px 0px;
	right: 10px;
    top: 50px;
    position: absolute;
    border-radius: 5px;
`
