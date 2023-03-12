import "./CartWidget.css";
import { ItemCountComoponent } from '../ItemCount/ItemCountComponent';

export const CartWidgetComponent  = () => {
    return(
        <div>
            <i className="bi bi-cart3 ">
            <ItemCountComoponent></ItemCountComoponent>
                </i>
        </div>
    );
}

