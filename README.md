# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### JOSE LUIS GIMENO

## Ejemplo
```
import {ProductButtons,ProductCard,ProductImage,ProductTitle} from 'jpg-product-card'

```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
