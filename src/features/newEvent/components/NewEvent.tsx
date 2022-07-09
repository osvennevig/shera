import Textarea from "../../../components/Textarea";
import TextInput from "../../../components/TextInput";
import { trpc } from "../../../utils/trpc";
import { useZodForm } from "../../../utils/zodForm";
import { createEventSchema } from "../formValidation";

const NewEvent = () => {
  const ctx = trpc.useContext();

  const mutation = trpc.useMutation(["events.create-event"], {
    onSuccess: async () => {
      ctx.invalidateQueries("events.events");
    },
  });

  const methods = useZodForm({
    schema: createEventSchema,
    defaultValues: {
      title: "",
      time: "",
      description: "",
      place: "",
    },
  });

  return (
    <>
      <div className="flex flex-col items-center min-h-screen mx-auto py-8 w-10/12 md:w-1/2">
        <div className="prose">
          <h1 className="py-2 text-center">Create an event</h1>
        </div>
        <form
          onSubmit={methods.handleSubmit(async (values) => {
            await mutation.mutate(values);
            methods.reset();
          })}
          className={`form-control w-full max-w-xs gap-2`}
        >
          <TextInput
            name="title"
            label="Title"
            registerReturn={methods.register("title")}
            fieldError={methods.formState.errors.title}
          />

          <TextInput
            name="time"
            label="Time"
            registerReturn={methods.register("time")}
            fieldError={methods.formState.errors.time}
          />

          <TextInput
            name="place"
            label="Place"
            registerReturn={methods.register("place")}
            fieldError={methods.formState.errors.place}
          />

          <Textarea
            name="description"
            label="Description"
            registerReturn={methods.register("description")}
            fieldError={methods.formState.errors.description}
          />

          <div className="py-2" />

          <button className="btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default NewEvent;
