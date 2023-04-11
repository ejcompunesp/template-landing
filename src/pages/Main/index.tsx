import { Header, Avatar, Card, Home } from "components";

export const Main = () => {
  return (
    <>
      <Header />
      <div className="bg-red-100 min-h-screen h-screen">
        <main className="h-full flex justify-center items-center">
          <div className="p-6 max-w-sm bg-white rounded-xl space-x-4">
            <div>
              <Avatar />
            </div>
            <div className="mt-2">
              <div className="text-xl font-medium text-black">Chat</div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
            <div className="mt-4">
              <Card
                title="Interest topic"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum.
            "
              />
            </div>
          </div>
        </main>
          <Home title="EJCOMP Agency" description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro nobis sunt quia commodi vel ad! Iste pariatur numquam tempora qui porro earum ipsam, odit, quibusdam molestiae minus tenetur quo!"/>
      </div>
    </>
  );
};
