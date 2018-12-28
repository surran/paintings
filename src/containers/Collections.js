import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let info = {"paintings":{	
	"Khajuraho": ["1","Khajuraho","20x23in oil on canvas (Spring 2015)","Art emotion in sun-baked stone","Artist\'s Collection"],
	"Bada Dara": ["","Bada Dara", "17x23in oil on canvas (Spring 2016)","Rock outcrop in a gorge through mountains","Rs 25,000/-"],
	"Thiruchirappalli Sunshade": ["","Thiruchirappalli Sunshade", "17x23in oil on canvas (Autumn 2016)","Shadows playing on temple walls","Rs 20,000/-"],
	"Varanasi Boats": ["","Varanasi Boats", "17x23in oil on canvas (Spring 2016)","Patterns on Ganga","Rs 25,000/-"],
	"Kanpur": ["25","Kanpur","17x20in oil on canvas (Spring 2016)","Bright celebration on a dingy street","Rs 25,000/-"],
	"Sloping Hills": ["26","Sloping Hills","17x23in oil on canvas (Spring 2016)","Cows grazing on green slopes","Rs 20,000/-"],
	"Konkan Wind": ["2","Konkan Wind","17x23in oil on canvas (Autumn 2016)","Wind through greenery","Rs 20,000/-"],
	//["2","Kanyakumari","17x23in oil on canvas (Spring 2016)","Seller of sea shells","0"],
	"Thiruchirappalli": ["2","Thiruchirappalli","17x23in oil on canvas (Autumn 2016)","Walk to the temple","Rs 20,000/-"],
	"Churdhaar": ["1","Churdhaar","17x23in oil on canvas (Autumn 2016)","Stone laid pathway to the peak","0"],
	"Alley Moonshine": ["3","Alley Moonshine","20x30in oil on canvas (Autumn 2012)","A solitary union of lovers, in a moonlit alley of abstract shapes","0"],
	"Space in Time": ["7","Space in Time","20x30in oil on canvas (Summers 2012)","Intermediatary to the hurry and scurry, a space in time","0"],
	"Gray Dance": ["8","Gray Dance","20x30in oil on canvas (Summers 2012)","A dance of shapes, discontinuity and darkness","0"],
	"Curtains": ["9","Curtains","30x20in oil on canvas (Autumn 2012)","A Pianist who plays on to abstract shapes behind drawn curtains","0"],
	"Twilight": ["","Twilight", "30x24in oil on canvas (Summer 2013)","Calm curiousity","0"],
	"Awkward Desert": ["","Awkward Desert", "30x24in oil on canvas (Spring 2013)","An impossible interaction","Artist\'s Collection"],
	"Clouded Night": ["","Clouded Night", "30x30in oil on canvas (Summer 2013)","Inspired from Ajanta paintings","Rs 20,000/-"],
	"Humankind": ["13","Humankind","24x30in oil on canvas (Spring 2013)","On everything that is primitively human","0"],
	"Sunflowers": ["22","Sunflowers","36x30in oil on canvas (Summers 2013)","An orchard of bright yellow flowers","0"],
	"Pair of Roses": ["15","Pair of Roses","24x30in oil on canvas (Spring 2013)","At peace, a look back at life","0"],
	"Kullu": ["2","Kullu","20x24in oil on canvas (Spring 2015)","A morning in Kullu Bazaar","0"],
	"Nako": ["","Nako", "17x23in oil on canvas (Autumn 2016)","Layers of highland terrain under the sky","0"],
	"Varanasi": ["25","Varanasi","17x20in oil on canvas (Winter 2015)","Ghats of Kashi","0"],
	"Sunset at Shimla": ["29","Sunset at Shimla","15x20in oil on canvas (Spring 2016)","Sunset at `Scandal Point`, Shimla","0"],
	"Tipra": ["","Tipra", "17x23in oil on canvas (Autumn 2016)","A Forest valley","0"],
	
	
	"Solan":["2","Solan","17x23in oil on canvas (Summer 2016)","Sweetshop in solan bazaar","0"],
	
	"Hampi": ["24","Hampi", "17x23in oil on canvas (Spring 2016)","Ruins of a city capital","0"],
	
	"Gramphu": ["25","Gramphu","17x20in oil on canvas (Summer 2016)","Dwellers of Himalayan highlands","0"],
	"Jukhala": ["27","Jukhala","15x20in oil on canvas (Spring 2016)","Coloured pillars through rain","0"],
	"Vegetable Vendor": ["27","Vegetable Vendor","15x20in oil on canvas (Spring 2016)","Selling vegetables on a quiet crossing","0"],
	"Maori": ["","Maori", "20x24in oil on canvas (Spring 2016)","Celebration in a hill village","Artists Collection"],
	"Nothing Smile": ["","Nothing Smile", "20x15in oil on canvas (Winter 2011)","Traveller beckoning on new destinations","0"],
	"Bonfire": ["","Bonfire", "36x23in oil on canvas (Summers 2017)","Visual inspired from the film Sholey","Rs 20,000/-"],
	"A Silent Conversation": ["","A Silent Conversation", "36x23in oil on canvas (Summers 2017)","Visual inspired from the film Aradhana","Rs 20,000/-"],
	"Blue Yonder": ["","Blue Yonder", "36x23in oil on canvas (Autumn 2017)","Humpback whales wandering the ocean","Rs 20,000/-"],
	"Seaside Nap": ["","Seaside Nap", "36x26in oil on canvas (Spring 2017)","Sun sand salt and sleep","Rs 20,000/-"],
	"Solan Market": ["","Solan Market", "36x23in oil on canvas (Winter 2017)","The joy of shopping","Rs 20,000/-"],
	"Kaza": ["","Kaza", "36x23in oil on canvas (Spring 2017)","Revering clouded mountains","Rs 20,000/-"],
	"Spiti": ["","Spiti", "20x17in oil on canvas (Summer 2014)","Local festivities, dance and music","Rs 20,000/-"],
	"Apple Orcharder": ["","Apple Orcharder", "36x26in oil on canvas (Spring 2017)","Picking ripe red apples","Rs 20,000/-"],
	"Sea Shells Seller": ["","Sea Shells Seller", "20x17in oil on canvas (Summers 2016)","Coast of Kanyakumari at dusk","Rs 20,000/-"],
	"Mountain Evening": ["","Mountain Evening", "36x23in oil on canvas (Autumn 2017)","Small shops in a remote place","Rs 20,000/-"],
	"A Mountain Expanse": ["","A Mountain Expanse", "36x23in oil on canvas (Summers 2017)","Series of ridges and valleys","Rs 20,000/-"],
	"Frenzy": ["","Frenzy", "36x23in oil on canvas (Summers 2017)","Abstraction of a herd of running animals","Rs 20,000/-"],
	"Monkeys": ["","Monkeys", "36x26in oil on canvas (Spring 2017)","Every monkey is a different person","Rs 30,000/-"],
	"Personal Sunrise": ["","Personal Sunrise", "20x24in oil on canvas (Spring 2014)","Brightness in the lap", "Rs 20,000/-"],
	"Shoolini Mela": ["","Shoolini Mela", "oil on canvas (Winter 2017)","Loud celebration on the streets", "Rs 20,000/-"],
	"Dragonflies": ["","Dragonflies", "oil on canvas (Winter 2017)","Dragonflies buzzing in a patch of sunlight", "Rs 20,000/-"],
	"Kayal": ["","Kayal", "20x30in oil on canvas (Spring 2015)","Water country", "Rs 20,000/-"],
	"Chimpanzees": ["","Chimpanzees", "36x23in oil on canvas (Autumn 2017)","Nature\'s elements settling down in human controlled environment", "Rs 20,000/-"]
},
"bengaluru":["Blue Yonder","Mountain Evening","Frenzy","Solan Market"],
"2017":["Seaside Nap","Monkeys","Blue Yonder","A Silent Conversation","Bonfire","Frenzy","Kaza","Spiti","Mountain Evening","Shoolini Mela","Solan Market","Sea Shells Seller","Apple Orcharder", "Chimpanzees", "Kayal","Maori","Personal Sunrise"],
"solan":["Seaside Nap","Monkeys","Apple Orcharder","Maori","Kaza", "Spiti", "A Silent Conversation","Bonfire", "Sea Shells Seller", "Khajuraho","Bada Dara","Thiruchirappalli Sunshade","Varanasi Boats","Kanpur","Sloping Hills","Konkan Wind","Thiruchirappalli","Churdhaar","Alley Moonshine","Space in Time","Gray Dance",
"Curtains","Twilight","Awkward Desert","Clouded Night","Humankind","Sunflowers","Pair of Roses","Kullu","Nako","Varanasi","Sunset at Shimla","Tipra","Solan","Hampi","Gramphu","Jukhala","Vegetable Vendor","Personal Sunrise","Kayal"],
"2016":["Khajuraho","Bada Dara","Thiruchirappalli Sunshade","Varanasi Boats","Kanpur","Sloping Hills","Konkan Wind","Thiruchirappalli","Churdhaar","Alley Moonshine","Space in Time","Gray Dance",
"Curtains","Twilight","Awkward Desert","Clouded Night","Humankind","Sunflowers","Pair of Roses","Kullu","Nako","Varanasi","Sunset at Shimla","Tipra","Solan","Hampi","Gramphu","Jukhala","Vegetable Vendor"]
}
    let data = {title:"Collections",
        c1:[],
        c2:[]
      }

    data.c1 = info["2016"].map((item) => {return {type: "PictureCard", 
    	                                          text:item, 
    	                                          link: "",
    	                                          src:"img/collections/medium/" + item + ".jpg"}})

    data.c2 = info["2017"].map((item) => {return {type: "PictureCard", 
    	                                          text:item, 
    	                                          link: "",
    	                                          src:"img/collections/medium/" + item + ".jpg"}})
    return (
          <PictureCollection data={data}/>
    );
  }
}



export default Collections;
