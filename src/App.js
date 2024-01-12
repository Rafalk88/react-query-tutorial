import { useQuery, useMutation } from '@tanstack/react-query';
import './App.css';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' }
];

function App() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS])
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) return <pre>Error: {JSON.stringify(postsQuery.error)}</pre>

  return (
    <div className="App">
      <h1>TanStack Query</h1>
      <ul>
        {
          postsQuery.data.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

// slow the network speed fn
function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
};

export default App;
