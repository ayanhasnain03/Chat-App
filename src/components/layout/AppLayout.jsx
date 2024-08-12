const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default AppLayout;
