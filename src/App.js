import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './App.css';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' }
];

function App() {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...POSTS])
  });

  const newPostMutation = useMutation({
    mutationFn: title => wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  });

  return (
    <div className="App">
      <h1>TanStack Query</h1>
      {
        postsQuery.isError && (
          <pre>
            Error: {
              JSON.stringify(postsQuery.error)
            }
          </pre>
        )
      }
      {
        postsQuery.isLoading ? <h1>Loading...</h1> : (
          <>
            <button
              disabled={newPostMutation.isPending}
              onClick={() => newPostMutation.mutate('New post')}
            >
              Add new post
            </button>
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
          </>
        )
      }
    </div>
  );
}

// slow the network speed fn
function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
};

export default App;
