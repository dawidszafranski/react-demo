import { useForm } from "react-hook-form";
import { useAuthorizedRedirect } from "../hooks/useAuthorizedRedirect";
import { useUser } from "../hooks/useUser";

type Props = {};

export function LoginPage({}: Props) {
  useAuthorizedRedirect();
  const { setUser } = useUser();
  const { handleSubmit, register } = useForm<{
    name: string;
  }>({ defaultValues: { name: "" } });

  function onSubmit(data: { name: string }) {
    setUser(data.name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Insert your name:</p>
          <input {...register("name")} />
        </label>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
