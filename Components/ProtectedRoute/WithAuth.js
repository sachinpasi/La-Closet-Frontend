import { useRouter } from "next/router";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("user");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default WithAuth;
