import { Body, Button, Container, Header, Title } from 'native-base';
import React from 'react';
import { Image, Text, View } from 'react-native';
export default function GalleryPhoto({navigation,route}) {
    
    
    const { url_s, title } = route.params;


    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Container>
        <Header>

            
        <Button iconLeft transparent primary
        onPress={() => navigation.goBack()}
 >
        
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>Back</Text>
          </Button>
       
          <Body style={{marginLeft:78}}>
            <Title>{JSON.stringify(title)}</Title>
          </Body>
     
        </Header>
          <Image
      
        source={{ uri: url_s }}
        style={{ width: 440, height: 540 }}
      />
           </Container>
        </View>
    
    )
}