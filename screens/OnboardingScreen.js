import React,{useState, useRef} from 'react'
import {SafeAreaView, StyleSheet,Dimensions,FlatList,View,Image,Text,TouchableOpacity} from 'react-native'

const {width,height} = Dimensions.get('window')


const slides = [
    {
        id:1,
        image:require('../assets/images/bg1.png'),
        title:'All your Favorite foods',
        subtitle:"order your favorite food with easy on demand delivery",
    },
    {
        id:2,
        image:require('../assets/images/bg2.png'),
        title:"Delivery at your doorstep",
        subtitle:"Your ready order will be delivered by  our courier service"
    },
    {
        id:3,
        image:require('../assets/images/bg3.png'),
        title:"Fast Delivery",
        subtitle:"Just a click away "
    },
]

const Slide = ({item}) => {
    return(
        <View style={{alignItems:"center"}}>
          <Image source={item.image} style={{height:'75%',width,resizeMode:"contain"}}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    )
}
const OnboardingScreen = ({navigation}) =>{
const [currentSlide, setCurrentSlide] = useState(0)
const ref = useRef(null)

    const Footer = () =>{
        return(
            <View style={{paddingHorizontal:20,justifyContent:"space-between"}}>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    margin:20
                }}>
               {slides.map((_ ,i)=>(
                <View key={i} style={[styles.indicator, currentSlide == i && {
                   backgroundColor:"#fff", width:25,
                }]}/>
               ))}
                </View>
                <View style={{marginBottom:20}}>
                    {
                        currentSlide == slides.length -1 
                        ? 
                    <View style={{height:50}}>
                    <TouchableOpacity style={[styles.btn]} onPress={()=>navigation.replace('Home')}>
                            <Text style={{fontWeight:"bold",fontSize:15,color:"#000"}}>Get Started</Text>
                        </TouchableOpacity>
                    </View> 
                    :
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={skip} style={[styles.btn,{backgroundColor:"transparent",borderWidth:1,borderColor:"#fff"}]}>
                            <Text style={{fontWeight:"bold",fontSize:15,color:"#fff"}}>Skip</Text>
                        </TouchableOpacity>
                        <View style={{width:15}}/>
                        <TouchableOpacity style={[styles.btn]} onPress={nextSlide}>
                            <Text style={{fontWeight:"bold",fontSize:15,color:"#000"}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                }
                </View>
            </View>
        )
    }
    const updateCurrentSlideIndex = (e) =>{
       const contentOffsetX = e.nativeEvent.contentOffset.x;
       const currentIndex = Math.round(contentOffsetX / width)
       setCurrentSlide(currentIndex)
    }
    const nextSlide = () =>{
     const nextSlide = currentSlide +1;
     if(nextSlide != slides.length){
     const offset = nextSlide * width;
     ref?.current?.scrollToOffset({offset})
     setCurrentSlide(nextSlide)
     }
    }
    const skip = () =>{
    const lastSlide = slides.length -1;
    const offset = lastSlide * width;
    ref?.current?.scrollToOffset({offset})
     setCurrentSlide(lastSlide)
    }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#006400'}}>
               {/* <StatusBar backgroundColor="#006400"/> */}
            <FlatList 
            data={slides} 
            ref={ref}
            onMomentumScrollEnd ={updateCurrentSlideIndex}
            contentContainerStyle={{height:height * 0.75}} 
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item})=> <Slide item={item}/>}

            />
            <Footer />
        </SafeAreaView>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    title:{
        color:"#fff",
        fontSize:22,
        marginTop:20,
        fontWeight:"bold",
        textAlign: "center",
    },
    subtitle:{
    color:"#fff",
    marginTop:10,
    fontSize:13,
    textAlign: "center",
    maxWidth:'70%',
    lineHeight:23
    },
    indicator:{
        height:2.5,
        width:10,
        backgroundColor:"grey",
        marginHorizontal:3,
        borderRadius:2,
        bottom:50
    },
    btn:{
        flex:1,
        height:50,
        borderRadius:5,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }
})