import './header.css';
import React from 'react';

function Header() {
    React.useEffect(() => {
        let isSetted = false;

        document.getElementById("support-click").addEventListener("click", () => {
            const subgroup = document.getElementById("navigation-area-content-subgroup-identifier");

            if(isSetted === true){
                subgroup.style = "display: none;"
                isSetted = false;
            }else{
                subgroup.style = "display: flex;"
                isSetted = true;
            }
        });
    });

    return (
        <header>
            <div class="description-platform">
                <p class="NamePlatform">Eschody</p>
            </div>
            <div class="navigation-area">
                <nav class="navigation-area-content">
                    <ul class="navigation-area-content-group">
                        <li class="navigation-item">
                            <p id="support-click" class="navigation-link" href="https://google.com.br">Suporte</p>
                            <ul id="navigation-area-content-subgroup-identifier" class="navigation-area-content-subgroup">
                                <li class="navigation-item-subgroup">Ajuda</li>
                                <li class="navigation-item-subgroup">Desenvolvedor</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;