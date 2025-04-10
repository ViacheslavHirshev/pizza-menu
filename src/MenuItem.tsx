type MenuItemProps = {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
};

function MenuItem(props: { item: MenuItemProps })
{
    return (
        <li className={`pizza ${props.item.soldOut ? "sold-out" : ""}`}>
            <img src={props.item.photoName} alt={props.item.name} />
            <div>
                <h3>{props.item.name}</h3>
                <p>{props.item.ingredients}</p>
                {
                    props.item.soldOut ? <span>Sold Out</span> : <span>{props.item.price}</span>
                }
            </div>
        </li>
    );
}

export default MenuItem;