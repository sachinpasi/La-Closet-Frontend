import { useRouter } from "next/router";

const WithAdmin = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const user = localStorage.getItem("user");
      const User = JSON.parse(user);

      if (User?.role !== 1) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default WithAdmin;
