
import React, { useState ,FC } from 'react';
export interface ADS {
	href?: string,
	banner?: string
	width?:string ,
	height?: string,
	video ?: string
  }
 
export const BillBoard: FC<ADS> = ( {href, banner} ) => {

	return(
		<div className="container">
			<a href={href} target="_blank">
				<img src={banner} width="1278px" height="150px !important" style={{height:"150px"}}/>
			</a>
		</div>
	);
  }
 
  export const Pave: FC<ADS> = ( {href , banner, width , height} ) => {
	return(
		<div>
			<a href={href} target="_blank">
				<img src={banner} width={width} height={height} />
			</a>
		</div>
	);
}
export const SquareAds: FC<ADS> = ( {video , href, banner , } ) => {
	return(
		<div className={`ads-paver mb-3 bg-red`}>
			{video ? 
				<video width="100%" height="250px" controls>
				  <source src={video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				:
				<a href={href} target="_blank">
					<img src={banner} width="396px" height="330px" />
				</a>
			}
		</div>
	);
}
export const Megabanner: FC<ADS> = ( {href, banner} ) => {

	return(
		<div className='container' style={{textAlign:'right'}} >
			<a href={href} target="_blank">
				<img src={banner} width="822px" height="90px" style={{height :"90px"}} className="text-align-right"/>
			</a>
		</div>
	);
}
export const PopupVideo: FC<ADS> = ( {video} ) => {

	const [display, setDisplay] = useState(true);

	return(
		<div className="ads-popup position-fixed" style={{display: display ? 'block' : 'none'}}>
			<span onClick={() => setDisplay(false)}>&times;</span>
			<div className="ads-popup-opacity"></div>
			<video width="300px" height="250px" controls>
			  <source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
export const Interstitial: FC<ADS> = ( {banner} ) => {

	const [display, setDisplay] = useState(true);

	return(
		<div className="ads-interstitial position-fixed bg-red" style={{display: display ? 'block' : 'none'}}>
			<span onClick={() => setDisplay(false)}>&times;</span>
			<img src={banner} width="100%" height="auto" />
		</div>
	);
}
export const Skyscraper : FC<ADS> = ( {href , banner, width , height} ) => {
	return(
		<div>
			<a href={href} target="_blank">
				<img src={banner} width={width} height={height}  style={{height:height}}/>
			</a>
		</div>
	);
}