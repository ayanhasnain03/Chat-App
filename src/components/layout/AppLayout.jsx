const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <div>Header</div>
        <div>
          <WrappedComponent {...props} />
        </div>
        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
