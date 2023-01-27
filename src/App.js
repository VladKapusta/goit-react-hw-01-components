import Profile from './components/profile/profile';
import Statistics from './components/statistics/statistics';
import FriendsList from './components/friend_list/friendsList';
import Transactions from './components/transactions/transactions';
import user from './path/to/user.json';
import data from './path/to/data.json';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        imageUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <section>
        <Statistics stats={data} titel="Upload stats" />
        <Statistics stats={data} />
      </section>

      <FriendsList friends={friends} />

      <Transactions items={transactions} />
    </>
  );
}
