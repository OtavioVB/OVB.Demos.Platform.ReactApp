import './header.css';
import React from 'react';

function Header() {
    React.useEffect(() => {
        let isSetted = false;
        const subgroup = document.getElementById("navigation-area-content-subgroup-identifier");

        document.getElementById("support-click").addEventListener("click", () => {
            if(isSetted === true){
                subgroup.style = "display: none;"
                document.getElementById("support-icon").style = "transform: rotate(0deg);";
                isSetted = false;
            }else{
                subgroup.style = "display: flex;"
                document.getElementById("support-icon").style = "transform: rotate(90deg);";
                isSetted = true;
            }
        });

        document.getElementById("close").addEventListener("click", () => {
            subgroup.style = "display: none;"
            isSetted = false;
            document.getElementById("support-icon").style = "transform: rotate(0deg);";
        });
    });

    return (
        <header>
            <div class="description-platform">
                <p class="NamePlatform">Olizia</p>
            </div>
            <div class="navigation-area">
                <nav class="navigation-area-content">
                    <ul class="navigation-area-content-group">
                        <li class="navigation-item">
                            <p id="support-click" class="navigation-link" href="https://google.com.br">Suporte <svg id="support-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg></p>
                            <div class="navigation-area-content-subgroups-content" id="navigation-area-content-subgroup-identifier">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="close" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                                <ul class="navigation-area-content-subgroup">
                                    <li class="navigation-item-subgroup">Ajuda</li>
                                    <li class="navigation-item-subgroup">Contato</li>
                                    <li class="navigation-item-subgroup">Desenvolvedor</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div class="account-area-content">
                        <p class="account-area-content-text">ACESSO</p>
                        <div class="navigation-area-content-account-subgroup">
                            <p>Acesso</p>
                            <p class="navigation-area-content-account-subgroup-item">ENTRAR COMO MEMBRO</p>
                            <p class="navigation-area-content-account-subgroup-item">ENTRAR COMO ADMINISTRADOR</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;