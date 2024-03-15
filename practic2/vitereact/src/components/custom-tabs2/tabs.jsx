import React, {useState} from 'react';
import tabsData from './tabs-data.js';
function Tabs() {
    const [currentTab, setCurrentTab] = useState(null)

    const handleTabClick = (index) => {
        setCurrentTab(index);
    };

    return (
        <div>
            <div>
                {
                   tabsData.map((tabItem, index)=> (
                       <div
                           onClick={() => handleTabClick(index)}
                       >
                           {tabItem.label}
                       </div>
                   ))
                }
            </div>
            <div>
                {
                    tabsData.map((tab, index)=>(
                        <div
                            key={index}
                        >
                            {
                                index===currentTab ? tab.content : null
                            }

                        </div>
                    ))
                }
                {/*{*/}
                {/*    tabsData.map(())*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default Tabs;