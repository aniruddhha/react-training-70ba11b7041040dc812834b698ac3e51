import { useReducer } from "react"

const initialState = {
    selected : ''
}

function btnReducer(state, action) {
    switch(action.type) {
        case 'okay' : {
            console.log('okay clicked')
            break
        }
        case 'hi' : {
            console.log('hi clicked')
            break
        }
        case 'bye' : {
            console.log('bye clicked')
            break
        }
        default : {
            console.log('unknown type')
        }
    } 
}

export function UseReducerDemo() {

    const [state, dispatch] = useReducer(btnReducer, initialState)

    const onOkClicked = () => dispatch({ type : 'okay'})
    const onHiClicked = () => dispatch({type :'hi'})
    const onByeClicked = () => dispatch({type:'bye'})

    return(
        <>
            <div>
                <input type='button' value='okay' onClick={onOkClicked}/>
            </div>
            <div>
                <input type='button' value='hi' onClick={onHiClicked}/>
            </div>
            <div>
                <input type='button' value='bye' onClick={onByeClicked}/>
            </div>
        </>
    )
}