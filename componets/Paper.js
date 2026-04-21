import React,{useState} from "react";

import{View,ScrollView,StyleSheet} from "react-native";

import{
  Appbar,
  Text,
  Button,
  TextInput,
  Card,
  Checkbox,
  RadioButton,
  Snackbar,
  Portal,
  Dialog,
  Menu,
  FAB,
  Searchbar,
  Avatar,
  Chip,
  HelperText,

} from "react-native-paper";



export default function Paper() {

    const[emri,SetEmri]=useState("");
    const[fjalekalimi,setFjalekalimi]=useState("");
    const[checked,setChecked]=useState(false);
    const[kursi,setKursi]=useState("react-native");
    const[snackbarVisible,setSnackbarVisible]=useState(false);
    const[dialogVisible,setDialogVisible]=useState(false);
    const[menuVisible,setMenuVisible]=useState(false);
    const[kerko,setKerko]=useState("");


    const kaGabim=emri.length>0 && emri.length <3 ;

    //use state perdoret per te ruajtur vlera qe ndryshojne ne aplikacion
  return (
    <View style={styles.container}>

        <Appbar.Header>
{/*          Appbar pjese ew siperme e ekranit    */}
        <Appbar.Content title="React native paper"/>
        <Appbar.Action icon="magnify" onPress={()=>alert("search")}/>
        <Appbar.Action icon="account-cash" onPress={()=>alert("More")}/>
        </Appbar.Header>

{/*     ScrollView na lejon te levizim posht nese ka shume elemente     */}

<ScrollView contentContainerStyle={styles.scrollContainer}>
    <Text variant="displayMedium" style={styles.title}>
        Mire Se vini ne React Native
    </Text>

       <Text variant="titleMedium" style={styles.paragraph}>
        Ketu kemi disa komponente baze qe perdoren shpesh
    </Text>
{/*     ##################################### */}

{/* Avatar */}
 <Text variant="titleMedium" style={styles.sectionTitle}>
       Avatar
    </Text>
    <View style={styles.row}>
        <Avatar.Icon size={70} style={styles.sectionTitle} icon="account"/>

         <Avatar.Text size={50} style={styles.avatarText} label="FP"/>
    </View>

    {/* Button */}

    <Text variant="titleMedium" style={styles.sectionTitle}>
        Button
    </Text>

    <Button mode="text" onPress={()=> alert("Text Button")}>
        Text Button
    </Button>

    <Button mode="outlined" onPress={() => alert("Outlined Button")} style={styles.spaceTop}>
  Outlined Button
</Button>

<Button mode="elevated" onPress={() => alert("Contained Button")} style={styles.spaceTop}>
  Open Camera
</Button>

<Text variant="titleMedium" style={styles.sectionTitle}>
    TextInput
</Text>

<TextInput label="Emri" mode="outlined" value={emri} onChangeText={SetEmri} placeholder="SHkruaj emrin" style={styles.input}/>


<HelperText type="error" visible={kaGabim}>
    Emri duhet te kete te pakten 3 shkronja
</HelperText>


<TextInput 
label="fjalekalimi"
mode="outlined"
value={fjalekalimi}
onChangeText={setFjalekalimi}
secureTextEntry
left={<TextInput.Icon icon="lock"/>}
style={styles.input}
/>


 <Text variant="titleMedium" style={styles.sectionTitle}>
    Searchbar
</Text> 


<Searchbar

placeholder="Kerko.."
value={kerko}
onChangeText={setKerko}
style={styles.input}
/>


<Text variant="titleMedium" style={styles.sectionTitle}>
    Card
</Text>


<Card style={styles.card}>
    <Card.Title title="Kursi i programimit" subtitle="React Native"/>

    <Card.Content>
        <Text variant="bodyMedium">
            Ky eshte nje shembull o card ne react native paper
        </Text>
    </Card.Content>

    <Card.Actions>
        <Button onPress={() => alert("lexo ma shume")}>
            Lexo me shume
        </Button>
 

    <Button mode="contained" onPress={() =>setSnackbarVisible(true)}>
        Regjistrohu
    </Button>
    </Card.Actions>
</Card>


<Text variant="titleMedium" style={styles.sectionTitle}>
    Checkbox
</Text>

<View style={{ flexDirection:"row",alignItems:"center",marginTop:10,}}>
 <Checkbox 
 status={checked?"checked":"unchecked"}
 onPress={()=>setChecked(!checked)}
 color="blue"/>

 <Text>Pranoj Kushtet</Text>


 </View>


 <RadioButton.Group
 onValueChange={(value) =>setKursi(value)}
 value={kursi}>

    <RadioButton.Item label="React native" value="react-native"/>
    <RadioButton.Item label="Php" value="php"/>
    <RadioButton.Item label="Python" value="python"/>
    <RadioButton.Item label="React" value="react"/>


 </RadioButton.Group>


 <Text variant="titleMedium" style={styles.sectionTitle}>
    Chip
 </Text>

 <View style={styles.rowWrap}>
    <Chip icon="language-jaavascript" style={styles.chip}>
        jaavascript
    </Chip>

      <Chip icon="language-php" style={styles.chip}>
        Php
    </Chip>
     <Chip icon="language-python" style={styles.chip}>
        python
    </Chip>

     <Chip icon="language-java" style={styles.chip}>
        java
    </Chip>
     <Chip icon="language-c" style={styles.chip}>
        c
    </Chip>

</View>

    <Text variant="titleMedium" style={styles.sectionTitle}>
        Menu
        </Text> 

        <Menu visible={menuVisible} onDismiss={()=>setMenuVisible(false)} 

        anchor={
            <Button mode="outlined" onPress={()=>setMenuVisible(true)}>
                Hap Menu
            </Button>

        }
        >

            <Menu.Item onPress={()=>setMenuVisible(false)} title="Profili"/>
            <Menu.Item onPress={()=>setMenuVisible(false)} title="Settings"/>
            <Menu.Item onPress={()=>setMenuVisible(false)} title="Dil"/>

        </Menu>


         <Text variant="titleMedium" style={styles.sectionTitle}>
    Dialog
 </Text>

 <Button mode="contained" onPress={()=>setDialogVisible(true)}>
    Hap dialog
 </Button>

 <Portal>
    <Dialog visible={dialogVisible}
    onDismiss={()=>setDialogVisible(false)}

    >
        <Dialog.Title>Konfirmim</Dialog.Title>
        <Dialog.Content>
            <Text variant="bodyMedium">
                A deshironi ta mbyllni kete dialog?
            </Text>
        </Dialog.Content>


        <Dialog.Actions>
            <Button onPress={()=>setDialogVisible(false)}>Jo</Button>
            <Button onPress={()=>setDialogVisible(false)}>Po</Button>

        </Dialog.Actions>
    </Dialog>
 </Portal>



   

    













    





</ScrollView>

<FAB icon="plus" style={styles.fab} onPress={()=>alert("FAB clicked")}/>




        


    </View>
    
  );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        color:"black"
    },
     scrollContainer:{
         padding:16,
      paddingBottom:100,
        color:"black"
    },
     title:{
        marginBottom:10,
      color:"black"
     },
     paragraph:{
        marginBottom:20,
       color:"black"
    },
    sectionTitle:{
        marginTop:20,
        marginBottom:10,
        fontWeight:"bold",
    },
    input:{
        marginBottom:10,
        borderRadius:50,

    },
    card:{
        marginTop:10,

    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
    },
    avatarText:{
        marginLeft:20,
    },
    spaceTop:{
        marginTop:10,
    },
    card:{
        marginTop:10,
    },
    rowWrap:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:10,
    },
    chip:{
        marginRight:8,
        marginBottom:8,

    },
    checkBoxText:{
        marginLeft:5,
    },
    fab:{
        position:"absolute",
        right:20,
        bottom:20,
    }


    
})


