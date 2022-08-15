import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components/ProductCard";

const product = {
    id: "1",
    title: "Coffe",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {/* <ProductCard product={product}>
                   <ProductCard.Image />
                   <ProductCard.Title title={'Cafe'}/>
                   <ProductCard.Buttons increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.");
                    } } counter={0} />
                </ProductCard> */}

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={"Cafe"} />
                    <ProductButtons
                        increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.");
                        }}
                        counter={0}
                    />
                </ProductCard>
            </div>
        </div>
    );
};
