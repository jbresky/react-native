import { Image } from 'react-native'

const ImageComponent = () => {
    return ( 
       <Image resizeMode='contain' style={{borderRadius: 50, width: 100}} source={require("../../img/fireship.jpg")}/>
     );
}
 
export default ImageComponent;