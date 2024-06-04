import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Courses from '../components/Courses';
import { CoursesContext } from '../store/coursesContext';
import { getLastWeek } from '../helper/date';
import { useContext,useState } from 'react';
import { getCourses } from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';




export default function RecentCourses() {

    const [fetchedCourses, setFetchedCourses] = useState([]);

    const [isFetching, setIsFetching] = useState(true)

    const coursesContext = useContext(CoursesContext);
    //Son Tarihi Listeleme
  
  
  
  useEffect(()=>{
    async function takeCourses(){
      setIsFetching(true)
        const courses= await getCourses();
        coursesContext.setCourse(courses);
        setIsFetching(false)
       // setFetchedCourses(courses);
    }

   takeCourses();
  },[]);


  if(isFetching){
    return <LoadingSpinner/>
  }
  
  
    const RecentCourses=coursesContext.courses.filter((course)=>{
const today=new Date();
const dateLastWeek=getLastWeek(today,7);


return course.date >= dateLastWeek && course.date <=today;
    });
    
    
    return <Courses courses={RecentCourses} coursesPeriod="Son Hafta" nullText="Yakın Zamanda Hiçbir Kursa Kayıtlı Değilsiniz"/>; //Yollamak için

}

const styles = StyleSheet.create({})