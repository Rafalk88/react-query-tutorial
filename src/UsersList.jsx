import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/users'

export function UsersList({ listNumber }) {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(listNumber),
  })

  if (usersQuery.status === 'loading') return <h1>Loading...</h1>
  if (usersQuery.status === 'error') return <h1>{JSON.stringify(usersQuery.error)}</h1>

  return (
    <section>
      <h1>Posts List {listNumber}</h1>
      <ol style={{
        margin: '0 auto',
        padding: '25px',
        maxWidth: '900px',
      }}>
        {
          usersQuery.data && usersQuery.data.data.map((user) => {
            return (
              <li
                key={user.id}
                style={{
                  padding: '20px 0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'between',
                  alignItems: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <img
                  src={user.avatar}
                  alt="avatar"
                  style={{
                    width: '100px',
                    height:'100px',
                    borderRadius: '50%',
                  }}
                />
                <span style={{
                  flexGrow: '1',
                  display: 'flex',
                  justifyContent: 'end',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fontFamily: 'sans-serif'
                }}>
                  {user.first_name} {user.last_name}
                </span>
              </li>
            )
          })
        }
      </ol>
    </section>
  )
}