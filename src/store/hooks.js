import StoreContext from './Context'
import { useContext } from 'react';


const useStore = () => {
    const [state,dispatch] = useContext(StoreContext);

    return [state,dispatch]
}

export {useStore}