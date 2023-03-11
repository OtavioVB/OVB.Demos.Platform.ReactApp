import './notfound.css';
import Header from '../../components/header/header.js'
import { Fragment } from 'react';

function NotFound(){
    return (
        <Fragment>
            <Header/>
            <div class="notfound-information">
                <h1>ERROR 404</h1>
                <p>Página não encontrada</p>
            </div>
        </Fragment>
    );
};

export default NotFound;