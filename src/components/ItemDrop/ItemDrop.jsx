import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemDrop() {
    return (
        <div className="pr-2 min-h-[70px] flex justify-between items-center text-xl border-b border-[#dfe1e6]">
            <p>Features</p>
            <span>
                <FontAwesomeIcon icon={faAngleRight} />
            </span>
        </div>
    );
}

export default ItemDrop;
