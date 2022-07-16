import React from 'react'

function TabNavItem({id, title,activeTab, setActiveTab}) {
    const handleSwitchTab = () =>{
        setActiveTab(id)
    }
  return (
    <li onClick={handleSwitchTab} className={activeTab === id ? "active": ""}>
        {title}
    </li>
  )
}

export default TabNavItem