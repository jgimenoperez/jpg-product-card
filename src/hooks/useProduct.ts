import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    let initia_value_count=initialValues!.count
    let initia_value_maxcount=initialValues!.maxCount

    const [ counter, setCounter ] = useState<number>( initialValues!.count || value );
    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {
      
        let newValue = Math.max( counter + value, 0 )
        if ( initia_value_maxcount ) {
            newValue = Math.min( newValue, initia_value_maxcount )
        }
        
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initia_value_count || value )
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initia_value_count && initia_value_maxcount === counter,
        maxCount: initia_value_maxcount,
        
        increaseBy,
        reset

    }

}