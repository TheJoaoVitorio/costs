import { useLocation } from 'react-router-dom';
import Message from "../layout/Message"

function Projects (){
    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
        <div>
            <p>My Projects</p>
            {message &&
                <Message
                    type={'success'}
                    message={message}
                />
            }
        </div>
        
    )
}

export default Projects