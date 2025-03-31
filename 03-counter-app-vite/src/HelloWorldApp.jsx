import { Fragment } from 'react'


function NewUser(){
    const user = 'Fernando tiene 24 años'
    return user
};


function App({ name, age }){
    return (
    <Fragment>
        <h1>{name}{age}</h1>
    </Fragment>
    )
}

export default App;