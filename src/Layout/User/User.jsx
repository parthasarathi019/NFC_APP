const User = ({ children }) => {
  return (
    <div>
      <div>
        <nav>navbar</nav>
        <main>
          <aside>aside</aside>
          <section>{children} </section>
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default User;
