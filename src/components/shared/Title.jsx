import { Helmet } from "react-helmet-async";

const Title = ({ title = "Chat", description = "Chat with your friends" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default Title;
