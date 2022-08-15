import { createContext, } from "react";
import { ProductCardsProps, ProductContextProps } from "../interfaces/interfaces";
import useProduct from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardsProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};
