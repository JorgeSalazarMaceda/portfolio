import '../Style/Card.css'
import { cardTexts } from './TextCardContent';

const Card = () => {

    return (
        <div class="container">
            {cardTexts.map((text, index) =>
                <div key={index} className='my-card'>
                    <h3 className='title'>{text}</h3>
                </div>
            )}
        </div>
    )
}

export default Card;