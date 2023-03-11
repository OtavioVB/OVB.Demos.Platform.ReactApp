import { Fragment } from 'react';
import Header from '../../components/header/header.js';
import LandingPage from '../../components/main/home/landingpage.js'

function Home(){
    return (
        <Fragment>
            <Header></Header>
            <LandingPage></LandingPage>
        </Fragment>
    );
}

export default Home;