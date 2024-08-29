const Welcome = ({name, email}) => {
    if (name !== '' || email !== '') {
        return (        
            <>
                Bienvenido {name}: {email}
            </>        
        );
    } else {
        return (
            <></>
        );
    }
    
}

export default Welcome;