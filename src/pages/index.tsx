import { Dialog } from "@headlessui/react";
import { useState } from "react";
import MyDialog from "~/components/Dialog";

export default function Home() {
  const [modalVis, setModalVis] = useState(false);
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac purus nec ligula tincidunt semper at quis leo. Ut varius pharetra erat at aliquet. Quisque dictum, lorem ut rhoncus ultrices, magna sapien consequat dolor, non ornare lacus nibh interdum ante. In consequat imperdiet consequat. Nullam tempor ante nec lorem efficitur, eget tincidunt risus condimentum. Vivamus dolor velit, convallis vestibulum lacinia nec, fringilla vel enim. Nulla viverra accumsan molestie. Morbi vel molestie sapien. Aenean tincidunt, mi vel eleifend finibus, sapien neque rhoncus velit, non ultricies lectus sem ac mi.";
  return (
    <main className="min-h-screen">
      <div className="z-10 w-full max-w-5xl mt-24 space-y-24">
        {new Array(10).fill(0).map((_, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <div
        className="px-2 py-4 bg-red-500 rounded-lg w-min whitespace-nowrap text-white cursor-pointer"
        onClick={() => setModalVis(true)}
      >
        Open Modal
      </div>
      <div className="h-48"></div>

      <MyDialog isOpen={modalVis} setIsOpen={setModalVis} />
    </main>
  );
}
