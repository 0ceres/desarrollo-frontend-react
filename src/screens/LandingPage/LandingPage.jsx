const LandingPage = () => {
    return (
        <>
            <header>
                <div className="headerGreen">
                    <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
                </div>
            </header>
            <body className="greenContainer">
                <h2>Bienvenido</h2>
                <div className="greenLine"></div>
                <p>
                    Este modulo se centra en el uso de <strong>React</strong>, incluyendo la creacion de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>
                </p>
                <h2>Temas Cubiertos</h2>
                <div className="greenLine"></div>
                <div className="row">
                    <div className="block">
                        <p>Componentes funcionales de clase</p>
                    </div>
                    <div className="block">
                        <p>Uso de <strong>React hooks</strong> como useState y useEffect</p>
                    </div>
                    <div className="block">
                        <p>Creacion de <strong>custom hooks</strong> como useForm</p>
                    </div>
                    <div className="block">
                        <p>Gestión de variables de estado con <strong>useState</strong></p>
                    </div>
                    <div className="block">
                        <p>Gestion de estado global con <strong>Redux</strong></p>
                    </div>
                    <div className="block">
                        <p>Integracion de <strong>Redux</strong> con <strong>React</strong></p>
                    </div>
                    <div className="block">
                        <p>Manejo de <strong>Formularios</strong> en <strong>React</strong></p>
                    </div>
                    <div className="block">
                        <p>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></p>
                    </div>
                </div>
                <h2>Recursos adicionales</h2>
                <div className="greenLine"></div>
                <div>
                    <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos</p>
                </div>                
            </body>
            <footer>
                <p>© 2024 Modulo 7. USIP</p>
            </footer>
        </>
    )
}

export default LandingPage;