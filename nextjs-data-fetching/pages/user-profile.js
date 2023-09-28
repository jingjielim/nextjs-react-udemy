function UserProfilePage(props) {
  return (
    <main>
      <h1>{props.username}</h1>
    </main>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server side code");
  return {
    props: {
      username: "Max",
    },
  };
}
export default UserProfilePage;
