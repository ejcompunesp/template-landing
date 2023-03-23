import Avatar from "components/Avatar";
import Card from "components/Card";
import Header from "components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-red-100 min-h-screen h-screen">
        <main className="h-full flex justify-center items-center">
          <div className="antialiased font-serif text-black flex-col max-w-screen-1xl h-96 text-6xl flex-direction row w-200 h-100 "> Chalatix<p className="font-bold">Agency, </p>  </div>
          <div className="p-6 max-w-sm bg-white rounded-xl space-x-4">
            <div>
              <Avatar />
            </div>
            <div className="mt-2">
              <div className="text-xl font-medium text-black">Chat</div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
            <div className="mt-7">
              <Card
                title="Interest topic"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum.
              "
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
