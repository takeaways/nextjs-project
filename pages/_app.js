import React from "react";

import AppLayout from "../components/AppLayout";


const App = ({Component}) => {
    return (
        <AppLayout>
            <Component/>
        </AppLayout>
    )
};

export default App;