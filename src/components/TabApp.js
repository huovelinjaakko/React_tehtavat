import React, { useState } from'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from './Todolist';

function TabApp() {

    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Home" />
                <Tab value="two" label="Todos" />
            </Tabs>
            {value === 'one' && <div>
                                    <h1>Welcome to the home page!</h1>
                                </div>}   
            {value === 'two' && <div>
                                    <Todolist />       
                                </div>}   
        </div>
    );

}
    
export default TabApp;