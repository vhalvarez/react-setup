import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

const product = {
    id: "1",
    title: "Coffe",
};

export const ShoppingPage = () => (
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
            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle title={"Cafe"} />
                <ProductButtons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={"Cafe"} />
                <ProductCard.Buttons />
            </ProductCard>
        </div>
    </div>
);
