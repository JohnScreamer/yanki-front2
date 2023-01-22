import { FC } from "react";
// import s from `./CatalogWrapper.module.scss`;

type CatalogWrapperType = {};

const CatalogWrapper: FC<CatalogWrapperType> = () => {
    return (
        <div>
            <div className="Container">
                <div>scrumbs</div>
                <aside></aside>
                <div>
                    <div>slect</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default CatalogWrapper;
