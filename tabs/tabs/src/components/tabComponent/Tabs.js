import React, {useState} from 'react'
import FirstTab from '../allTabs/FirstTab'
import AnotherTab from '../allTabs/AnotherTab'
import TabNavItem from '../V2/TabNavItem'
import TabContent from '../V2/TabContent'

function Tabs() {
    const [activeTab, setActiveTab] = useState("tab1")
    

    // const handleTab1 = () =>{setActiveTab("tab1")}
    // const handleTab2 = () =>{setActiveTab("tab2")}

  return (
    <div className='tabs'>
        <p>Hello notes</p>
        <ul className='nav'>
            {/* <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Note 1</li>
            <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Note 2</li> */}

            <TabNavItem title="Note1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Note2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Note3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem title="Note4" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>
        <div className="outlet">
            {/* contents will be shown here */}
            {/* <FirstTab/> */}
            {/* {activeTab === 'tab1' ? <FirstTab/> : <SecTab/>} */}

            <TabContent id="tab1" activeTab={activeTab}>
               <FirstTab/>
            </TabContent>

            <TabContent id="tab2" activeTab={activeTab}>
               <AnotherTab title="Second Tab" body="This is a second tab"/>
            </TabContent>

            <TabContent id="tab3" activeTab={activeTab}>
            <AnotherTab title="Third Tab" body="This is a third tab"/>
            </TabContent>

            <TabContent id="tab4" activeTab={activeTab}>
            <AnotherTab title="Fourth Tab" body="This is a Fourth tab"/>
            </TabContent>
        </div>
    </div>
  )
}

export default Tabs