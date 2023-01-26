import { FC } from "react";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

type indexType = {};
const urlName = ["Головна", "Про нас"];
const index: FC<indexType> = () => {
    return (
        <HeadLayout name="Про нас">
            <section className="Container pb-[50px] ">
                <Scrumbs arrName={urlName} />
                <article className="flex flex-col gap-[10px]">
                    <h1 className="text-xl my-[20px]">Про нас</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab est fuga ullam atque velit necessitatibus tempore
                        veniam ut inventore quasi. Quaerat fugit velit eos neque
                        dignissimos tempora. Eos, culpa sapiente?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex, numquam accusantium! Obcaecati dolorum voluptates
                        sint fuga eum? Quisquam laborum delectus consequatur.
                        Consequatur error praesentium autem minus fuga veritatis
                        pariatur assumenda doloribus reiciendis aperiam velit
                        quasi deleniti tenetur atque iste nam consectetur earum,
                        adipisci sequi consequuntur minima! Ut voluptate
                        voluptatem vel, doloremque porro molestiae illo dolore
                        quod sit, ex ipsum necessitatibus animi numquam
                        blanditiis distinctio reiciendis sequi corporis natus
                        quaerat voluptatum possimus molestias quos repudiandae!
                        Numquam asperiores reprehenderit autem dolorem molestiae
                        quibusdam culpa quisquam, expedita nulla quaerat
                        nesciunt excepturi architecto? Ipsam vel libero,
                        temporibus ipsum aliquid cumque sapiente enim beatae
                        omnis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex, numquam accusantium! Obcaecati dolorum voluptates
                        sint fuga eum? Quisquam laborum delectus consequatur.
                        Consequatur error praesentium autem minus fuga veritatis
                        pariatur assumenda doloribus reiciendis aperiam velit
                        quasi deleniti tenetur atque iste nam consectetur earum,
                        adipisci sequi consequuntur minima! Ut voluptate
                        voluptatem vel, doloremque porro molestiae illo dolore
                        quod sit, ex ipsum necessitatibus animi numquam
                        blanditiis distinctio reiciendis sequi corporis natus
                        quaerat voluptatum possimus molestias quos repudiandae!
                        Numquam asperiores reprehenderit autem dolorem molestiae
                        quibusdam culpa quisquam, expedita nulla quaerat
                        nesciunt excepturi architecto? Ipsam vel libero,
                        temporibus ipsum aliquid cumque sapiente enim beatae
                        omnis.
                    </p>
                    <p className="border-b-[0.3px] pb-2 border-accent-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex, numquam accusantium! Obcaecati dolorum voluptates
                        sint fuga eum? Quisquam laborum delectus consequatur.
                        Consequatur error praesentium autem minus fuga veritatis
                        pariatur assumenda doloribus reiciendis aperiam velit
                        quasi deleniti tenetur atque iste nam consectetur earum,
                        adipisci sequi consequuntur minima! Ut voluptate
                        voluptatem vel, doloremque porro molestiae illo dolore
                        quod sit, ex ipsum necessitatibus animi numquam
                        blanditiis distinctio reiciendis sequi corporis natus
                        quaerat voluptatum possimus molestias quos repudiandae!
                        Numquam asperiores reprehenderit autem dolorem molestiae
                        quibusdam culpa quisquam, expedita nulla quaerat
                        nesciunt excepturi architecto? Ipsam vel libero,
                        temporibus ipsum aliquid cumque sapiente enim beatae
                        omnis. Ut voluptate voluptatem vel, doloremque porro
                        molestiae illo dolore quod sit, ex ipsum necessitatibus
                        animi numquam blanditiis distinctio reiciendis sequi
                        corporis natus quaerat voluptatum possimus molestias
                        quos repudiandae! Numquam asperiores reprehenderit autem
                        dolorem molestiae quibusdam culpa quisquam, expedita
                        nulla quaerat nesciunt excepturi architecto? Ipsam vel
                        libero, temporibus ipsum aliquid cumque sapiente enim
                        beatae omnis.
                    </p>
                </article>
            </section>
        </HeadLayout>
    );
};

export default index;
