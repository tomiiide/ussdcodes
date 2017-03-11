import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Face from 'material-ui/svg-icons/action/face';
import airtel from '../img/airtel.svg';
import mtn from '../img/mtn.svg';
import glo from '../img/glo.png';
import etisalat from '../img/etisalat.png';
import GridContent from './GridContent';
import MTNCodes from '../API/MTN.json';
import ETISALATCodes from '../API/ETISALAT.json';
import GLOCodes from '../API/GLO.json';
import AIRTELCodes from '../API/AIRTEL.json';
import OTHERSCodes from '../API/OTHERS.json';
 

class TabMenu extends Component{
  
  render() {
    return (
      <Tabs>
        <Tab
          icon={<img src={mtn} height="35%" alt="MTN"/>}
          label="MTN">
         
          <GridContent codes={Array.from(MTNCodes.MTN)}  ></GridContent>
        </Tab>

        <Tab 
         icon={<img src={airtel} height="35%" alt="AIRTEL"/>}
         label="AIRTEL"
          
        >
        <GridContent codes={Array.from(AIRTELCodes.AIRTEL)}></GridContent>  
        </Tab> 

        <Tab 
         icon={<img src={glo} height="35%" alt="GLO"/>}
         label="GLO"
        >
        <GridContent codes={Array.from(GLOCodes.GLO)}></GridContent>  
      </Tab> 

        <Tab 
         icon={<img src={etisalat} height="35%" alt="ETISALAT"/>}
         label="ETISALAT"
        >
        <GridContent codes={Array.from(ETISALATCodes.ETISALAT)}></GridContent>  
      </Tab>  

        <Tab 
        icon={<FontIcon><Face color="white"/></FontIcon>}
         label="OTHERS"
        >
        <GridContent codes={Array.from(OTHERSCodes.OTHERS)}></GridContent>  
        </Tab>       
      
      
      </Tabs>
    );
  }
}

export default TabMenu;
