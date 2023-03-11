import './createaccount.css';
import { Fragment } from 'react';
import Header from '../../components/header/header';
import CreateAccoutMain from '../../components/main/createaccount/createaccountmain';

function CreateAccount(){
    return (
        <Fragment>
            <Header/>
            <main>
                <section class="create-account-section">
                    <CreateAccoutMain></CreateAccoutMain>
                </section>
            </main>
        </Fragment>
    );
}

export default CreateAccount;