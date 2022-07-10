import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const eventMutation = trpc.useMutation(["events.create-event"]);

  const handle = async () => {
    const foo = await eventMutation.mutate({
      title: "Some title",
      time: "Now",
      description: "A description",
      place: "The place",
    });

    console.log(foo);
  };

  return (
    <>
      <Head>
        <title>Event: The Merging of the Streams</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-10/12 md:w-1/2">
        <div className="prose">
          <h1 className="py-2 text-center">The Merging of the Streams</h1>
        </div>
        <button className="btn" onClick={handle}>
          Foo
        </button>

        <div className="py-2" />

        <div className="info flex flex-col gap-2">
          <span>Time: March 11th at 5pm</span>
          <span>Place: RØØR</span>
        </div>

        <div className="py-2" />

        <div className="description prose">
          <p>Heisann!</p>
          <p>
            Jeg har flyttet tilbake til Oslo, og med meg fra Trondheim har jeg
            tatt med en haug med trivelige mennesker. Nå blir jeg 30 og jeg
            tenker det er en ypperlig mulighet til å introdusere en haug med
            folk til hverandre.
          </p>
          <p>
            Planen er å henge på RØØR utover kvelden med ikke så mye mer eller
            mindre enn det. Daglig leder i RØØR er en annen Trondheimskompis så
            det ryktes en rekke spennende øl på tapp. Det er også shuffle board
            i andre etasje.
          </p>
          <p>
            Jeg sitter nok der hele dagen og håper at noen holder meg med
            selskap, men det er bare å komme å gå når man vil. Dropp gaven og
            bruk heller pengene i baren, men dukk opp med villigheten til å
            treffe noen nye hyggelige mennesker. Om du er invitert så er det nye
            folk jeg gjerne vil at du skal treffe der.
          </p>
        </div>
        <div className="attendees"></div>
      </div>
    </>
  );
};

export default Home;
