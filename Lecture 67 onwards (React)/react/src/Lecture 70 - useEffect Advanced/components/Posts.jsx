import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  /*
    do this when you don't want to render your whole component until data is being fetched:

    if (loading) return <span>Loading Data....</span>
  */

  async function fetchUsers() {
    const posts = await axios.get("https://dummyjson.com/posts");
    return posts?.data?.posts;
  }

  useEffect(() => {
    async function showPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await fetchUsers();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.log("Error occurred while loading posts", error);
      }
    }
    showPosts();
  }, []);

  // here while typing the text in any input box, we want to fetch data based on this search term,
  // this is not a suitable way as it will trigger an API call for each letter user types, for ex, it will run for
  // v, va, vai, vaib... and so on. We don't want this because this will introduce a race condition which will make 
  // multiple API calls but will not know which will end when.
  // We should always avoid this, and instead use debouncing for such tasks
  useEffect(() => {
    async function asynchronousCode() {
      const someData = await someFunctionToFetchData(searchTerm);
      //www.google.com/?search=rohanih
      setSomeState(someData);
    }
    asynchronousCode();
  }, [searchTerm]);

  //This will run infinite times
  //   useEffect(() => {
  //     setLoading(false);
  //   }, [loading]);

  useEffect(() => {
    document.title = `${notificationCount ? "(" + notificationCount + ")" : ""} Whatsapp`;
  }, [notificationCount]);

  return (
    <>
      <button onClick={() => setNotificationCount((prev) => prev + 1)}>
        Increase Notification Count
      </button>
      <button onClick={() => setNotificationCount((prev) => prev - 1)}>
        Decrease Notification Count
      </button>
      <button>Load Posts</button>
      {posts.length
        ? posts.map((post, ind) => (
            <div key={ind}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        : loading
          ? "loading posts..."
          : "Click on the button to load posts"}
    </>
  );
}

export default Posts;
