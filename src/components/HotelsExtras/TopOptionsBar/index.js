function TopOptionsBar({ children, type }) {
  if (type === "content-between")
    return (
      <div className="border border-muted rounded d-flex justify-content-between mb-4 bg-light p-3 ">
        {children}
      </div>
    );

  return (
    <div className="border border-muted rounded mb-4 bg-light p-3 ">
      {children}
    </div>
  );
}

export default TopOptionsBar;
