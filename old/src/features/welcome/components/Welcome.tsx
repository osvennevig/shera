import WelcomeActionButton from "./WelcomeActionButton";

const Welcome = () => {
  return (
    <div className="min-h-screen-content mx-auto flex w-8/12 flex-col items-center justify-center gap-3 pt-2 md:w-1/2">
      <h1 className="text-7xl font-extrabold ">Shera</h1>
      <div className="py-2" />
      <p className="leading-7">
        Shera is a tool for managing events without being tied to a social
        network.
      </p>
      <p className="leading-7">
        Do you need to invite people to an event, but they are spread across
        multiple messaging services or social networks? Then Shera is for you.
      </p>
      <p className="leading-7">
        You can keep your attendees updated on your event on their terms. They
        decide how they get their information, without needing to create
        accounts or download an app.
      </p>
      <p className="leading-7">
        Sign in to create an event, and invite your friends to join.
      </p>
      <div className="py-2" />
      <WelcomeActionButton />
    </div>
  );
};

export default Welcome;
