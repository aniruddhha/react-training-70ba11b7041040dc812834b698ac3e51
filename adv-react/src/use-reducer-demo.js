import { useEffect, useReducer } from "react"

const initialState = {
    selected : ''
}

function btnReducer(state, action) {
    switch(action.type) {
        case 'okay' : {
            console.log('okay clicked')
            return { ...state, selected :'contacting fb' }
        }
        case 'hi' : {
            console.log('hi clicked')
            return { ...state, selected :'contacting intagram' }
        }
        case 'bye' : {
            console.log('bye clicked')
            return { ...state, selected :'contacting whatsapp' }
        }
        default : {
            console.log('unknown type')
            return state
        }
    } 
}

export function UseReducerDemo() {

    const [state, dispatch] = useReducer(btnReducer, initialState)

    const onOkClicked = () => dispatch({ type : 'okay'}) 
    const onHiClicked = () => dispatch({type :'hi'})
    const onByeClicked = () => dispatch({type:'bye'})

    useEffect(() => {
        console.log('after dispatch ', state)
    }, [state.selected]) 

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