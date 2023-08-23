import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://app.aluracursos.com/emprega-one/profile/sofidev' target="_blank" rel="noreferrer nofolllow">
                <img src="/img/alura.svg" alt='Alura perfil' />
            </a>
            <a href='https://www.linkedin.com/in/sofidev/' target="_blank" rel="noreferrer nofolllow">
                <img src="/img/linkedin.svg" alt='LinkedIn' />
            </a>
            <a href='https://github.com/SofiDevO'target="_blank" rel="noreferrer nofolllow" >
                <img src="/img/github-light.svg" alt='Github' />
            </a>
            <a href='https://www.youtube.com/channel/UC36_js-krsAHAEAWpEDhHtw'target="_blank" rel="noreferrer nofolllow" >
                <img src="/img/youtube-solid.svg" alt='Youtube' />
            </a>
        </div>
        <img className="logo-footer" src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por SofiDev</strong>
    </footer>
}

export default Footer