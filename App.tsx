import { View } from 'react-native';
import User from './User';

const UserList = [
  {
      username: "Tom",
      phone: "0645697807",
      mail: "tom@tom.com",
      age: 50,
      isLogged: true,
      isAdmin: false,
  },
  {
      username: "Lea",
      phone: "0645693407",
      mail: "bob@bob.com",
      age: 20,
      isLogged: true,
      isAdmin: false,
  },
  {
      username: "Julius",
      phone: "0690697807",
      mail: "alice@alice.com",
      age: 26,
      isLogged: false,
      isAdmin: true,
  }
];
export default function App() {
  return (
    <View>
    {UserList.map((user, value) => ( 
    <User
      key={value} 
      username = {user.username}
      phone = {user.phone}
      mail = {user.mail}
      age = {user.age}
      isLogged = {user.isLogged}
      isAdmin =  {user.isAdmin}
    />
    ))}
    </View>
  );
  
}


