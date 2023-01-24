import { FC } from "react";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

type indexType = {};
const urlName = ["Головна", "Доставка"];
const index: FC<indexType> = () => {
    return (
        <HeadLayout name="Достаки">
            <div className="Container min-h-screen">
                <Scrumbs arrName={urlName} />
                <h1 className="text-xl my-[20px]">Доставка</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    est fuga ullam atque velit necessitatibus tempore veniam ut
                    inventore quasi. Quaerat fugit velit eos neque dignissimos
                    tempora. Eos, culpa sapiente?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    est fuga ullam atque velit necessitatibus tempore veniam ut
                    inventore quasi. Quaerat fugit velit eos neque dignissimos
                    tempora. Eos, culpa sapiente? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Natus vitae voluptate eos
                    aliquid at quis, excepturi laudantium aperiam possimus
                    voluptatibus vel sequi voluptates harum praesentium.
                    Molestias, harum culpa, omnis tempore distinctio illum sit
                    doloribus deleniti unde quasi officia aliquam velit
                    necessitatibus ab consequuntur porro perferendis? Commodi
                    enim ratione quidem quas culpa sunt, sit nam hic iure
                    repellat itaque autem illum fugit nesciunt repellendus
                    eligendi. Natus, unde saepe reprehenderit fuga cupiditate
                    voluptate similique quo vero quos cumque voluptatem culpa
                    quod maxime id architecto ab minima magnam distinctio
                    temporibus voluptatibus aspernatur tenetur veritatis eos
                    eaque. Adipisci autem dolores labore non animi quam, facere
                    hic laboriosam atque exercitationem enim! Impedit omnis cum
                    et provident asperiores rerum nam voluptatibus pariatur
                    ducimus. Modi, quia aliquam!
                </p>
            </div>
        </HeadLayout>
    );
};

export default index;
