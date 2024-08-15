import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => { 
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink 
                    title="Learn React" 
                    url="https://reactjs.org"
                />
                <OpenLink 
                    title="Mi proyecto React (GitHub)" 
                    url="https://github.com/0ceres/desarrollo-frontend-react"
                />

                <LessonInfo number="1" text="Introducción a react y estructura de proyecto"/>
                <LessonInfo number="2" text="Context API para la gestión del estado global en aplicaciones react"/>
            </header>
        </>
    );
};

export default Default;