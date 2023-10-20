import { redirect } from "next/navigation";

const RedirectPage = () => {
  redirect("/home");
  return null;
};

export default RedirectPage;
