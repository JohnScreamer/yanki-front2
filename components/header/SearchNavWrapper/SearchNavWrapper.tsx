import { Dispatch, FC, SetStateAction, useState } from "react";
import Curency from "../Curency/Curency";
import NavList from "../NavList/NavList";
import Search from "../Search/Search";
import Theme from "../Theme/Theme";

type SearchNavWrapperType = {};

const SearchNavWrapper: FC<SearchNavWrapperType> = ({}) => {
    const [searchStatus, setSearchStatus] = useState(false);
    return (
        <>
            <div className=" items-center flex justify-end  w-2/5 order-4  ">
                <div className="mr-auto  hidden md:flex">
                    <Curency />
                    <Theme />
                </div>
                <NavList
                    searchStatus={searchStatus}
                    setSearchStatus={setSearchStatus}
                />
            </div>
            <Search setSearchStatus={setSearchStatus} status={searchStatus} />
        </>
    );
};

export default SearchNavWrapper;
