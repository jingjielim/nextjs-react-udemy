function UserProfilePage(props) {
  return (
    <main>
      <h1>{props.username}</h1>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      username: "Max",
    },
  };
}
export default UserProfilePage;
