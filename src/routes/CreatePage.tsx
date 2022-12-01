import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Post, setPost } from "../api/posts";

type Props = {};

export function CreatePage({}: Props) {
  const navigation = useNavigate();
  const { handleSubmit, register } = useForm<Post>();

  async function onSubmit(data: Post) {
    await setPost({
      userId: 99,
      title: data.title,
      body: data.body,
    });

    navigation("/articles");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Insert title:</p>
          <input {...register("title")} />
        </label>
        <label>
          <p>Insert content:</p>
          <textarea {...register("body")} />
        </label>
        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}
