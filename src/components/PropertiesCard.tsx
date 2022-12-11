import './PropertiesCard.css';

type Props = {
    title: string
    name: string | number
}

export const PropertiesCard = ({title, name}:Props) => {
    return (
    <li className="properties__items--wrap" data-testid="properties__items--wrapper">
        <h3 className='properties__title' data-testid="properties__title">{title}</h3>
        <p className='properties__name'>{name}</p>
    </li>
    )
}