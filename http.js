//axios isteklerini import ediyorum
import axios from "axios";

const url='https://react-native-d7198-default-rtdb.firebaseio.com'


export function storeCourse(courseData){
axios.post(url + '/courses.json',courseData)

}