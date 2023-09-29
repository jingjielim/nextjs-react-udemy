import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find the best events" />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
      revalidate: 1800,
    },
  };
}
export default HomePage;
