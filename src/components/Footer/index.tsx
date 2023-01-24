import styles from './Footer.module.scss';
import {FacebookLogo, InstagramLogo, TwitterLogo} from 'phosphor-react'

const iconProps = {
    color: 'white',
    size: 24,
}

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div>
                <a href="https://www.facebook.com/winnicius.moura" target="_blank">
                    <FacebookLogo {...iconProps}/>
                </a>
                <InstagramLogo {...iconProps} />
                <TwitterLogo {...iconProps} />
            </div>

            <span>
                Desenvolvido por WNN
            </span>
        </footer>
    )
}