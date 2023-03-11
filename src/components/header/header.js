import './header.css';

function Header() {
    return (
        <header>
            <div class="description-platform">
                <p class="NamePlatform">Ecommerce</p>
            </div>
            <div class="navigation-area">
                <nav class="navigation-area-content">
                    <ul class="navigation-area-content-group">
                        <li class="navigation-item"><a class="navigation-link" href="https://google.com.br">Suporte</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;