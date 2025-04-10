import Order from "./Order";

function Footer()
{
    const currentHour = new Date().getHours();
    const openingHour = 8;
    const closingHour = 22;
    const isOpen = currentHour >= openingHour && currentHour < closingHour;

    return (
        <footer className="footer">
            {
                isOpen ? <Order />
                    : <p>We're closed now. Come back tomorrow between {openingHour}:00 and {closingHour}:00!</p>
            }
        </footer >
    );
}

export default Footer;