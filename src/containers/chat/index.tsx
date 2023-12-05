// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import io from 'socket.io-client';
// import { colors } from '../../constants/colors';
// import { heightPercentageToDP } from 'react-native-responsive-screen';

// interface Message {
//     senderId: string;
//     message: string;
//     sender: 'self' | 'other';
// }

// const socket = io('http://localhost:9000');

// export default function Chat() {
//     const [chatMessage, setChatMessage] = useState<string>('');
//     const [chat, setChat] = useState<Message[]>([]);
//     const [senderId, setSenderId] = useState<string | null>(null);
//     const [username, setUsername] = useState<string>('');
//     const [userList, setUserList] = useState<string[]>([]);

//     const sendMessage = () => {
//         if (chatMessage.trim() === '') {
//             return;
//         }

//         const sender = senderId === socket.id ? 'self' : 'other';

//         const messageData: Message = {
//             senderId: socket.id,
//             message: chatMessage,
//             sender,
//         };

//         socket.emit('chatMessage', messageData);
//         setChatMessage('');
//     };

//     const setUsernameAndJoinChat = () => {
//         if (username.trim() === '') {
//             return;
//         }

//         setUsername(username);
//         socket.emit('setUsername', username);
//     };

//     useEffect(() => {
//         socket.on('connect', () => {
//             if (socket.id) {
//                 setSenderId(socket.id);
//             }
//         });

//         socket.on('chatMessage', (data: Message) => {
//             setChat((prevChat) => [...prevChat, data]);
//         });

//         socket.on('userList', (data: string[]) => {
//             setUserList(data);
//         });
//     }, []);

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={chat}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item, index }) => (
//                     <View style ={{padding:5,backgroundColor:colors.blueviolet,  borderRadius: 10,margin:heightPercentageToDP("1%")}}>
//                         <Text
//                             key={index}
//                             style={item.sender === 'self' ? styles.messageSelf : styles.messageOther}
//                         >
//                             {item.sender === 'self' ? 'You: ' : 'Other: '}{item.message}
//                         </Text>
//                     </View>

//                 )}
//             />
//             <TextInput
//                 style={styles.inputStyle}
//                 placeholder="Message"
//                 placeholderTextColor="#000"
//                 onChangeText={setChatMessage}
//                 value={chatMessage}
//             />
//             <View style={styles.buttonViewStyle}>
//                 <TouchableOpacity style={styles.touchableOpacity} onPress={sendMessage}>
//                     <Text>Send</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     messageSelf: {
//         alignSelf: 'flex-end',
//         //backgroundColor: '#3B82F6',
//         // padding: 10,
//         // margin: 5,
//         // borderRadius: 10,
//     },
//     messageOther: {
//         alignSelf: 'flex-start',
//         //backgroundColor: '#6B7280',
//         // padding: 10,
//         // margin: 5,
//         // borderRadius: 10,
//     },
//     touchableOpacity: {
//         height: 60,
//         width: 200,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#0000FF',
//         borderRadius: 10,
//     },
//     buttonViewStyle: {
//         height: 120,
//         width: 200,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputStyle: {
//         height: 60,
//         width: 300,
//         backgroundColor: '#dcdcdc',
//         borderRadius: 10,
//         padding: 20,
//     },
// });



import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:9000'); // Replace with your server's IP

interface ChatMessage {
  from: string;
  message: string;
}

export default function Chat() {
  const [chatMessage, setChatMessage] = useState<string>('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [username, setUsername] = useState<string>('');
  const [userList, setUserList] = useState<string[]>([]);

  const sendMessage = () => {
    if (chatMessage.trim() === '') {
      return;
    }

    const messageData: ChatMessage = {
      from: socket.id,
      message: chatMessage,
    };

    socket.emit('chatMessage', messageData);
    setChatMessage('');
  };

  const setUsernameAndJoinChat = () => {
    if (username.trim() === '') {
      return;
    }

    setUsername(username);
    socket.emit('setUsername', username);
  };

  useEffect(() => {
    socket.on('connect', () => {
      if (socket.id) {
        setUsername(socket.id);
      }
    });

    socket.on('chatMessage', (data: ChatMessage) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    socket.on('userList', (data: string[]) => {
      setUserList(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userList}>
        <Text style={styles.userListTitle}>User List</Text>
        {userList.map((user, index) => (
          <Text key={index} style={styles.userListItem}>
            {user}
          </Text>
        ))}
      </View>
      <FlatList
        data={chat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text
            style={item.from === socket.id ? styles.messageSelf : styles.messageOther}
          >
            {item.from === socket.id ? 'You: ' : 'Other: '}{item.message}
          </Text>
        )}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Message"
        onChangeText={setChatMessage}
        value={chatMessage}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        onBlur={setUsernameAndJoinChat}
      />
      <TouchableOpacity style={styles.touchableOpacity} onPress={sendMessage}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageSelf: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B82F6',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  messageOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#6B7280',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  inputStyle: {
    height: 60,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    padding: 20,
    margin: 5,
  },
  touchableOpacity: {
    height: 60,
    backgroundColor: '#0000FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  userList: {
    width: 150,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  userListTitle: {
    fontWeight: 'bold',
  },
  userListItem: {
    margin: 2,
  },
});
