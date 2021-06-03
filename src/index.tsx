import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import { registerWidget, IContextProvider } from './uxp';  
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";

import './styles.scss'; 

import VideoBg from "reactjs-videobg";
 
interface IDonutChartProps{
    uxpContext?: IContextProvider;
} 

var dataset1 = [ 
             {
              "id": "Monday",
               "label": "Mon",
               "value": 29,
               "img": "./images/thunder.png",
               "status":"Thunder"
             },
             {
              "id": "Tuesday",
               "label": "Tue",
               "value": 29,
               "img": "images/sunny.png",
               "status":"Sunny"
             },
             {
              "id": "Wednesday",
               "label": "Wed",
               "value": 29,
               "img": "images/thunder.png",
               "status":"Thunder"
             },
             {
              "id": "Thursday",
               "label": "Thur",
               "value": 29,
               "img": "images/rainy.png",
               "status":"Rainy"
             },
             {
              "id": "Friday",
               "label": "Fri",
               "value": 29,
               "img": "images/thunder.png",
               "status":"Thunder"
             },
             {
               "id": "Saturday",
               "label": "Sat",
               "value": 29,
               "img": "images/rainy.png",
               "status":"Rainy"
             } 
 ] 
 

export const WeatherWidget:React.FunctionComponent<IDonutChartProps> = (props) =>  {  

    let [data,setData] = React.useState([])

function getData () {

    props.uxpContext.executeAction("Example1","weather",{},{json:true}).then(res=>{
        setData(res);
    }).catch(e=>{
        // reload();
    });

}
React.useEffect(() =>{
    getData();
}, [])


// const renderGridItem = (item: any, key: number) => {
//     return (<ItemCard
//         item={item}
//         imageField="icon"
//         nameField="name"
//         titleField="title"
//         subTitleField="subTitle"
       
//     />)
// }

const DayWeatherlist = () => (
    <ul className="daylist">
      {dataset1.map(item => (
        <li key={item.id}>   
          <div className="status"><img src={item.img}></img></div>
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
        </li>
      ))}
    </ul>
  );

 

    return  <>

    <WidgetWrapper>  

        <div className="weather_widget">

          <div className="weather-video">

              {/* <ReactVideo src="video/sunny.mp4" /> */} 

              <VideoBg width="100%" height="100%"> 
                <VideoBg.Source src="video/sunny.mp4" type="video/mp4" />
              </VideoBg>;

          </div> 
       

           {/* <Video sources={sources} poster="./video/poster.png" >
            <h3 className="video-logo pull-right"><a href="http://glexe.com" target="_blank">LOGO</a></h3>
            <p>Any HTML content</p>
          </Video> */}

          <div className="weather_widget-top">
            <div className="perc-value">
                  <img src="images/drop.png" />   
                 <p>30%</p>
            </div>  
          </div>  

          <div className="weather_icon"><img src="images/sunny.png" /></div>  

           <div className="weather-content"> 
                <h4>32 <sup>o</sup><span>C</span></h4>
                <p>Sunny Today</p>
            </div>

            <DayWeatherlist />  

        </div> 
    </WidgetWrapper>

    </>

    } 


/**
 * Register as a Widget
 */
 registerWidget({
    id: "WeatherWidget",
    name: "Weather Widget",
    widget: WeatherWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});