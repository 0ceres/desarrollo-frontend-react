import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';
import Counter from './_components/Counter';
import FilterableProductTable from './_components/FilterableProductTable';

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const Default = () => { 
    return (
        <>
            <header className="App-header">
                <Counter />
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

            <body>
                <FilterableProductTable products={PRODUCTS}/>
            </body>
        </>
    );
};

export default Default;