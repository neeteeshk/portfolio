import React from 'react';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import projects from '../Components/allproject';
import { useState } from 'react';

function ProjectPage() {
    const [menuItems] = useState(projects);

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'Projects'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ProjectPage;
