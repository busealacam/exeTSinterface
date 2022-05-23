import { View, Text } from "react-native";

function User({username,phone,mail,age,isLogged,isAdmin}: UserProp) {
    return (
        <View>           
            <Text>Username : {username}</Text>
            <Text>Phone numbe : {phone}</Text>
            <Text>Mail : {mail}</Text>
            <Text>Age : {age}</Text>
            <Text>Logged in : {(isLogged === true) ? "You logged in" : "Please log in"}</Text>
            <Text>Admin : {(isAdmin === true) ? "You are admin" : "You are user"}</Text>
        </View>
    )
}

export default User;