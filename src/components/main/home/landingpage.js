import './landingpage.css';
import { ReactDOM } from 'react';

function LandingPage(){
    return (
        <main class="landingpage">
            <section class="main-section">
                <div class="main-section-content">
                    <h1>O que o Ecommerce tem a te oferecer?</h1>
                    <div class="main-section-content-display" id="messages">
                        <p class="main-section-context-display-text">O Ecommercivio tem o dever de agregar valor a venda de produtos da sua empresa.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;