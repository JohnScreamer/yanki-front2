import { FC } from "react";
import HeadLayout from "../components/layouts/HeadLayout";
import Categories from "../components/Home/Categories";
import Subscribe from "../components/Home/Subscribe/Subscribe";
const Home: FC = () => {
    return (
        <HeadLayout name="Головна">
            <div>
                <Categories />
                <Subscribe />
            </div>
        </HeadLayout>
    );
};

export default Home;
